/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import createCreditCard from '../utils/creditCardUtils.js';
import * as creditCardServices from '../services/creditCardServices.js';

export async function insertCreditCard(req: Request, res: Response) {
  const { user } = res.locals;
  const creditCard: createCreditCard = req.body;

  await creditCardServices.insertCreditCard(creditCard, user.id);

  res.sendStatus(201);
}
export async function getCreditCards(req: Request, res: Response) {
  const { user } = res.locals;

  const creditCards = await creditCardServices.getAllCreditCards(user.id);

  res.status(200).send(creditCards);
}
export async function deleteCreditCard(req: Request, res: Response) {
  const { user } = res.locals;
  const { id } = req.params;

  await creditCardServices.deleteCreditCard(Number(id), user.id);

  res.sendStatus(200);
}
