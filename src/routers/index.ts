/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import userRouters from './userRouters.js';

const routers = Router();

routers.use(userRouters);

export default routers;
