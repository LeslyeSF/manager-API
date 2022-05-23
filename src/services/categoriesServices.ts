/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import * as categoriesRepositories from '../repositories/categoriesRepositories.js';

export async function getCategories() {
  const list = await categoriesRepositories.findCategories();

  return list;
}
