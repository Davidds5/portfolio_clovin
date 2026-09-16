import { BookOpen, Code, GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="formacao" className="py-24 hairline-b">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <div className="flex items-center gap-3 text-accent font-mono text-xs font-semibold tracking-wider uppercase mb-2">
            <span>04 //</span>
            <span>Evolução & Fundamentos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-ink tracking-tight">
            Formação & Prática
          </h2>
        </div>
        <p className="text-sm font-mono text-ink-muted max-w-md">
          Compromisso diário com a base da ciência da computação e engenharia de
          software sólida.
        </p>
      </div>

      {/* 3 Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Formação Acadêmica */}
        <div className="p-8 rounded-2xl hairline bg-canvas-soft flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block mb-3">
              01. Graduação
            </span>
            <h3 className="text-xl font-serif font-bold text-ink mb-3">
              Análise e Desenvolvimento de Sistemas
            </h3>
            <p className="text-xs font-mono text-ink-faint mb-4">
              Universidade Estácio de Sá · Em andamento
            </p>
            <p className="text-sm text-ink-muted leading-relaxed font-sans">
              Foco nas disciplinas fundamentais de engenharia: estruturas de
              dados, arquitetura de computadores, governança de TI, modelagem de
              banco de dados e sistemas operacionais.
            </p>
          </div>
          <div className="mt-8 pt-4 hairline-t flex items-center gap-2 font-mono text-xs text-ink-muted">
            <GraduationCap className="w-4 h-4 text-accent" />
            <span>Ensino Superior em Tecnologia</span>
          </div>
        </div>

        {/* Prática de Algoritmos (LeetCode) */}
        <div className="p-8 rounded-2xl hairline bg-canvas-soft flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block mb-3">
              02. Resolução de Algoritmos
            </span>
            <h3 className="text-xl font-serif font-bold text-ink mb-3">
              Prática Ativa no LeetCode
            </h3>
            <p className="text-xs font-mono text-ink-faint mb-4">
              Resolução Diária de Problemas
            </p>
            <p className="text-sm text-ink-muted leading-relaxed font-sans">
              Treinamento consistente focado em estruturas essenciais: Arrays,
              Two Pointers, Sliding Window, Árvores Binárias, Hash Maps e análise
              formal de complexidade temporal e espacial (
              <strong className="text-ink">Big-O</strong>).
            </p>
          </div>
          <div className="mt-8 pt-4 hairline-t flex items-center gap-2 font-mono text-xs text-ink-muted">
            <Code className="w-4 h-4 text-accent" />
            <span>Eficiência & Raciocínio Lógico</span>
          </div>
        </div>

        {/* Guias & Roadmap.sh */}
        <div className="p-8 rounded-2xl hairline bg-canvas-soft flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block mb-3">
              03. Estudo Metodológico
            </span>
            <h3 className="text-xl font-serif font-bold text-ink mb-3">
              Roadmap.sh & Docs Oficiais
            </h3>
            <p className="text-xs font-mono text-ink-faint mb-4">
              Leitura Direta das Fontes
            </p>
            <p className="text-sm text-ink-muted leading-relaxed font-sans">
              Aprofundamento guiado pelas trilhas de Backend, Java Developer e
              Software Architecture do{" "}
              <a
                href="https://roadmap.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline hover:text-accent font-medium"
              >
                roadmap.sh
              </a>
              , complementado pela leitura direta das documentações oficiais e
              RFCs.
            </p>
          </div>
          <div className="mt-8 pt-4 hairline-t flex items-center gap-2 font-mono text-xs text-ink-muted">
            <BookOpen className="w-4 h-4 text-accent" />
            <span>Conhecimento de Primeiro Princípio</span>
          </div>
        </div>
      </div>
    </section>
  );
}
