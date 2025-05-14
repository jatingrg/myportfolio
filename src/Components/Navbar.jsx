import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <nav>
        <div className='nav-left'>Jatin-GARG</div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          &#9776;
        </div>

        <div className={`nav-links ${isOpen ? 'show' : ''}`}>
          <Link to="/">_hello</Link>
          <Link to="/about">_about.me</Link>
          <Link to="/statistcs">_statistics</Link>
          <Link to="/project">_projects</Link>
        
          <div className='nav-right'>
            <Link to="/contact">_contact.me</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
