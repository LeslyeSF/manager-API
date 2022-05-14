/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import userRouters from './userRouters.js';

const routers = Router();

routers.use(userRouters);
routers.get('/test', (req, res) => {
  res.send('oi');
});

export default routers;
