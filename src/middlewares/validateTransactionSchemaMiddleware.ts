/* eslint-disable import/no-unresolved */
import { Request, Response, NextFunction } from 'express';
import transactionSchema from '../schemas/transactionSchema.js';

export default async function validateTransactionSchemaMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const transaction = req.body;

  const validation = transactionSchema.validate(transaction, {
    abortEarly: true,
  });
  if (validation.error) {
    console.log(validation.error.details);
    throw { type: 'unprocessable_entity' };
  }

  next();
}
