/* eslint-disable import/no-unresolved */
import { Router } from "express";

const userRouters = Router();

userRouters.post("/sign-up");
userRouters.post("/sign-in");

export default userRouters;
