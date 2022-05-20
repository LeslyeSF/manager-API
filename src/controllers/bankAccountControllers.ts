/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import * as bankAccountServices from '../services/bankAccountServices.js';
import { createBankAccount } from '../utils/bankAccountUtils.js';

export async function insertBankAccount(req: Request, res: Response) {
  const { user } = res.locals;
  const bankAccount: createBankAccount = req.body;

  await bankAccountServices.insertBankAccount(bankAccount, user.id);

  res.sendStatus(201);
}

export async function getBankAccount(req: Request, res: Response) {
  const { user } = res.locals;

  const bankAccounts = await bankAccountServices.getBankAccounts(user.id);

  res.status(200).send(bankAccounts);
}

export async function deleteBankAccount(req: Request, res: Response) {
  const { user } = res.locals;
  const { id } = req.params;

  await bankAccountServices.deleteBankAccount(Number(id), user.id);

  res.sendStatus(200);
}
