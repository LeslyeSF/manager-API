/* eslint-disable import/no-unresolved */
import { Request, Response, NextFunction } from 'express';
import creditCardSchema from '../schemas/creditCardSchema.js';

export default async function validateCreditCardSchemaMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const creditCard = req.body;

  const validation = creditCardSchema.validate(creditCard, {
    abortEarly: true,
  });
  if (validation.error) {
    console.log(validation.error.details);
    throw { type: 'unprocessable_entity' };
  }

  next();
}
