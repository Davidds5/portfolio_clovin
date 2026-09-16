"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  Video,
  Youtube,
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("davis.clovins@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3200);
  };

  return (
    <section id="contato" className="py-24 relative">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 text-accent font-mono text-xs font-semibold tracking-wider uppercase mb-2">
          <span>05 //</span>
          <span>Contato & Conexão</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-ink tracking-tight mb-4">
          Vamos construir algo <span className="italic font-normal">sólido juntos?</span>
        </h2>
        <p className="text-base sm:text-lg text-ink-muted max-w-2xl font-sans">
          Estou aberto para conversar sobre posições como desenvolvedor de
          software, projetos desafiadores ou troca de ideias sobre arquitetura e
          tecnologia.
        </p>
      </div>

      {/* Contact Interactive Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Copy Email Card (7 cols) */}
        <div className="lg:col-span-7 p-8 sm:p-12 rounded-2xl hairline bg-white flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs uppercase text-ink-faint block mb-2">
              Canal Direto de Comunicação
            </span>
            <h3 className="text-2xl sm:text-3xl font-mono font-bold text-ink tracking-tight mb-4 select-all break-all">
              davis.clovins@gmail.com
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed font-sans mb-8">
              Sinta-se à vontade para enviar um e-mail sobre propostas
              profissionais, feedbacks ou dúvidas. Respondo prontamente.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-ink text-white hover:bg-accent text-xs font-mono font-medium transition-editorial shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>E-mail copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar Endereço de E-mail</span>
                </>
              )}
            </button>
            <a
              href="mailto:davis.clovins@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg hairline hover:bg-canvas-soft text-xs font-mono font-medium text-ink transition-editorial"
            >
              <Mail className="w-4 h-4 text-ink-muted" />
              <span>Abrir no seu E-mail</span>
            </a>
          </div>
        </div>

        {/* Social Networks Grid (5 cols) */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-3">
          {/* GitHub */}
          <a
            href="https://github.com/Davidds5"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl hairline bg-white hover:bg-canvas-soft hover:border-line-dark transition-editorial flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-canvas-soft hairline flex items-center justify-center text-ink group-hover:text-accent transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-sm font-sans font-bold text-ink">
                  GitHub
                </strong>
                <span className="text-xs font-mono text-ink-faint">
                  @Davidds5
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-ink-faint group-hover:text-ink transition-colors" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/david-silva-17b2882bb"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl hairline bg-white hover:bg-canvas-soft hover:border-line-dark transition-editorial flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-canvas-soft hairline flex items-center justify-center text-ink group-hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-sm font-sans font-bold text-ink">
                  LinkedIn
                </strong>
                <span className="text-xs font-mono text-ink-faint">
                  David Silva
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-ink-faint group-hover:text-ink transition-colors" />
          </a>

          {/* YouTube / Clovin DEV */}
          <a
            href="https://youtube.com/@clovindev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl hairline bg-white hover:bg-canvas-soft hover:border-line-dark transition-editorial flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-canvas-soft hairline flex items-center justify-center text-ink group-hover:text-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-sm font-sans font-bold text-ink">
                  YouTube
                </strong>
                <span className="text-xs font-mono text-ink-faint">
                  @clovindev · Live Coding
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-ink-faint group-hover:text-ink transition-colors" />
          </a>

          {/* TikTok / Clovin DEV */}
          <a
            href="https://www.tiktok.com/@clovindev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl hairline bg-white hover:bg-canvas-soft hover:border-line-dark transition-editorial flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-canvas-soft hairline flex items-center justify-center text-ink group-hover:text-accent transition-colors">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <strong className="block text-sm font-sans font-bold text-ink">
                  TikTok
                </strong>
                <span className="text-xs font-mono text-ink-faint">
                  @clovindev
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-ink-faint group-hover:text-ink transition-colors" />
          </a>
        </div>
      </div>

      {/* Floating Toast */}
      {copied && (
        <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl bg-ink text-white font-mono text-xs shadow-2xl border border-line-dark animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>E-mail copiado para a área de transferência!</span>
        </div>
      )}
    </section>
  );
}
