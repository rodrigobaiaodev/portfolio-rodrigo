'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import TerminalMockup from './TerminalMockup';

export default function Hero() {
  const t = useTranslations('hero');
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const roles = t.raw('roles') as string[];

  // Controles do Mouse para Efeito de Grade Iluminada
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  // Controles do Efeito 3D do Terminal
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Para a grade iluminada de fundo
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    // Para o efeito 3D (valores normalizados entre -0.5 e 0.5)
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    if (!roles || roles.length === 0) return;
    const currentRole = roles[roleIndex % roles.length];
    const typingSpeed = isDeleting ? 30 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.slice(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2500);
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
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col items-center justify-start bg-[#000000] pt-32 pb-16 px-4 sm:px-6 overflow-hidden perspective-[2000px]"
    >
      {/* 1. Grade de Fundo (Dot Pattern) Estática e Sutil */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* 2. Lanterna do Mouse que ilumina a grade e o fundo */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      
      {/* Lanterna Esmeralda mais interna */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 mix-blend-screen"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16,185,129,0.08), transparent 50%)`,
        }}
      />

      {/* 3. Brilho Fixo no Topo (Estilo Vercel/Next) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-300/10 via-emerald-900/5 to-transparent blur-3xl pointer-events-none z-0" />

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl">
        
        {/* Badge Flutuante */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-950/50 border border-slate-800/80 text-xs font-mono text-slate-300 mb-8 shadow-2xl backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-widest uppercase font-semibold">{t('greeting')}</span>
        </motion.div>

        {/* Tipografia de Alto Impacto */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-6xl sm:text-7xl md:text-[6.5rem] font-black tracking-tighter mb-4 leading-[0.95]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 drop-shadow-sm">
            Rodrigo Baião
          </span>
        </motion.h1>

        {/* Subtítulo Tecnológico */}
        <div className="h-12 md:h-16 mb-6 flex items-center justify-center">
          <span className="font-mono text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
            {text}
          </span>
          <span className="w-1 md:w-1.5 h-8 md:h-12 ml-2 bg-emerald-400 animate-pulse shadow-[0_0_15px_#10b981]" />
        </div>

        {/* Pitch / Resumo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          {t('pitch')}
        </motion.p>

        {/* Ações (Botões) Elevadas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-5 justify-center items-center flex-wrap mb-16 w-full"
        >
          <a
            href="#projetos"
            className="group relative px-8 py-3.5 rounded-xl bg-slate-100 text-black font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">{t('ctaProjects')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
          </a>

          <a
            href="#contato"
            className="px-8 py-3.5 rounded-xl border border-slate-800 bg-[#030712]/80 text-slate-300 text-sm font-semibold hover:border-emerald-500/50 hover:bg-emerald-950/20 hover:text-white transition-all duration-300 backdrop-blur-md"
          >
            {t('ctaContact')}
          </a>
        </motion.div>

        {/* Terminal Interativo com Física 3D */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 50 }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="w-full max-w-3xl relative group cursor-crosshair"
        >
          {/* Brilho Aura Atrás do Terminal */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 via-slate-500/10 to-emerald-500/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 group-hover:duration-200 transition duration-1000 -z-10" />
          
          <div 
            className="relative rounded-xl border border-slate-800/80 group-hover:border-emerald-500/40 transition-colors duration-500 bg-[#030712] shadow-2xl"
            style={{ transform: "translateZ(30px)" }} // Dá profundidade ao próprio terminal em relação à sombra
          >
            <TerminalMockup />
          </div>
        </motion.div>

      </div>
    </section>
  );
}