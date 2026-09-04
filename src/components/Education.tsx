'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calendar, Award, ExternalLink, ChevronDown, Rocket, BookOpen, Code2, Database, Cloud, Shield, Cpu, Terminal, Layers } from 'lucide-react';

export default function Education() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [isEstacioExpanded, setIsEstacioExpanded] = useState(false);
  const [isRocketseatExpanded, setIsRocketseatExpanded] = useState(false);

  // Detecta automaticamente mudanças no idioma caso o site altere o atributo lang da tag html ou body
  useEffect(() => {
    const checkLang = () => {
      const htmlLang = document.documentElement.lang;
      if (htmlLang === 'en' || htmlLang === 'pt') {
        setLang(htmlLang);
      }
    };

    checkLang();
    
    // Observer para capturar mudanças dinâmicas no atributo lang da página
    const observer = new MutationObserver(checkLang);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

    return () => observer.disconnect();
  }, []);

  const content = {
    pt: {
      tag: 'FORMAÇÃO & ESPECIALIZAÇÕES',
      titleMain: 'Educação que molda ',
      titleGradient: 'Engenharia de ponta.',
      subtitle: 'Base acadêmica sólida e especializações focadas no ecossistema de alta performance.',
      estacio: {
        title: 'Engenharia de Software',
        degree: 'Bacharelado',
        institution: 'Estácio de Sá',
        status: 'Ensino Superior',
        period: 'Jan 2024 - Dez 2027',
        hours: '3.620 Horas Totais',
        desc: 'Graduação completa com forte embasamento teórico e prático nos fundamentos da computação moderna, arquitetura de sistemas distribuídos, modelagem avançada e ciclo de vida completo do software.',
        btnOpen: 'Ver Grade Curricular',
        btnClose: 'Ocultar Grade Curricular',
        sectionTitle: 'Matrizes Curriculares & Disciplinas Chave',
        badgePill: '8 pilares essenciais',
        footerNote: 'Inclui laboratórios práticos de desenvolvimento, gestão ágil (Scrum/Kanban) e fundamentos matemáticos aplicados.'
      },
      rocketseat: {
        title: 'Jornada Full-Stack Advanced',
        institution: 'Rocketseat',
        badgeOfficial: 'Grade Oficial',
        desc: 'Formação técnica intensiva e focada no mercado de desenvolvimento moderno. Especialização profunda no ecossistema Full-Stack, arquitetura orientada a componentes e construção de APIs altamente escaláveis.',
        btnOpen: 'Ver Stacks & Módulos Detalhados',
        btnClose: 'Ocultar Stacks & Módulos',
        sectionTitle: 'Tecnologias & Domínios Práticos',
        badgePill: 'Foco prático'
      }
    },
    en: {
      tag: 'EDUCATION & SPECIALIZATIONS',
      titleMain: 'Education that shapes ',
      titleGradient: 'Cutting-edge engineering.',
      subtitle: 'Solid academic foundation and specializations focused on high-performance ecosystems.',
      estacio: {
        title: 'Software Engineering',
        degree: "Bachelor's Degree",
        institution: 'Estácio de Sá',
        status: 'Higher Education',
        period: 'Jan 2024 - Dec 2027',
        hours: '3,620 Total Hours',
        desc: 'Complete degree with strong theoretical and practical foundations in modern computing, distributed systems architecture, advanced modeling, and the complete software lifecycle.',
        btnOpen: 'View Curriculum',
        btnClose: 'Hide Curriculum',
        sectionTitle: 'Curriculum & Key Subjects',
        badgePill: '8 essential pillars',
        footerNote: 'Includes practical development labs, agile management (Scrum/Kanban), and applied mathematical foundations.'
      },
      rocketseat: {
        title: 'Full-Stack Journey Advanced',
        institution: 'Rocketseat',
        badgeOfficial: 'Official Curriculum',
        desc: 'Intensive technical training focused on the modern development market. Deep specialization in the Full-Stack ecosystem, component-driven architecture, and highly scalable APIs.',
        btnOpen: 'View Detailed Stacks & Modules',
        btnClose: 'Hide Stacks & Modules',
        sectionTitle: 'Technologies & Practical Domains',
        badgePill: 'Practical focus'
      }
    }
  };

  const t = content[lang];

  const estacioSubjects = [
    { icon: Code2, name: lang === 'en' ? 'Advanced Data Structures & Algorithms' : 'Estrutura de Dados & Algoritmos Avançados', desc: lang === 'en' ? 'Complexity analysis, trees, graphs, and sorting/searching algorithms.' : 'Análise de complexidade, árvores, grafos e algoritmos de ordenação e busca.' },
    { icon: Database, name: lang === 'en' ? 'Databases & UML Modeling' : 'Banco de Dados & Modelagem UML', desc: lang === 'en' ? 'Relational/NoSQL modeling, normalization, and structural diagrams.' : 'Modelagem relacional e não-relacional, normalização e diagramas estruturais.' },
    { icon: Cloud, name: lang === 'en' ? 'Cloud Computing & DevOps' : 'Computação em Nuvem & DevOps', desc: lang === 'en' ? 'Infrastructure as code, Docker containers, and CI/CD pipelines.' : 'Infraestrutura como código, containers Docker e pipelines CI/CD.' },
    { icon: Shield, name: lang === 'en' ? 'Cybersecurity & Secure Software' : 'Segurança Cibernética & Software Seguro', desc: lang === 'en' ? 'OWASP Top 10 practices, cryptography, and OAuth/JWT authentication.' : 'Práticas de OWASP Top 10, criptografia e autenticação OAuth/JWT.' },
    { icon: BookOpen, name: lang === 'en' ? 'Systems Architecture & Requirements' : 'Arquitetura de Sistemas & Requisitos', desc: lang === 'en' ? 'Microservices, monoliths, and technical specifications.' : 'Microserviços, monolitos e engenharia de requisitos técnicos.' },
    { icon: Cpu, name: lang === 'en' ? 'Operating Systems & Networks' : 'Sistemas Operacionais & Redes', desc: lang === 'en' ? 'Process management, TCP/IP protocols, and HTTP/HTTPS.' : 'Gerenciamento de processos, protocolos TCP/IP e HTTP/HTTPS.' },
  ];

  const rocketseatTechs = [
    { icon: Code2, name: 'React.js & Next.js (App Router)', desc: lang === 'en' ? 'SSR, SSG, Server Actions, and high-performance interfaces.' : 'SSR, SSG, Server Actions e interfaces reativas de alta performance.' },
    { icon: Database, name: 'Node.js, TypeScript & Fastify', desc: lang === 'en' ? 'Strict typing, scalable RESTful APIs, and microservices.' : 'Tipagem estrita, criação de APIs RESTful escaláveis e microsserviços.' },
    { icon: Cloud, name: 'Prisma ORM & Docker', desc: lang === 'en' ? 'Database management, safe migrations, and environment containerization.' : 'Gerenciamento de banco de dados, migrações seguras e conteinerização de ambientes.' },
    { icon: Shield, name: lang === 'en' ? 'Automated Testing (Vitest/Supertest)' : 'Testes Automatizados (Vitest/Supertest)', desc: lang === 'en' ? 'Unit and integration tests for backend and frontend stability.' : 'Testes unitários e de integração para estabilidade de ponta a ponta.' },
  ];

  return (
    <section id="formacao" className="relative py-28 bg-black text-white font-sans border-t border-white/5 overflow-hidden">
      
      {/* Background Pontilhado / Grid idêntico ao restante do site */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      
      {/* Sutil brilho esmeralda de fundo combinando com o tema */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header da Seção */}
        <div className="mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex flex-col md:flex-row md:items-center gap-2"
          >
            {t.titleMain} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500">{t.titleGradient}</span>
          </motion.h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          
          {/* CARD 1: ESTÁCIO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-zinc-950/60 backdrop-blur-xl border border-zinc-800/80 hover:border-emerald-500/30 p-6 sm:p-10 rounded-3xl transition-all duration-300 shadow-xl shadow-black/40"
          >
            <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-zinc-900/90 rounded-2xl border border-zinc-800 flex items-center justify-center p-3 shadow-inner group-hover:border-emerald-500/30 transition-all">
                <BookOpen className="w-8 h-8 sm:w-9 sm:h-9 text-emerald-400" />
              </div>
              
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl sm:text-2xl font-bold text-white tracking-tight">
                    {t.estacio.title} <span className="text-sm font-normal text-zinc-500 block sm:inline">({t.estacio.degree})</span>
                  </h3>
                  <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
                    {t.estacio.status}
                  </span>
                </div>
                
                <h4 className="text-emerald-400 font-semibold text-base mb-5">
                  {t.estacio.institution}
                </h4>
                
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-400 mb-6 font-mono">
                  <span className="flex items-center gap-1.5 bg-zinc-900/80 px-3.5 py-1.5 rounded-full border border-zinc-800">
                    <Calendar className="w-4 h-4 text-emerald-400" /> {t.estacio.period}
                  </span>
                  <span className="flex items-center gap-1.5 bg-zinc-900/80 px-3.5 py-1.5 rounded-full border border-zinc-800">
                    <Award className="w-4 h-4 text-cyan-400" /> {t.estacio.hours}
                  </span>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                  {t.estacio.desc}
                </p>

                <button 
                  onClick={() => setIsEstacioExpanded(!isEstacioExpanded)}
                  className="flex items-center justify-between sm:justify-start gap-3 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors bg-zinc-900/80 hover:bg-zinc-900 px-5 py-3 rounded-xl border border-zinc-800 w-full sm:w-auto cursor-pointer group/btn"
                >
                  <span>{isEstacioExpanded ? t.estacio.btnClose : t.estacio.btnOpen}</span>
                  <motion.div animate={{ rotate: isEstacioExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-4 h-4 text-emerald-400 group-hover/btn:translate-y-0.5 transition-transform" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isEstacioExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 mt-8 border-t border-zinc-800/80">
                        <div className="flex items-center justify-between mb-6">
                          <h5 className="text-xs font-mono text-zinc-400 uppercase tracking-widest">{t.estacio.sectionTitle}</h5>
                          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/30 px-2.5 py-1 rounded-md border border-emerald-500/20">{t.estacio.badgePill}</span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {estacioSubjects.map((sub, idx) => {
                            const IconComponent = sub.icon;
                            return (
                              <div key={idx} className="bg-zinc-900/50 hover:bg-zinc-900 p-4 rounded-2xl border border-zinc-800/80 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
                                <div className="flex items-start gap-3 mb-2">
                                  <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400 mt-0.5">
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <h6 className="text-sm font-semibold text-white">{sub.name}</h6>
                                  </div>
                                </div>
                                <p className="text-xs text-zinc-400 pl-9 leading-relaxed">{sub.desc}</p>
                              </div>
                            );
                          })}
                        </div>
                        <div className="mt-5 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800 text-xs text-zinc-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>{t.estacio.footerNote}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: ROCKETSEAT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-zinc-950/60 backdrop-blur-xl border border-zinc-800/80 hover:border-emerald-500/30 p-6 sm:p-10 rounded-3xl transition-all duration-300 shadow-xl shadow-black/40"
          >
            <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-zinc-900/90 rounded-2xl border border-zinc-800 flex items-center justify-center p-3 shadow-inner group-hover:border-emerald-500/30 transition-all">
                <Rocket className="w-8 h-8 sm:w-9 sm:h-9 text-emerald-400" />
              </div>
              
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl sm:text-2xl font-bold text-white tracking-tight">
                    {t.rocketseat.title}
                  </h3>
                  <a 
                    href="https://app.rocketseat.com.br/jornada/full-stack/visao-geral" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-zinc-900/80 hover:bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-mono transition-all hover:border-emerald-500/30"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> {t.rocketseat.badgeOfficial}
                  </a>
                </div>
                
                <h4 className="text-emerald-400 font-semibold text-base mb-5">
                  {t.rocketseat.institution}
                </h4>
                
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                  {t.rocketseat.desc}
                </p>

                <button 
                  onClick={() => setIsRocketseatExpanded(!isRocketseatExpanded)}
                  className="flex items-center justify-between sm:justify-start gap-3 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors bg-zinc-900/80 hover:bg-zinc-900 px-5 py-3 rounded-xl border border-zinc-800 w-full sm:w-auto cursor-pointer group/btn"
                >
                  <span>{isRocketseatExpanded ? t.rocketseat.btnClose : t.rocketseat.btnOpen}</span>
                  <motion.div animate={{ rotate: isRocketseatExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-4 h-4 text-emerald-400 group-hover/btn:translate-y-0.5 transition-transform" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isRocketseatExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 mt-8 border-t border-zinc-800/80">
                        <div className="flex items-center justify-between mb-6">
                          <h5 className="text-xs font-mono text-zinc-400 uppercase tracking-widest">{t.rocketseat.sectionTitle}</h5>
                          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/30 px-2.5 py-1 rounded-md border border-emerald-500/20">{t.rocketseat.badgePill}</span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {rocketseatTechs.map((tech, idx) => {
                            const IconComponent = tech.icon;
                            return (
                              <div key={idx} className="bg-zinc-900/50 hover:bg-zinc-900 p-4 rounded-2xl border border-zinc-800/80 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
                                <div className="flex items-start gap-3 mb-2">
                                  <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400 mt-0.5">
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <h6 className="text-sm font-semibold text-white">{tech.name}</h6>
                                  </div>
                                </div>
                                <p className="text-xs text-zinc-400 pl-9 leading-relaxed">{tech.desc}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}