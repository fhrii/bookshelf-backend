import Hapi from '@hapi/hapi';
import importDir from 'directory-import';
import { PORT, HOSTNAME, CORS_ORIGIN } from './utils/config';

const routeModules = importDir({
    directoryPath: './routes',
});

const routes = Object.values(routeModules)
    .map((module) => module.default)
    .reduce((prev, current) => [...prev, current]);

let server;

const init = async () => {
    server = Hapi.server({
        port: PORT,
        host: HOSTNAME,
        routes: {
            cors: {
                origin: [CORS_ORIGIN],
            },
        },
    });

    server.route(routes);

    return server;
};

const start = async () => {
    await server.start();
    return server;
};

init()
    .then(() => start())
    .then((server) => console.log(`🚀 Server launched on ${server.info.uri}`));
