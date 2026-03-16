import React from 'react';
import './PrivacyPolicyPage.css';

function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy-page">
      <h1>Privacy Policy</h1>
     
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Introduction</h2>
      <p>We are committed to protecting and respecting your privacy. This policy explains how we collect, use, and protect your personal data.</p>
      
      <h2>2. Data We Collect</h2>
      <p>We may collect and process the following data about you:</p>
      <ul>
        <li>Information you provide by filling in forms on our site.</li>
        <li>If you contact us, we may keep a record of that correspondence.</li>
        <li>Details of your visits to our site and the resources that you access.</li>
      </ul>
      
      <h2>3. How We Use Your Data</h2>
      <p>We use your data to provide you with information, products or services that you request from us or which we feel may interest you.</p>
      
      <h2>4. Data Storage</h2>
      <p>All information you provide to us is stored on our secure servers.</p>
      
      <h2>5. Your Rights</h2>
      <p>You have the right to ask us not to process your personal data for marketing purposes.</p>
      
      <h2>6. Changes to Our Privacy Policy</h2>
      <p>Any changes we may make to our privacy policy in the future will be posted on this page.</p>
    </div>
  );
}

export default PrivacyPolicyPage;
