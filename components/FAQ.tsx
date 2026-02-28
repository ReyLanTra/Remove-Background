'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  dict: any;
}

export default function FAQ({ dict }: FAQProps) {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {dict.title}
          </h2>
          <p className="text-lg text-slate-600">
            {dict.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {dict.items.map((faq: any, index: number) => (
            <details
              key={index}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all hover:border-indigo-200"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
