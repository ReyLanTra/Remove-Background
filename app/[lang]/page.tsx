import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImageUploader from '@/components/ImageUploader';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { getDictionary, Locale } from '@/lib/i18n';

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  // Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "RemoveBG",
    "url": `https://remove.bg.alikhlas.icu/${lang}`,
    "operatingSystem": "Web",
    "applicationCategory": "MultimediaApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": dict.hero.description,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "5840"
    }
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header lang={lang} dict={dict.common} />
      <Hero dict={dict.hero} />
      
      <div className="relative">
        <div id="uploader" className="scroll-mt-24">
          <ImageUploader dict={dict.uploader} />
        </div>
      </div>

      <div id="features" className="scroll-mt-24">
        <Features dict={dict.features} />
      </div>

      <div id="faq" className="scroll-mt-24">
        <FAQ dict={dict.faq} />
      </div>

      <Footer lang={lang} dict={dict.common} />
    </main>
  );
}
