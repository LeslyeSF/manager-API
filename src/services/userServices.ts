/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { createUserData } from '../utils/userUtils.js';
import * as userRepositories from '../repositories/userRepositories.js';

export async function signin(user: createUserData) {}

export async function signup(user: createUserData) {
  await userRepositories.createUser(user);
}
