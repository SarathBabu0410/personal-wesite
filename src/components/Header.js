import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: column; /* Stack items vertically on smaller screens */
  padding: 1rem 2rem;
  background-color: #333;
  color: white;

  h1 {
    margin: 0; /* Remove default margin */
    font-size: 24px; /* Adjust the size as needed */
  }

  /* Navigation links container */
  .nav-links {
    display: flex;
    flex-wrap: wrap; /* Allow links to wrap */
    justify-content: center; /* Center the links */
    margin-top: 1rem; /* Add some space between the title and links */
  }

  a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
    font-size: 16px; /* Base font size for links */
  }

  a:hover {
    color: #f39c12;
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack the header vertically on mobile */
    align-items: center; /* Center items horizontally */

    h1 {
      font-size: 20px; /* Reduce title font size on mobile */
    }

    a {
      margin: 0.5rem 0; /* Adjust margin for links on mobile */
      font-size: 14px; /* Reduce font size for links on mobile */
    }
  }
`;

function Header() {
  return (
    <Nav>
      <h1>Sarath Babu</h1>
      <div className="nav-links">
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
