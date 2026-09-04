'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { TerminalMockup } from './TerminalMockup';

export default function Hero() {
  const t = useTranslations('hero');
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Puxa as roles traduzidas do pt.json / en.json
  const roles = t.raw('roles') as string[];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    if (!roles || roles.length === 0) return;
    const currentRole = roles[roleIndex % roles.length];
    const typingSpeed = isDeleting ? 30 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.slice(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setText(currentRole.slice(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <section 
      id="hero" 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-start bg-[#030712] pt-28 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      <div 
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(249, 115, 22, 0.07), transparent 80%)`,
        }}
      />

      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px] -top-32 left-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative text-center max-w-4xl w-full z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-orange-500/30 text-xs font-mono text-orange-400 mb-6 shadow-[0_0_15px_rgba(249,115,22,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          {t('greeting')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-2"
        >
          {t('name')}
        </motion.h1>

        <div className="h-10 mb-4 flex items-center justify-center">
          <span className="font-mono text-xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
            {text}
          </span>
          <span className="w-0.5 h-7 ml-1 bg-orange-400 animate-pulse" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed"
        >
          {t('pitch')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 justify-center items-center flex-wrap mb-10 w-full"
        >
          <a
            href="#projetos"
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(249,115,22,0.35)] hover:shadow-[0_0_35px_rgba(249,115,22,0.55)] hover:scale-105 transition-all duration-300"
          >
            {t('ctaProjects')}
          </a>
          <a
            href="#contato"
            className="px-7 py-3 rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 text-sm font-semibold hover:border-slate-600 hover:text-white transition-all duration-300"
          >
            {t('ctaContact')}
          </a>
        </motion.div>

        <div className="w-full max-w-3xl">
          <TerminalMockup />
        </div>

      </div>
    </section>
  );
}