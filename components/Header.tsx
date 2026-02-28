'use client';

import React from 'react';
import Image from 'next/image';
import { Menu, Globe } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale, locales } from '@/lib/i18n';

interface HeaderProps {
  lang: Locale;
  dict: any;
}

export default function Header({ lang, dict }: HeaderProps) {
  const pathname = usePathname();

  const redirectedPathname = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image 
                src="https://image.alikhlas.icu/rUga/FAVICON_ORANGE_V2.svg" 
                alt="RemoveBG Logo" 
                fill 
                className="object-contain"
                unoptimized
              />
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">RemoveBG</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href={`/${lang}#uploader`} className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">{dict.removeBg}</Link>
            <Link href={`/${lang}#features`} className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">{dict.features}</Link>
            <Link href={`/${lang}#faq`} className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">{dict.faq}</Link>
            
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
                <Globe className="w-4 h-4" />
                <span className="uppercase">{lang}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-2 grid grid-cols-2 gap-1 px-2">
                {locales.map((l) => (
                  <Link 
                    key={l} 
                    href={redirectedPathname(l)} 
                    className={`px-3 py-1.5 text-xs rounded-lg transition-colors uppercase font-bold text-center ${l === lang ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    {l}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              href={`/${lang}#uploader`}
              className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
            >
              {dict.startFree}
            </Link>
          </nav>

          <button className="md:hidden p-2 text-slate-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
