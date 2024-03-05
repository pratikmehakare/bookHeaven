import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer bg-gray-800 text-gray-400 py-10">
      <div className="footer-content max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-4 sm:px-6 lg:px-8">
        <div className="footer-section mb-6 md:mb-0">
          <h4>Contact Us</h4>
          <p>Email: pratikmehakare8@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>Facebook - BookHaven</p>
          <p>Twitter  - @HavenBook</p>
          <p>Instagram - BookHaven</p>
        </div>
      </div>
      <div className="copyright text-center mt-6">
        <p>&copy; 2024 BookHaven. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
