import LegalPage from '@/components/LegalPage';
import { Locale } from '@/lib/i18n';

const content = `
# Privacy Policy

*Last Updated: February 27, 2026*

At **RemoveBG**, we are committed to protecting your privacy. This policy explains how we handle your data.

## 1. Information We Collect
- **Images:** We collect images you upload to process them. These are typically deleted immediately after processing.
- **Usage Data:** We collect anonymous data about how you use our site to improve our services.
- **Cookies:** We use cookies to enhance your experience and analyze traffic.

## 2. How We Use Your Information
We use your data solely to:
- Provide the background removal service.
- Improve our AI models and website performance.
- Respond to your inquiries.

## 3. Data Security
We implement industry-standard security measures to protect your data from unauthorized access or disclosure.

## 4. Third-Party Services
We may use third-party tools for analytics or hosting. These services have their own privacy policies.

## 5. Your Rights
You have the right to:
- Access the data we have about you.
- Request deletion of your data.
- Opt-out of non-essential cookies.

## 6. Changes to This Policy
We may update this policy from time to time. We will notify you of any significant changes by posting the new policy on this page.
`;

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  return <LegalPage title="Privacy Policy" content={content} lang={lang} />;
}
