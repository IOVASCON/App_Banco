// src/classes/Branch.ts

import { Customer } from './Customer';

export class Branch {
  readonly name: string;
  private customers: Customer[];

  constructor(name: string) {
    this.name = name;
    this.customers = [];
  }

  getName(): string {
    return this.name;
  }

  getCustomers(): Customer[] {
    return this.customers;
  }

  addCustomer(customer: Customer): boolean {
    if (!this.customers.some((c) => c.getId() === customer.getId())) {
      this.customers.push(customer);
      console.log(`Customer ${customer.getName()} with ID: ${customer.getId()} added successfully.`);
      return true;
    } else {
      console.log(`Customer ${customer.getName()} with ID: ${customer.getId()} already exists.`);
      return false;
    }
  }

  addCustomerTransaction(customerId: number, amount: number): boolean {
    const customer = this.customers.find((c) => c.getId() === customerId);
    if (customer) {
      console.log("Customer transaction added successfully.");
      return customer.addTransaction(amount);
    } else {
      console.log("This customer does not exist.");
      return false;
    }
  }
}
