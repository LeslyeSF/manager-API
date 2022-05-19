/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import validateTokenMiddleware from '../middlewares/validateTokenMiddleware.js';

const transactionsRouters = Router();

transactionsRouters.post('/transactions', validateTokenMiddleware);
transactionsRouters.get('/transactions', validateTokenMiddleware);
transactionsRouters.post('transactions/delete', validateTokenMiddleware);

export default transactionsRouters;
