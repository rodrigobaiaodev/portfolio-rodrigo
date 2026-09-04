'use client';

import { useState, useEffect } from 'react';
import { 
  User, 
  Layers, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code2, 
  Send,
  Terminal
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// Ícone SVG Bandeira do Brasil
function BrasilFlag() {
  return (
    <svg className="w-4 h-3 rounded-sm overflow-hidden shrink-0" viewBox="0 0 640 480">
      <path fill="#009b3a" d="M0 0h640v480H0z"/>
      <path fill="#fedf00" d="M320 48L592 240 320 432 48 240z"/>
      <circle fill="#002776" cx="320" cy="240" r="110"/>
      <path fill="#fff" d="M198 220c30-18 102-30 244 10-5 22-20 42-20 42s-90-22-210-2c-12-18-14-35-14-50z" opacity="0.8"/>
    </svg>
  );
}

// Ícone SVG Bandeira dos EUA
function USAFlag() {
  return (
    <svg className="w-4 h-3 rounded-sm overflow-hidden shrink-0" viewBox="0 0 640 480">
      <path fill="#bd3d44" d="M0 0h640v480H0z"/>
      <path stroke="#fff" strokeWidth="37" d="M0 55.5h640M0 129h640M0 203h640M0 277h640M0 351h640M0 424.5h640"/>
      <path fill="#192f5d" d="M0 0h256v258.5H0z"/>
    </svg>
  );
}

export default function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState('about');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'about', label: t('sobre'), icon: User, href: '#about' },
    { id: 'skills', label: 'Skills', icon: Layers, href: '#skills' },
    { id: 'experiencia', label: 'Experiência', icon: Briefcase, href: '#experiencia' },
    { id: 'formacao', label: 'Formação', icon: GraduationCap, href: '#formacao' },
    { id: 'projetos', label: t('projetos'), icon: Code2, href: '#projetos' },
    { id: 'certificados', label: 'Certificados', icon: Award, href: '#certificados' },
    { id: 'contato', label: t('contato'), icon: Send, href: '#contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const changeLanguage = (newLocale: string) => {
    if (newLocale === locale) return;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 px-3 sm:px-8 transition-all duration-300">
      <div 
        className={`w-full max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-5 py-2.5 rounded-2xl transition-all duration-300 border ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-2xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.9)]' 
            : 'bg-black/40 backdrop-blur-md border-white/5'
        }`}
      >
        
        {/* LOGO */}
        <a 
          href="#hero" 
          onClick={(e) => handleScrollTo(e, '#hero')} 
          className="flex items-center gap-2 shrink-0 group"
        >
          <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-mono text-xs sm:text-sm tracking-tight font-bold text-white group-hover:text-emerald-300 transition-colors">
            Rodrigo<span className="hidden sm:inline"> Baião</span><span className="text-emerald-400 font-extrabold">.dev</span>
          </span>
        </a>

        {/* NAVEGAÇÃO FLUTUANTE (Com rolagem horizontal suave no mobile) */}
        <nav className="flex items-center gap-1 bg-zinc-950/90 p-1.5 rounded-full border border-zinc-800/80 shadow-inner backdrop-blur-xl overflow-x-auto max-w-[55vw] sm:max-w-none no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <div 
                key={item.id} 
                className="relative flex flex-col items-center shrink-0"
                onMouseEnter={() => setHoveredTab(item.id)}
                onMouseLeave={() => setHoveredTab(null)}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`relative p-2 sm:p-2.5 rounded-full transition-colors duration-200 flex items-center justify-center ${
                    isActive ? 'text-emerald-400' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {/* Pílula Deslizante de Ativo */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-emerald-950/60 border border-emerald-500/40 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                </a>

                {/* Tooltip Tecnológico (Apenas em telas maiores para não bugar no mobile) */}
                <AnimatePresence>
                  {hoveredTab === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 5, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="hidden sm:block absolute top-12 z-50 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono font-medium tracking-wide text-zinc-200 shadow-2xl whitespace-nowrap pointer-events-none"
                    >
                      {item.label}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* SELETOR DE IDIOMA */}
        <div className="flex items-center bg-zinc-950/90 p-1 rounded-full border border-zinc-800/80 gap-1 shrink-0 backdrop-blur-md">
          <button
            onClick={() => changeLanguage('pt')}
            title="Português"
            className={`px-2 py-1 rounded-full flex items-center gap-1 transition-all ${
              locale === 'pt'
                ? 'bg-zinc-800 border border-zinc-700 text-white shadow-[0_0_10px_rgba(255,255,255,0.08)] scale-105'
                : 'opacity-40 hover:opacity-100 hover:bg-zinc-900'
            }`}
          >
            <BrasilFlag />
            <span className="hidden sm:inline text-[10px] font-mono font-bold text-zinc-200">PT</span>
          </button>
          <button
            onClick={() => changeLanguage('en')}
            title="English"
            className={`px-2 py-1 rounded-full flex items-center gap-1 transition-all ${
              locale === 'en'
                ? 'bg-zinc-800 border border-zinc-700 text-white shadow-[0_0_10px_rgba(255,255,255,0.08)] scale-105'
                : 'opacity-40 hover:opacity-100 hover:bg-zinc-900'
            }`}
          >
            <USAFlag />
            <span className="hidden sm:inline text-[10px] font-mono font-bold text-zinc-200">EN</span>
          </button>
        </div>

      </div>
    </header>
  );
}