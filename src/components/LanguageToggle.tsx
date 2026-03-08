import { useState, useEffect } from 'react';
import type { Lang } from '../i18n/translations';

export default function LanguageToggle() {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const saved = (localStorage.getItem('lang') as Lang) || 'en';
    setLang(saved);
  }, []);

  const toggle = () => {
    const next: Lang = lang === 'en' ? 'pl' : 'en';
    setLang(next);
    localStorage.setItem('lang', next);
    window.dispatchEvent(new CustomEvent('lang:change', { detail: next }));
  };

  return (
    <button
      onClick={toggle}
      aria-label="Switch language"
      className="h-9 px-3 flex items-center border border-gray-200 dark:border-neutral-800 text-xs font-mono text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-colors duration-200 tracking-widest"
    >
      {lang === 'en' ? 'PL' : 'EN'}
    </button>
  );
}
