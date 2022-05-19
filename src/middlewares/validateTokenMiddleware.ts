/* eslint-disable import/no-unresolved */
import { Request, Response, NextFunction } from 'express';
import { findUserByEmail } from '../repositories/userRepositories.js';

export default async function validateTokenMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');
  console.log(token);

  const email = 'leslyesoares@gmail.com';

  const user = await findUserByEmail(email);
  if (!user) throw { type: 'not_found' };

  res.locals.user = user;

  next();
}
