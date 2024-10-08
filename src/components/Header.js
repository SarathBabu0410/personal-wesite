import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styling for the navigation bar
const Nav = styled.nav`
  display: flex;
  justify-content: space-between; /* Align items on the ends */
  align-items: center; /* Center items vertically */
  padding: 1rem 2rem; /* Top/bottom and left/right padding */
  background-color: #333; /* Background color */
  color: white; /* Text color */
  position: relative; /* Relative positioning for the toggle button */
`;

// Styling for the menu toggle button
const MenuToggle = styled.div`
  display: none; /* Hidden by default */
  flex-direction: column; /* Stack the lines vertically */
  cursor: pointer; /* Change cursor on hover */
  
  /* Hamburger lines styling */
  div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0; /* Space between lines */
  }

  /* Show the toggle on smaller screens */
  @media (max-width: 768px) {
    display: flex; /* Show the hamburger icon */
  }
`;

// Styling for the menu items
const MenuItems = styled.div`
  display: flex; /* Flexbox for layout */
  flex-direction: row; /* Align items in a row */
  align-items: center; /* Center items vertically */
  
  /* Style for menu items */
  a {
    color: white;
    text-decoration: none;
    margin: 0 1rem; /* Space between items */
  }

  a:hover {
    color: #f39c12; /* Color on hover */
  }

  /* Adjust menu items for smaller screens */
  @media (max-width: 768px) {
    position: absolute; /* Positioning for dropdown effect */
    top: 60px; /* Position below the header */
    right: 0; /* Align to the right */
    background-color: #333; /* Same background color */
    flex-direction: column; /* Stack vertically */
    width: 100%; /* Full width on small screens */
    padding: 1rem 0; /* Top and bottom padding */
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; /* Show/hide based on state */
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
    <Nav>
      <h1>Sarath Babu</h1>
      <MenuToggle onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </MenuToggle>
      <MenuItems isOpen={isOpen}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
        <Link to="/publications" onClick={() => setIsOpen(false)}>Publications</Link>
        <Link to="/outreach" onClick={() => setIsOpen(false)}>Outreach</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </MenuItems>
    </Nav>
  );
}

export default Header;
