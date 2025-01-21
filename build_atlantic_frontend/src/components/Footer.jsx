import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logos">
          <img
            src="/public/images/logo-color.png"
            alt="Build Atlantic Logo"
            className="footer-logo"
          />
          <img
            src="/public/images/Atlantic-County-Government-logo.jpg"
            alt="Atlantic County Government Logo"
            className="footer-logo"
          />
        </div>
        <p>© Build Atlantic. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
