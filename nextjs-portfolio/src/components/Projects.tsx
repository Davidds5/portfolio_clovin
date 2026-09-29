import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectCase {
  id: string;
  tag: string;
  year: string;
  title: string;
  description: string;
  problemSolved: string;
  engineeringDiff: string;
  stack: string[];
  image: string;
  badgeText: string;
  badgeColor: string;
  liveUrl?: string;
  liveLabel?: string;
  githubUrl?: string;
}

const projects: ProjectCase[] = [
  {
    id: "01",
    tag: "Case 01 // Solução Autônoma & Open Finance",
    year: "2026",
    title: "Clovin Finanças",
    description:
      "Plataforma de inteligência financeira pessoal e orçamentação dinâmica sob a regra 50/30/20, projetada no padrão oficial Clovin Tátil (design editorial de alto contraste com física de botões e cartões em relevo). Criada para uso próprio no controle de despesas e planejamento orçamentário mensal e disponibilizada para usuários convidados.",
    problemSolved:
      "Elimina a perda de tempo e as falhas humanas do preenchimento manual de planilhas. Conecta contas e cartões bancários automaticamente via Open Finance e acaba com a 'caixa preta' de compras parceladas, calculando exatamente quanto da renda dos meses seguintes já está comprometido.",
    engineeringDiff:
      "Integração com Open Finance Brasil via API Pluggy com Webhooks criptografados (HMAC-SHA256). Motor de compras parceladas com agrupamento atômico por UUID e parcelamento em cascata, orçamentação mensal independente com suporte a rendas extras e parser semântico em TypeScript para extração de gastos via linguagem natural.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM 6",
      "Neon PostgreSQL",
      "Auth.js (v5)",
      "Pluggy API",
      "Upstash Redis",
    ],
    image: "/clovin_financas.png",
    badgeText: "Solução Autônoma · Produção Ativa",
    badgeColor: "bg-orange-500",
    liveUrl: "https://projeto-financas-rouge.vercel.app",
    liveLabel: "Ver Produção",
  },
  {
    id: "02",
    tag: "Case 02 // Projeto Freelance (Cliente: Wesley Cabeleireiro)",
    year: "2026",
    title: "BarberPro",
    description:
      "Plataforma de agendamento online de alto padrão desenvolvida sob encomenda (projeto freelance) para o cabeleireiro autônomo Wesley. Permite que clientes agendem horários livres em tempo real pelo celular sem fricção de cadastro prévio, integrando tickets formatados direto no WhatsApp.",
    problemSolved:
      "Resolve o problema crônico de double-booking (conflito de horários nos sábados e dias de pico), interrupções constantes durante atendimentos para responder mensagens e ausências de clientes sem aviso prévio (no-show).",
    engineeringDiff:
      "Motor de agendamento com transações atômicas serializáveis homologado sob teste de estresse de concorrência com 50 requisições simultâneas no mesmo milissegundo para o mesmo horário (1 confirmação e 49 conflitos HTTP 409 / zero double-bookings), além de 200 consultas de disponibilidade (50 VUs). Cancelamento self-service com tolerância de arrependimento (15 min) e revogação instantânea de sessões com tokenVersion.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Prisma ORM 6",
      "Neon PostgreSQL",
      "JWT HttpOnly",
      "Vercel",
    ],
    image: "/barberpro.png",
    badgeText: "Projeto Freelance de Cliente · Produção Ativa",
    badgeColor: "bg-amber-500",
    liveUrl: "https://barberpro-rose.vercel.app",
    liveLabel: "Ver Produção",
  },
  {
    id: "03",
    tag: "Case 03 // Projeto Freelance (Escritórios de Arquitetura & Obras)",
    year: "2026",
    title: "ObraSync",
    description:
      "Plataforma SaaS multi-tenant de gestão de obras e reformas desenvolvida sob encomenda (projeto freelance) para escritórios de arquitetura e engenheiros de interiores. Centraliza o registro diário fotográfico, evolução ponderada de cronogramas e oferece aos clientes das obras um portal exclusivo para acompanhamento pelo celular.",
    problemSolved:
      "Acaba com o estresse de clientes ligando diariamente para saber o andamento da obra e a perda de fotos em grupos de WhatsApp. Dá transparência total aos proprietários via link seguro sem necessidade de login ou senhas complexas.",
    engineeringDiff:
      "Isolamento rigoroso por tenantId via Prisma Client Extensions cobrindo todos os sub-recursos (Zero IDOR), validação de upload por Magic Bytes, Edge Caching com SWR (< 30ms) homologado sob teste de estresse com 1.000 VUs concorrentes com atuação precisa de Rate Limiter, relatórios executivos em PDF gerados server-side e suporte offline via PWA.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma ORM",
      "Neon PostgreSQL",
      "Tailwind CSS",
      "Cloud (Render)",
    ],
    image: "/obrasync.png",
    badgeText: "Projeto Freelance de Cliente · Produção Ativa",
    badgeColor: "bg-emerald-500",
    liveUrl: "https://obrasync-bf1t.onrender.com",
    liveLabel: "Ver Produção",
  },
  {
    id: "04",
    tag: "Case 04 // Projeto de Cliente (Salão & Esmalteria)",
    year: "2026",
    title: "BelasUnhas / Manicure API",
    description:
      "Aplicação web completa multi-tenant voltada para salões de beleza e esmalterias. Desenvolvida sob medida para cliente (negócio de manicure) gerenciar de forma autônoma os agendamentos, clientes, serviços e recebimentos do seu estabelecimento.",
    problemSolved:
      "Elimina atrasos e conflitos de agenda causados por procedimentos com durações totalmente distintas (manicure simples de 30 min vs alongamento em gel de 2h), automatizando o agendamento público e a cobrança Pix sem interromper o atendimento.",
    engineeringDiff:
      "Backend em Java 21 e Spring Boot 3 com algoritmo matemático de sobreposição por duração real de serviço (validateTimeConflict). Isolamento multi-tenant via ThreadLocal e filtros nativos no Hibernate orquestrados por AOP, blindagem Fail-Closed no SecurityValidator contra IDOR, 17 migrations Flyway, testes automatizados JUnit 5/Mockito e documentação OpenAPI / Swagger.",
    stack: [
      "Java 21",
      "Spring Boot 3",
      "Spring Security (JWT)",
      "Hibernate Filter & AOP",
      "PostgreSQL",
      "Flyway (v17)",
      "JUnit 5",
      "Docker",
    ],
    image: "/belasunhas.png",
    badgeText: "Projeto Sob Medida para Cliente · Produção Ativa",
    badgeColor: "bg-accent",
    liveUrl: "https://belasunhas.onrender.com",
    liveLabel: "Ver Produção",
  },
  {
    id: "05",
    tag: "Case 05 // Projeto Freelance (Plataforma Educacional EstudaBR / OpenBREstudo)",
    year: "2026",
    title: "EstudaBR / Eloped (OpenBREstudo)",
    description:
      "Plataforma educacional completa desenvolvida sob encomenda (projeto freelance) para integração da comunidade escolar (Secretaria Municipal de Educação, Diretores, Professores e Alunos), com trilhas alinhadas à BNCC, simulados interativos e dashboards de rendimento pedagógico.",
    problemSolved:
      "Resolve a fragmentação de ferramentas e o uso de papel nas escolas, unificando comunicados escolares, diários de classe, simulados com correção automática e emissão de boletins oficiais em um só lugar.",
    engineeringDiff:
      "Segmentação RBAC em 4 perfis de acesso, geração dinâmica de relatórios e boletins em PDF com jsPDF/pdf-lib e suíte com 308 testes automatizados 100% determinísticos e aprovados cobrindo formulários, segurança e jornadas E2E.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Zod",
      "308 Testes Automatizados",
    ],
    image: "/eloped.png",
    badgeText: "Projeto Freelance sob Encomenda · Produção Ativa",
    badgeColor: "bg-blue-500",
    liveUrl: "https://eloped.com.br",
    liveLabel: "Ver Produção",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 hairline-b">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <div className="flex items-center gap-3 text-accent font-mono text-xs font-semibold tracking-wider uppercase mb-2">
            <span>02 //</span>
            <span>Portfólio & Entregas Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink tracking-tight">
            Projetos Freelancer & Clientes
          </h2>
        </div>
        <p className="text-sm font-mono text-ink-muted max-w-md">
          Aplicações completas desenvolvidas sob encomenda (freelancer) e operando em produção ativa. Códigos-fonte privados sob proteção e propriedade intelectual dos clientes.
        </p>
      </div>

      {/* Projects Feed */}
      <div className="flex flex-col gap-16">
        {projects.map((project) => (
          <article
            key={project.id}
            className="hairline rounded-2xl overflow-hidden bg-white hover:border-line-dark transition-editorial group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image Wrap (7 cols) */}
              <div className="lg:col-span-7 bg-canvas-soft overflow-hidden relative hairline-b lg:hairline-b-0 lg:hairline-r">
                <a
                  href={project.liveUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-[16/10] overflow-hidden relative"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-editorial duration-500"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </a>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 hairline text-ink text-[11px] font-mono font-medium backdrop-blur-sm shadow-sm">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${project.badgeColor}`}
                    />
                    {project.badgeText}
                  </span>
                </div>
              </div>

              {/* Content Info (5 cols) */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                      {project.tag}
                    </span>
                    <span className="font-mono text-[11px] text-ink-faint">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink mb-4">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-ink-muted leading-relaxed mb-4 font-sans">
                    {project.description}
                  </p>

                  {/* Problema que Resolve */}
                  <div className="p-3.5 rounded-lg bg-accent-soft/70 hairline border-accent/20 mb-4">
                    <span className="text-[11px] font-mono text-accent font-semibold uppercase block mb-1">
                      Problema Real que Resolve
                    </span>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      {project.problemSolved}
                    </p>
                  </div>

                  {/* Architectural Highlights */}
                  <div className="p-4 rounded-lg bg-canvas-soft hairline mb-6">
                    <span className="text-[11px] font-mono text-ink-faint uppercase block mb-1">
                      Diferencial de Engenharia
                    </span>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      {project.engineeringDiff}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8 font-mono text-xs">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded bg-canvas-soft text-ink-muted hairline"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex items-center justify-between gap-3 pt-6 hairline-t font-mono text-xs">
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-ink text-white hover:bg-accent transition-editorial font-medium"
                      >
                        <span>{project.liveLabel || "Ver Produção"}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-md bg-canvas-soft text-ink hover:text-accent hairline transition-editorial font-medium"
                      >
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-canvas-soft hairline text-[11px] text-ink-muted">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        project.githubUrl ? "bg-emerald-500" : "bg-ink-faint"
                      }`}
                    ></span>
                    {project.githubUrl ? "Código Aberto" : "Código Proprietário"}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

