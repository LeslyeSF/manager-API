/* eslint-disable import/no-unresolved */
import { Request, Response, NextFunction } from 'express';
import bankAccountSchema from '../schemas/bankAccountSchema.js';

export default async function validateBankAccountSchemaMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const bankAccount = req.body;

  const validation = bankAccountSchema.validate(bankAccount, {
    abortEarly: true,
  });
  if (validation.error) {
    console.log(validation.error.details);
    throw { type: 'unprocessable_entity' };
  }

  next();
}
