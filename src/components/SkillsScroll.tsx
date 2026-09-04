'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useTranslations } from 'next-intl';

const SKILL_CONFIG = [
  {
    id: '01',
    key: 'step1',
    category: 'BOOT',
    tags: ['VS Code', 'Git', 'Linux / macOS', 'Zsh / Bash'],
    codeSnippet: `// .config/developer-setup.ts
export const devEnvironment = {
  editor: "VS Code / Cursor",
  terminal: "Ghostty / Warp",
  shell: "Zsh + Oh My Zsh",
  theme: "Monochrome Dark",
  status: "Ready to build"
};`,
    stats: { label: 'Produtividade', value: '100%' },
  },
  {
    id: '02',
    key: 'step2',
    category: 'FRONTEND',
    tags: ['Next.js 14/15', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    codeSnippet: `// components/HeroSection.tsx
export function Hero({ title, subtitle }: HeroProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-black text-white flex flex-col justify-center"
    >
      <h1 className="text-6xl font-bold tracking-tighter">{title}</h1>
      <p className="text-neutral-400 mt-4">{subtitle}</p>
    </motion.section>
  );
}`,
    stats: { label: 'Lighthouse Score', value: '99/100' },
  },
  {
    id: '03',
    key: 'step3',
    category: 'BACKEND',
    tags: ['Node.js', 'Express', 'NestJS', 'REST APIs', 'GraphQL'],
    codeSnippet: `// src/controllers/userController.ts
export async function createUser(req: Request, res: Response) {
  const data = UserSchema.parse(req.body);
  const hashedPassword = await hash(data.password, 12);
  
  const user = await prisma.user.create({
    data: { ...data, password: hashedPassword }
  });
  
  return res.status(201).json({ status: "success", data: user });
}`,
    stats: { label: 'Response Time', value: '< 45ms' },
  },
  {
    id: '04',
    key: 'step4',
    category: 'DATABASE',
    tags: ['PostgreSQL', 'Prisma ORM', 'Redis', 'SQL', 'MongoDB'],
    codeSnippet: `// prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Project {
  id        String   @id @default(uuid())
  title     String
  slug      String   @unique
  techs     String[]
  createdAt DateTime @default(now())
}`,
    stats: { label: 'Query Speed', value: '1.2ms' },
  },
  {
    id: '05',
    key: 'step5',
    category: 'DEVOPS',
    tags: ['Docker', 'Docker Compose', 'Microservices', 'Nginx'],
    codeSnippet: `# Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
CMD ["npm", "start"]`,
    stats: { label: 'Container Size', value: '120MB' },
  },
  {
    id: '06',
    key: 'step6',
    category: 'CI/CD',
    tags: ['GitHub Actions', 'Vercel', 'AWS', 'CI/CD Pipelines'],
    codeSnippet: `# .github/workflows/deploy.yml
name: CD Pipeline
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Tests & Deploy
        run: npm test && npm run deploy`,
    stats: { label: 'Pipeline Uptime', value: '99.9%' },
  },
];

export default function SkillsScroll() {
  const t = useTranslations('skills');
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  scrollYProgress.onChange((latest) => {
    // Apenas atualiza via scroll em telas maiores (lg) para evitar travamento no mobile
    if (window.innerWidth >= 1024) {
      const step = Math.min(Math.floor(latest * SKILL_CONFIG.length), SKILL_CONFIG.length - 1);
      setActiveStep(step);
    }
  });

  const steps = SKILL_CONFIG.map((item) => ({
    ...item,
    title: t(`steps.${item.key}.title`),
    subtitle: t(`steps.${item.key}.subtitle`),
    description: t(`steps.${item.key}.description`),
  }));

  const current = steps[activeStep];

  return (
    /* No mobile usa altura automática sem travar; no desktop usa h-[350vh] para o efeito de scroll */
    <section id="skills" ref={containerRef} className="relative lg:h-[350vh] bg-black text-white font-sans py-12 lg:py-0">
      <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between px-4 sm:px-8 lg:px-12 py-8 overflow-hidden max-w-7xl w-full mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="hidden lg:flex items-center justify-between border-b border-white/10 pb-4 w-full">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              / {t('label')}
            </span>
          </div>
          <span className="font-mono text-xs text-neutral-500">
            {t('stagePrefix')} {current.id} {t('of')} 06
          </span>
        </div>

        {/* Cabeçalho mobile simplificado */}
        <div className="lg:hidden flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              / {t('label')}
            </span>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LADO ESQUERDO: Timeline / Menu de Seleção */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-2">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider mb-2">
              {t('specialtiesLabel')}
            </span>
            
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(idx); // Apenas muda o estado instantaneamente sem dar scroll indesejado na tela
                  }}
                  className={`text-left p-3 rounded-xl transition-all duration-300 flex items-center justify-between border ${
                    isActive 
                      ? 'bg-white/10 border-white/20 text-white lg:translate-x-2 shadow-lg' 
                      : 'bg-transparent border-transparent text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-white' : 'text-neutral-600'}`}>
                      {step.id}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold tracking-tight">
                      {step.title}
                    </span>
                  </div>
                  {isActive && (
                    <motion.span layoutId="activeDot" className="h-1.5 w-1.5 rounded-full bg-white" />
                  )}
                </button>
              );
            })}
          </div>

          {/* LADO DIREITO: Notebook */}
          <div className="lg:col-span-8 flex flex-col items-center justify-center">
            <div className="w-full max-w-3xl relative perspective-[1000px]">
              <div className="relative mx-auto bg-[#0a0a0a] rounded-t-2xl border-t border-x border-neutral-700/60 p-2 sm:p-3 shadow-2xl">
                
                {/* Camera / Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-black rounded-b-md flex items-center justify-center z-30">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#111] border border-neutral-800" />
                </div>

                {/* TELA INTERNA */}
                <div className="w-full aspect-[16/10] bg-neutral-950 rounded-lg border border-white/10 overflow-hidden flex flex-col relative shadow-inner">
                  
                  {/* Top Bar */}
                  <div className="h-8 bg-neutral-900 border-b border-white/10 px-3 flex items-center justify-between text-xs font-mono text-neutral-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    </div>
                    <span className="text-[10px] text-neutral-500 tracking-wider">
                      {current.category.toLowerCase()} — workspace
                    </span>
                    <div className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-neutral-400">
                      {current.stats.label}: <strong className="text-white">{current.stats.value}</strong>
                    </div>
                  </div>

                  {/* Conteúdo Dinâmico */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 sm:p-6 flex-1 flex flex-col justify-between overflow-hidden font-mono text-xs sm:text-sm text-left bg-gradient-to-b from-neutral-950 to-black"
                    >
                      <div className="overflow-x-auto">
                        <div className="text-neutral-500 text-[10px] uppercase mb-2 flex items-center gap-2">
                          <span className="text-emerald-400">⚡ active_file:</span> {current.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.ts
                        </div>
                        <pre className="text-neutral-300 leading-relaxed font-mono text-[11px] sm:text-xs">
                          <code>{current.codeSnippet}</code>
                        </pre>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2 items-center justify-between mt-auto">
                        <div className="flex flex-wrap gap-1.5">
                          {current.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-neutral-200 border border-white/10 font-sans font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-[10px] text-neutral-500 font-sans">
                          {current.subtitle}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                </div>
              </div>

              {/* Base do MacBook */}
              <div className="relative bg-gradient-to-b from-neutral-800 to-neutral-900 h-4 sm:h-5 rounded-b-xl border-t border-neutral-700/50 shadow-2xl flex items-center justify-center">
                <div className="w-16 h-1.5 bg-neutral-950 rounded-b-md border-x border-b border-neutral-700/50" />
              </div>

            </div>

            {/* Descrição */}
            <motion.div 
              key={current.id + '-desc'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center max-w-xl mx-auto px-4"
            >
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 font-sans leading-relaxed">
                {current.description}
              </p>
            </motion.div>

          </div>

        </div>

        {/* Rodapé (Apenas Desktop) */}
        <div className="hidden lg:flex items-center justify-between text-xs font-mono text-neutral-500 border-t border-white/10 pt-4 w-full">
          <span>{t('scrollPrompt')}</span>
          <span>{(((activeStep + 1) / steps.length) * 100).toFixed(0)}%</span>
        </div>

      </div>
    </section>
  );
}