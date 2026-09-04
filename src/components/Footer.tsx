'use client';

import { Terminal, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-black/60 backdrop-blur-xl mt-20 pt-12 pb-8 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Lado Esquerdo: Logo e Status */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-mono text-sm font-bold text-white">
              Rodrigo Baião<span className="text-emerald-400">.dev</span>
            </span>
          </div>
          <p className="text-xs text-neutral-500 font-mono text-center md:text-left">
            Desenvolvedor Full-Stack & Estudante de Engenharia de Software.
          </p>
        </div>

        {/* Centro: Indicador de Disponibilidade */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Disponível para novos projetos</span>
        </div>

        {/* Lado Direito: Voltar ao Topo e Direitos */}
        <div className="flex items-center gap-4">
          <p className="text-xs text-neutral-600 font-mono">
            © {new Date().getFullYear()} — Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            title="Voltar ao topo"
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-emerald-500/40 transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}