'use client';

import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Certificates() {
  const t = useTranslations('certificates');

  const CERTIFICATES = [
    {
      id: 'htmlCss',
      issuer: 'Rocketseat',
      link: 'https://app.rocketseat.com.br/certificates/cd5e8e34-03ae-4663-9222-4f67d4a2238f',
      tags: ['HTML5', 'CSS3', 'Web Design']
    },
    {
      id: 'gitGithub',
      issuer: 'Rocketseat',
      link: 'https://app.rocketseat.com.br/certificates/311a2032-88cf-4a7e-891e-42f6e2781887',
      tags: ['Git', 'GitHub', 'Version Control']
    },
    {
      id: 'logic',
      issuer: 'Rocketseat',
      link: 'https://app.rocketseat.com.br/certificates/68476524-fbc7-45b9-abcf-1660ae18cf25',
      tags: ['Logic', 'Algorithms', 'Clean Code']
    }
  ];

  return (
    <section id="certificados" className="w-full py-20 px-4 sm:px-8 max-w-6xl mx-auto">
      
      {/* Título da Seção */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-mono mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{t('badge')}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {t('title')}
        </h2>
        <p className="text-neutral-400 text-sm mt-2 max-w-md">
          {t('subtitle')}
        </p>
      </div>

      {/* Grid de Certificados */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CERTIFICATES.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group relative rounded-2xl bg-black border border-white/10 p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 shadow-[0_0_30px_-15px_rgba(255,255,255,0.02)] hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.1)]"
          >
            <div>
              {/* Header do Card */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-emerald-400 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-neutral-500 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                  {t(`items.${cert.id}.date`)}
                </span>
              </div>

              {/* Informações */}
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                {t(`items.${cert.id}.title`)}
              </h3>
              <p className="text-sm text-neutral-400 mt-1">
                {t('issuedBy')} <span className="text-neutral-200 font-medium">{cert.issuer}</span>
              </p>
            </div>

            {/* Footer do Card (Tags e Link) */}
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-col gap-4">
              <div className="flex flex-wrap gap-1.5">
                {cert.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full text-xs font-mono text-neutral-300 hover:text-emerald-400 transition-colors bg-white/5 px-3 py-2 rounded-lg border border-white/5 hover:border-emerald-500/30"
              >
                <span>{t('viewCredential')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}