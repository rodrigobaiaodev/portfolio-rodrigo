'use client';

import { useState, useEffect } from 'react';

export interface TechSnippet {
  id: string;
  label: string;
  filename: string;
  tags: string[];
  code: string;
}

export const SNIPPETS: TechSnippet[] = [
  {
    id: 'typescript',
    label: 'TypeScript',
    filename: 'types.ts',
    tags: ['Interfaces', 'Generics', 'Strict Types'],
    code: `export interface UserProfile {\n  id: string;\n  name: string;\n  email: string;\n  role: 'admin' | 'developer';\n}\n\nexport type ApiResponse<T> = {\n  data: T;\n  status: number;\n};`
  },
  {
    id: 'node',
    label: 'Node.js',
    filename: 'server.ts',
    tags: ['Express', 'REST API', 'Backend'],
    code: `import express from 'express';\n\nconst app = express();\napp.use(express.json());\n\napp.get('/api/health', (req, res) => {\n  return res.json({ status: 'online', timestamp: new Date() });\n});\n\napp.listen(3333);`
  },
  {
    id: 'react',
    label: 'React',
    filename: 'useDebounce.ts',
    tags: ['Custom Hooks', 'React 19', 'State'],
    code: `import { useState, useEffect } from 'react';\n\nexport function useDebounce<T>(value: T, delay = 300): T {\n  const [debounced, setDebounced] = useState<T>(value);\n\n  useEffect(() => {\n    const timer = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(timer);\n  }, [value, delay]);\n\n  return debounced;\n}`
  },
  {
    id: 'next',
    label: 'Next.js',
    filename: 'page.tsx',
    tags: ['App Router', 'Server Components', 'SSR'],
    code: `import { Suspense } from 'react';\n\nexport default async function DashboardPage() {\n  const data = await fetch('https://api.example.com/stats');\n\n  return (\n    <main className="p-8">\n      <h1 className="text-2xl font-bold">Dashboard</h1>\n      <Suspense fallback={<p>Loading...</p>}>\n        {/* Content */}\n      </Suspense>\n    </main>\n  );\n}`
  },
  {
    id: 'postgres',
    label: 'PostgreSQL',
    filename: 'schema.sql',
    tags: ['Database', 'SQL', 'Relations'],
    code: `CREATE TABLE users (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  email VARCHAR(255) UNIQUE NOT NULL,\n  created_at TIMESTAMPTZ DEFAULT NOW()\n);`
  },
  {
    id: 'docker',
    label: 'Docker',
    filename: 'docker-compose.yml',
    tags: ['Containers', 'DevOps', 'Services'],
    code: `version: '3.8'\nservices:\n  app:\n    build: .\n    ports:\n      - "3000:3000"\n    environment:\n      - NODE_ENV=production`
  },
  {
    id: 'aws',
    label: 'AWS',
    filename: 's3.ts',
    tags: ['Cloud', 'S3 Storage', 'AWS SDK'],
    code: `import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';\n\nconst s3 = new S3Client({ region: 'us-east-1' });\n\nexport async function uploadFile(bucket: string, key: string, body: Buffer) {\n  const command = new PutObjectCommand({ Bucket: bucket, Key: key, Body: body });\n  return await s3.send(command);\n}`
  }
];

export function TerminalMockup() {
  const [activeTab, setActiveTab] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isAutoTyping, setIsAutoTyping] = useState(true);
  const currentSnippet = SNIPPETS[activeTab];

  useEffect(() => {
    setDisplayedText('');
    let index = 0;
    const fullText = currentSnippet.code;

    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 15);

    return () => clearInterval(timer);
  }, [activeTab]);

  useEffect(() => {
    if (!isAutoTyping) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % SNIPPETS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoTyping]);

  const handleTabClick = (index: number) => {
    setIsAutoTyping(false);
    setActiveTab(index);
  };

  const renderHighlightedCode = (text: string) => {
    return text.split('\n').map((line, i) => (
      <div key={i} className="table-row">
        <span className="table-cell text-right pr-4 text-slate-600 select-none text-xs">{i + 1}</span>
        <span className="table-cell">
          {line.split(/('[^']*'|"[^"]*"|`[^`]*`|\b(?:import|export|function|const|let|var|return|if|try|catch|from|CREATE|TABLE|PRIMARY|KEY|DEFAULT|version|services|ports|environment|type|interface)\b)/g).map((part, j) => {
            if (/^('[^']*'|"[^"]*"|`[^`]*`)$/.test(part)) {
              return <span key={j} className="text-amber-300">{part}</span>;
            }
            if (/^(import|export|function|const|let|var|return|if|try|catch|from|CREATE|TABLE|PRIMARY|KEY|DEFAULT|version|services|ports|environment|type|interface)$/.test(part)) {
              return <span key={j} className="text-orange-400 font-semibold">{part}</span>;
            }
            return <span key={j} className="text-slate-300">{part}</span>;
          })}
        </span>
      </div>
    ));
  };

  return (
    <div className="w-full rounded-2xl border border-slate-800 bg-[#090d16]/90 shadow-[0_0_50px_rgba(249,115,22,0.1)] backdrop-blur-xl overflow-hidden text-left font-mono">
      
      {/* Top Bar de Abas com Rolar Oculto */}
      <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/80 px-4 py-2.5 gap-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>

        <div className="flex items-center gap-1 shrink-0 overflow-x-auto no-scrollbar py-0.5">
          {SNIPPETS.map((snippet, idx) => (
            <button
              key={snippet.id}
              onClick={() => handleTabClick(idx)}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-400 border border-orange-500/40 shadow-[0_0_10px_rgba(249,115,22,0.2)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {snippet.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sub Bar com Nome de Arquivo */}
      <div className="flex items-center justify-between border-b border-slate-800/40 bg-[#060a12] px-4 py-1.5 text-xs text-slate-500">
        <span className="font-medium text-slate-400">{currentSnippet.filename}</span>
        <span className="flex items-center gap-1.5 text-[10px] text-orange-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          Live Code
        </span>
      </div>

      {/* Corpo com Código */}
      <div className="p-4 overflow-x-auto text-xs sm:text-sm min-h-[200px] bg-[#060a12]/90 no-scrollbar">
        <div className="table w-full">
          {renderHighlightedCode(displayedText)}
        </div>
        <span className="inline-block w-2 h-4 ml-1 bg-orange-400 animate-pulse align-middle" />
      </div>

      {/* Footer Tags */}
      <div className="flex items-center gap-2 border-t border-slate-800/40 bg-slate-900/60 px-4 py-2.5 text-xs text-slate-400 overflow-x-auto no-scrollbar">
        <span className="text-orange-400 font-bold">&gt;</span>
        {currentSnippet.tags.map((tag, i) => (
          <span key={i} className="px-2.5 py-0.5 rounded bg-slate-800/70 text-slate-300 text-[11px] border border-slate-700/60 shrink-0 font-sans">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TerminalMockup;