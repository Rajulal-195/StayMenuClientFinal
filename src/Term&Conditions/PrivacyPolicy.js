import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container max-w-4xl mx-auto p-4 text-secondary">
      <h1 className="text-3xl font-bold mb-4">User Privacy Policy for Hotel Booking System</h1>
      <p className="mb-4">
        Your privacy is important to us. This User Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our hotel booking platform, whether through our website or mobile application. Please read this policy carefully to understand how we handle your data.
      </p>

      <h4 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h4>
      <h6 className="text-xl font-semibold mt-4 mb-2">a. Personal Information</h6>
      <ul className="list-disc list-inside mb-4">
        <li>Contact Details: Name, email address, phone number, and postal address.</li>
        <li>Identification Information: Passport or government-issued ID details (when required by law or the hotel).</li>
        <li>Payment Information: Credit card details, billing address, and transaction history.</li>
        <li>Account Credentials: Username and password for registered users.</li>
        <li>Travel Information: Check-in and check-out dates, hotel preferences, and special requests.</li>
      </ul>

      <h6 className="text-xl font-semibold mt-4 mb-2">b. Non-Personal Information</h6>
      <ul className="list-disc list-inside mb-4">
        <li>Device Information: IP address, browser type, operating system, and device identifiers.</li>
        <li>Usage Data: Pages visited, time spent on each page, click actions, and search queries.</li>
        <li>Location Data: Approximate geographic location when using our app or website.</li>
      </ul>

      <h6 className="text-xl font-semibold mt-4 mb-2">c. Cookies and Tracking Technologies</h6>
      <p className="mb-4">We use cookies, web beacons, and similar technologies to enhance your experience, provide personalized content, and analyze user behavior.</p>

      <h4 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h4>
      <ul className="list-disc list-inside mb-4">
        <li>Booking Management: To process and manage your reservations.</li>
        <li>Customer Support: To assist with inquiries and special requests.</li>
        <li>Payment Processing: To securely process payments and prevent fraudulent transactions.</li>
        <li>Personalization: To tailor your experience with relevant offers and recommendations.</li>
        <li>Marketing and Promotions: To send promotional materials, newsletters, and special offers.</li>
        <li>Analytics and Improvements: To analyze usage patterns and improve our services.</li>
        <li>Legal Compliance and Security: To comply with legal obligations and protect our systems and users.</li>
      </ul>

      <h4 className="text-2xl font-semibold mt-6 mb-2">3. Information Sharing and Disclosure</h4>
      <p className="mb-4">
        We do not sell your personal information. However, we may share your data with third parties under certain circumstances such as with hotel partners, service providers, for legal compliance, or during business transfers.
      </p>

      <h4 className="text-2xl font-semibold mt-6 mb-2">4. Data Security</h4>
      <p className="mb-4">We implement technical and organizational measures to safeguard your information, including encryption, secure storage, and regular security audits. However, no method of transmission or storage is 100% secure.</p>

      <h4 className="text-2xl font-semibold mt-6 mb-2">5. Your Data Protection Rights</h4>
      <p className="mb-4">
        Depending on your location, you may have rights such as access, rectification, erasure, and objection regarding your personal data. To exercise these rights, please contact us at [Contact Information].
      </p>

      <h4 className="text-2xl font-semibold mt-6 mb-2">6. Cookies and Tracking Technologies</h4>
      <p className="mb-4">We use cookies for essential functionality, performance analysis, and targeted advertising. You can manage cookies through your browser settings.</p>

      <h4 className="text-2xl font-semibold mt-6 mb-2">7. Third-Party Links</h4>
      <p className="mb-4">Our website or app may contain links to third-party sites. We are not responsible for their privacy practices.</p>

      <h4 className="text-2xl font-semibold mt-6 mb-2">8. International Data Transfers</h4>
      <p className="mb-4">Your data may be transferred to countries outside your own, with adequate safeguards in place to protect it.</p>

      <h4 className="text-2xl font-semibold mt-6 mb-2">9. Children’s Privacy</h4>
      <p className="mb-4">Our services are not intended for individuals under the age of [Insert Age]. We do not knowingly collect personal information from children without parental consent.</p>

      <h4 className="text-2xl font-semibold mt-6 mb-2">10. Changes to This Privacy Policy</h4>
      <p className="mb-4">We may update this policy periodically. Changes will be posted on this page with an updated effective date.</p>

      <h4 className="text-2xl font-semibold mt-6 mb-2">11. Contact Us</h4>
      <p className="mb-4">If you have any questions about this policy, please contact us at:</p>
      <ul className="list-disc list-inside mb-4">
        Email: <a className='text-primary' href="mailto:Staymenu.info@gmail.com" target="_blank">Staymenu.info@gmail.com</a><br/>
        Phone: <a className='text-primary' href="tel:+91 9462979594">+91 9982129594</a><br/>
        Postal Address:    <a className='text-primary' href="https://maps.app.goo.gl/aR4NQiYMEFvvWHsB8" target="_blank">
                52 Staymenu Village Turkadi Th.Hindoli District Bundi Rajasthan
                323024
              </a>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
