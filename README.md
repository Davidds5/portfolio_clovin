# 🌐 Portfólio de Engenharia & Software — David Silva (Clovin DEV)

<div align="center">

[![Portfólio no Ar](https://img.shields.io/badge/Status-Online%20(GitHub%20Pages)-10b981?style=for-the-badge&logo=githubpages&logoColor=white)](https://davidds5.github.io/portfolio_clovin)
[![Java 21](https://img.shields.io/badge/Java%2021-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Spring Boot 3](https://img.shields.io/badge/Spring%20Boot%203-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Next.js 16](https://img.shields.io/badge/Next.js%2016-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript%205-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

<br />

**Engenheiro de Software Full Stack** especializado em **Java 21**, **Spring Boot 3**, **Next.js 16**, **React 19** e **TypeScript**.<br />
Foco em arquitetura multi-tenant robusta, microsserviços, controle de concorrência e interfaces reativas de alta fidelidade.

[**Acessar Portfólio Online ↗**](https://davidds5.github.io/portfolio_clovin) • [**Visualizar Currículo Web (A4 / ATS) ↗**](https://davidds5.github.io/portfolio_clovin/curriculo_david_pt.html) • [**Canal Clovin DEV (YouTube) ↗**](https://youtube.com/@clovindev)

</div>

---

## 📌 Sobre Este Repositório

Este repositório contém o código-fonte do **portfólio profissional de David Silva** ([Clovin DEV](https://youtube.com/@clovindev)), desenvolvido com design editorial de inspiração suíça: micro-textura tátil, tipografia refinada (*Playfair Display*, *DM Sans* e *JetBrains Mono*), contraste limpo e navegação veloz.

O portfólio sintetiza a trajetória de engenharia, os pilares técnicos, o currículo profissional integrado e **5 projetos comerciais reais e autônomos em produção ativa**.

---

## 🚀 Projetos em Destaque (Aplicações em Produção)

| Projeto | Domínio / Tipo | Stack Principal | Destaque de Engenharia | Status |
|---|---|---|---|---|
| **[Clovin Finanças](https://projeto-financas-rouge.vercel.app)** | Finanças & Open Finance | Next.js 16, React 19, TypeScript, Prisma ORM 6, Neon PostgreSQL, Pluggy API, Auth.js | Open Finance Brasil via API Pluggy com Webhooks HMAC-SHA256, motor de compras parceladas em cascata (UUID) e orçamentação 50/30/20. | [Produção ↗](https://projeto-financas-rouge.vercel.app) |
| **[BarberPro](https://barberpro-rose.vercel.app)** | SaaS Agendamento (Wesley Cabeleireiro) | Next.js 16, React 19, TypeScript, Tailwind CSS v4, Prisma ORM 6, Neon PostgreSQL, JWT HttpOnly | Transações atômicas serializáveis sob estresse de concorrência com 50 req/ms simultâneas (**zero double-booking** / 1 ok + 49 conflitos HTTP 409) e cancelamento self-service. | [Produção ↗](https://barberpro-rose.vercel.app) |
| **[ObraSync](https://obrasync-bf1t.onrender.com)** | SaaS Gestão de Obras (Escritórios de Arquitetura) | Next.js 16, React 19, TypeScript, Prisma ORM, Neon PostgreSQL, Render Cloud | Isolamento multi-tenant estrito por `tenantId` (Zero IDOR), Edge Caching SWR (<30ms, 1.000 VUs) e relatórios em PDF server-side. | [Produção ↗](https://obrasync-bf1t.onrender.com) |
| **[BelasUnhas / Manicure API](https://belasunhas.onrender.com)** | SaaS Salões & Esmalterias | Java 21, Spring Boot 3, Spring Security, Hibernate Filter (AOP), Flyway v17, JUnit 5, PostgreSQL | Algoritmo de sobreposição por duração real de atendimento, isolamento multi-tenant dinâmico via `ThreadLocal` + AspectJ AOP e blindagem Fail-Closed. | [Produção ↗](https://belasunhas.onrender.com) |
| **[EstudaBR / Eloped](https://eloped.com.br)** | Plataforma EdTech BNCC | Next.js 16, React 19, TypeScript, Tailwind CSS v4, Zod, jsPDF | RBAC em 4 níveis (Secretaria, Diretores, Professores e Alunos), boletins em tempo real e suite com **308 testes automatizados aprovados**. | [Produção ↗](https://eloped.com.br) |

---

## 🛠️ Competências Técnicas & Arquitetura

### ☕ Backend & APIs
- **Linguagens & Frameworks:** Java 21 (LTS), Spring Boot 3 (MVC, REST, Data JPA), Node.js.
- **Segurança & Controle de Acesso:** Spring Security, JWT (Cookies HttpOnly), RBAC, blindagem Fail-Closed contra falhas de autorização (IDOR).
- **Multi-Tenancy & Persistência:** Isolamento multi-tenant dinâmico via `ThreadLocal` + Hibernate Filters injetados via AOP (AspectJ) e Prisma Client Extensions.
- **Confiabilidade & Qualidade:** Testes unitários e de integração com JUnit 5 e Mockito, migrações versionadas com Flyway (17+ migrations).

### ⚡ Frontend & Web
- **Core & Frameworks:** Next.js 15/16 (App Router, Server Actions, Server & Client Components), React 19, TypeScript (Strict Mode, tipagem sólida sem `any`).
- **Estilização & Design System:** Tailwind CSS (v3 / v4), CSS Moderno, Design Editorial Suíço, Dark/Light Mode com alto contraste, Física Tátil de UI.
- **Formulários & Validação:** Zod, React Hook Form, parsing semântico e validações determinísticas.
- **Acessibilidade:** Padrões WCAG AA, HTML5 semântico e SEO estruturado.

### 🗄️ Dados, Nuvem & DevOps
- **Bancos de Dados:** PostgreSQL, Neon Serverless Postgres (Connection Pooling), modelagem relacional ACID normalizada.
- **ORM & Drivers:** Hibernate/JPA, Prisma ORM 6.
- **Infraestrutura & Deploy:** Docker, Docker Compose, Vercel, Render Cloud, Git & GitHub Actions (CI/CD).
- **APIs Externas & FinTech:** Open Finance Brasil (API Pluggy / HMAC Webhooks), OpenAI API.

---

## 📂 Estrutura do Projeto

```text
portfolio_clovin/
├── index.html                 # Página principal do portfólio (Design editorial + Tailwind + Lucide)
├── curriculo_david_pt.html    # Currículo profissional completo (formatado para tela, ATS e impressão A4)
├── assets/                    # Identidade visual e mídias
│   └── img/                   # Fotos de perfil e capturas de tela em alta fidelidade dos projetos
│       ├── profile.png
│       ├── clovin_financas.png
│       ├── barberpro.png
│       ├── obrasync.png
│       ├── belasunhas.png
│       └── eloped.png
├── nextjs-portfolio/          # Versão alternativa em Next.js com App Router e TypeScript
│   ├── src/
│   │   ├── app/
│   │   └── components/
│   ├── package.json
│   └── tailwind.config.ts
├── portifolio/                # Build / versão estática complementar
└── README.md                  # Documentação do repositório
```

---

## 💻 Como Executar Localmente

### Opção 1: Versão Estática (index.html)

Você pode visualizar a versão estática diretamente no navegador ou utilizando qualquer servidor local de desenvolvimento:

```bash
# 1. Clone o repositório
git clone https://github.com/Davidds5/portfolio_clovin.git

# 2. Acesse a pasta do projeto
cd portfolio_clovin

# 3. Abra com Live Server (VS Code / Antigravity) ou execute via npx:
npx serve .
```

Acesse no seu navegador: `http://localhost:3000` (ou a porta indicada pelo terminal).

---

### Opção 2: Versão Next.js (nextjs-portfolio)

Caso queira rodar a implementação em Next.js com TypeScript:

```bash
# 1. Acesse o subdiretório do Next.js
cd nextjs-portfolio

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse no seu navegador: `http://localhost:3000`.

---

## 🎥 Clovin DEV — Construção em Público

Além do desenvolvimento profissional, compartilho rotina real, decisões de arquitetura e resolução de problemas técnicos ao vivo:

- 📺 **YouTube:** [@clovindev](https://youtube.com/@clovindev) — Sessões diárias de Live Coding (Java 21, Spring Boot, Next.js, arquitetura de software).
- 📱 **TikTok:** [@clovindev](https://www.tiktok.com/@clovindev) — Pílulas de código, rotina e engenharia de software na prática.

---

## 📬 Contato & Conexão

Estou disponível para novas oportunidades profissionais (**CLT ou PJ**) e projetos desafiadores:

- 💼 **LinkedIn:** [linkedin.com/in/david-silva-17b2882bb](https://www.linkedin.com/in/david-silva-17b2882bb)
- 🐙 **GitHub:** [github.com/Davidds5](https://github.com/Davidds5)
- ✉️ **E-mail:** [davis.clovins@gmail.com](mailto:davis.clovins@gmail.com)
- 🌐 **Portfólio Online:** [davidds5.github.io/portfolio_clovin](https://davidds5.github.io/portfolio_clovin)

---

<div align="center">
  <sub>Construído com rigor técnico, simplicidade arquitetural e foco em entrega contínua • © 2026 David Silva (Clovin DEV)</sub>
</div>
