import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img alt="" src="https://img.freepik.com/premium-vector/seafood-restaurant-label-logo-design-template_605910-470.jpg" height={70} width={100} />
      </div>
      <nav className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
        <a href="/" >About Us</a>
        <a href="/" >Products</a>
        <a href="/">Contact</a>
        
      </nav>
      <div 
        className={`hamburger ${isMobileMenuOpen ? "open" : ""}`} 
        onClick={toggleMobileMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </header>
  );
};

export default Header;
