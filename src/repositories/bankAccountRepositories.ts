/* eslint-disable import/no-unresolved */
import prisma from '../database.js';
import { createBankAccount } from '../utils/bankAccountUtils.js';

export async function findBankAccountById(id: number) {
  const bankAccount = await prisma.bankAccounts.findFirst({
    where: {
      id,
    },
  });
  return bankAccount;
}

export async function deleteBankAccount(id: number) {
  await prisma.bankAccounts.delete({
    where: {
      id,
    },
  });
}

export async function getBankAccountsByUserId(userId: number) {
  const bankAccounts = await prisma.bankAccounts.findMany({
    where: {
      userId,
    },
  });
  return bankAccounts;
}

export async function insertBankAccount(
  bankAccount: createBankAccount,
  userId: number
) {
  await prisma.bankAccounts.create({
    data: {
      bankName: bankAccount.bankName,
      accountNumber: bankAccount.accountNumber,
      amount: bankAccount.amount,
      userId,
    },
  });
}

export async function getBankAccountByNumber(accountNumber: string) {
  const bankAccount = await prisma.bankAccounts.findFirst({
    where: {
      accountNumber,
    },
  });

  return bankAccount;
}
