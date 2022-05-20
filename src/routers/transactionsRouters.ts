/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import {
  deleteTransactions,
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
  'transactions/delete',
  validateTokenMiddleware,
  deleteTransactions
);

export default transactionsRouters;
