import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;

  h1 {
    margin: 0;
  }

  /* Hamburger menu styles */
  .hamburger {
    display: none; /* Hide by default */
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 28px;
    color: white;
  }

  /* Full menu items */
  .menuItems {
    display: flex;
    flex-direction: row; /* Horizontal layout for larger screens */
  }

  .menuItems a {
    color: white;
    padding: 15px 20px; /* Adjust spacing for full menu */
    text-decoration: none;
    text-align: center;
    font-size: 18px;
  }

  .menuItems a:hover {
    background-color: #f39c12;
    color: #333;
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .hamburger {
      display: block; /* Show hamburger menu on small screens */
    }

    .menuItems {
      display: none; /* Hide full menu on small screens */
      flex-direction: column; /* Stack menu items vertically */
      position: absolute;
      top: 60px;
      right: 0;
      width: 100%; /* Full width for mobile */
      background-color: rgba(51, 51, 51, 0.9);
      padding: 1rem 0;
      z-index: 10;
    }

    .menuItems.open {
      display: flex; /* Show menu items when open */
    }
  }
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <Nav>
      <h1>Sarath Babu</h1>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
      <div className={`menuItems ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/resume" onClick={closeMenu}>Resume</Link>
        <Link to="/publications" onClick={closeMenu}>Publications</Link>
        <Link to="/outreach" onClick={closeMenu}>Outreach</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </Nav>
  );
}

export default Header;
