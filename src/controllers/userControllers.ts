/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import * as userServices from '../services/userServices.js';
import { createUserData, userLogin } from '../utils/userUtils.js';

export async function signup(req: Request, res: Response) {
  const user: createUserData = req.body;

  await userServices.signup(user);

  res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {
  const user: userLogin = req.body;

  const findUser = await userServices.signin(user);

  const token = await userServices.createSessionAndToken(
    findUser.id,
    findUser.email
  );

  res.status(200).send({ token, userId: findUser.id, userName: findUser.name });
}

export async function logout(req: Request, res: Response) {
  const { user } = res.locals;

  await userServices.deleteSession(user.id);

  res.sendStatus(200);
}
