'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { 
  Code2, 
  CheckCircle2, 
  MapPin, 
  Terminal, 
  Cpu, 
  Database, 
  Server, 
  Layout 
} from 'lucide-react';

const STACK = [
  { name: 'TypeScript', category: 'Language', icon: Code2 },
  { name: 'React', category: 'Frontend', icon: Layout },
  { name: 'Next.js', category: 'Framework', icon: Layout },
  { name: 'Node.js', category: 'Backend', icon: Server },
  { name: 'PostgreSQL', category: 'Database', icon: Database },
  { name: 'Docker', category: 'DevOps', icon: Cpu },
  { name: 'Tailwind CSS', category: 'Styling', icon: Layout },
];

export default function About() {
  const t = useTranslations('about');
  const journey = t.raw('journey') as { year: string; label: string }[];

  return (
    <section id="about" className="relative py-28 px-4 sm:px-8 bg-black border-t border-zinc-900 text-white overflow-hidden">
      
      {/* Luzes de fundo sutis (Linear/Vercel Ambient Glow) */}
      <div className="absolute w-[600px] h-[300px] bg-zinc-800/10 rounded-full blur-[140px] -top-20 left-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[150px] bottom-0 right-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* LAYOUT EM 2 COLUNAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* COLUNA ESQUERDA: Textos, Bio & Métricas (7 Colunas) */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Label estilo Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 tracking-widest uppercase mb-4 font-semibold"
            >
              <Terminal className="w-3.5 h-3.5 text-zinc-400" />
              {t('label')}
            </motion.div>

            {/* Título com Gradiente Neon/White */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6"
            >
              {t('title')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
                {t('titleHighlight')}
              </span>
            </motion.h2>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-8"
            >
              {t('bio')}
            </motion.p>

            {/* GRID DE MÉTRICAS / PROVA SOCIAL */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-900 backdrop-blur-md mb-8"
            >
              <div className="p-3 text-center sm:text-left border-r border-zinc-900">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white block">
                  {t('metrics.stat1')}
                </span>
                <span className="text-[11px] sm:text-xs text-zinc-500 font-medium leading-tight block mt-1">
                  {t('metrics.label1')}
                </span>
              </div>

              <div className="p-3 text-center sm:text-left border-r border-zinc-900">
                <span className="font-mono text-xl sm:text-2xl font-bold text-zinc-200 block">
                  {t('metrics.stat2')}
                </span>
                <span className="text-[11px] sm:text-xs text-zinc-500 font-medium leading-tight block mt-1">
                  {t('metrics.label2')}
                </span>
              </div>

              <div className="p-3 text-center sm:text-left">
                <span className="font-mono text-xl sm:text-2xl font-bold text-zinc-300 block">
                  {t('metrics.stat3')}
                </span>
                <span className="text-[11px] sm:text-xs text-zinc-500 font-medium leading-tight block mt-1">
                  {t('metrics.label3')}
                </span>
              </div>
            </motion.div>

          </div>

          {/* COLUNA DIREITA: Card Interativo com Foto de Perfil (5 Colunas) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 relative group"
          >
            {/* Efeito Glow atrás do Card */}
            <div className="absolute -inset-0.5 bg-gradient-to-b from-zinc-700/30 to-zinc-900/10 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative rounded-2xl bg-zinc-950/90 border border-zinc-800/80 p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Cabeçalho do Card Estilo macOS Dinâmico */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-zinc-900">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600 shadow-[0_0_8px_rgba(244,63,94,0.4)] transition-transform group-hover:scale-105" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600 shadow-[0_0_8px_rgba(245,158,11,0.4)] transition-transform group-hover:scale-105" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600 shadow-[0_0_8px_rgba(16,185,129,0.4)] transition-transform group-hover:scale-105" />
                </div>
                <span className="font-mono text-xs text-zinc-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  developer_profile.ts
                </span>
              </div>

              {/* Status Badge Pulsante */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {t('card.status')}
              </div>

              {/* Detalhes do Perfil com Foto Maior e Estilizada */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 text-center sm:text-left">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.25)] shrink-0 group/img">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-0 group-hover/img:opacity-100 transition-opacity" />
                  <Image 
                    src="/avatar.png" 
                    alt="Rodrigo Baião" 
                    fill 
                    className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white tracking-tight">Rodrigo Baião</h3>
                  <p className="text-sm font-mono text-emerald-400/90 font-medium mt-0.5">{t('card.role')}</p>
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-zinc-500 font-mono mt-2">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{t('card.location')}</span>
                  </div>
                </div>
              </div>

              {/* Stack Principal Visual */}
              <div className="pt-4 border-t border-zinc-900">
                <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider mb-3">
                  {t('card.stackTitle')}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/60 flex items-center gap-2 text-xs text-zinc-300 font-mono hover:border-zinc-700 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" /> React / Next.js & TypeScript
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/60 flex items-center gap-2 text-xs text-zinc-300 font-mono hover:border-zinc-700 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" /> Node.js / REST
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/60 flex items-center gap-2 text-xs text-zinc-300 font-mono hover:border-zinc-700 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" /> PostgreSQL / SQL
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/60 flex items-center gap-2 text-xs text-zinc-300 font-mono hover:border-zinc-700 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" /> Docker & Cloud
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* LISTA DE TECNOLOGIAS E BADGES INTERATIVAS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4 font-semibold">
            {t('stackLabel')}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {STACK.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-2 font-mono text-xs px-3.5 py-2 rounded-xl border border-zinc-800 text-zinc-300 bg-zinc-950 hover:border-zinc-600 hover:bg-zinc-900 hover:text-white transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <Icon className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-200 transition-colors" />
                  <span>{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* TIMELINE DE EVOLUÇÃO */}
        <div className="pt-8 border-t border-zinc-900">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {journey.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex flex-col gap-2 relative group"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-zinc-300">
                    {item.year}
                  </span>
                  <span
                    className={`h-2.5 w-2.5 rounded-full transition-all group-hover:scale-125 ${
                      i === journey.length - 1
                        ? 'bg-white border border-zinc-400 shadow-[0_0_10px_rgba(255,255,255,0.8)]'
                        : 'bg-zinc-700 group-hover:bg-zinc-400'
                    }`}
                  />
                  {i < journey.length - 1 && (
                    <span className="hidden md:block flex-1 h-px bg-zinc-900 group-hover:bg-zinc-800 transition-colors" />
                  )}
                </div>
                <span className="text-xs text-zinc-400 leading-snug">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}