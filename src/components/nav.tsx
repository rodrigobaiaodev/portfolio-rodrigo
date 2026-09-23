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
  Terminal,
  Menu,
  X
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: t('sobre'), icon: User, href: '#about' },
    { id: 'skills', label: 'Skills', icon: Layers, href: '#skills' },
    { id: 'experiencia', label: 'Experiência', icon: Briefcase, href: '#experiencia' },
    { id: 'formacao', label: 'Formação', icon: GraduationCap, href: '#formacao' },
    { id: 'projetos', label: t('projetos'), icon: Code2, href: '#projetos' },
    { id: 'certificados', label: 'Certificados', icon: Award, href: '#certificados' },
    { id: 'contato', label: t('contato'), icon: Send, href: '#contato' },
  ];

  const activeItem = navItems.find((item) => item.id === activeSection) ?? navItems[0];

  // Efeito para restaurar a posição do scroll após trocar o idioma
  useEffect(() => {
    const savedSection = sessionStorage.getItem('scroll_section');
    if (savedSection) {
      setTimeout(() => {
        const element = document.getElementById(savedSection);
        if (element) {
          element.scrollIntoView({ behavior: 'instant' });
        }
        sessionStorage.removeItem('scroll_section');
      }, 100);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Fecha o menu mobile se o usuário rolar a página (evita ficar aberto "flutuando" sobre o conteúdo)
      setMobileMenuOpen(false);

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection(navItems[navItems.length - 1].id);
        return;
      }

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 250;

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
  }, [navItems]);

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
    
    // Só salva a seção se o usuário realmente rolou a página para baixo (fora do Hero)
    if (window.scrollY > 150) {
      sessionStorage.setItem('scroll_section', activeSection);
    } else {
      sessionStorage.removeItem('scroll_section');
    }

    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? 'pt-0 px-0' : 'pt-3 px-3 sm:px-8'
      }`}
    >
      <div 
        className={`relative w-full flex items-center justify-between transition-all duration-300 border ${
          scrolled 
            ? 'max-w-full rounded-none gap-1.5 sm:gap-3 px-3 sm:px-8 py-1.5 border-t-0 border-x-0 bg-black/80 backdrop-blur-2xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.9)]' 
            : 'max-w-6xl mx-auto rounded-2xl gap-2 sm:gap-4 px-3 sm:px-6 py-3 bg-black/40 backdrop-blur-md border-white/5'
        }`}
      >
        
        {/* LOGO */}
        <a 
          href="#hero" 
          onClick={(e) => handleScrollTo(e, '#hero')} 
          className={`flex items-center shrink-0 group relative transition-all duration-300 ${
            scrolled ? 'w-28 sm:w-40 h-7 sm:h-9' : 'w-36 sm:w-52 h-9 sm:h-11'
          }`}
        >
          <img 
            src="/logo.png" 
            alt="Rodrigo Baião.dev"
            className="w-full h-full object-contain object-left group-hover:opacity-90 transition-opacity"
          />
        </a>

        {/* NAVEGAÇÃO — DESKTOP (todos os ícones, pill única) */}
        <nav
          className={`hidden sm:flex items-center gap-1.5 bg-zinc-950/90 rounded-full border border-zinc-800/80 shadow-inner backdrop-blur-xl transition-all duration-300 ${
            scrolled ? 'p-1.5' : 'p-2'
          }`}
        >
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
                  className={`relative rounded-full transition-all duration-300 flex items-center justify-center ${
                    scrolled ? 'p-2 sm:p-2.5' : 'p-2.5 sm:p-3'
                  } ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-zinc-800/90 border border-zinc-600/60 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.12)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className={`relative z-10 transition-all duration-300 ${scrolled ? 'w-4 h-4' : 'w-4.5 h-4.5'}`} />
                </a>

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

        {/* NAVEGAÇÃO — MOBILE (mostra a seção ativa + botão que abre grid com todas) */}
        <button
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-expanded={mobileMenuOpen}
          aria-label="Abrir menu de navegação"
          className={`flex sm:hidden items-center gap-2 min-h-[44px] rounded-full bg-zinc-950/90 border border-zinc-800/80 shadow-inner text-zinc-200 transition-all duration-300 ${
            scrolled ? 'px-3 py-1.5' : 'px-3.5 py-2'
          }`}
        >
          <activeItem.icon className="w-4 h-4 shrink-0" />
          <span className="text-[11px] font-mono font-semibold max-w-[22vw] truncate">
            {activeItem.label}
          </span>
          {mobileMenuOpen ? (
            <X className="w-4 h-4 opacity-60 shrink-0" />
          ) : (
            <Menu className="w-4 h-4 opacity-60 shrink-0" />
          )}
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="sm:hidden absolute left-3 right-3 top-full mt-2 grid grid-cols-4 gap-2 p-3 rounded-2xl bg-zinc-950/95 border border-zinc-800/80 backdrop-blur-xl shadow-2xl"
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      handleScrollTo(e, item.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex flex-col items-center justify-center gap-1.5 min-h-[56px] rounded-xl py-2 text-[10px] font-mono text-center leading-tight transition-colors ${
                      isActive ? 'bg-zinc-800 text-white' : 'text-zinc-400 active:bg-zinc-900'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* SELETOR DE IDIOMA */}
        <div
          className={`flex items-center bg-zinc-950/90 rounded-full border border-zinc-800/80 gap-1 shrink-0 backdrop-blur-md transition-all duration-300 ${
            scrolled ? 'p-1' : 'p-1.5'
          }`}
        >
          <button
            onClick={() => changeLanguage('pt')}
            title="Português"
            className={`min-h-[40px] min-w-[40px] sm:min-h-0 sm:min-w-0 rounded-full flex items-center justify-center gap-1.5 transition-all ${
              scrolled ? 'px-2 py-1' : 'px-2.5 py-1.5'
            } ${
              locale === 'pt'
                ? 'bg-zinc-800 border border-zinc-700 text-white shadow-[0_0_10px_rgba(255,255,255,0.08)] scale-105'
                : 'opacity-40 hover:opacity-100 hover:bg-zinc-900'
            }`}
          >
            <BrasilFlag />
            <span className="hidden sm:inline text-[11px] font-mono font-bold text-zinc-200">PT</span>
          </button>
          <button
            onClick={() => changeLanguage('en')}
            title="English"
            className={`min-h-[40px] min-w-[40px] sm:min-h-0 sm:min-w-0 rounded-full flex items-center justify-center gap-1.5 transition-all ${
              scrolled ? 'px-2 py-1' : 'px-2.5 py-1.5'
            } ${
              locale === 'en'
                ? 'bg-zinc-800 border border-zinc-700 text-white shadow-[0_0_10px_rgba(255,255,255,0.08)] scale-105'
                : 'opacity-40 hover:opacity-100 hover:bg-zinc-900'
            }`}
          >
            <USAFlag />
            <span className="hidden sm:inline text-[11px] font-mono font-bold text-zinc-200">EN</span>
          </button>
        </div>

      </div>
    </header>
  );
}