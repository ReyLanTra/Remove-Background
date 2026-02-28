'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, Sparkles, Clock } from 'lucide-react';

const icons = [Zap, Sparkles, Shield, Clock];
const colors = ["text-amber-500", "text-indigo-500", "text-emerald-500", "text-rose-500"];
const bgs = ["bg-amber-50", "bg-indigo-50", "bg-emerald-50", "bg-rose-50"];

interface FeaturesProps {
  dict: any;
}

export default function Features({ dict }: FeaturesProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {dict.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dict.items.map((feature: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50/50 transition-all group"
            >
              <div className={`w-12 h-12 ${bgs[index % bgs.length]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {React.createElement(icons[index % icons.length], { className: `w-6 h-6 ${colors[index % colors.length]}` })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
