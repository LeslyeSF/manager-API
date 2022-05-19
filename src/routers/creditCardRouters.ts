/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import validateTokenMiddleware from '../middlewares/validateTokenMiddleware.js';

const creditCardRouters = Router();

creditCardRouters.post('/credit-card', validateTokenMiddleware);
creditCardRouters.get('/credit-card', validateTokenMiddleware);
creditCardRouters.post('/credit-card', validateTokenMiddleware);

export default creditCardRouters;
