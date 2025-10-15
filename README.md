# 📚 Editora UFNT | Workspace Completo

[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)](https://github.com/joaoof/editora-workspace)
[![License](https://img.shields.io/badge/License-ISC-blue)](LICENSE)
[![Angular Version](https://img.shields.io/badge/Angular-14.2.13-red)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.7.2-blue)](https://www.typescriptlang.org/)
[![Backend](https://img.shields.io/badge/Backend-Express.js-orange)](https://expressjs.com/)

---

## 📑 Tabela de Conteúdo

1.  [Visão Geral do Projeto](#-visão-geral-do-projeto)
2.  [Funcionalidades Principais](#-funcionalidades-principais)
3.  [Tecnologias Utilizadas](#-tecnologias-utilizadas)
4.  [Estrutura do Projeto](#-estrutura-do-projeto)
    * [4.1 Frontend (Angular)](#41-frontend-angular)
    * [4.2 Backend (Node.js/Express)](#42-backend-nodejs/express)
5.  [Instalação e Configuração](#-instalação-e-configuração)
    * [5.1 Pré-requisitos](#51-pré-requisitos)
    * [5.2 Configuração do Frontend](#52-configuração-do-frontend)
    * [5.3 Configuração do Backend](#53-configuração-do-backend)
6.  [Scripts de Desenvolvimento](#-scripts-de-desenvolvimento)
7.  [Mapeamento de Rotas](#-mapeamento-de-rotas)
8.  [Componentes e Responsabilidades](#-componentes-e-responsabilidades)
9.  [Configurações Avançadas](#-configurações-avançadas)
10. [Testes e Qualidade de Código](#-testes-e-qualidade-de-código)
11. [Contribuição](#-contribuição)
12. [Licença](#-licença)

---

## 🚀 Visão Geral do Projeto

Este repositório contém o código-fonte completo para o **Editora UFNT Workspace**, um sistema robusto dividido em uma aplicação **Frontend Angular** e um **Backend Node.js/Express** modular. O objetivo principal é fornecer uma plataforma moderna para gerenciamento e visualização do catálogo de livros de uma editora universitária, incluindo funcionalidades essenciais como navegação, submissões (em desenvolvimento) e autenticação de usuários.

A aplicação Frontend utiliza o Angular CLI v14.2.13 e segue as melhores práticas de desenvolvimento modular, enquanto o Backend (localizado em `backend/`) é construído com Express e Mongoose para persistência de dados no MongoDB.

---

## ✨ Funcionalidades Principais

A plataforma oferece as seguintes funcionalidades, baseadas nos componentes e rotas implementadas:

### 🌐 Navegação e Catálogo
* **Página Inicial (`/`):** Layout principal com barra de navegação (`app-navbar`), sessões de destaque (`app-session`) e barra lateral (`app-sidebar`).
* **Catálogo de Livros (`/books-catalogo`):** Visualização completa do catálogo com informações de paginação (`1-26 de 766` títulos, por exemplo).
* **Detalhe do Livro (`/book-details/:id`):** Exibição de informações detalhadas do livro, incluindo sinopse, palavras-chave e opções de download/compra (`Adquirir PDF (50 BRL)`).
* **Barra Lateral (`app-sidebar`):** Navegação por "Lançamentos", "Categorias" (e.g., Antropologia, Ciências Jurídicas), "Séries" (e.g., Coleção Geografia, Série Sociologia) e "Informações" (Leitores, Autores, Bibliotecários).

### 🔒 Autenticação e Usuários
* **Cadastro de Usuário (`/cadastro-usuario`):** Formulário completo para registro de novos usuários com campos para nome, email, telefone, senha e gênero.
* **Login (`/login`):** Formulário para autenticação de usuários com email e senha.

### 💳 Informações e Processos
* **Formas de Pagamento (`/books-pagamento`):** Detalhamento das modalidades de pagamento aceitas (PIX e Cartão de crédito), incluindo tarifas e dados de contato para suporte.
* **Submissões (`/books-submissoes`):** Página de informações sobre o processo de submissão, com um aviso de que a editora **não está aceitando submissões no momento**.

---

## 🛠️ Tecnologias Utilizadas

Este projeto é um *monorepo* simplificado que integra um frontend e um backend, utilizando as seguintes tecnologias:

### Frontend
| Tecnologia | Versão | Propósito | Fonte |
| :--- | :--- | :--- | :--- |
| **Angular** | `^14.2.0` | Framework principal para a UI. | |
| **TypeScript** | `~4.7.2` | Linguagem de programação tipada. | |
| **RxJS** | `~7.5.0` | Programação reativa para manipulação de eventos. | |
| **Axios** | `^1.7.2` | Cliente HTTP para requisições à API (listado em dependências). | |
| **CSS/Sass** | N/A | Estilização responsiva e modular. | |

### Backend
| Tecnologia | Versão | Propósito | Fonte |
| :--- | :--- | :--- | :--- |
| **Node.js/Express** | `^4.19.2` | Servidor Web e API RESTful. | |
| **Mongoose** | `^8.4.5` | Modelagem de objetos para MongoDB (ORM/ODM). | |
| **TypeScript** | `^5.5.3` | Desenvolvimento backend tipado. | |
| **dotenv** | `^16.4.5` | Gerenciamento de variáveis de ambiente. | |
| **body-parser** | `^1.20.2` | Middleware para processamento de corpos de requisição. | |

---

## 📂 Estrutura do Projeto

### 4.1 Frontend (Angular)

A estrutura do diretório `src/app/` segue a convenção do Angular para modularidade e organização por funcionalidade:

```

src/
├── app/
│   ├── app-routing.module.ts       # Definição das rotas principais da aplicação
│   ├── app.module.ts               # Módulo raiz, declaração de todos os componentes
│   ├── book-detail/                # Componente para a página de detalhes do livro
│   │   ├── book-detail.component.ts
│   │   ├── book-detail.component.html
│   │   └── book-detail.component.css
│   ├── book-list/                  # Componente para listagem de livros (abstração)
│   ├── cadastro-usuario/           # Componente para o formulário de cadastro
│   ├── catalogo/                   # Componente para a visualização do catálogo principal
│   ├── formas-de-pagamento/        # Componente com informações sobre pagamentos
│   ├── login/                      # Componente para a página de login
│   ├── main-layout/                # Componente de layout principal (Navbar + Session + Sidebar)
│   ├── navbar/                     # Componente da barra de navegação (menu principal)
│   │   ├── navbar.component.ts     # Inclui lógica para menu mobile (`menuShow()`)
│   ├── navigation-location/        # Componente de navegação (breadcrumbs), injetado no Cadastro
│   ├── session/                    # Componente para exibição de destaques/lançamentos na home
│   ├── session-catalogo/           # Componente de listagem no catálogo
│   ├── sidebar/                    # Componente da barra lateral de filtros e links
│   └── submissoes/                 # Componente com a política de submissões
├── assets/                         # Imagens (e.g., logo.png) e ícones (e.g., menu_white_36dp.svg)
├── environments/                   # Configurações de ambiente (prod/dev)
├── favicon.ico                     # Ícone do navegador
└── index.html                      # Ponto de entrada da aplicação

```

### 4.2 Backend (Node.js/Express)

O backend é simples e atua como uma API REST.

```

backend/
├── index.ts                        # Ponto de entrada do servidor (configura Express e porta)
├── package.json                    # Dependências do servidor (Express, Mongoose)
├── package-lock.json               # Lockfile de dependências
├── .gitignore                      # Exclui node_modules e arquivos de configuração TS
└── tsconfig.json                   # Configuração do TypeScript

````

---

## ⚙️ Instalação e Configuração

Siga os passos abaixo para configurar e rodar o projeto localmente.

### 5.1 Pré-requisitos
* Node.js (Recomendado v16+)
* npm (ou yarn)
* Angular CLI (Instalado globalmente: `npm install -g @angular/cli`)
* Um servidor MongoDB em execução para o backend (local ou em nuvem, e.g., Atlas).

### 5.2 Configuração do Frontend

1.  **Navegue** para o diretório principal do projeto (`editora-workspace`).
2.  **Instale** as dependências do Frontend:
    ```bash
    npm install
    ```
3.  **Inicie** o servidor de desenvolvimento Angular:
    ```bash
    npm run start
    # ou use o comando ng serve nativo:
    # ng serve
    ```
    A aplicação estará acessível em `http://localhost:4200/`.

### 5.3 Configuração do Backend

1.  **Crie** um arquivo `.env` no diretório `backend/` para configurar o ambiente.

    ```
    # Exemplo de conteúdo do .env
    PORT=3000
    MONGO_URI="mongodb://localhost:27017/editora-db"
    # Adicione outras variáveis de ambiente aqui
    ```

2.  **Navegue** para o diretório do backend.
    ```bash
    cd backend
    ```

3.  **Instale** as dependências do Backend:
    ```bash
    npm install
    ```

4.  **Inicie** o servidor Express (requer transpilação, idealmente com um watcher ou `ts-node` para desenvolvimento. O arquivo `index.ts` é o ponto de entrada).

    *O script de `start` deve ser configurado no `package.json` do backend para transpilar e executar o código, ou usar `ts-node`.*

    ```bash
    # Exemplo de execução (assumindo script 'start' configurado para 'ts-node index.ts')
    npm start
    # Output esperado: [server]: Server is running at http://localhost:3000
    ```

---

## 🗂️ Scripts de Desenvolvimento

Os principais scripts definidos no `package.json` do frontend:

| Comando | Descrição |
| :--- | :--- |
| `npm run ng` | Executa o Angular CLI (e.g., `ng generate`). |
| `npm run start` | Inicia o servidor de desenvolvimento. A navegação é automática para `http://localhost:4200/`. |
| `npm run build` | Constrói o projeto para deploy. Os artefatos são salvos no diretório `dist/`. |
| `npm run watch` | Constrói o projeto e observa as mudanças para reconstrução automática. |
| `npm run test` | Executa os testes de unidade via [Karma](https://karma-runner.github.io). |

---

## 🗺️ Mapeamento de Rotas

O arquivo `src/app/app-routing.module.ts` define as rotas da aplicação:

| Caminho URL | Componente | Descrição |
| :--- | :--- | :--- |
| `/` | `MainLayoutComponent` | Rota principal com o layout base. |
| `/books` | `BookListComponent` | Listagem de livros (componente wrapper). |
| `/books/:id` | `BookDetailComponent` | Rota dentro do layout principal (inativa no momento). |
| `/book-details/:id` | `BookDetailComponent` | Rota para detalhes do livro (sem o `MainLayout`). |
| `/books-catalogo` | `CatalogoComponent` | Página do Catálogo de Livros. |
| `/books-pagamento` | `FormasDePagamentoComponent` | Página com as formas de pagamento. |
| `/books-submissoes` | `SubmissoesComponent` | Página de informações sobre submissões. |
| `/cadastro-usuario` | `CadastroUsuarioComponent` | Formulário de registro de novos usuários. |
| `/login` | `LoginComponent` | Formulário de acesso ao sistema. |

---

## 🏗️ Componentes e Responsabilidades

O projeto utiliza uma variedade de componentes para construir a interface:

| Componente | Responsabilidade | Referência |
| :--- | :--- | :--- |
| `AppComponent` | Componente raiz que carrega o `<router-outlet>` principal. | |
| `NavbarComponent` | Navegação principal e menu mobile (`menuShow()`). | |
| `SidebarComponent` | Barra lateral de navegação para categorias e séries. | |
| `SessionComponent` | Exibição de carrossel ou grade de destaques/lançamentos (na home). | |
| `SessionCatalogoComponent` | Componente reutilizável para listagem de itens no catálogo. | |
| `NavigationLocationComponent` | Exibição da trilha de navegação ("Início / Atual"). | |
| `MainLayoutComponent` | Define o layout comum da aplicação (Navbar + Conteúdo + Sidebar). | |
| `BookDetailComponent` | Detalhes específicos de um livro. | |
| `LoginComponent` | Lógica e template para o formulário de login. | |
| `CadastroUsuarioComponent` | Lógica e template para o formulário de cadastro. | |

---

## 🎛️ Configurações Avançadas

### TypeScript Configuration (`tsconfig.json`)

O projeto utiliza uma configuração estrita de TypeScript para garantir alta qualidade e segurança de código:

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "target": "es2020",
    "module": "es2020",
    "lib": ["es2020", "dom"]
  },
  "angularCompilerOptions": {
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}
````

**Destaques:** O uso de `strict: true` e `strictTemplates: true` indica um compromisso com código seguro e com menos erros em tempo de execução.

### Browserslist (`.browserslistrc`)

O arquivo de configuração define o suporte aos navegadores para garantir a compatibilidade e a otimização dos assets gerados:

```
last 1 Chrome version
last 1 Firefox version
last 2 Edge major versions
last 2 Safari major versions
last 2 iOS major versions
Firefox ESR
```

**Nota:** Para verificar a lista de navegadores selecionados, use `npx browserslist`.

### Configuração do Express Backend

O servidor Node.js/Express (`backend/index.ts`) inicializa e escuta na porta definida nas variáveis de ambiente:

```typescript
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000; // Usa PORT do .env ou 3000

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server")
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
```

-----

## 🧪 Testes e Qualidade de Código

### Testes de Unidade

Os testes de unidade são configurados para serem executados com [Karma](https://karma-runner.github.io) e [Jasmine].

**Para executar os testes:**

```bash
npm run test
# ou ng test
```

A configuração do Karma utiliza o `karma-chrome-launcher` para execução no navegador e gera relatórios de cobertura em `coverage/editora-workspace/`.

### Arquivos de Especificação (Exemplos)

Arquivos de teste para componentes essenciais já estão definidos, como em `src/app/sidebar/sidebar.component.spec.ts`:

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

O teste verifica a criação bem-sucedida da instância do componente.

-----

## 🤝 Contribuição

Siga os passos a seguir para contribuir com o projeto:

1.  Faça um fork do projeto.
2.  Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`).
3.  Comite suas mudanças (`git commit -m 'feat: Add AmazingFeature'`).
4.  Faça o push para a branch (`git push origin feature/AmazingFeature`).
5.  Abra um Pull Request.

## 📄 Licença

Distribuído sob a licença ISC.

## ℹ️ Mais Ajuda

Para mais informações sobre o Angular CLI, utilize `ng help` ou confira a documentação oficial:

  * [Angular CLI Overview and Command Reference](https://angular.io/cli)

-----

*Este `README.md` foi gerado com base na análise da estrutura e conteúdo dos arquivos do projeto `editora-workspace`.*

```
```
