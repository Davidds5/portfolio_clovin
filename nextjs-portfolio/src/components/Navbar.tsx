"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <>
      {/* Top Status Indicator Bar */}
      <div className="w-full hairline-b bg-canvas-soft/80 backdrop-blur-sm text-xs py-2 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-[11px] text-ink-muted">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              STATUS:{" "}
              <strong className="text-ink font-semibold">
                DISPONÍVEL PARA PROJETOS & VAGAS (CLT / PJ)
              </strong>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 font-mono text-[11px] text-ink-faint">
            <span>LOCAL: SÃO PAULO, BR</span>
            <span>•</span>
            <span>STACK: FULLSTACK & APIS</span>
          </div>
        </div>
      </div>

      {/* Header Sticky */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md hairline-b transition-editorial">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand */}
          <Link href="#" className="group flex items-center gap-3 text-ink no-underline">
            <div className="relative w-10 h-10 rounded-full overflow-hidden hairline group-hover:border-accent transition-colors bg-canvas-soft">
              <Image
                src="/profile.png"
                alt="David Silva"
                fill
                className="object-cover object-top"
                sizes="40px"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-base tracking-tight leading-none group-hover:text-accent transition-colors">
                David Silva
              </span>
              <span className="font-mono text-[11px] text-ink-faint mt-1 tracking-wider uppercase">
                Clovin DEV
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-ink-muted">
            <a href="#sobre" className="hover:text-ink hover:underline underline-offset-8 transition-colors">
              01. Sobre
            </a>
            <a href="#projetos" className="hover:text-ink hover:underline underline-offset-8 transition-colors">
              02. Projetos
            </a>
            <a href="#stack" className="hover:text-ink hover:underline underline-offset-8 transition-colors">
              03. Stack
            </a>
            <a href="#formacao" className="hover:text-ink hover:underline underline-offset-8 transition-colors">
              04. Prática
            </a>
            <a href="#contato" className="hover:text-ink hover:underline underline-offset-8 transition-colors">
              05. Contato
            </a>
          </nav>

          {/* Actions Header */}
          <div className="flex items-center gap-3">
            <a
              href="/curriculo_david_pt.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md hairline hover:bg-canvas-soft text-xs font-mono font-medium text-ink transition-editorial"
            >
              <span>Currículo</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-ink text-white hover:bg-accent text-xs font-mono font-medium transition-editorial shadow-sm"
            >
              <span>Fale Comigo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
