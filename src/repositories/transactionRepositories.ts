/* eslint-disable import/no-unresolved */
import prisma from '../database.js';
import { createTransaction } from '../utils/transactionUtils.js';

export async function findTransactionById(id: number) {
  const transaction = await prisma.transactions.findFirst({
    where: {
      id,
    },
  });
  return transaction;
}

export async function insertTransaction(
  transaction: createTransaction,
  userId: number
) {
  await prisma.transactions.create({
    data: {
      description: transaction.description,
      amount: Number(transaction.amount),
      categoryId: transaction.categoryId,
      type: transaction.type,
      bankAccountId: transaction.bankAccountId || null,
      creditCardId: transaction.creditCardId || null,
      userId,
    },
  });
}

export async function getAllTransactionsByUserId(userId: number) {
  const list = await prisma.transactions.findMany({
    where: {
      userId,
    },
    include: {
      category: true,
      creditCard: true,
      bankAccount: true,
    },
  });
  return list;
}

export async function deleteTransaction(id: number) {
  await prisma.transactions.delete({
    where: {
      id,
    },
  });
}

export async function findCategory(id: number) {
  const category = await prisma.categories.findFirst({
    where: {
      id,
    },
  });

  return category;
}
