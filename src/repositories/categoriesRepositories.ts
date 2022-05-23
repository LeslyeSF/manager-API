/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import prisma from '../database.js';

export async function findCategories() {
  const categories = await prisma.categories.findMany();

  return categories;
}
