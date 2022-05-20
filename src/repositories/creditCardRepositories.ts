/* eslint-disable import/no-unresolved */
import prisma from '../database.js';
import createCreditCard from '../utils/creditCardUtils.js';

export async function insertCreditCard(
  creditCard: createCreditCard,
  userId: number
) {
  await prisma.creditCard.create({
    data: {
      name: creditCard.name,
      number: creditCard.number,
      lastPaymentDay: creditCard.lastPaymentDay,
      gracePeriod: creditCard.gracePeriod,
      userId,
    },
  });
}

export async function getCreditCards(userId: number) {
  const creditCards = await prisma.creditCard.findMany({
    where: {
      userId,
    },
  });

  return creditCards;
}

export async function findCreditCardByNumber(number: string) {
  const creditCard = await prisma.creditCard.findFirst({
    where: {
      number,
    },
  });

  return creditCard;
}

export async function findCreditCardById(id: number) {
  const creditCard = await prisma.creditCard.findFirst({
    where: {
      id,
    },
  });

  return creditCard;
}

export async function deleteCreditCard(id: number) {
  await prisma.creditCard.delete({
    where: {
      id,
    },
  });
}
