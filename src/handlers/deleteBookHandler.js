import books from '../books';

const deleteBookHandler = (request, h) => {
    const { id } = request.params;
    const bookIndex = books.findIndex((book) => book.id == id);

    if (bookIndex === -1)
        return h
            .response({
                status: 'fail',
                message: 'Buku gagal dihapus. Id tidak ditemukan',
            })
            .code(404);

    books.splice(bookIndex, 1);

    return h.response({
        status: 'success',
        message: 'Buku berhasil dihapus',
    });
};

export default deleteBookHandler;
