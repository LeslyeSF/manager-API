/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import {
  deleteCreditCard,
  getCreditCards,
  insertCreditCard,
} from '../controllers/creditCardControllers.js';
import validateCreditCardSchemaMiddleware from '../middlewares/validateCreditCardSchemaMiddleware.js';
import validateTokenMiddleware from '../middlewares/validateTokenMiddleware.js';

const creditCardRouters = Router();

creditCardRouters.post(
  '/credit-card',
  validateTokenMiddleware,
  validateCreditCardSchemaMiddleware,
  insertCreditCard
);
creditCardRouters.get('/credit-card', validateTokenMiddleware, getCreditCards);
creditCardRouters.post(
  '/credit-card/:id/delete',
  validateTokenMiddleware,
  deleteCreditCard
);

export default creditCardRouters;
