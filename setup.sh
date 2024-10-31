#!/bin/bash

# Navegar até a pasta principal do projeto
cd "L:\VSCode\JAVASCRIPT\App_Banco" || exit

# Criar estrutura de pastas
mkdir -p src/classes dist

# Criar arquivos TypeScript base
touch src/classes/Bank.ts src/classes/Branch.ts src/classes/Customer.ts src/classes/Transaction.ts src/index.ts src/test.ts

# Criar arquivos de documentação e configuração
touch .gitignore README.md Observacoes_Importantes.md

# Configurar .gitignore
echo "node_modules/" >> .gitignore
echo "dist/" >> .gitignore
echo "*.env" >> .gitignore

# Configurar README.md
echo "# Projeto App Banco" >> README.md
echo "Aplicação bancária simples desenvolvida em TypeScript." >> README.md
echo "## Instruções para Execução" >> README.md
echo "1. Execute 'npm install' para instalar dependências." >> README.md
echo "2. Compile o TypeScript com 'npm run build'." >> README.md
echo "3. Execute o projeto com 'npm start'." >> README.md

# Configurar Observacoes_Importantes.md
echo "# Observações Importantes" >> Observacoes_Importantes.md
echo "Este arquivo é usado para anotar pontos importantes durante o desenvolvimento." >> Observacoes_Importantes.md

# Configurar test.ts com código de teste básico
cat <<EOL >> src/test.ts
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

// Buscando filiais pelo nome
arizonaBank.findBranchByName("bank");
arizonaBank.findBranchByName("sun");

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
console.log(arizonaBank.listCustomers(westBranch, true));
console.log(arizonaBank.listCustomers(sunBranch, true));
EOL

# Criar tsconfig.json
cat <<EOL >> tsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
EOL

# Criar package.json
cat <<EOL >> package.json
{
  "name": "app-banco",
  "version": "1.0.0",
  "description": "Aplicativo bancário simples com TypeScript",
  "main": "dist/index.js",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "watch": "tsc -w",
    "test": "node dist/test.js"
  },
  "devDependencies": {
    "typescript": "^5.2.2",
    "@types/node": "^18.15.11"
  }
}
EOL
