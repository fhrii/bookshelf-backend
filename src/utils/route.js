export const routeGET = (path, handler) => ({
    method: 'GET',
    path,
    handler,
});

export const routePOST = (path, handler) => ({
    method: 'POST',
    path,
    handler,
});

export const routePUT = (path, handler) => ({
    method: 'PUT',
    path,
    handler,
});

export const routeDELETE = (path, handler) => ({
    method: 'DELETE',
    path,
    handler,
});
