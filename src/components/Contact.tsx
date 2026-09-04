'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');
  const [copied, setCopied] = useState(false);

  const email = "rodrigobaiao.dev@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contato" className="relative py-24 bg-black text-white font-sans border-t border-white/5 overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3"
          >
            <Send className="w-8 h-8 text-cyan-400" />
            {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{t('titleHighlight')}</span>
          </motion.h2>
          <p className="text-zinc-400">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* CARD EMAIL */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative bg-zinc-950/50 backdrop-blur-md border border-zinc-800 hover:border-cyan-500/40 p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-cyan-950/40 rounded-2xl border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">E-mail</h3>
              <p className="text-xs text-zinc-400 mb-4 font-mono break-all">{email}</p>
            </div>

            <button 
              onClick={handleCopyEmail}
              className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl text-xs font-medium text-zinc-300 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">{t('emailCopied')}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-cyan-400" />
                  <span>{t('copyEmail')}</span>
                </>
              )}
            </button>
          </motion.div>

          {/* CARD GITHUB */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-zinc-950/50 backdrop-blur-md border border-zinc-800 hover:border-purple-500/40 p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-purple-950/40 rounded-2xl border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">GitHub</h3>
              <p className="text-xs text-zinc-400 mb-4 font-mono">@rodrigobaiaodev</p>
            </div>

            <a 
              href="https://github.com/rodrigobaiaodev" 
              target="_blank" 
              rel="noreferrer"
              className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl text-xs font-medium text-zinc-300 transition-all"
            >
              <span>{t('visitProfile')}</span>
            </a>
          </motion.div>

          {/* CARD LINKEDIN */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative bg-zinc-950/50 backdrop-blur-md border border-zinc-800 hover:border-blue-500/40 p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-blue-950/40 rounded-2xl border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                {/* SVG Nativo do LinkedIn */}
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">LinkedIn</h3>
              <p className="text-xs text-zinc-400 mb-4 font-mono">Rodrigo Baião</p>
            </div>

            <a 
              href="https://www.linkedin.com/in/rodrigo-baiao/" 
              target="_blank" 
              rel="noreferrer"
              className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl text-xs font-medium text-zinc-300 transition-all"
            >
              <span>{t('connect')}</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}