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
  flex-direction: row;

  a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack menu items vertically */
    align-items: center; /* Center menu items */
    width: 100%; /* Full width for the menu */
    background-color: rgba(51, 51, 51, 0.95); /* Slightly transparent */
    position: absolute; /* Position it below the header */
    top: 60px; /* Adjust based on header height */
    right: 0;
    padding: 1rem 0; /* Padding for the menu */
    z-index: 10; /* Ensure it appears above other content */
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; /* Toggle display based on isOpen state */
  }
`;

const MenuItemButton = styled(Link)`
  width: 90%; /* Button width, leaves some margin on both sides */
  padding: 12px 20px; /* Space for clickability */
  margin: 8px 0; /* Space between buttons */
  background-color: #444; /* Button background color */
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 5px; /* Rounded corners for button-like appearance */
  font-size: 18px; /* Adjust font size */

  &:hover {
    background-color: #f39c12; /* Highlight color on hover */
    color: #333; /* Change text color on hover */
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
        <MenuItemButton to="/">Home</MenuItemButton>
        <MenuItemButton to="/about">About</MenuItemButton>
        <MenuItemButton to="/resume">Resume</MenuItemButton>
        <MenuItemButton to="/publications">Publications</MenuItemButton>
        <MenuItemButton to="/outreach">Outreach</MenuItemButton>
        <MenuItemButton to="/contact">Contact</MenuItemButton>
      </MenuItems>
    </Nav>
  );
}

export default Header;
