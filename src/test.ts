// src/test.ts

import { Bank } from './classes/Bank';
import { Branch } from './classes/Branch';
import { Customer } from './classes/Customer';

// Instanciando o banco e as filiais
const arizonaBank = new Bank("Arizona");
const westBranch = new Branch("West Branch");
const sunBranch = new Branch("Sun Branch");

// Criando clientes
const customer1 = new Customer("John", 1);
const customer2 = new Customer("Anna", 2);
const customer3 = new Customer("John", 3);

// Adicionando filiais ao banco
arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);

// Adicionando clientes às filiais
arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);

// Adicionando transações para os clientes
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000);

// Teste de transação inválida
console.log(customer1.addTransaction(-1000)); // Deve rejeitar a transação
console.log(customer1.getBalance()); // Saldo atualizado

// Listando clientes e suas transações
arizonaBank.listCustomers(westBranch, true);
arizonaBank.listCustomers(sunBranch, true);
