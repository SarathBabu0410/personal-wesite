import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center the items vertically */
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
  box-sizing: border-box; /* Include padding in width calculation */

  @media (max-width: 768px) {
    padding: 1rem; /* Reduce padding on smaller screens */
    flex-direction: column; /* Stack items vertically on mobile */
    align-items: flex-start; /* Align items to the start */
  }

  h1 {
    margin: 0; /* Remove default margin */
  }

  a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;

    @media (max-width: 768px) {
      margin: 0.5rem 0; /* Adjust margin for mobile */
    }
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
