import LegalPage from '@/components/LegalPage';
import { Locale } from '@/lib/i18n';

const content = `
# Report Security

*Last Updated: February 27, 2026*

We take the security of our platform seriously. If you discover a vulnerability, we encourage you to report it to us.

## 1. How to Report
Please send an email to **security@alikhlas.icu** with the following details:
- Description of the vulnerability.
- Steps to reproduce the issue.
- Potential impact.

## 2. Responsible Disclosure
We ask that you:
- Give us reasonable time to investigate and fix the issue before making it public.
- Do not attempt to access or modify data that does not belong to you.
- Do not perform DDoS attacks or other disruptive actions.

## 3. Our Commitment
We will:
- Acknowledge your report promptly.
- Investigate and resolve valid issues as quickly as possible.
- Not take legal action against you if you follow these guidelines.

## 4. Bug Bounty
At this time, we do not have a formal bug bounty program, but we greatly appreciate and acknowledge the contributions of security researchers.
`;

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  return <LegalPage title="Report Security" content={content} lang={lang} />;
}
