/* eslint-disable import/no-unresolved */
import { createBankAccount } from '../utils/bankAccountUtils.js';
import * as bankAccountRepositories from '../repositories/bankAccountRepositories.js';

async function verifyAccountNumber(accountNumber: string) {
  const bankAccount = await bankAccountRepositories.getBankAccountByNumber(
    accountNumber
  );
  if (bankAccount) throw { type: 'conflict' };
}

async function findBankAccount(bankAccountId: number) {
  const bankAccount = await bankAccountRepositories.findBankAccountById(
    bankAccountId
  );
  return bankAccount;
}

export async function insertBankAccount(
  bankAccount: createBankAccount,
  userId: number
) {
  await verifyAccountNumber(bankAccount.accountNumber);

  await bankAccountRepositories.insertBankAccount(bankAccount, userId);
}

export async function getBankAccounts(userId: number) {
  const bankAccounts = await bankAccountRepositories.getBankAccountsByUserId(
    userId
  );

  return bankAccounts;
}

export async function deleteBankAccount(bankAccountId: number, userId: number) {
  const bankAccount = await findBankAccount(bankAccountId);
  if (bankAccount.userId !== userId) throw { type: 'unauthorized' };

  await bankAccountRepositories.deleteBankAccount(bankAccountId);
}
