/* eslint-disable import/no-unresolved */
import {
  createTransaction,
  transactionDashboard,
} from '../utils/transactionUtils.js';
import * as transactionRepositories from '../repositories/transactionRepositories.js';
import * as bankAccountRepositories from '../repositories/bankAccountRepositories.js';

async function findTransaction(id: number) {
  const transaction = await transactionRepositories.findTransactionById(id);

  return transaction;
}

async function verifyCategory(id: number) {
  const category = await transactionRepositories.findCategory(id);
  if (!category) throw { type: 'not_found', message: 'Category is not found' };
}

function sumData(type: string, lst: transactionDashboard[]) {
  let sum = 0;
  for (let i = 0; i < lst.length; i += 1) {
    if (type === lst[i].type) {
      sum += lst[i].amount;
    }
  }
  return sum;
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

export async function dashboard(userId: number) {
  const listTransactions =
    await transactionRepositories.getAllTransactionsByUserId(userId);

  const transactions = listTransactions.map((data) => ({
    description: data.description,
    amount: data.amount,
    category: data.category.name,
    type: data.type,
    creditCard: data.creditCardId ? data.creditCard.name : null,
    bankAccount: data.bankAccountId ? data.bankAccount.bankName : null,
  }));

  let revenue = sumData('input', transactions);
  const outlay = sumData('output', transactions);

  const bankAccounts = await bankAccountRepositories.getBankAccountsByUserId(
    userId
  );

  for (let i = 0; i < bankAccounts.length; i += 1) {
    revenue += bankAccounts[i].amount;
  }
  revenue -= outlay;
  return { transactions, revenue, outlay };
}
