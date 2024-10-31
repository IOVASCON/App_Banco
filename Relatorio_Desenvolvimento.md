# Objetivo do Projeto

O objetivo deste projeto foi desenvolver uma aplicação bancária simples utilizando TypeScript, com ênfase em conceitos de Programação Orientada a Objetos (POO). A aplicação permite a criação de um banco com filiais, clientes e transações, oferecendo funcionalidades básicas como adicionar clientes, registrar transações e listar clientes com suas transações. O projeto foi construído com uma estrutura bem organizada para facilitar o entendimento e a manutenção do código, especialmente para iniciantes.

## Estrutura do Projeto

A aplicação foi dividida em várias classes para organizar a lógica e facilitar o uso de conceitos de POO. Abaixo estão as principais classes e o que cada uma representa:

1. **Bank:** Representa o banco principal, que pode conter várias filiais (Branches).
2. **Branch:** Representa uma filial do banco, onde os clientes são registrados.
3. **Customer:** Representa os clientes do banco, que podem ter várias transações.
4. **Transaction:** Representa as transações realizadas pelos clientes, com detalhes de valor e data.

## Passo a Passo do Desenvolvimento

Aqui está um resumo dos passos que seguimos para construir o projeto e os principais conceitos que abordamos:

1. Configuração do Ambiente com TypeScript:
    - Criamos a estrutura básica do projeto com pastas e arquivos necessários, utilizando um script setup.sh.
    - Configuramos o TypeScript no projeto, criando arquivos como tsconfig.json para especificar opções de compilação e package.json para gerenciar dependências e scripts de execução.

2. Implementação das Classes:
    - Implementamos cada classe seguindo os conceitos de POO:
        - Transaction: Classe simples que armazena o valor e a data de uma transação.
        - Customer: Armazena informações sobre o cliente, como nome, ID e uma lista de transações. Incluímos métodos para adicionar transações e calcular o saldo do cliente.
        - Branch: Responsável por gerenciar os clientes associados a uma filial específica. Contém métodos para adicionar clientes e transações.
        - Bank: Classe principal que gerencia as filiais (branches). Possui métodos para adicionar filiais, adicionar clientes e transações a filiais específicas e listar os clientes de uma filial.

3. Testes das Funcionalidades:
    - Criamos o arquivo test.ts para realizar os testes das funcionalidades básicas. Nesse arquivo, fizemos operações como:
        - Instanciar um banco (Bank), filiais (Branch) e clientes (Customer).
        - Adicionar filiais e clientes ao banco.
        - Registrar transações para os clientes.
        - Testar o cálculo do saldo e rejeitar transações inválidas (valores negativos).
        - Listar clientes com as transações associadas a cada um.
    - Esses testes foram úteis para garantir que cada parte do sistema funciona corretamente e que os dados estão sendo manipulados conforme esperado.

4. Refatoração e Melhoria na Visualização:
    - Após configurar e verificar o funcionamento de cada classe, adicionamos console.log em pontos estratégicos para exibir o progresso das operações. Essa abordagem permitiu acompanhar cada etapa da execução no terminal e verificar visualmente o funcionamento de cada parte do sistema.
    - Removemos possíveis mensagens undefined indesejadas para garantir uma saída limpa e organizada.

5. Execução e Verificação:
    - Compilamos o projeto utilizando o comando npm run build e executamos o arquivo gerado em JavaScript (index.js) para observar a saída no terminal.
    - As mensagens console.log foram estrategicamente colocadas para informar cada ação, como a criação de contas, adição de filiais, registro de transações, rejeição de transações inválidas e listagem de dados.

## Resultado Final

O projeto final é uma aplicação bancária funcional com uma estrutura bem definida, que pode ser utilizada para manipular dados bancários básicos, como:

- Registro de clientes e suas transações.
- Adição e gerenciamento de filiais.
- Listagem de clientes e transações.

## Resumo dos Conceitos Aprendidos

1. **Programação Orientada a Objetos (POO):** Implementamos POO com classes e métodos, o que facilita a organização e a reutilização do código.
2. **TypeScript:** Utilizamos tipagem estática com TypeScript para aumentar a segurança e a manutenibilidade do código.
3. **Manipulação de Dados:** Aprendemos a criar métodos para adicionar e listar dados, além de manipular arrays e objetos.
4. **Organização de Projeto:** Dividimos o projeto em várias classes para cada entidade (banco, filial, cliente, transação), facilitando a organização e o entendimento.
5. **Testes Simples e Depuração:** Testamos as funcionalidades do sistema utilizando console.log para verificar a execução de cada etapa.

## Considerações Finais

Este projeto oferece uma base sólida para iniciantes entenderem conceitos fundamentais de POO e TypeScript. Com essa estrutura, você pode expandir o projeto, adicionando novas funcionalidades, como:

- Consultas mais complexas, relatórios financeiros, entre outras funcionalidades.

A aplicação fornece uma estrutura clara e organizada que pode ser usada como ponto de partida para projetos maiores e mais complexos no futuro.
