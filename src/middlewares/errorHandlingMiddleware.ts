/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { AxiosError } from "axios";
import AppError from "../utils/errorUtils.js";

export default function errorHandlingMiddleware(
  error: Error | AppError | AxiosError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error);

  if ("response" in error) {
    return res.sendStatus(error.response.status);
  }
  if ("type" in error) {
    if (error.type === "not_found") {
      return res.sendStatus(404);
    }

    if (error.type === "bad_request") {
      return res.sendStatus(400);
    }

    if (error.type === "conflict") {
      return res.sendStatus(409);
    }

    if (error.type === "unauthorized") {
      return res.sendStatus(401);
    }

    if (error.type === "unprocessable_entity") {
      return res.sendStatus(422);
    }
  }

  res.sendStatus(500);
}
