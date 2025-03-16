import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Policy = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePolicy = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="priv">Term Condtion & Privacy Policy </h1>
      <div className="space-y-4">
        <div className="border rounded-2xl shadow-md">
          <button 
            className="settle-privacy"
            onClick={() => togglePolicy(0)}
          >
            <span className="">User Privacy Policy</span>
            {activeIndex === 0 ? <ChevronUp /> : <ChevronDown />}
          </button>
          {activeIndex === 0 && (
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
          )}
        </div>

        <div className="border rounded-2xl shadow-md">
          <button 
            className="settle-privacy"
            onClick={() => togglePolicy(1)}
          >
            <span className="">Booking Policy</span>
            {activeIndex === 1 ? <ChevronUp /> : <ChevronDown />}
          </button>
          {activeIndex === 1 && (
               <div className="container text-secondary max-w-4xl mx-auto p-6 text-gray-800">
               <h1 className="text-3xl font-bold mb-4">Hotel Booking Policy</h1>
               <p className="mb-6">This Hotel Booking Policy outlines the terms and conditions governing reservations, cancellations, payments, and other essential guidelines for guests using our hotel booking system. Please read these policies carefully before confirming your reservation to ensure a smooth and pleasant experience.</p>
               
               <section className="mb-6">
                 <h4 className="text-2xl font-semibold mb-2">1. Reservation Policy</h4>
                 <h6 className="text-xl font-medium mb-1">1.1 Booking Confirmation</h6>
                 <ul className="list-disc pl-6 mb-4">
                   <li>All reservations are confirmed upon receiving a confirmation email from the hotel booking system.</li>
                   <li>Guests must provide accurate personal details, including full name, contact information, and payment details.</li>
                   <li>The hotel reserves the right to cancel reservations if false or incomplete information is provided.</li>
                 </ul>
                 <h6 className="text-xl font-medium mb-1">1.2 Room Availability and Rates</h6>
                 <ul className="list-disc pl-6 mb-4">
                   <li>Room availability and rates are subject to change without prior notice.</li>
                   <li>Rates are based on room type, occupancy, and selected dates.</li>
                   <li>Special rates, discounts, or promotional offers are applicable only at the time of booking and cannot be applied retrospectively.</li>
                 </ul>
                 <h6 className="text-xl font-medium mb-1">1.3 Group Bookings</h6>
                 <ul className="list-disc pl-6 mb-4">
                   <li>Group bookings (more than five rooms) require advance notice and are subject to special terms and conditions.</li>
                   <li>A deposit or prepayment may be required to confirm group reservations.</li>
                 </ul>
               </section>
         
               <section className="mb-6">
                 <h4 className="text-2xl font-semibold mb-2">2. Payment Policy</h4>
                 <h6 className="text-xl font-medium mb-1">2.1 Payment Methods</h6>
                 <ul className="list-disc pl-6 mb-4">
                   <li>Accepted payment methods include credit cards, debit cards, and online payment gateways.</li>
                   <li>Full or partial payment may be required at the time of booking, depending on the selected rate plan.</li>
                 </ul>
                 <h6 className="text-xl font-medium mb-1">2.2 Security and Data Privacy</h6>
                 <ul className="list-disc pl-6 mb-4">
                   <li>Payment information is securely processed and encrypted to protect guest data.</li>
                   <li>The hotel adheres to data privacy regulations and does not share personal information with third parties.</li>
                 </ul>
                 <h6 className="text-xl font-medium mb-1">2.3 Taxes and Additional Charges</h6>
                 <ul className="list-disc pl-6 mb-4">
                   <li>All room rates are subject to applicable taxes and service charges.</li>
                   <li>Additional charges for extra services (e.g., room service, spa, or transportation) are payable at the hotel.</li>
                 </ul>
               </section>
             </div>
          )}
        </div>

        <div className="border rounded-2xl shadow-md">
          <button 
            className="settle-privacy"
            onClick={() => togglePolicy(2)}
          >
            <span className="">General Cancellation Policy</span>
            {activeIndex === 2 ? <ChevronUp /> : <ChevronDown />}
          </button>
          {activeIndex === 2 && (
             <div className="container p-6 max-w-4xl mx-auto text-secondary ">
             <h1 className="text-3xl font-bold mb-4">General Cancellation Policy</h1>
       
             <section className="mb-6">
               <h6 className="text-2xl font-semibold">1. Flexible Rates</h6>
               <p>Reservations made under flexible rates can be canceled without penalty up to [Insert Timeframe, e.g., 24 or 48 hours] before the check-in date. A full refund will be issued to the original payment method.</p>
             </section>
       
             <section className="mb-6">
               <h6 className="text-2xl font-semibold">2. Non-Refundable Rates</h6>
               <p>Reservations made under non-refundable rates are not eligible for cancellation or refund, except in exceptional circumstances as specified in this policy.</p>
             </section>
       
             <section className="mb-6">
               <h6 className="text-2xl font-semibold">3. Promotional Rates</h6>
               <p>Special promotional rates may have unique cancellation terms. Please review the specific terms provided at the time of booking.</p>
             </section>
       
             <section className="mb-6">
               <h6 className="text-2xl font-semibold">4. How to Cancel a Reservation</h6>
               <ul className="list-disc list-inside">
                 <li><strong>Online:</strong> Log in to your account on our website or app, navigate to “My Bookings,” and select the reservation you wish to cancel.</li>
                 <li><strong>Customer Support:</strong> Contact our customer support team at [Insert Contact Information]. You will need to provide your booking reference number and personal details for verification.</li>
               </ul>
             </section>
       
             <section className="mb-6">
               <h6 className="text-2xl font-semibold">5. Cancellation Deadlines and Fees</h6>
               <ul className="list-disc list-inside">
                 <li><strong>Standard Cancellations:</strong> Eligible for a full refund if canceled before the specified deadline.</li>
                 <li><strong>Late Cancellations:</strong> Charged a late cancellation fee equivalent to [Insert Percentage or Number of Nights].</li>
                 <li><strong>No-Show Policy:</strong> A no-show fee equivalent to [Insert Percentage or Number of Nights] will be charged, and no refund will be issued.</li>
               </ul>
             </section>
       
             <section className="mb-6">
               <h6 className="text-2xl font-semibold">6. Group Bookings and Long Stays</h6>
               <p>Different cancellation terms may apply for group bookings and long stays. Please refer to the specific agreement or contact us directly for details.</p>
             </section>
       
             <section className="mb-6">
               <h6 className="text-2xl font-semibold">7. Special Circumstances</h6>
               <p>Under exceptional circumstances like natural disasters, government travel restrictions, or medical emergencies, cancellations may be eligible for a full refund, even for non-refundable bookings. Contact our customer support team for assistance.</p>
             </section>
       
             <section className="mb-6">
               <h6 className="text-2xl font-semibold">8. Refund Policy</h6>
               <ul className="list-disc list-inside">
                 <li><strong>Processing Time:</strong> Refunds are typically processed within [Insert Timeframe].</li>
                 <li><strong>Refund Method:</strong> Refunds will be issued to the original payment method used during booking.</li>
                 <li><strong>Currency and Exchange Rates:</strong> Refunds will be issued in the original currency. We are not responsible for exchange rate fluctuations.</li>
               </ul>
             </section>
       
             <section className="mb-6">
               <h6 className="text-2xl font-semibold">9. Third-Party Bookings</h6>
               <p>If booked through a third-party platform, their cancellation and refund policies apply. Contact them directly for assistance.</p>
             </section>
       
             <section className="mb-6">
               <h6 className="text-2xl font-semibold">10. Modifications to Reservations</h6>
               <p>Reservation modifications are subject to availability and may incur additional charges.</p>
             </section>
       
             <section className="mb-6">
               <h6 className="text-2xl font-semibold">11. Force Majeure</h6>
               <p>We are not responsible for cancellations due to events beyond our control, such as natural disasters or government actions. In such cases, we will provide alternative options or issue a travel credit, depending on the circumstances.</p>
             </section>
       
             <section className="mb-6">
               <h6 className="text-2xl font-semibold">12. Contact Us</h6>
               <p>If you have any questions or require assistance with cancellations or refunds, please contact us at:</p>
               <ul className="list-disc list-inside mb-4">
               Email: <a className='text-primary' href="mailto:Staymenu.info@gmail.com" target="_blank">Staymenu.info@gmail.com</a><br/>
               Phone: <a className='text-primary' href="tel:+91 9462979594">+91 9982129594</a><br/>
               Postal Address:    <a className='text-primary' href="https://maps.app.goo.gl/aR4NQiYMEFvvWHsB8" target="_blank">
                       52 Staymenu Village Turkadi Th.Hindoli District Bundi Rajasthan
                       323024
                     </a>
             </ul>
             </section>
           </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Policy;
