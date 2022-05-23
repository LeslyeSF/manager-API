/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import getAllCategories from '../controllers/categoriesControllers.js';
import validateTokenMiddleware from '../middlewares/validateTokenMiddleware.js';

const categoriesRouters = Router();

categoriesRouters.get('/categories', validateTokenMiddleware, getAllCategories);

export default categoriesRouters;
