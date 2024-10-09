import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;

  h1 {
    margin: 0;
  }

  .menuItems {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; /* Conditional display */
    flex-direction: column;
    align-items: center;
    background-color: rgba(51, 51, 51, 0.8);
    position: absolute;
    top: 60px;
    right: 0;
    width: 70%;
    max-width: 320px;
    padding: 1.5rem 0;
    z-index: 10;
    backdrop-filter: blur(5px);
    border-radius: 0 0 10px 10px;
  }

  .menuItems a {
    color: white;
    padding: 15px 40px;
    text-decoration: none;
    width: 100%;
    text-align: center;
    font-size: 18px;
    border-radius: 5px;
  }

  .menuItems a:hover {
    background-color: #f39c12;
    color: #333;
  }

  .menuItems a + a {
    margin-top: 12px;
  }

  .hamburger {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 28px;
    color: white;
    position: absolute;
    top: 15px;
    right: 20px;
  }
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggles the menu state
  };

  const closeMenu = () => {
    setMenuOpen(false); // Closes the menu after selecting a link
  };

  return (
    <Nav isOpen={menuOpen}>
      <h1>Sarath Babu</h1>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
      <div className="menuItems">
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
