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
    tag: "Case 01 // SaaS Multi-Tenant",
    year: "2026",
    title: "ObraSync",
    description:
      "Plataforma multi-tenant de gestão de projetos desenvolvida para escritórios de engenharia civil e arquitetura. Elimina a desorganização de grupos de mensagens ao centralizar diários de obras fotográficos, acompanhamento de cronograma com avanço físico ponderado e geração de portal público via Magic Link seguro para clientes finais sem exigência de login.",
    engineeringDiff:
      "Isolamento rigoroso por tenantId na camada de modelo e autenticação JWT. Geração de tokens efêmeros para visualização pública de clientes com zero exposição de endpoints administrativos.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    image: "/obrasync.png",
    badgeText: "Em Produção no Render",
    badgeColor: "bg-emerald-500",
    liveUrl: "https://obrasync-bf1t.onrender.com",
    liveLabel: "Ver Produção",
    githubUrl: "https://github.com/Davidds5/obrasync",
  },
  {
    id: "02",
    tag: "Case 02 // Enterprise Backend & Multi-Tenancy",
    year: "2026",
    title: "BelasUnhas (Agenda Bela)",
    description:
      "Aplicação web completa multi-tenant voltada para salões de beleza e profissionais de estética. Conta com gestão de agendamentos, catálogo de serviços e controle de planos com bloqueio automático por limite (HTTP 402 Payment Required), além de fluxo automatizado de onboarding self-service para novos salões.",
    engineeringDiff:
      "Isolamento multi-tenant dinâmico usando ThreadLocal com filtros globais do Hibernate ativados via interceptor AspectJ (AOP). Cobertura de testes unitários e de integração com JUnit 5 e Mockito.",
    stack: [
      "Java 21",
      "Spring Boot 3",
      "Spring Security (JWT)",
      "Hibernate Filter & AOP",
      "PostgreSQL & Flyway",
      "Next.js Frontend",
    ],
    image: "/belasunhas.png",
    badgeText: "Java 21 & Spring Boot 3 Core",
    badgeColor: "bg-accent",
    liveUrl: "https://manicure-api-vi63.onrender.com/swagger-ui/index.html",
    liveLabel: "Swagger Docs",
    githubUrl: "https://github.com/Davidds5/manicure_api",
  },
  {
    id: "03",
    tag: "Case 03 // IA & Produtividade",
    year: "2026",
    title: "Vaga Certa",
    description:
      "Aplicação que consome e agrega vagas de emprego em tempo real e utiliza a API da OpenAI para otimizar currículos para passar com nota máxima nos sistemas de triagem automática (ATS). Analisa palavras-chave da vaga versus experiência do candidato e reformata o currículo sem alucinações.",
    engineeringDiff:
      "Engenharia de prompts com schemas estritos para parsing estruturado de dados. Geração nativa e dinâmica de arquivos PDF e DOCX através de bibliotecas de baixo nível (PDF-Lib e Mammoth).",
    stack: [
      "Next.js 14",
      "TypeScript",
      "OpenAI API",
      "Prisma ORM",
      "PDF-Lib & Docx",
      "Tailwind CSS",
    ],
    image: "/vaga_certa.png",
    badgeText: "OpenAI API Integration",
    badgeColor: "bg-indigo-500",
    githubUrl: "https://github.com/Davidds5/projeto-api-curricolo",
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
