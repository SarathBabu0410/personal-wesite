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
`;

const Hamburger = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 28px;
  color: white;
  display: none; /* Initially hide the hamburger */

  @media (max-width: 768px) {
    display: block; /* Show hamburger on small screens */
    position: absolute;
    top: 15px;
    right: 20px;
  }
`;

const MenuItems = styled.div`
  display: flex;

  a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
  }

  a:hover {
    color: #f39c12;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    background-color: rgba(51, 51, 51, 0.9);
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; /* Conditionally show the menu */
    z-index: 10;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle

  return (
    <Nav>
      <h1>Sarath Babu</h1>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        ☰ {/* Hamburger Icon */}
      </Hamburger>
      <MenuItems isOpen={isOpen}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/outreach">Outreach</Link>
        <Link to="/contact">Contact</Link>
      </MenuItems>
    </Nav>
  );
}

export default Header;
