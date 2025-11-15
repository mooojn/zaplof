import React from 'react';
import logo from '../../assets/logo.svg';
import './Footer.css';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/company/zaplof' },
  { name: 'Instagram', url: 'https://instagram.com/' },
  { name: 'X', url: 'https://x.com/' },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <img src={logo} alt="Zaplof Logo" />
      </div>
      <div className="footer-social-links">
        {socialLinks.map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
    <div className="footer-bottom">
      © {new Date().getFullYear()} Zaplof. All rights reserved.
    </div>
  </footer>
);

export default Footer;
