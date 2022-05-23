/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import {
  deleteTransactions,
  getDashboard,
  getTransactions,
  insertTransaction,
} from '../controllers/transactionControllers.js';
import validateTokenMiddleware from '../middlewares/validateTokenMiddleware.js';
import validateTransactionSchemaMiddleware from '../middlewares/validateTransactionSchemaMiddleware.js';

const transactionsRouters = Router();

transactionsRouters.post(
  '/transactions',
  validateTokenMiddleware,
  validateTransactionSchemaMiddleware,
  insertTransaction
);
transactionsRouters.get(
  '/transactions',
  validateTokenMiddleware,
  getTransactions
);
transactionsRouters.post(
  '/transactions/:id/delete',
  validateTokenMiddleware,
  deleteTransactions
);
transactionsRouters.get(
  '/transactions/dashboard',
  validateTokenMiddleware,
  getDashboard
);

export default transactionsRouters;
