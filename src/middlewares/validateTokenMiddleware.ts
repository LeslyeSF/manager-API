/* eslint-disable import/no-unresolved */
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { findUserByEmail } from '../repositories/userRepositories.js';

export default async function validateTokenMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');

  const email = jwt.verify(token, process.env.JWT);

  const user = await findUserByEmail(`${email}`);
  if (!user) throw { type: 'not_found' };

  res.locals.user = user;

  next();
}
