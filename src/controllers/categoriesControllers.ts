/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import * as categoriesServices from '../services/categoriesServices.js';

export default async function getAllCategories(req: Request, res: Response) {
  const categories = await categoriesServices.getCategories();

  res.status(200).send(categories);
}
