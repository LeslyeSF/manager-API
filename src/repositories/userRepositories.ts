/* eslint-disable import/no-unresolved */
import prisma from "../database.js";

export async function findUser() {
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
