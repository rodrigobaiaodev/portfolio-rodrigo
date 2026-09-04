'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
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
    <section id="about" className="relative py-28 px-4 sm:px-8 bg-[#030712] border-t border-white/5 overflow-hidden">
      
      {/* Luzes de fundo (Glow Effects) */}
      <div className="absolute w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px] -top-20 -left-20 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[130px] bottom-0 right-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* LAYOUT EM 2 COLUNAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* COLUNA ESQUERDA: Textos, Bio & Métricas (7 Colunas) */}
          <div className="lg:col-span-7 flex flex-col">
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 font-mono text-xs text-orange-400 tracking-widest uppercase mb-4 font-semibold"
            >
              <Terminal className="w-3.5 h-3.5" />
              {t('label')}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-[1.15] mb-6"
            >
              {t('title')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
                {t('titleHighlight')}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8"
            >
              {t('bio')}
            </motion.p>

            {/* GRID DE MÉTRICAS / PROVA SOCIAL */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md mb-8"
            >
              <div className="p-3 text-center sm:text-left border-r border-slate-800/80">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-orange-400 block">
                  {t('metrics.stat1')}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 font-medium leading-tight block mt-1">
                  {t('metrics.label1')}
                </span>
              </div>

              <div className="p-3 text-center sm:text-left border-r border-slate-800/80">
                <span className="font-mono text-xl sm:text-2xl font-bold text-amber-400 block">
                  {t('metrics.stat2')}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 font-medium leading-tight block mt-1">
                  {t('metrics.label2')}
                </span>
              </div>

              <div className="p-3 text-center sm:text-left">
                <span className="font-mono text-xl sm:text-2xl font-bold text-slate-200 block">
                  {t('metrics.stat3')}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 font-medium leading-tight block mt-1">
                  {t('metrics.label3')}
                </span>
              </div>
            </motion.div>

          </div>

          {/* COLUNA DIREITA: Card Interativo de Desenvolvedor (5 Colunas) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 relative group"
          >
            {/* Efeito Glow atrás do Card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Cabeçalho do Card Estilo Janela de IDE */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-xs text-slate-500">developer_profile.ts</span>
              </div>

              {/* Status Badge Pulsante */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {t('card.status')}
              </div>

              {/* Detalhes do Perfil */}
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-100">Rodrigo Baião</h3>
                  <p className="text-sm font-mono text-orange-400">{t('card.role')}</p>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span>{t('card.location')}</span>
                </div>
              </div>

              {/* Stack Principal Visual */}
              <div className="pt-4 border-t border-slate-800/80">
                <p className="font-mono text-[11px] text-slate-500 uppercase tracking-wider mb-3">
                  {t('card.stackTitle')}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60 flex items-center gap-2 text-xs text-slate-300 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> React / Next.js
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60 flex items-center gap-2 text-xs text-slate-300 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> Node.js / REST
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60 flex items-center gap-2 text-xs text-slate-300 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> PostgreSQL / SQL
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60 flex items-center gap-2 text-xs text-slate-300 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> Docker & Cloud
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* LISTA DE TECNOLOGIAS E BADGES */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4 font-semibold">
            {t('stackLabel')}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {STACK.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="group flex items-center gap-2 font-mono text-xs px-3.5 py-2 rounded-xl border border-slate-800 text-slate-300 bg-slate-900/60 hover:border-orange-500/50 hover:bg-slate-900 hover:text-orange-400 transition-all duration-300 cursor-default"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-500 group-hover:text-orange-400 transition-colors" />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* TIMELINE DE EVOLUÇÃO */}
        <div className="pt-8 border-t border-slate-800/60">
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
                  <span className="font-mono text-xs font-bold text-orange-400">
                    {item.year}
                  </span>
                  <span
                    className={`h-2.5 w-2.5 rounded-full transition-transform group-hover:scale-125 ${
                      i === journey.length - 1
                        ? 'bg-amber-400 border border-orange-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]'
                        : 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]'
                    }`}
                  />
                  {i < journey.length - 1 && (
                    <span className="hidden md:block flex-1 h-px bg-slate-800 group-hover:bg-slate-700 transition-colors" />
                  )}
                </div>
                <span className="text-xs text-slate-400 leading-snug">
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