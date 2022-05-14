import { Users } from '@prisma/client';

export type createUserData = Partial<Users>;

export interface userLogin {
  userData: string;
  password: string;
}
