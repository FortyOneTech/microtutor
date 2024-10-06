// client/src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MicroTutor. All rights reserved.</p>
      <div className="footer-links">
        <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
