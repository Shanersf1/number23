import React, { useState, useEffect } from 'react';
import './CookieConsentBanner.css';

function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-consent-banner">
      <p>We use cookies to improve your experience on our site. To find out more, read our <a href="/cookie-policy">cookie policy</a>.</p>
      <div className="cookie-consent-buttons">
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleDecline}>Decline</button>
      </div>
    </div>
  );
}

export default CookieConsentBanner;
