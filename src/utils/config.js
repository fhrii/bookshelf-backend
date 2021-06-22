import { config as initConfig } from 'dotenv';

initConfig();

export const PORT = +process.env.PORT || 5000;
export const HOSTNAME = process.env.HOSTNAME || 'localhost';
export const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';
export const ID_LENGTH = +process.env.ID_LENGTH || 8;
