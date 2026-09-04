'use client';

import { ArrowUp } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-black/60 backdrop-blur-xl mt-20 pt-12 pb-8 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Lado Esquerdo: Logo (Igual ao Cabeçalho) e Status */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center shrink-0 group relative w-36 sm:w-48 h-9 sm:h-10"
          >
            <img 
              src="/logo.png" 
              alt="Rodrigo Baião.dev"
              className="w-full h-full object-contain object-left md:object-left group-hover:opacity-90 transition-opacity"
            />
          </a>
          <p className="text-xs text-neutral-500 font-mono text-center md:text-left">
            {t('role')}
          </p>
        </div>

        {/* Centro: Indicador de Disponibilidade (Cinza Metálico / Neutro) */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700/60 text-zinc-300 text-xs font-mono shadow-inner">
          <span className="w-2 h-2 rounded-full bg-zinc-400 animate-pulse" />
          <span>{t('availability')}</span>
        </div>

        {/* Lado Direito: Voltar ao Topo e Direitos */}
        <div className="flex items-center gap-4">
          <p className="text-xs text-neutral-600 font-mono">
            © {new Date().getFullYear()} — {t('rights')}
          </p>
          <button
            onClick={scrollToTop}
            title={t('backToTop')}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-zinc-500/40 transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}