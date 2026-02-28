import React from 'react';
import Image from 'next/image';
import { Image as ImageIcon, Github, Twitter, Instagram, Youtube, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: Youtube, href: 'https://youtube.com/@ReyLan_Ch', label: 'YouTube' },
  { icon: Instagram, href: 'https://www.tiktok.com/@itz.reyyzzrr', label: 'TikTok' }, // Using Instagram icon for TikTok as Lucide doesn't have a dedicated one, or I can use a generic one
  { icon: Instagram, href: 'https://www.instagram.com/itz.reyyzzrr', label: 'Instagram' },
  { icon: Github, href: 'https://github.com/ReyLanTra', label: 'Github' },
];

const services = [
  { name: 'Hosting Image', href: 'https://image.alikhlas.icu' },
  { name: 'Hosting Video', href: 'https://video.alikhlas.icu' },
  { name: 'Hosting Audio', href: 'https://audio.alikhlas.icu' },
  { name: 'Hapus Bg VIP', href: 'https://remove.alikhlas.icu' },
  { name: 'Shorting URL', href: 'https://s.alikhlas.icu' },
];

const legalLinks = [
  { name: 'Terms of Service', href: '/Terms-Of-Service' },
  { name: 'Terms of Use', href: '/Terms-Of-Use' },
  { name: 'Privacy Policy', href: '/Privacy-Policy' },
  { name: 'Report Security', href: '/Report-Security' },
  { name: 'Privacy Choices', href: '/Privacy-Choices' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
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
            <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
              RemoveBG is a free online tool that uses artificial intelligence to remove image backgrounds automatically and instantly. Supports multiple languages.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">Layanan</h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-1"
                  >
                    {service.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-500 hover:text-indigo-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} RemoveBG. Created with ❤️ for designers worldwide.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link href="/sitemap.xml" className="hover:text-slate-600 transition-colors">Sitemap</Link>
            <a href="#" className="hover:text-slate-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
