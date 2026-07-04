import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 flex justify-center gap-6 border-t" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
      <a
        href="https://www.instagram.com/shah_jee5088/"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
      >
        <FaInstagram size={24} />
      </a>
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="nav-link"
      >
        <FaXTwitter size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/ahtesham-shah-06741032b/"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;