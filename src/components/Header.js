import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: column; /* Stack items vertically by default */
  align-items: center; /* Center items */
  background-color: #333;
  color: white;

  /* Styles for desktop view */
  @media (min-width: 769px) {
    flex-direction: row; /* Align items horizontally on larger screens */
    justify-content: space-between; /* Space between logo and menu items */
  }
`;

const MenuToggle = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  /* Style for menu icon */
  div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0;
  }
`;

const MenuItems = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column; /* Stack menu items vertically */
  align-items: center;
  margin-top: 1rem;

  /* Styles for desktop view */
  @media (min-width: 769px) {
    display: flex; /* Show menu items in a row on larger screens */
    flex-direction: row; /* Align items horizontally */
    margin-top: 0; /* Reset margin */
  }

  a {
    color: white;
    text-decoration: none;
    margin: 0.5rem 1rem; /* Spacing between menu items */
  }

  a:hover {
    color: #f39c12;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to control menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
