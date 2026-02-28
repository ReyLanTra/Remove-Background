'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Zap, Shield, Image as ImageIcon, Sparkles, Clock } from 'lucide-react';

const features = [
  {
    title: "100% Otomatis",
    description: "Teknologi AI kami mendeteksi subjek dan menghapus latar belakang secara instan tanpa perlu seleksi manual.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-50"
  },
  {
    title: "Kualitas Tinggi",
    description: "Hasil potongan yang halus dan presisi, menjaga detail rambut dan tepi objek dengan sangat baik.",
    icon: Sparkles,
    color: "text-indigo-500",
    bg: "bg-indigo-50"
  },
  {
    title: "Gratis Selamanya",
    description: "Gunakan tool ini sepuasnya tanpa biaya berlangganan atau biaya tersembunyi. Benar-benar gratis.",
    icon: Shield,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  {
    title: "Cepat & Efisien",
    description: "Proses penghapusan background hanya memakan waktu beberapa detik saja. Hemat waktu berharga Anda.",
    icon: Clock,
    color: "text-rose-500",
    bg: "bg-rose-50"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Mengapa Memilih HapusBG?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Solusi terbaik untuk menghapus background foto dengan cepat, mudah, dan profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50/50 transition-all group"
            >
              <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
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
