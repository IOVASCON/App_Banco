// src/classes/Bank.ts

import { Branch } from './Branch';
import { Customer } from './Customer';

export class Bank {
  readonly name: string;
  private branches: Branch[];

  constructor(name: string) {
    this.name = name;
    this.branches = [];
  }

  addBranch(branch: Branch): boolean {
    if (!this.branches.some((b) => b.getName() === branch.getName())) {
      this.branches.push(branch);
      console.log(`${branch.getName()} added successfully.`);
      return true;
    } else {
      console.log(`${branch.getName()} already exists.`);
      return false;
    }
  }

  addCustomer(branch: Branch, customer: Customer): boolean {
    if (this.branches.includes(branch)) {
      console.log(`${branch.getName()}:`);
      return branch.addCustomer(customer);
    } else {
      console.log(`Branch ${branch.getName()} does not exist.`);
      return false;
    }
  }

  addCustomerTransaction(branch: Branch, customerId: number, amount: number): boolean {
    if (this.branches.includes(branch)) {
      return branch.addCustomerTransaction(customerId, amount);
    } else {
      console.log(`Branch ${branch.getName()} does not exist.`);
      return false;
    }
  }

  findBranchByName(branchName: string): Branch | undefined {
    return this.branches.find((branch) => branch.getName() === branchName);
  }

  checkBranch(branch: Branch): boolean {
    return this.branches.includes(branch);
  }

  listCustomers(branch: Branch, includeTransactions: boolean): void {
    if (this.branches.includes(branch)) {
      const customers = branch.getCustomers();
      console.log(`Customers of ${branch.getName()}:`);
      customers.forEach((customer) => {
        console.log(`- Customer: ${customer.getName()}`);
        if (includeTransactions) {
          const transactions = customer.getTransactions();
          transactions.forEach((transaction) => {
            console.log(`  - Transaction: ${transaction.amount} on ${transaction.date}`);
          });
        }
      });
    } else {
      console.log(`Branch ${branch.getName()} does not exist.`);
    }
    // Adicionando um return explícito para garantir que nada é retornado
    return;
  }
}
