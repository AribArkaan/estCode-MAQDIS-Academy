import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="footer-content flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="footer-links flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-0">
            <a 
              href="#about" 
              className="hover:text-blue-400 transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#skills" 
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          <div className="social-links flex gap-6">
            <a 
              href="linkedin.com/in/arib-arkaan-fadhlullah-b788241aa/" 
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a 
              href="https://github.com/AribArkaan" 
              aria-label="GitHub"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGithub}size="2x" />
            </a>
            <a 
              href="https://www.instagram.com/aribarkan1/?hl=id" 
              aria-label="Instagram"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faInstagram}size="2x" />
            </a>
          </div>
        </div>

        <p className="copyright text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} ARIB Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;