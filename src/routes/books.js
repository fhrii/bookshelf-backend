import { routeDELETE, routeGET, routePOST, routePUT } from '../utils/route';
import getBooksHandler from '../handlers/getBooksHandler';
import addBookHandler from '../handlers/addBookHandler';
import getBookHandler from '../handlers/getBookHandler';
import editBookHandler from '../handlers/editBookHandler';
import deleteBookHandler from '../handlers/deleteBookHandler';

const path = '/books';
const pathWithId = '/books/{id}';

const books = [
    routeGET(path, getBooksHandler),
    routeGET(pathWithId, getBookHandler),
    routePOST(path, addBookHandler),
    routePUT(pathWithId, editBookHandler),
    routeDELETE(pathWithId, deleteBookHandler),
];

export default books;
