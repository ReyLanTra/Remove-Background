import React from 'react';
import ReactMarkdown from 'react-markdown';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface LegalPageProps {
  title: string;
  content: string;
}

export default function LegalPage({ title, content }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">{title}</h1>
            <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-indigo-600 prose-strong:text-slate-900 prose-ul:list-disc prose-ol:list-decimal">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
