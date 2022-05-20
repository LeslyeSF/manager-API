/* eslint-disable import/no-unresolved */
import prisma from '../database.js';

export async function findSessionByUser(userId: number) {
  const session = await prisma.sessions.findFirst({
    where: {
      userId,
    },
  });
  return session;
}

export async function createSession(session: any) {
  await prisma.sessions.create({
    data: {
      userId: session.userId,
      token: session.token,
    },
  });
}

export async function deleteSession(id: number) {
  await prisma.sessions.delete({
    where: {
      id,
    },
  });
}
