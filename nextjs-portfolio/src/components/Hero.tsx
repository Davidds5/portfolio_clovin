"use client";

import { useState } from "react";
import { ArrowDown, Copy, Check, ExternalLink } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("davis.clovins@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="py-20 sm:py-28 hairline-b">
      {/* Eyebrow Tag */}
      <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-canvas-soft hairline mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="font-mono text-xs tracking-wider uppercase text-ink-muted font-medium">
          Software Developer // Fullstack & APIs
        </span>
      </div>

      {/* Main Editorial Title */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-ink leading-[1.08] mb-8 max-w-5xl">
        Desenvolvendo sistemas robustos,{" "}
        <span className="font-serif italic font-normal text-ink/90">
          arquiteturas escaláveis
        </span>{" "}
        e produtos digitais orientados a código limpo.
      </h1>

      {/* High-Impact Subtitle */}
      <p className="text-lg sm:text-xl text-ink-muted leading-relaxed font-sans max-w-3xl mb-12">
        Engenheiro de software focado no desenvolvimento full-stack ponta a ponta:
        da solidez de microsserviços e isolamento multi-tenant seguro em{" "}
        <strong className="text-ink font-semibold">Java 21 e Spring Boot 3</strong>{" "}
        até interfaces modernas, performáticas e tipadas com{" "}
        <strong className="text-ink font-semibold">
          Next.js, React e TypeScript
        </strong>
        .
      </p>

      {/* Hero Actions */}
      <div className="flex flex-wrap items-center gap-4 mb-16">
        <a
          href="#projetos"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-ink text-white hover:bg-accent text-sm font-mono font-medium transition-editorial shadow-sm"
        >
          <span>Explorar Projetos Selecionados</span>
          <ArrowDown className="w-4 h-4" />
        </a>

        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg hairline bg-white hover:bg-canvas-soft text-sm font-mono font-medium text-ink transition-editorial group"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700">E-mail Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-ink-muted group-hover:text-accent transition-colors" />
              <span>Copiar E-mail</span>
            </>
          )}
        </button>

        <a
          href="/curriculo_david_pt.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-mono text-ink-muted hover:text-ink transition-colors"
        >
          <span>Ver Currículo Completo</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Editorial Concept Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 hairline-t font-mono text-xs text-ink-muted">
        <div className="flex flex-col gap-1">
          <span className="text-ink-faint uppercase text-[10px] tracking-wider">
            01. Especialidade
          </span>
          <strong className="text-ink text-sm font-medium font-sans">
            Multi-Tenant & APIs
          </strong>
          <span className="text-ink-faint text-[11px]">
            Isolamento dinâmico em banco
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-ink-faint uppercase text-[10px] tracking-wider">
            02. Stack Core
          </span>
          <strong className="text-ink text-sm font-medium font-sans">
            Java 21 + Next.js
          </strong>
          <span className="text-ink-faint text-[11px]">
            Spring Boot 3 & TypeScript
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-ink-faint uppercase text-[10px] tracking-wider">
            03. Metodologia
          </span>
          <strong className="text-ink text-sm font-medium font-sans">
            Código, Produto & UX
          </strong>
          <span className="text-ink-faint text-[11px]">
            Estudo diário em docs oficiais
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-ink-faint uppercase text-[10px] tracking-wider">
            04. Comunidade
          </span>
          <strong className="text-ink text-sm font-medium font-sans">
            Clovin DEV
          </strong>
          <span className="text-ink-faint text-[11px]">
            Live coding no YouTube & TikTok
          </span>
        </div>
      </div>
    </section>
  );
}
