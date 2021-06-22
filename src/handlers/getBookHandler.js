import books from '../books';

const getBookHandler = (request, h) => {
    const { id } = request.params;
    const book = books.filter((book) => book.id === id)[0];

    if (!book)
        return h
            .response({
                status: 'fail',
                message: 'Buku tidak ditemukan',
            })
            .code(404);

    return h.response({
        status: 'success',
        data: {
            book,
        },
    });
};

export default getBookHandler;
