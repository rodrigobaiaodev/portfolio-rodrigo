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
    <section id="experiencia" className="relative py-24 bg-black text-white font-sans border-t border-white/5 overflow-hidden">
      
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3"
          >
            <Briefcase className="w-8 h-8 text-cyan-400" />
            {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{t('titleHighlight')}</span>
          </motion.h2>
          <p className="text-zinc-400">{t('subtitle')}</p>
        </div>

        <div className="relative border-l border-zinc-800 ml-3 pl-6 sm:pl-8 space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-black shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>

            <div className="bg-zinc-950/50 backdrop-blur-md border border-zinc-800 group-hover:border-cyan-500/30 p-6 sm:p-8 rounded-3xl transition-all duration-300">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{t('role')}</h3>
                  <h4 className="text-cyan-400 font-medium text-base">{t('company')}</h4>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" /> {t('date')}
                  </span>
                  <span className="flex items-center gap-1 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {t('location')}
                  </span>
                </div>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                {t('description')}
              </p>

              <div className="space-y-2.5">
                {bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-1" />
                    <span>{bullet}</span>
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