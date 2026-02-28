import React from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
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
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#uploader" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Hapus Background</a>
            <a href="#features" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Fitur</a>
            <a href="#faq" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">FAQ</a>
            <a 
              href="#uploader"
              className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
            >
              Mulai Gratis
            </a>
          </nav>

          <button className="md:hidden p-2 text-slate-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
