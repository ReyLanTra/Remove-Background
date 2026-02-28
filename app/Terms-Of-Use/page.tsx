import LegalPage from '@/components/LegalPage';

const content = `
# Terms of Use

*Last Updated: February 27, 2026*

These Terms of Use govern your access to and use of the **RemoveBG** website and its features.

## 1. License to Use
We grant you a personal, non-exclusive, non-transferable license to use our background removal tool for personal or commercial purposes, subject to these terms.

## 2. Prohibited Activities
You may not:
- Attempt to reverse engineer the AI models.
- Use automated scripts to scrape data or abuse the API.
- Use the service to create deepfakes or misleading content.

## 3. Image Processing
Images uploaded to our service are processed in real-time. We do not store your images permanently unless explicitly stated for specific features.

## 4. Termination
We reserve the right to terminate or suspend your access to the service without prior notice for any violation of these terms.

## 5. Disclaimer of Warranties
The service is provided without any warranties, express or implied. We do not guarantee that the service will be error-free or uninterrupted.

## 6. Governing Law
These terms shall be governed by and construed in accordance with the laws of Indonesia.
`;

export default function Page() {
  return <LegalPage title="Terms of Use" content={content} />;
}
