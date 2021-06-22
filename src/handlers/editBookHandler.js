import books from '../books';

const editBookHandler = (request, h) => {
    try {
        const { id } = request.params;
        const bookIndex = books.findIndex((book) => book.id === id);

        if (bookIndex === -1)
            return h
                .response({
                    status: 'fail',
                    message: 'Gagal memperbarui buku. Id tidak ditemukan',
                })
                .code(404);

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
                    message: 'Gagal memperbarui buku. Mohon isi nama buku',
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
                        'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
                })
                .code(400);

        const updatedAt = new Date().toISOString();

        books[bookIndex] = {
            ...books[bookIndex],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            updatedAt,
        };

        return h.response({
            status: 'success',
            message: 'Buku berhasil diperbarui',
        });
    } catch (e) {
        return h
            .response({
                status: 'fail',
                message: 'Gagal memperbarui buku',
            })
            .code(500);
    }
};

export default editBookHandler;
