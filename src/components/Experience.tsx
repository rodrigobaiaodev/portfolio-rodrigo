'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Experience() {
  const t = useTranslations('experience');

  const bullets = [
    t('bullets.b1'),
    t('bullets.b2'),
    t('bullets.b3'),
    t('bullets.b4'),
  ];

  return (
    <section id="experiencia" className="relative py-28 bg-black text-white font-sans border-t border-white/5 overflow-hidden">
      
      {/* Background Pontilhado / Grid idêntico aos outros componentes */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      
      {/* Sutil brilho esmeralda de fundo combinando com o tema */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header da Seção padronizado */}
        <div className="mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t('label')}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex flex-col md:flex-row md:items-center gap-2"
          >
            {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500">{t('titleHighlight')}</span>
          </motion.h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl">
            {t('subtitle')}
          </p>
        </div>

        {/* Timeline espaçada e organizada */}
        <div className="relative border-l border-zinc-800 ml-3 pl-6 sm:pl-8 space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Indicador na linha com glow esmeralda */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-emerald-400 border-4 border-black shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>

            <div className="bg-zinc-950/60 backdrop-blur-xl border border-zinc-800/80 group-hover:border-emerald-500/30 p-6 sm:p-10 rounded-3xl transition-all duration-300 shadow-xl shadow-black/40 relative overflow-hidden">
              <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">{t('role')}</h3>
                  <h4 className="text-emerald-400 font-semibold text-base">{t('company')}</h4>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 bg-zinc-900/80 px-3.5 py-1.5 rounded-full border border-zinc-800">
                    <Calendar className="w-4 h-4 text-emerald-400" /> {t('date')}
                  </span>
                  <span className="flex items-center gap-1.5 bg-zinc-900/80 px-3.5 py-1.5 rounded-full border border-zinc-800">
                    <MapPin className="w-4 h-4 text-emerald-400" /> {t('location')}
                  </span>
                </div>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                {t('description')}
              </p>

              {/* Lista de tópicos com espaçamento respiro e visual limpo */}
              <div className="space-y-3">
                {bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-zinc-300 bg-zinc-900/40 p-3.5 rounded-2xl border border-zinc-800/60 hover:border-emerald-500/20 transition-all">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}