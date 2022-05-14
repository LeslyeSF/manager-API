/* eslint-disable import/no-unresolved */
import express, { json } from 'express';
import cors from 'cors';
import './setup.js';
import 'express-async-errors';
import routers from './routers/index.js';
import errorHandlingMiddleware from './middlewares/errorHandlingMiddleware.js';

const app = express();

app.use(cors());
app.use(json());
app.use(routers);
app.use(errorHandlingMiddleware);

export default app;
