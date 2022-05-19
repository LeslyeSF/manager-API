/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import validateTokenMiddleware from '../middlewares/validateTokenMiddleware.js';

const bankAccountRouters = Router();

bankAccountRouters.post('/bank-account', validateTokenMiddleware);
bankAccountRouters.get('/bank-account', validateTokenMiddleware);
bankAccountRouters.post('bank-account/delete', validateTokenMiddleware);

export default bankAccountRouters;
