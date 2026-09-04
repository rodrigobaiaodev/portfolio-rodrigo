'use client';

import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {useTranslations} from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  const roles = t.raw('roles') as string[];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -top-40 -left-20" />

      <div className="relative text-center px-6 max-w-2xl">
        <motion.p
          initial={{opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="font-mono text-sm text-accent tracking-widest uppercase mb-4"
        >
          {t('greeting')}
        </motion.p>

        <motion.h1
          initial={{opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.1}}
          className="text-4xl md:text-6xl font-bold text-text mb-4"
        >
          {t('name')}
        </motion.h1>

        <div className="h-8 mb-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{opacity: 0, y: 8}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -8}}
              transition={{duration: 0.35}}
              className="font-mono text-lg text-accent-2"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.3}}
          className="text-text-muted mb-10"
        >
          {t('pitch')}
        </motion.p>

        <motion.div
          initial={{opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.4}}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a href="#projetos" className="px-6 py-3 rounded-lg bg-accent text-bg font-semibold hover:opacity-90 transition-opacity">
            {t('ctaProjects')}
          </a>
          <a href="#contato" className="px-6 py-3 rounded-lg border border-border text-text hover:border-accent hover:text-accent transition-colors">
            {t('ctaContact')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}