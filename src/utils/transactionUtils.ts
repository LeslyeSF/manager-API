export interface transaction {
  description: string;
  amount: number;
  type: string;
  categoryId: number;
  creditCardId: number;
  bankAccountId: number;
}

export type createTransaction = Partial<transaction>;
