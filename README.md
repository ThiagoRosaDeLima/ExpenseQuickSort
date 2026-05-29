# ExpenseQuickSort Full Stack

Sistema Full Stack para gerenciamento e organização de gastos pessoais utilizando o algoritmo Quick Sort em C#.

O projeto foi desenvolvido como forma de aplicar conceitos de:

* Estrutura de Dados
* Algoritmos de Ordenação
* Desenvolvimento Full Stack
* APIs REST
* Integração Front-End e Back-End

---

# Tecnologias Utilizadas

## Front-End

* React
* JavaScript
* HTML5
* CSS3

## Back-End

* C#
* ASP.NET Core Web API
* .NET 8

## Ferramentas

* Git
* GitHub
* Visual Studio 2022
* VS Code

---

# Funcionalidades

* Cadastro de gastos
* Organização automática por valor
* Ranking do maior gasto para o menor
* Integração entre React e API C#
* Algoritmo Quick Sort aplicado na prática
* Interface moderna e simples

---

# Estrutura do Projeto

```txt
ExpenseQuickSortFull/
│
├── backend/
│   └── ExpenseQuickSortAPI
│
├── frontend/
│   └── expense-frontend
```

---

# Como Executar o Projeto

# 1. Clonar repositório

```bash
git clone URL_DO_REPOSITORIO
```

---

# 2. Executar Back-End

Abrir a pasta:

```txt
backend/ExpenseQuickSortAPI
```

Executar:

```bash
dotnet run
```

A API será iniciada em:

```txt
https://localhost:7284
```

---

# 3. Executar Front-End

Abrir a pasta:

```txt
frontend/expense-frontend
```

Executar:

```bash
npm install
npm start
```

O React abrirá em:

```txt
http://localhost:3000
```

---

# Como Funciona

O usuário cadastra gastos no Front-End React.

Esses dados são enviados para a API em C# utilizando requisições HTTP.

A API utiliza o algoritmo Quick Sort para ordenar os gastos automaticamente do maior para o menor valor.

Após a ordenação, os dados são retornados para o Front-End e exibidos na interface.

---

# Exemplo

## Entrada

```txt
Netflix - 39
Mercado - 350
Aluguel - 1200
```

## Saída Ordenada

```txt
Aluguel - 1200
Mercado - 350
Netflix - 39
```

---

# Conceitos Aplicados

* Estrutura de Dados
* Algoritmo Quick Sort
* Programação Orientada a Objetos
* APIs REST
* Comunicação Cliente/Servidor
* Full Stack Development

---

# Melhorias Futuras

* Banco de dados
* Sistema de login
* Dashboard financeiro
* Gráficos de gastos
* Filtro por categoria
* Persistência de dados
* Responsividade mobile

---

# Autor

Thiago Rosa de Lima

LinkedIn:
https://www.linkedin.com/in/thiagoliez/

GitHub:
https://github.com/ThiagoRosaDeLima

---

# Status do Projeto

Em desenvolvimento.
