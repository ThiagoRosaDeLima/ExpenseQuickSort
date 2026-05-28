# 📊 Sistema de Ranking de Gastos Pessoais (Quick Sort Full Stack)

Este projeto foi desenvolvido inicialmente como uma atividade acadêmica para a matéria de **Estrutura de Dados**. A proposta evoluiu de um simples aplicativo de console para uma solução **Full Stack** completa, simulando um cenário real de mercado para demonstrar a aplicação prática do algoritmo de ordenação **Quick Sort** no gerenciamento e ranking de despesas diárias.

---

## 🚀 Tecnologias Utilizadas

### **Back-end**
* **C#** com **.NET 10.0**
* **ASP.NET Core Web API** (Abordagem de Controllers tradicionais, garantindo suporte completo a serialização JSON sem problemas de Trimming/AOT)

### **Front-end**
* **React** (JavaScript)
* **Swagger** (Para integração e consumo da API)
* **HTML5 / CSS3** (Interface limpa, moderna e responsiva)

---

## 🧠 O Algoritmo: Quick Sort

O núcleo de inteligência da aplicação utiliza o algoritmo **Quick Sort** implementado manualmente em C#. Ele é o responsável por ordenar os gastos cadastrados do **maior para o menor**, permitindo que o sistema gere um ranking preciso de onde o usuário possui o maior impacto financeiro.

* **Abordagem:** Divisão e Conquista.
* **Pivô:** Estratégia de posicionamento para particionamento eficiente do array/lista de objetos.

---

## 🛠️ Arquitetura do Projeto

O ecossistema do projeto foi estruturado em uma pasta raiz única (`ExpenseQuickSortFull`) dividida entre o servidor e o cliente:

```text
ExpenseQuickSortFull/
├── ExpenseQuickSortAPI/          # Back-end (Web API em C#)
│   ├── Controllers/             # Endpoints da API (GastosController)
│   ├── Models/                  # Estrutura do Objeto (Gasto.cs)
│   ├── Program.cs               # Configuração do Pipeline e CORS
│   └── ExpenseQuickSortAPI.csproj
└── expense-frontend/            # Front-end (Single Page Application em React)
    ├── src/
    │   ├── App.js               # Componente principal e chamadas de API
    │   ├── index.js             # Inicialização do React
    │   └── ...
    └── package.json
```
🧑‍💻 Autor

Nome: Thiago Rosa De Lima

Formação: Estudante em Engenharia de Software & Game Design

Atuação: Desenvolvedor/Programador de Software e Analista de suporte/sistemas

LinkedIn: https://www.linkedin.com/in/thiagoliez/
