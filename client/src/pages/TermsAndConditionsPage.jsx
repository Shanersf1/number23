import React from 'react';
import './TermsAndConditionsPage.css';

const TermsAndConditionsPage = () => {
  return (
    <article className="terms-container">
      <h1>Terms and Conditions</h1>
      <section className="terms-section">
        <h2>Guarantee</h2>
        <p>
          We offer a two-year guarantee for the movement and any parts of your watch. This guarantee does not cover misuse, damage from misuse, or wilful damage.
        </p>
        <p>A 50% deposit is required to secure your build and it will only be released to you upon confirmation of your satisfaction and upon the payment of the remaining balance outstanding</p>
        <p>In the case of a faulty part or mechanical issue we endeavour to rectify/replace the problem in as short a timescale as possible, 
          Our customer satisfaction is our utmost priority. We do not advertise or use a marketing model, we rely soley on repeat business &
          word of mouth so you can rest assured that your product will be of the highest standard
        </p>
        <p>This does not affect your Statutory Rights</p>

      </section>
      <section className="terms-section">
        <h2>Disclaimer</h2>
        <p>
          The information provided on this page is for general informational purposes only and does not constitute legal advice. 
        </p>
      </section>
    </article>
  );
};

export default TermsAndConditionsPage;
