// src/classes/Transaction.ts

export class Transaction {
    readonly amount: number;
    readonly date: Date;
  
    constructor(amount: number, date: Date = new Date()) {
      this.amount = amount;
      this.date = date;
    }
  }
  