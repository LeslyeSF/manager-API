/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import { signup, signin } from '../controllers/userControllers.js';
import validateUserLoginSchemaMiddleware from '../middlewares/validateUserLoginSchemaMiddleware.js';
import validateUserSchemaMiddleware from '../middlewares/validateUserSchemaMiddleware.js';

const userRouters = Router();

userRouters.post('/sign-up', validateUserSchemaMiddleware, signup);
userRouters.post('/sign-in', validateUserLoginSchemaMiddleware, signin);

export default userRouters;
