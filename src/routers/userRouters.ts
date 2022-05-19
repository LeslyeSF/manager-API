/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import { signup, signin, logout } from '../controllers/userControllers.js';
import validateTokenMiddleware from '../middlewares/validateTokenMiddleware.js';
import validateUserLoginSchemaMiddleware from '../middlewares/validateUserLoginSchemaMiddleware.js';
import validateUserSchemaMiddleware from '../middlewares/validateUserSchemaMiddleware.js';

const userRouters = Router();

userRouters.post('/sign-up', validateUserSchemaMiddleware, signup);
userRouters.post('/sign-in', validateUserLoginSchemaMiddleware, signin);
userRouters.post('/logout', validateTokenMiddleware, logout);

export default userRouters;
