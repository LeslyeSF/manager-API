/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import * as transactionServices from '../services/transactionServices.js';
import { createTransaction } from '../utils/transactionUtils';

export async function insertTransaction(req: Request, res: Response) {
  const { user } = res.locals;
  const transaction: createTransaction = req.body;

  await transactionServices.insertTransaction(transaction, user.id);

  res.sendStatus(201);
}
export async function getTransactions(req: Request, res: Response) {
  const { user } = res.locals;

  const list = await transactionServices.getAllTransaction(user.id);

  res.status(200).send(list);
}
export async function deleteTransactions(req: Request, res: Response) {
  const { user } = res.locals;
  const { id } = req.params;

  await transactionServices.deleteTransaction(Number(id), user.id);

  res.sendStatus(200);
}
