/* eslint-disable import/no-unresolved */
/* eslint-disable no-throw-literal */
import { Request, Response, NextFunction } from "express";
import userSchema from "../schemas/userSchema.js";

export default async function validateUserSchemaMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = req.body;

  const validation = userSchema.validate(user, { abortEarly: true });
  if (validation.error) {
    console.log(validation.error.details);
    throw { type: "unprocessable_entity" };
  }

  next();
}
