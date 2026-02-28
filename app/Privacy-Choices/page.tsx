import LegalPage from '@/components/LegalPage';

const content = `
# Privacy Choices

*Last Updated: February 27, 2026*

We believe you should have control over your data. This page outlines the choices available to you regarding your privacy.

## 1. Cookie Preferences
You can manage your cookie settings through your browser. Most browsers allow you to block or delete cookies.

## 2. Data Deletion
If you believe we have stored any of your personal data, you can request its deletion by contacting us at **privacy@alikhlas.icu**.

## 3. Opt-Out of Analytics
We use Google Analytics to understand site traffic. You can opt-out by using the Google Analytics Opt-out Browser Add-on.

## 4. Marketing Communications
If you have subscribed to our newsletter, you can unsubscribe at any time by clicking the "unsubscribe" link in the email.

## 5. Do Not Track
Our website currently does not respond to "Do Not Track" signals from browsers, but we are working on implementing this feature.

## 6. Contact Us
For any privacy-related questions or requests, please reach out to our Data Protection Officer at **dpo@alikhlas.icu**.
`;

export default function Page() {
  return <LegalPage title="Privacy Choices" content={content} />;
}
