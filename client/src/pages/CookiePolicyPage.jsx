import React from 'react';
import './CookiePolicyPage.css';

function CookiePolicyPage() {
  return (
    <div className="cookie-policy-page">
      <h1>Cookie Policy</h1>
     
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. What are cookies?</h2>
      <p>Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
      
      <h2>2. How we use cookies</h2>
      <p>We use cookies to understand how you use our website and to improve your experience. This includes personalizing content and advertising.</p>
      
      <h2>3. Types of cookies we use</h2>
      <ul>
        <li><strong>Strictly Necessary Cookies:</strong> These are essential for you to be able to move around the website and use its features.</li>
        <li><strong>Performance Cookies:</strong> These collect information about how you use a website, like which pages you visited and which links you clicked on.</li>
        <li><strong>Functionality Cookies:</strong> These cookies allow a website to remember choices you have made in the past.</li>
      </ul>
      
      <h2>4. How to manage cookies</h2>
      <p>You can manage your cookie preferences through our cookie consent banner.</p>
    </div>
  );
}

export default CookiePolicyPage;
