import { nanoid } from 'nanoid';
import books from '../books';

const addBookHandler = (request, h) => {
    try {
        const {
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
        } = request.payload;

        if (name === undefined)
            return h
                .response({
                    status: 'fail',
                    message: 'Gagal menambahkan buku. Mohon isi nama buku',
                })
                .code(400);

        if (typeof name !== 'string') throw new Error();
        if (typeof year !== 'number') throw new Error();
        if (typeof author !== 'string') throw new Error();
        if (typeof summary !== 'string') throw new Error();
        if (typeof publisher !== 'string') throw new Error();
        if (typeof pageCount !== 'number') throw new Error();
        if (typeof readPage !== 'number') throw new Error();
        if (typeof reading !== 'boolean') throw new Error();

        if (readPage > pageCount)
            return h
                .response({
                    status: 'fail',
                    message:
                        'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
                })
                .code(400);

        const id = nanoid(8);
        const finished = pageCount === readPage;
        const insertedAt = new Date().toISOString();
        const updatedAt = insertedAt;

        const newBook = {
            id,
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            finished,
            reading,
            insertedAt,
            updatedAt,
        };

        books.push(newBook);

        return h
            .response({
                status: 'success',
                message: 'Buku berhasil ditambahkan',
                data: {
                    bookId: id,
                },
            })
            .code(201);
    } catch (e) {
        return h
            .response({
                status: 'error',
                message: 'Buku gagal ditambahkan',
            })
            .code(500);
    }
};

export default addBookHandler;
