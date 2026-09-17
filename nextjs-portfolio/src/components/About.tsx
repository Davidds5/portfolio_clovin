import Image from "next/image";
import { ArrowUpRight, Cpu, Radio } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-24 hairline-b">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <div className="flex items-center gap-3 text-accent font-mono text-xs font-semibold tracking-wider uppercase mb-2">
            <span>01 //</span>
            <span>Engenharia & Trajetória</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink tracking-tight">
            Sobre Mim
          </h2>
        </div>
        <p className="text-sm font-mono text-ink-muted max-w-md">
          Construindo software de ponta a ponta com rigor técnico, simplicidade
          arquitetural e entrega contínua.
        </p>
      </div>

      {/* Two-Column Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Visual Column & Clovin DEV Card (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="relative bg-canvas-soft hairline rounded-xl overflow-hidden p-3 group">
            <div className="aspect-[4/5] rounded-lg overflow-hidden relative bg-line/50">
              <Image
                src="/profile.png"
                alt="David Silva"
                fill
                className="object-cover object-center filter grayscale contrast-[1.05] group-hover:grayscale-0 transition-editorial duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="font-mono text-white text-xs">
                  David Silva · São Paulo, Brasil
                </span>
              </div>
            </div>
            <div className="mt-3 px-1 py-1 flex items-center justify-between text-xs font-mono text-ink-muted">
              <span>Software Developer</span>
              <span className="text-accent font-semibold">SP // BR</span>
            </div>
          </div>

          {/* Clovin DEV Highlight */}
          <div className="p-6 rounded-xl bg-canvas-soft hairline border-l-4 border-l-accent flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-accent tracking-wider uppercase flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5" />
                Clovin DEV Project
              </span>
              <span className="text-[11px] font-mono text-ink-faint">
                YouTube & TikTok
              </span>
            </div>
            <h4 className="font-sans font-bold text-base text-ink">
              Construção em Público & Live Coding
            </h4>
            <p className="text-xs text-ink-muted leading-relaxed">
              Crio conteúdo técnico avançado e realizo sessões diárias de live
              coding transmitindo a rotina real de resolução de problemas,
              desenvolvimento de arquiteturas e implementação de código limpo.
            </p>
            <div className="flex items-center gap-4 pt-2 font-mono text-xs">
              <a
                href="https://youtube.com/@clovindev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-accent font-medium inline-flex items-center gap-1 transition-colors"
              >
                <span>YouTube</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.tiktok.com/@clovindev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-accent font-medium inline-flex items-center gap-1 transition-colors"
              >
                <span>TikTok</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Narrative Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-base text-ink-muted leading-relaxed font-sans">
          <p className="text-lg text-ink font-medium leading-relaxed">
            Não vim de berço na tecnologia e nunca busquei atalhos. Minha trajetória como desenvolvedor é construída na base da disciplina diária: conciliando a rotina de trabalho em{" "}
            <strong className="text-ink font-semibold">escala 7x1</strong>, treinos físicos e estudos focados logo pela manhã. Aprendi a programar mergulhando direto em{" "}
            <strong className="text-ink font-semibold">
              documentações oficiais
            </strong>{" "}
            (Oracle JDK, Spring Framework, Next.js docs e RFCs), sempre movido pela obsessão de entender o que acontece{" "}
            <strong className="text-ink font-semibold">sob o capô</strong> — do gerenciamento de memória e concorrência ao ciclo de renderização no navegador.
          </p>

          <p>
            Escolhi me aprofundar em{" "}
            <strong className="text-ink">Java 21 e Spring Boot 3</strong> pela
            solidez, tipagem estrita e controle transacional que sistemas corporativos críticos exigem. No
            ecossistema frontend, utilizo{" "}
            <strong className="text-ink">Next.js 16, React 19 e TypeScript</strong>{" "}
            para construir interfaces elegantes, reativas e com experiência de usuário de alto padrão.
          </p>

          {/* Deep Technical Case Box */}
          <div className="p-6 my-2 rounded-xl bg-canvas-soft hairline">
            <h4 className="font-mono text-xs uppercase text-ink font-bold tracking-wider mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-accent" />
              Engenharia Aplicada: Isolamento Multi-Tenant
            </h4>
            <p className="text-sm text-ink-muted leading-relaxed">
              No desenvolvimento do <em>BelasUnhas</em>, recusei abordagens frágeis que dependem de cláusulas manuais{" "}
              <code>where tenant_id = ?</code>. Projetei um isolamento dinâmico
              via <strong className="text-ink">TenantContext (ThreadLocal)</strong>{" "}
              orquestrado com interceptores AOP (AspectJ) e filtros nativos no
              Hibernate. Assim, qualquer consulta ao banco tem o
              filtro injetado automaticamente pelo framework, garantindo
              zero vazamento de dados entre clientes por falha humana.
            </p>
          </div>

          <p>
            Sou graduando em{" "}
            <strong className="text-ink">
              Análise e Desenvolvimento de Sistemas (ADS)
            </strong>{" "}
            na Estácio e pratico algoritmos e estruturas de dados de forma contínua.{" "}
            <strong className="text-ink">Aonde quero chegar?</strong> Quero ser o engenheiro de software em quem você confia para colocar arquiteturas críticas em produção — alguém que assume responsabilidade de ponta a ponta, resolve problemas complexos e gera valor real de negócio com código limpo e sustentável.
          </p>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 hairline-t font-mono text-xs">
            <div className="p-4 rounded-lg hairline bg-white">
              <span className="text-accent font-bold block mb-1">01. Rigor</span>
              <strong className="text-ink block font-sans font-semibold text-sm">
                Clean Architecture
              </strong>
              <span className="text-ink-faint text-[11px] mt-1 block">
                Separação de responsabilidades e desacoplamento.
              </span>
            </div>
            <div className="p-4 rounded-lg hairline bg-white">
              <span className="text-accent font-bold block mb-1">
                02. Segurança
              </span>
              <strong className="text-ink block font-sans font-semibold text-sm">
                Tenant Isolation
              </strong>
              <span className="text-ink-faint text-[11px] mt-1 block">
                ThreadLocal, JWT e Hibernate Filters.
              </span>
            </div>
            <div className="p-4 rounded-lg hairline bg-white">
              <span className="text-accent font-bold block mb-1">
                03. Experiência
              </span>
              <strong className="text-ink block font-sans font-semibold text-sm">
                High-Fidelity UI
              </strong>
              <span className="text-ink-faint text-[11px] mt-1 block">
                Next.js, Tailwind CSS e acessibilidade.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
