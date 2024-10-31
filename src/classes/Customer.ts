// src/classes/Customer.ts

import { Transaction } from './Transaction';

export class Customer {
  readonly name: string;
  readonly id: number;
  private transactions: Transaction[];

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
    this.transactions = [];
  }

  getName(): string {
    return this.name;
  }

  getId(): number {
    return this.id;
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  getBalance(): number {
    return this.transactions.reduce((total, transaction) => total + transaction.amount, 0);
  }

  addTransaction(amount: number): boolean {
    if (amount >= 0) {
      const transaction = new Transaction(amount);
      this.transactions.push(transaction);
      console.log("Transaction added successfully.");
      return true;
    } else {
      console.log("Transaction rejected. The amount must be > 0.");
      return false;
    }
  }
}
