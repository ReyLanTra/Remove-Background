import { locales } from '@/lib/i18n';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://remove.bg.alikhlas.icu';
  const legalPages = [
    'Terms-Of-Service',
    'Terms-Of-Use',
    'Privacy-Policy',
    'Report-Security',
    'Privacy-Choices',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((lang) => {
    // Homepage for each language
    sitemapEntries.push({
      url: `${baseUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    });

    // Legal pages for each language
    legalPages.forEach((page) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
      });
    });
  });

  return sitemapEntries;
}
