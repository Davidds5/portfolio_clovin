import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCase {
  id: string;
  tag: string;
  year: string;
  title: string;
  description: string;
  engineeringDiff: string;
  stack: string[];
  image: string;
  badgeText: string;
  badgeColor: string;
  liveUrl?: string;
  liveLabel?: string;
  githubUrl: string;
}

const projects: ProjectCase[] = [
  {
    id: "01",
    tag: "Case 01 // SaaS Single-Tenant & Concorrência",
    year: "2026",
    title: "BarberPro",
    description:
      "Plataforma de agendamento online de alto padrão para barbearias individuais. Permite que clientes agendem horários livres em tempo real sem fricção de cadastro prévio, com integração direta para envio de ticket VIP formatado no WhatsApp do barbeiro (wa.me) e painel administrativo protegido com métricas e bloqueios de agenda.",
    engineeringDiff:
      "Motor de agendamento com transações atômicas serializáveis homologado sob teste de estresse de 370+ requisições simultâneas com zero double-bookings. Cancelamento self-service com tolerância de arrependimento (15 min) e revogação instantânea de sessões com tokenVersion.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma ORM",
      "Neon PostgreSQL",
      "JWT HttpOnly",
      "Vercel",
    ],
    image: "/barberpro.png",
    badgeText: "Em Produção na Vercel",
    badgeColor: "bg-amber-500",
    liveUrl: "https://barberpro-rose.vercel.app",
    liveLabel: "Ver Produção",
    githubUrl: "https://github.com/Davidds5/barberpro",
  },
  {
    id: "02",
    tag: "Case 02 // SaaS Multi-Tenant & AppSec",
    year: "2026",
    title: "ObraSync",
    description:
      "Plataforma SaaS multi-tenant de gestão de obras e projetos para arquitetos e construtoras. Centraliza diários de obras fotográficos, acompanhamento de cronograma com avanço físico ponderado e geração de portal do cliente via Magic Link público e responsivo sem exigência de login.",
    engineeringDiff:
      "Isolamento rigoroso por tenantId via Prisma Client Extensions cobrindo todos os sub-recursos (Zero IDOR), validação de upload por Magic Bytes, Edge Caching com SWR (< 30ms) e homologação sob teste de estresse com 1.000 VUs concorrentes com atuação precisa de Rate Limiter.",
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
    badgeText: "Em Produção no Render",
    badgeColor: "bg-emerald-500",
    liveUrl: "https://obrasync-bf1t.onrender.com",
    liveLabel: "Ver Produção",
    githubUrl: "https://github.com/Davidds5/obrasync",
  },
  {
    id: "03",
    tag: "Case 03 // Enterprise Backend & Multi-Tenancy",
    year: "2026",
    title: "BelasUnhas (Agenda Bela)",
    description:
      "Aplicação web completa multi-tenant voltada para salões de beleza e esmalterias. Conta com gestão de agendamentos, catálogo de serviços e controle de planos com bloqueio automático por limite (HTTP 402 Payment Required), além de fluxo automatizado de onboarding self-service.",
    engineeringDiff:
      "Isolamento multi-tenant via ThreadLocal e filtros nativos no Hibernate orquestrados por AOP. Blindagem Fail-Closed no SecurityValidator contra IDOR, Rate Limiting em memória e cache SpEL particionado por tenant.",
    stack: [
      "Java 21",
      "Spring Boot 3",
      "Spring Security (JWT)",
      "Hibernate Filter & AOP",
      "PostgreSQL & Flyway (v16)",
      "Docker",
    ],
    image: "/belasunhas.png",
    badgeText: "Java 21 & Spring Boot 3 Core",
    badgeColor: "bg-accent",
    liveUrl: "https://manicure-api-vi63.onrender.com/swagger-ui/index.html",
    liveLabel: "Swagger Docs",
    githubUrl: "https://github.com/Davidds5/manicure_api",
  },
  {
    id: "04",
    tag: "Case 04 // EdTech & Qualidade de Software",
    year: "2026",
    title: "Eloped / EstudaBR",
    description:
      "Plataforma educacional completa para integração da comunidade escolar (Secretaria Municipal de Educação, Diretores, Professores e Alunos), com trilhas alinhadas à BNCC, simulados interativos e dashboards de rendimento pedagógico.",
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
    badgeText: "308 Testes Aprovados",
    badgeColor: "bg-blue-500",
    liveUrl: "https://eloped.com.br",
    liveLabel: "Ver Produção",
    githubUrl: "https://github.com/Davidds5",
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
            <span>Cases Selecionados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink tracking-tight">
            Projetos Principais
          </h2>
        </div>
        <p className="text-sm font-mono text-ink-muted max-w-md">
          Aplicações reais em produção, projetadas com arquitetura limpa,
          segurança multi-tenant e experiência refinada.
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

                  <p className="text-sm sm:text-base text-ink-muted leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>

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
                <div className="flex items-center gap-3 pt-6 hairline-t font-mono text-xs">
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

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md hairline hover:bg-canvas-soft text-ink transition-editorial font-medium"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repositório</span>
                    {!project.liveUrl && (
                      <ArrowUpRight className="w-3.5 h-3.5 text-ink-faint" />
                    )}
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
