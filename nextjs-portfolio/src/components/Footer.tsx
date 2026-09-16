import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full hairline-t bg-canvas-soft py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-ink-muted">
        <div className="flex items-center gap-3">
          <span className="font-bold text-ink">David Silva</span>
          <span>•</span>
          <span>© 2026 Clovin DEV</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline text-ink-faint">
            Código, Produto & Experiência
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="/curriculo_david_pt.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            Currículo ↗
          </a>
          <a
            href="https://github.com/Davidds5/portfolio_clovin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            Código deste Portfólio ↗
          </a>
          <a href="#" className="text-accent hover:underline flex items-center gap-1">
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
