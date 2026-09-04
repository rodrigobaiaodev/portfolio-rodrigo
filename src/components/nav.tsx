'use client';

import {useState} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';

export default function Nav() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  function switchLocale() {
    const next = locale === 'pt' ? 'en' : 'pt';
    router.replace(pathname, {locale: next});
  }

  const links = [
    {href: '#sobre', label: t('sobre')},
    {href: '#projetos', label: t('projetos')},
    {href: '#contato', label: t('contato')},
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <span className="font-mono text-sm text-text">
          rodrigo<span className="text-accent">.dev</span>
        </span>

        <ul className="hidden md:flex items-center gap-8 text-sm text-text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-text transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={switchLocale}
            className="font-mono text-xs border border-border rounded-full px-3 py-1.5 text-text-muted hover:text-accent hover:border-accent transition-colors"
          >
            {locale === 'pt' ? 'EN' : 'PT'}
          </button>
          <button className="md:hidden text-text" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="hover:text-text transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}