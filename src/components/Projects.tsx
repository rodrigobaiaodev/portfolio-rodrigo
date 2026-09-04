'use client';

import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Projects() {
  const t = useTranslations('projects');

  // Mapeia as chaves e vincula a imagem estática diretamente no código
  const projectsData = [
    { key: 'project1', image: '/images/deazons.png' },
    { key: 'project2', image: '/images/flixpick.png' },
    { key: 'project3', image: '/images/convert.png' },
  ];

  return (
    <section id="projetos" className="relative py-24 bg-black text-white font-sans border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-zinc-500 font-mono text-sm mb-4 block">/ {t('sectionLabel')}</span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold max-w-xl leading-tight"
            >
              {t('title')} <span className="text-zinc-500">{t('titleHighlight')}</span>
            </motion.h2>
          </div>
          
          <div className="text-left md:text-right">
            <p className="text-zinc-400 text-sm mb-3">{t('subtitle')}</p>
            <a 
              href="https://github.com/rodrigobaiaodev" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg> 
              {t('githubLink')}
            </a>
          </div>
        </div>

        {/* Grid de Cards de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map(({ key, image }, index) => (
            <motion.div 
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-zinc-950 border border-zinc-800 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              {/* Barra superior estilo aba de navegador */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs font-mono text-zinc-500 flex items-center gap-1.5 truncate max-w-[180px]">
                  <FolderGit2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{t(`items.${key}.url`)}</span>
                </div>
                <div className="w-6"></div>
              </div>

              {/* Print/Imagem do Projeto */}
              <div className="relative w-full aspect-video bg-zinc-900 overflow-hidden">
                <Image 
                  src={image} 
                  alt={t(`items.${key}.title`)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Informações e Descrição */}
              <div className="flex flex-col flex-1 p-6">
                <div className="mb-6 flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                      {t(`items.${key}.tag`)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{t(`items.${key}.title`)}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                    {t(`items.${key}.description`)}
                  </p>
                </div>
                
                {/* Botão de Acesso */}
                <a 
                  href={t(`items.${key}.liveLink`)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-xl border border-zinc-800 transition-colors"
                >
                  {t('viewProject')}
                  <ExternalLink className="w-4 h-4 text-zinc-400" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}