import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-6" id='footer'>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Aditya Patel. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/aditya-patel-286662212"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Aditya4936"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://3d-portfolio-aditya.vercel.app/ "
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
