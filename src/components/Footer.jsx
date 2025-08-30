import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/shah_jee5088/"
        target="_blank"
        rel="noopener noreferrer"
                className="hover:text-red-500"

      >
        <FaInstagram size={24} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"         className="hover:text-red-500"
>
        <FaXTwitter size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/ahtesham-shah-06741032b/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-500"
      >
        <FaLinkedin size={24} stroke="red" />
      </a>
    </footer>
  );
};

export default Footer;