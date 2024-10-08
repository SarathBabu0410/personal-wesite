import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: #333;
  color: white;
  text-align: center;
  box-sizing: border-box; /* Include padding in width calculation */

  @media (max-width: 768px) {
    padding: 0.5rem; /* Reduce padding on smaller screens */
  }

  p {
    margin: 0; /* Remove default margin */
    font-size: 14px; /* Set a base font size */
    
    @media (max-width: 768px) {
      font-size: 12px; /* Reduce font size for mobile */
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© 2024 Sarath Babu | Designed with React & Framer Motion</p>
    </FooterContainer>
  );
}

export default Footer;
