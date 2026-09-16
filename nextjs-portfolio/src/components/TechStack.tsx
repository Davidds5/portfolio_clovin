import { Database, Layout, Server } from "lucide-react";

export default function TechStack() {
  return (
    <section id="stack" className="py-24 hairline-b">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <div className="flex items-center gap-3 text-accent font-mono text-xs font-semibold tracking-wider uppercase mb-2">
            <span>03 //</span>
            <span>Ferramentas & Tecnologias</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink tracking-tight">
            Stack Tecnológica
          </h2>
        </div>
        <p className="text-sm font-mono text-ink-muted max-w-md">
          Competências técnicas selecionadas com foco em confiabilidade,
          manutenibilidade e alta escala.
        </p>
      </div>

      {/* 3-Column Structured Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coluna 01: Backend */}
        <div className="p-8 rounded-2xl hairline bg-white flex flex-col justify-between hover:border-line-dark transition-editorial group">
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 hairline-b">
              <span className="font-mono text-xs font-bold text-accent">
                01. CORE
              </span>
              <div className="w-8 h-8 rounded-full bg-canvas-soft hairline flex items-center justify-center text-ink group-hover:text-accent transition-colors">
                <Server className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-ink mb-2">
              Backend & APIs
            </h3>
            <p className="text-xs text-ink-muted mb-6 leading-relaxed">
              Domínio de microsserviços, isolamento multi-tenant, segurança
              transacional e arquiteturas limpas em Java.
            </p>

            <ul className="space-y-3 font-mono text-xs text-ink">
              <li className="flex items-center justify-between py-1.5 hairline-b">
                <span>Java 21 (LTS)</span>
                <span className="text-ink-faint text-[11px]">Modern Features</span>
              </li>
              <li className="flex items-center justify-between py-1.5 hairline-b">
                <span>Spring Boot 3</span>
                <span className="text-ink-faint text-[11px]">MVC & REST</span>
              </li>
              <li className="flex items-center justify-between py-1.5 hairline-b">
                <span>Spring Security</span>
                <span className="text-ink-faint text-[11px]">JWT & Filters</span>
              </li>
              <li className="flex items-center justify-between py-1.5 hairline-b">
                <span>Hibernate & JPA</span>
                <span className="text-ink-faint text-[11px]">Dynamic Filters</span>
              </li>
              <li className="flex items-center justify-between py-1.5 hairline-b">
                <span>JUnit 5 & Mockito</span>
                <span className="text-ink-faint text-[11px]">Unit & Integration</span>
              </li>
              <li className="flex items-center justify-between py-1.5">
                <span>Flyway Migrations</span>
                <span className="text-ink-faint text-[11px]">Schema Versioning</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Coluna 02: Frontend */}
        <div className="p-8 rounded-2xl hairline bg-white flex flex-col justify-between hover:border-line-dark transition-editorial group">
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 hairline-b">
              <span className="font-mono text-xs font-bold text-accent">
                02. INTERFACE
              </span>
              <div className="w-8 h-8 rounded-full bg-canvas-soft hairline flex items-center justify-center text-ink group-hover:text-accent transition-colors">
                <Layout className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-ink mb-2">
              Frontend & Web
            </h3>
            <p className="text-xs text-ink-muted mb-6 leading-relaxed">
              Interfaces reativas de alta fidelidade, Server Components, tipagem
              estrita e sistemas de design modernos.
            </p>

            <ul className="space-y-3 font-mono text-xs text-ink">
              <li className="flex items-center justify-between py-1.5 hairline-b">
                <span>Next.js 15 & 16</span>
                <span className="text-ink-faint text-[11px]">App Router & RSC</span>
              </li>
              <li className="flex items-center justify-between py-1.5 hairline-b">
                <span>React 19</span>
                <span className="text-ink-faint text-[11px]">Hooks & Actions</span>
              </li>
              <li className="flex items-center justify-between py-1.5 hairline-b">
                <span>TypeScript</span>
                <span className="text-ink-faint text-[11px]">Zero 'any'</span>
              </li>
              <li className="flex items-center justify-between py-1.5 hairline-b">
                <span>Tailwind CSS</span>
                <span className="text-ink-faint text-[11px]">Utility-First</span>
              </li>
              <li className="flex items-center justify-between py-1.5 hairline-b">
                <span>HTML5 & Semantic UI</span>
                <span className="text-ink-faint text-[11px]">Accessibility</span>
              </li>
              <li className="flex items-center justify-between py-1.5">
                <span>State & Form Handlers</span>
                <span className="text-ink-faint text-[11px]">Zod / Hook Form</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Coluna 03: Dados & Infra */}
        <div className="p-8 rounded-2xl hairline bg-white flex flex-col justify-between hover:border-line-dark transition-editorial group">
          <div>
            <div className="flex items-center justify-between mb-6 pb-4 hairline-b">
              <span className="font-mono text-xs font-bold text-accent">
                03. INFRA
              </span>
              <div className="w-8 h-8 rounded-full bg-canvas-soft hairline flex items-center justify-center text-ink group-hover:text-accent transition-colors">
                <Database className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-ink mb-2">
              Dados & Infraestrutura
            </h3>
            <p className="text-xs text-ink-muted mb-6 leading-relaxed">
              Modelagem relacional normalizada, migrações seguras,
              conteinerização e automação de deploy contínuo.
            </p>

            <ul className="space-y-3 font-mono text-xs text-ink">
              <li className="flex items-center justify-between py-1.5 hairline-b">
                <span>PostgreSQL</span>
                <span className="text-ink-faint text-[11px]">Relational / ACID</span>
              </li>
              <li className="flex items-center justify-between py-1.5 hairline-b">
                <span>Prisma ORM</span>
                <span className="text-ink-faint text-[11px]">Schema & Types</span>
              </li>
              <li className="flex items-center justify-between py-1.5 hairline-b">
                <span>Docker & Compose</span>
                <span className="text-ink-faint text-[11px]">Containers</span>
              </li>
              <li className="flex items-center justify-between py-1.5 hairline-b">
                <span>Git & GitHub Actions</span>
                <span className="text-ink-faint text-[11px]">CI / CD</span>
              </li>
              <li className="flex items-center justify-between py-1.5 hairline-b">
                <span>Render & Vercel</span>
                <span className="text-ink-faint text-[11px]">Cloud Deploy</span>
              </li>
              <li className="flex items-center justify-between py-1.5">
                <span>OpenAI API</span>
                <span className="text-ink-faint text-[11px]">LLM Integration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
