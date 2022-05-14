/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import * as userServices from '../services/userServices.js';
import { createUserData } from '../utils/userUtils.js';

export async function signup(req: Request, res: Response) {
  const user: createUserData = req.body;

  await userServices.signup(user);

  res.status(201);
}

export async function signin(req: Request, res: Response) {
  const user: createUserData = req.body;

  await userServices.signin(user);

  res.status(200);
}
