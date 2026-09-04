'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calendar, Link2, ChevronDown, Rocket, BookOpen, Code2, Database, Cloud, Shield } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Education() {
  const [isEstacioExpanded, setIsEstacioExpanded] = useState(false);
  const t = useTranslations('education');

  const techSubjects = [
    { icon: Code2, name: t('estacio.subjects.sub1') },
    { icon: Database, name: t('estacio.subjects.sub2') },
    { icon: Cloud, name: t('estacio.subjects.sub3') },
    { icon: Shield, name: t('estacio.subjects.sub4') },
    { icon: BookOpen, name: t('estacio.subjects.sub5') },
    { icon: Rocket, name: t('estacio.subjects.sub6') },
  ];

  return (
    <section id="formacao" className="relative py-24 bg-black text-white font-sans border-t border-white/5 overflow-hidden">
      
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3"
          >
            <GraduationCap className="w-8 h-8 text-emerald-500" />
            {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">{t('titleHighlight')}</span>
          </motion.h2>
          <p className="text-zinc-400">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          
          {/* CARD 1: ESTÁCIO */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-zinc-950/50 backdrop-blur-md border border-zinc-800 hover:border-blue-500/30 p-6 sm:p-8 rounded-3xl transition-all duration-300"
          >
            <div className="absolute top-0 left-10 w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              
              <div className="w-16 h-16 shrink-0 bg-blue-950/40 rounded-2xl border border-blue-500/20 flex items-center justify-center p-2 shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
                <BookOpen className="w-8 h-8 text-blue-400" />
              </div>
              
              <div className="flex-1 w-full">
                <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
                  {t('estacio.title')} <span className="text-sm font-normal text-zinc-500">{t('estacio.type')}</span>
                </h3>
                <h4 className="text-blue-400 font-medium mb-4 flex items-center gap-2">
                  Estácio de Sá
                </h4>
                
                <div className="flex items-center gap-4 text-sm text-zinc-400 mb-4 font-mono">
                  <span className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                    <Calendar className="w-4 h-4 text-blue-400" /> {t('estacio.date')}
                  </span>
                  <span className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                    {t('estacio.hours')}
                  </span>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {t('estacio.description')}
                </p>

                <button 
                  onClick={() => setIsEstacioExpanded(!isEstacioExpanded)}
                  className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors bg-blue-950/20 px-4 py-2 rounded-lg border border-blue-900/30 w-full sm:w-auto justify-center"
                >
                  {isEstacioExpanded ? t('estacio.hideCurriculum') : t('estacio.showCurriculum')}
                  <motion.div animate={{ rotate: isEstacioExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isEstacioExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 mt-6 border-t border-zinc-800/50">
                        <h5 className="text-xs font-mono text-zinc-500 mb-4 uppercase tracking-wider">{t('estacio.curriculumTitle')}</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {techSubjects.map((subject, idx) => {
                            const Icon = subject.icon;
                            return (
                              <div key={idx} className="flex items-center gap-3 bg-zinc-900/50 p-3 rounded-xl border border-zinc-800/50">
                                <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-400">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <span className="text-sm text-zinc-300 font-medium">{subject.name}</span>
                              </div>
                            );
                          })}
                        </div>
                        <p className="text-xs text-zinc-600 mt-4 italic">{t('estacio.disclaimer')}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: ROCKETSEAT */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-zinc-950/50 backdrop-blur-md border border-zinc-800 hover:border-purple-500/30 p-6 sm:p-8 rounded-3xl transition-all duration-300"
          >
            <div className="absolute top-0 left-10 w-32 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              
              <div className="w-16 h-16 shrink-0 bg-[#8257E5]/10 rounded-2xl border border-[#8257E5]/30 flex items-center justify-center p-2 shadow-[0_0_20px_rgba(130,87,229,0.1)] group-hover:shadow-[0_0_20px_rgba(130,87,229,0.3)] transition-all">
                <Rocket className="w-8 h-8 text-[#8257E5]" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white tracking-tight mb-1">{t('rocketseat.title')}</h3>
                <h4 className="text-[#8257E5] font-medium mb-4">Rocketseat</h4>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400 mb-4 font-mono">
                  <span className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                    <Calendar className="w-4 h-4 text-[#8257E5]" /> {t('rocketseat.status')}
                  </span>
                  <a 
                    href="https://app.rocketseat.com.br/jornada/full-stack/visao-geral" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-1.5 bg-purple-950/20 text-purple-400 hover:text-purple-300 px-3 py-1 rounded-full border border-purple-900/30 transition-all hover:bg-purple-900/40"
                  >
                    <Link2 className="w-4 h-4" /> {t('rocketseat.link')}
                  </a>
                </div>
                
                <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                  {t('rocketseat.description')}
                </p>
                
                <div className="flex gap-2 flex-wrap">
                  {['React & Next.js', 'Node.js & APIs', 'TypeScript', 'Prisma ORM', 'Fastify'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:border-purple-500/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}