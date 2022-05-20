/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import {
  deleteBankAccount,
  getBankAccount,
  insertBankAccount,
} from '../controllers/bankAccountControllers.js';
import validateBankAccountSchemaMiddleware from '../middlewares/validateBankAccountSchemaMiddleware.js';
import validateTokenMiddleware from '../middlewares/validateTokenMiddleware.js';

const bankAccountRouters = Router();

bankAccountRouters.post(
  '/bank-account',
  validateTokenMiddleware,
  validateBankAccountSchemaMiddleware,
  insertBankAccount
);
bankAccountRouters.get(
  '/bank-account',
  validateTokenMiddleware,
  getBankAccount
);
bankAccountRouters.post(
  '/bank-account/:id/delete',
  validateTokenMiddleware,
  deleteBankAccount
);

export default bankAccountRouters;
