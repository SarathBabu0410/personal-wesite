import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;

  a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
  }

  a:hover {
    color: #f39c12;
  }
`;

function Header() {
  return (
    <Nav>
      <h1>Sarath Babu</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/outreach">Outreach</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </Nav>
  );
}

export default Header;

