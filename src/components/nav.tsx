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

// Ícone SVG Bandeira do Brasil
function BrasilFlag() {
  return (
    <svg className="w-5 h-3.5 rounded-sm overflow-hidden" viewBox="0 0 640 480">
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
    <svg className="w-5 h-3.5 rounded-sm overflow-hidden" viewBox="0 0 640 480">
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

  const navItems = [
    { id: 'about', label: t('sobre'), icon: User, href: '#about' },
    { id: 'skills', label: 'Skills', icon: Layers, href: '#skills' },
    { id: 'experiencia', label: 'Experiência', icon: Briefcase, href: '#experiencia' },
    { id: 'formacao', label: 'Formação', icon: GraduationCap, href: '#formacao' },
    { id: 'certificados', label: 'Certificados', icon: Award, href: '#certificados' },
    { id: 'projetos', label: t('projetos'), icon: Code2, href: '#projetos' },
    { id: 'contato', label: t('contato'), icon: Send, href: '#contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
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
    // Substitui o prefixo de idioma da URL atual (/pt -> /en ou vice-versa)
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/90 backdrop-blur-xl border-b border-white/5 py-3 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        
        {/* LOGO */}
        <a href="#hero" onClick={(e) => handleScrollTo(e, '#hero')} className="flex items-center gap-2 shrink-0 group">
          <div className="p-1.5 rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30 text-orange-400 group-hover:scale-105 transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-mono text-sm sm:text-base tracking-tight font-bold text-slate-100">
            Rodrigo Baião<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">.dev</span>
          </span>
        </a>

        {/* NAVEGAÇÃO COM TOOLTIPS TRADUZIDOS */}
        <nav className="flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-full border border-slate-800 shadow-2xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            const isHovered = hoveredTab === item.id;

            return (
              <div 
                key={item.id} 
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHoveredTab(item.id)}
                onMouseLeave={() => setHoveredTab(null)}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`p-2.5 rounded-full transition-all duration-300 relative flex items-center justify-center ${
                    isActive 
                      ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-400 border border-orange-500/40 shadow-[0_0_15px_rgba(249,115,22,0.3)]' 
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </a>

                {isHovered && (
                  <div className="absolute top-12 z-50 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-[10px] font-mono font-semibold tracking-wider text-slate-200 shadow-2xl whitespace-nowrap pointer-events-none">
                    {item.label}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* SELETOR DE IDIOMA COM BANDEIRAS BR / USA */}
        <div className="flex items-center bg-slate-900/90 p-1.5 rounded-full border border-slate-800 gap-1 shrink-0">
          <button
            onClick={() => changeLanguage('pt')}
            title="Português"
            className={`px-2.5 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${
              locale === 'pt'
                ? 'bg-gradient-to-r from-orange-500/30 to-amber-500/30 border border-orange-500/50 shadow-md scale-105'
                : 'opacity-50 hover:opacity-100'
            }`}
          >
            <BrasilFlag />
          </button>
          <button
            onClick={() => changeLanguage('en')}
            title="English"
            className={`px-2.5 py-1.5 rounded-full flex items-center gap-1.5 transition-all ${
              locale === 'en'
                ? 'bg-gradient-to-r from-orange-500/30 to-amber-500/30 border border-orange-500/50 shadow-md scale-105'
                : 'opacity-50 hover:opacity-100'
            }`}
          >
            <USAFlag />
          </button>
        </div>

      </div>
    </header>
  );
}