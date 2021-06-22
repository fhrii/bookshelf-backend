import books from '../books';

const getBooksHandler = (request, h) => {
    const { name, reading, finished } = request.query;

    let newBooks = [...books];

    if (name)
        newBooks = newBooks.filter((book) =>
            book.name.toLowerCase().includes(name.toLowerCase())
        );

    if (reading === '1') newBooks = newBooks.filter((book) => book.reading);
    if (reading === '0') newBooks = newBooks.filter((book) => !book.reading);

    if (finished === '1') newBooks = newBooks.filter((book) => book.finished);
    if (finished === '0') newBooks = newBooks.filter((book) => !book.finished);

    return h.response({
        status: 'success',
        data: {
            books: [
                ...newBooks.map(({ id, name, publisher }) => ({
                    id,
                    name,
                    publisher,
                })),
            ],
        },
    });
};

export default getBooksHandler;
