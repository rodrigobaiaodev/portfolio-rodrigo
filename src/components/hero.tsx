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
      className="relative min-h-screen flex flex-col items-center justify-start bg-black pt-32 pb-16 px-4 sm:px-6 overflow-hidden perspective-[2000px] font-sans"
    >
      {/* 1. Grade de Fundo (Dot Pattern) Estática e Sutil */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.10]"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* 2. Lanterna do Mouse que ilumina a grade e o fundo (Apenas Branco/Prata) */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.04), transparent 40%)`,
        }}
      />

      {/* 3. Brilho Fixo no Topo (Monocromático, sem Verde/Azul) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.05] via-white/[0.02] to-transparent blur-3xl pointer-events-none z-0" />

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl mt-8">
        
        {/* Badge Flutuante (Minimalista) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-8 backdrop-blur-md"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-neutral-300"></span>
          </span>
          <span className="tracking-wide">{t('greeting')}</span>
        </motion.div>

        {/* Tipografia de Alto Impacto (Estilo AscendAPI) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col items-center mb-6"
        >
          {/* Nome em Branco Sólido */}
          <h1 className="text-5xl sm:text-7xl md:text-[6rem] font-bold tracking-tighter leading-none text-white">
            Rodrigo Baião
          </h1>
          
          {/* Cargo Dinâmico em Cinza Escuro Sólido (como o "for Developers") */}
          <div className="flex items-center justify-center mt-1 sm:mt-2 h-12 sm:h-16 md:h-20">
            <span className="text-4xl sm:text-6xl md:text-[5rem] font-bold tracking-tighter leading-none text-[#4A4A4A]">
              {text}
            </span>
            {/* Cursor Monocromático */}
            <span className="w-1 md:w-1.5 h-10 md:h-16 ml-2 bg-[#4A4A4A] animate-pulse" />
          </div>
        </motion.div>

        {/* Pitch / Resumo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal tracking-wide"
        >
          {t('pitch')}
        </motion.p>

        {/* Ações (Botões) Estilo Apple/Linear */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center items-center flex-wrap mb-20 w-full"
        >
          <a
            href="#projetos"
            className="group relative px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-all duration-300"
          >
            <span>{t('ctaProjects')}</span>
          </a>

          <a
            href="#contato"
            className="px-6 py-2.5 md:px-8 md:py-3 rounded-full border border-white/10 bg-black text-neutral-300 text-sm font-medium hover:bg-white/5 hover:text-white transition-all duration-300"
          >
            {t('ctaContact')}
          </a>
        </motion.div>

        {/* Terminal Interativo com Física 3D (Sem verde) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 50 }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="w-full max-w-3xl relative group cursor-crosshair"
        >
          {/* Brilho Aura Atrás do Terminal (Cinza/Prata) */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 via-transparent to-white/10 rounded-2xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-1000 -z-10" />
          
          <div 
            className="relative rounded-xl border border-white/10 group-hover:border-white/20 transition-colors duration-500 bg-black shadow-2xl overflow-hidden"
            style={{ transform: "translateZ(30px)" }}
          >
            <TerminalMockup />
          </div>
        </motion.div>

      </div>
    </section>
  );
}