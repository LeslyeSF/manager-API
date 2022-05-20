/* eslint-disable import/no-unresolved */
import createCreditCard from '../utils/creditCardUtils.js';
import * as creditCardRepositories from '../repositories/creditCardRepositories.js';

async function verifyCardNumber(number: string) {
  const card = await creditCardRepositories.findCreditCardByNumber(number);
  if (card) throw { type: 'conflict' };
}

async function findCard(id: number) {
  const card = await creditCardRepositories.findCreditCardById(id);
  return card;
}

export async function insertCreditCard(
  creditCard: createCreditCard,
  userId: number
) {
  await verifyCardNumber(creditCard.number);

  await creditCardRepositories.insertCreditCard(creditCard, userId);
}

export async function getAllCreditCards(userId: number) {
  const cardList = await creditCardRepositories.getCreditCards(userId);

  return cardList;
}

export async function deleteCreditCard(creditCardId: number, userId: number) {
  const card = await findCard(creditCardId);
  if (card.userId !== userId) throw { type: 'unauthorized' };

  await creditCardRepositories.deleteCreditCard(creditCardId);
}
