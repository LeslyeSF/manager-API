/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUserData, userLogin } from '../utils/userUtils.js';
import * as userRepositories from '../repositories/userRepositories.js';
import * as sessionRepositories from '../repositories/sessionRepositories.js';

async function verifyEmail(email: string) {
  const user = await userRepositories.findUserByEmail(email);
  if (user) throw { type: 'conflict', message: 'Email is already in use' };
}

async function verifyCpf(cpf: string) {
  const user = await userRepositories.findUserByCpf(cpf);
  if (user) throw { type: 'conflict', message: 'Cpf is already in use' };
}

async function createHashPassword(password: string) {
  const hashPassword = await bcrypt.hashSync(password, 10);
  return hashPassword;
}

async function findUserByData(userData: string) {
  let user;
  user = await userRepositories.findUserByEmail(userData);
  if (user) return user;
  user = await userRepositories.findUserByCpf(userData);
  if (user) return user;
  user = await userRepositories.findUserByPhone(userData);
  if (user) {
    return user;
  }
  throw { type: 'not_found', message: 'User not found!' };
}

async function verifyPassword(password: string, hashPassword: string) {
  if (!bcrypt.compareSync(password, hashPassword))
    throw { type: 'unauthorized', message: 'The password is wrong' };
}

async function findSession(userId: number) {
  const session = await sessionRepositories.findSessionByUser(userId);
  return session;
}

async function createToken(email: string) {
  const token = jwt.sign(email, process.env.JWT);

  return token;
}

export async function signup(user: createUserData) {
  await verifyEmail(user.email);

  await verifyCpf(user.cpf);

  user.password = await createHashPassword(user.password);

  await userRepositories.createUser(user);
}

export async function signin(user: userLogin) {
  const findUser = await findUserByData(user.userData);

  await verifyPassword(user.password, findUser.password);

  return findUser;
}

export async function createSessionAndToken(userId: number, email: string) {
  const session = await findSession(userId);
  if (session) return session.token;

  const token = await createToken(email);

  await sessionRepositories.createSession({
    userId,
    token,
  });

  return token;
}

export async function deleteSession(userId: number) {
  const session = await findSession(userId);

  await sessionRepositories.deleteSession(session.id);
}
