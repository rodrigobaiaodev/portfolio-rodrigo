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

  useEffect(() => {
    resetInterval();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    setLineIndex(0);
    setCharIndex(0);
    setDisplayedCode([]);
  }, [activeTab]);

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
    resetInterval();
  };

  const activeSnippet = CODE_SNIPPETS[activeTab];

  return (
    <div className="w-full rounded-2xl bg-black border border-white/10 text-left overflow-hidden shadow-[0_0_40px_-15px_rgba(255,255,255,0.05)] font-mono text-xs sm:text-sm">
      
      {/* Header do Terminal (Abas) */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0a0a0a] border-b border-white/5 overflow-x-auto no-scrollbar">
        {/* Botões estilo macOS (Versão Monocromática Premium) */}
        <div className="flex items-center gap-2 shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-500" />
        </div>

        <div className="flex items-center gap-1 sm:gap-2 px-2">
          {STACKS.map((tech) => (
            <button
              key={tech}
              onClick={() => handleTabClick(tech)}
              className={`px-3 py-1.5 rounded-md text-[11px] sm:text-xs transition-all duration-300 ${
                activeTab === tech
                  ? 'bg-white/10 text-white font-medium shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-300 hover:bg-white/5'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Subheader (Arquivo e Live Code) */}
      <div className="flex items-center justify-between px-5 py-2.5 bg-black border-b border-white/5 text-xs text-neutral-400">
        <span className="text-neutral-300">{activeSnippet.file}</span>
        <span className="inline-flex items-center gap-1.5 text-neutral-300 text-[10px] uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Live Code
        </span>
      </div>

      {/* Área de Código */}
      <div className="p-5 font-mono leading-relaxed text-neutral-300 min-h-[190px] bg-black">
        {displayedCode.map((lineText, idx) => (
          <div key={idx} className="flex gap-4">
            <span className="text-neutral-700 select-none w-4 text-right">{idx + 1}</span>
            <span className="text-neutral-200 whitespace-pre">{lineText}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 mt-1">
          <span className="w-2 h-4 bg-white/80 animate-pulse inline-block rounded-sm" />
        </div>
      </div>

      {/* Footer (Tags) */}
      <div className="flex items-center gap-2 px-5 py-3 bg-[#0a0a0a] border-t border-white/5 text-[11px] font-mono">
        <span className="text-neutral-500 font-bold">&gt;</span>
        {activeSnippet.tags.map((tag) => (
          <span key={tag} className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}