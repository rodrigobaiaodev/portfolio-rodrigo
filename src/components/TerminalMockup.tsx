'use client';

import { useState, useEffect, useRef } from 'react';

const CODE_SNIPPETS: Record<string, { file: string; code: string[]; tags: string[] }> = {
  TypeScript: {
    file: 'types.ts',
    code: [
      'export interface UserProfile {',
      '  id: string;',
      '  name: string;',
      '  role: "Full-Stack Developer";',
      '  status: "Available for Opportunities";',
      '}'
    ],
    tags: ['Interfaces', 'Generics', 'Strict Mode']
  },
  'Node.js': {
    file: 'server.ts',
    code: [
      'import express from "express";',
      'const app = express();',
      'app.get("/api/v1/health", (req, res) => {',
      '  return res.status(200).json({ status: "ok" });',
      '});'
    ],
    tags: ['REST API', 'Express', 'Middleware']
  },
  React: {
    file: 'Component.tsx',
    code: [
      'export function HeroSection() {',
      '  const [active, setActive] = useState(true);',
      '  return (',
      '    <div className="text-metallic-silver">',
      '      <h1>Rodrigo Baião</h1>',
      '    </div>',
      '  );',
      '}'
    ],
    tags: ['Hooks', 'Tailwind CSS', 'JSX']
  },
  'Next.js': {
    file: 'page.tsx',
    code: [
      'import { useTranslations } from "next-intl";',
      'export default async function Page() {',
      '  return <main className="bg-black text-white" />;',
      '}'
    ],
    tags: ['App Router', 'Server Components', 'i18n']
  },
  PostgreSQL: {
    file: 'schema.sql',
    code: [
      'CREATE TABLE users (',
      '  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),',
      '  email VARCHAR(255) UNIQUE NOT NULL,',
      '  created_at TIMESTAMPTZ DEFAULT NOW()',
      ');'
    ],
    tags: ['Cloud', 'S3 Storage', 'AWS SDK']
  },
  Docker: {
    file: 'Dockerfile',
    code: [
      'FROM node:20-alpine AS builder',
      'WORKDIR /app',
      'COPY package*.json ./',
      'RUN npm ci',
      'CMD ["npm", "start"]'
    ],
    tags: ['Containers', 'Multi-stage', 'Alpine']
  },
  AWS: {
    file: 'aws-config.ts',
    code: [
      'import { S3Client } from "@aws-sdk/client-s3";',
      'export class S3Service {',
      '  private s3 = new S3Client({ region: "us-east-1" });',
      '}'
    ],
    tags: ['S3', 'CloudFront', 'IAM']
  }
};

const STACKS = Object.keys(CODE_SNIPPETS);

export default function TerminalMockup() {
  const [activeTab, setActiveTab] = useState('PostgreSQL');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState<string[]>([]);
  
  // Ref para controlar o timer de troca automática e reiniciá-lo ao ter clique manual
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetInterval = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveTab((current) => {
        const nextIdx = (STACKS.indexOf(current) + 1) % STACKS.length;
        return STACKS[nextIdx];
      });
    }, 7000);
  };

  // Inicializa o temporizador automático
  useEffect(() => {
    resetInterval();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Quando a aba muda (seja automática ou por clique), limpa e reinicia a digitação
  useEffect(() => {
    setLineIndex(0);
    setCharIndex(0);
    setDisplayedCode([]);
  }, [activeTab]);

  // Efeito de digitação linha por linha
  useEffect(() => {
    const currentSnippet = CODE_SNIPPETS[activeTab].code;
    if (lineIndex >= currentSnippet.length) return;

    const targetLine = currentSnippet[lineIndex];

    const typingTimer = setTimeout(() => {
      if (charIndex < targetLine.length) {
        setDisplayedCode((prev) => {
          const updated = [...prev];
          updated[lineIndex] = targetLine.slice(0, charIndex + 1);
          return updated;
        });
        setCharIndex((prev) => prev + 1);
      } else {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }, 20);

    return () => clearTimeout(typingTimer);
  }, [lineIndex, charIndex, activeTab]);

  const handleTabClick = (tech: string) => {
    if (tech === activeTab) return;
    setActiveTab(tech);
    resetInterval(); // Reseta os 7 segundos ao clicar manualmente para evitar conflito
  };

  const activeSnippet = CODE_SNIPPETS[activeTab];

  return (
    <div className="w-full rounded-xl bg-[#030712] border border-slate-800/80 text-left overflow-hidden shadow-2xl font-mono text-xs sm:text-sm">
      {/* Header do Terminal */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800/80 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>

        <div className="flex items-center gap-1 sm:gap-2 px-2">
          {STACKS.map((tech) => (
            <button
              key={tech}
              onClick={() => handleTabClick(tech)}
              className={`px-2.5 py-1 rounded-md text-xs transition-all ${
                activeTab === tech
                  ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.2)] font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Subheader com arquivo atual e badge Live Code */}
      <div className="flex items-center justify-between px-5 py-2.5 bg-slate-950/40 border-b border-slate-800/40 text-xs text-slate-400">
        <span className="text-emerald-400 font-mono">{activeSnippet.file}</span>
        <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono text-[11px] bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live Code
        </span>
      </div>

      {/* Área do Código Animação */}
      <div className="p-5 font-mono leading-relaxed text-slate-300 min-h-[190px] bg-[#030712]">
        {displayedCode.map((lineText, idx) => (
          <div key={idx} className="flex gap-4">
            <span className="text-slate-600 select-none w-4 text-right">{idx + 1}</span>
            <span className="text-slate-200 whitespace-pre">{lineText}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 mt-1">
          <span className="w-2 h-4 bg-emerald-400 animate-pulse inline-block rounded-sm shadow-[0_0_8px_#10b981]" />
        </div>
      </div>

      {/* Footer com Badges */}
      <div className="flex items-center gap-2 px-5 py-3 bg-slate-950/90 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
        <span className="text-emerald-400 font-bold">&gt;</span>
        {activeSnippet.tags.map((tag) => (
          <span key={tag} className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}