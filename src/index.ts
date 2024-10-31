// src/index.ts

import { Bank } from './classes/Bank';
import { Branch } from './classes/Branch';
import { Customer } from './classes/Customer';

// Instanciando o banco e as filiais
console.log("Criando instâncias do banco e das filiais...");
const arizonaBank = new Bank("Arizona");
const westBranch = new Branch("West Branch");
const sunBranch = new Branch("Sun Branch");

// Criando clientes
console.log("Criando clientes...");
const customer1 = new Customer("John", 1);
const customer2 = new Customer("Anna", 2);
const customer3 = new Customer("John", 3);

// Adicionando filiais ao banco
console.log("Adicionando filiais ao banco...");
arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);

// Adicionando clientes às filiais
console.log("Adicionando clientes às filiais...");
arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);

// Adicionando transações para os clientes
console.log("Adicionando transações para os clientes...");
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000);

// Testando operações com clientes
console.log("\nSaldo de customer1 antes da transação inválida:", customer1.getBalance());
customer1.addTransaction(-1000); // Deve rejeitar a transação
console.log("Saldo de customer1 após a transação inválida:", customer1.getBalance());

// Listando clientes e suas transações
console.log("\nListando clientes e suas transações no West Branch:");
arizonaBank.listCustomers(westBranch, true);

console.log("\nListando clientes e suas transações no Sun Branch:");
arizonaBank.listCustomers(sunBranch, true);
