'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Apakah HapusBG benar-benar gratis?",
    answer: "Ya, HapusBG sepenuhnya gratis untuk digunakan. Anda dapat mengunggah dan menghapus background foto sebanyak yang Anda inginkan tanpa biaya."
  },
  {
    question: "Format gambar apa saja yang didukung?",
    answer: "Kami mendukung format gambar populer seperti JPG, JPEG, PNG, dan WebP."
  },
  {
    question: "Apakah kualitas gambar akan berkurang?",
    answer: "Kami berusaha menjaga kualitas gambar asli semaksimal mungkin. Hasil akhir akan memiliki resolusi yang sama dengan gambar yang Anda unggah."
  },
  {
    question: "Bagaimana dengan privasi foto saya?",
    answer: "Keamanan Anda adalah prioritas kami. Foto yang Anda unggah hanya diproses untuk menghapus background dan tidak akan disimpan secara permanen di server kami."
  },
  {
    question: "Apakah saya perlu mendaftar akun?",
    answer: "Tidak perlu. Anda bisa langsung menggunakan layanan kami tanpa harus melakukan registrasi atau login."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-slate-600">
            Segala hal yang perlu Anda ketahui tentang layanan kami.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
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
