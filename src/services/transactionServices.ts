/* eslint-disable import/no-unresolved */
import { createTransaction } from '../utils/transactionUtils.js';
import * as transactionRepositories from '../repositories/transactionRepositories.js';

async function findTransaction(id: number) {
  const transaction = await transactionRepositories.findTransactionById(id);

  return transaction;
}

async function verifyCategory(id: number) {
  const category = await transactionRepositories.findCategory(id);
  if (!category) throw { type: 'not_found', message: 'Category is not found' };
}

export async function insertTransaction(
  transaction: createTransaction,
  userId: number
) {
  await verifyCategory(transaction.categoryId);

  await transactionRepositories.insertTransaction(transaction, userId);
}

export async function deleteTransaction(transactionId: number, userId: number) {
  const transaction = await findTransaction(transactionId);
  if (transaction.userId !== userId) throw { type: 'unauthorized' };

  await transactionRepositories.deleteTransaction(transactionId);
}

export async function getAllTransaction(userId: number) {
  const list = await transactionRepositories.getAllTransactionsByUserId(userId);

  return list;
}
