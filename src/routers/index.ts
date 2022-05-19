/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import bankAccountRouters from './bankAccountRouters.js';
import creditCardRouters from './creditCardRouters.js';
import transactionsRouters from './transactionsRouters.js';
import userRouters from './userRouters.js';

const routers = Router();

routers.use(userRouters);
routers.use(transactionsRouters);
routers.use(bankAccountRouters);
routers.use(creditCardRouters);

export default routers;
