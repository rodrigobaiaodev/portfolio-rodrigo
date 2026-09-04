'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FolderGit2, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Projects() {
  const t = useTranslations('projects');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projectsData = [
    { 
      key: 'project1', 
      image: '/images/deazons.png',
      github: 'https://github.com/rodrigobaiaodev/Deazons',
      techs: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript']
    },
    { 
      key: 'project2', 
      image: '/images/flixpick.png',
      github: 'https://github.com/rodrigobaiaodev/flixpick',
      techs: ['React', 'API TMDB', 'Tailwind CSS']
    },
    { 
      key: 'project3', 
      image: '/images/convert-currency.png',
      github: 'https://github.com/rodrigobaiaodev/convert-template-main',
      techs: ['Next.js', 'API de Câmbio', 'Tailwind CSS']
    },
  ];

  const activeProj = projectsData.find(p => p.key === selectedProject);

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

              {/* Print/Imagem do Projeto (Clicável para abrir o Modal) */}
              <div 
                onClick={() => setSelectedProject(key)}
                className="relative w-full aspect-video bg-zinc-900 overflow-hidden cursor-pointer group/img"
              >
                <Image 
                  src={image} 
                  alt={t(`items.${key}.title`)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-xs font-mono text-emerald-400 bg-emerald-950/20 backdrop-blur-[2px]">
                  {t('clickDetails')}
                </div>
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
                <button 
                  onClick={() => setSelectedProject(key)}
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-xl border border-zinc-800 transition-colors cursor-pointer"
                >
                  {t('viewProject')}
                  <ExternalLink className="w-4 h-4 text-zinc-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* MODAL / POP-UP DE DETALHES */}
      <AnimatePresence>
        {selectedProject && activeProj && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Topo do Modal / Janela */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/80">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-xs font-mono text-zinc-400">{t(`items.${selectedProject}.url`)}</span>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Corpo com Scroll */}
              <div className="overflow-y-auto p-6 space-y-6">
                {/* Imagem Ampliada */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-800">
                  <Image 
                    src={activeProj.image} 
                    alt={t(`items.${selectedProject}.title`)}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Textos */}
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full inline-block mb-3">
                    {t(`items.${selectedProject}.tag`)}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">{t(`items.${selectedProject}.title`)}</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {t(`items.${selectedProject}.description`)}
                  </p>
                </div>

                {/* Tecnologias Utilizadas */}
                <div>
                  <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">{t('technologiesLabel')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProj.techs.map((tech) => (
                      <span key={tech} className="text-xs font-mono px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botões de Ação no Rodapé do Modal */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-800">
                  <a 
                    href={activeProj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-xl border border-zinc-800 transition-colors"
                  >
                    <FolderGit2 className="w-4 h-4 text-zinc-400" />
                    {t('viewGithub')}
                  </a>
                  <a 
                    href={t(`items.${selectedProject}.liveLink`)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-xl transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    {t('viewDemo')}
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}