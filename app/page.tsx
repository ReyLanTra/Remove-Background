import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImageUploader from '@/components/ImageUploader';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  // Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "RemoveBG",
    "url": "https://remove.bg.alikhlas.icu/",
    "operatingSystem": "Web",
    "applicationCategory": "MultimediaApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Remove background from images automatically and for free with high quality using AI. Supports multiple languages.",
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
      
      <Header />
      <Hero />
      
      <div className="relative">
        <div id="uploader" className="scroll-mt-24">
          <ImageUploader />
        </div>
      </div>

      <div id="features" className="scroll-mt-24">
        <Features />
      </div>

      <div id="faq" className="scroll-mt-24">
        <FAQ />
      </div>

      <Footer />
    </main>
  );
}
