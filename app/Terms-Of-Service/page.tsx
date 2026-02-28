import LegalPage from '@/components/LegalPage';

const content = `
# Terms of Service

*Last Updated: February 27, 2026*

Welcome to **RemoveBG**. By using our website and services, you agree to comply with and be bound by the following terms and conditions.

## 1. Acceptance of Terms
By accessing or using RemoveBG, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.

## 2. Description of Service
RemoveBG provides an AI-powered tool to remove backgrounds from images. This service is provided "as is" and may be updated or modified at any time.

## 3. User Conduct
You agree not to use the service for any unlawful purpose or to upload any content that:
- Infringes on intellectual property rights.
- Is defamatory, obscene, or harmful.
- Contains viruses or malicious code.

## 4. Intellectual Property
The AI models, software, and website design are the property of RemoveBG. You retain ownership of the images you upload, but grant us a temporary license to process them.

## 5. Limitation of Liability
RemoveBG shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our service.

## 6. Changes to Terms
We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of the new terms.

## 7. Contact Us
If you have any questions about these Terms, please contact us at support@alikhlas.icu.
`;

export default function Page() {
  return <LegalPage title="Terms of Service" content={content} />;
}
