/* eslint-disable import/no-unresolved */
import prisma from '../database.js';
import { createUserData } from '../utils/userUtils.js';

export async function findUsers() {
  const users = await prisma.users.findMany();
  return users;
}

export async function findUserByEmail(email: string) {
  const user = await prisma.users.findFirst({
    where: {
      email,
    },
  });
  return user;
}

export async function createUser(user: createUserData) {
  await prisma.users.create({
    data: {
      name: user.name,
      password: user.password,
      phone: user.phone,
      cpf: user.cpf,
      email: user.email,
      birthday: user.birthday,
    },
  });
}
