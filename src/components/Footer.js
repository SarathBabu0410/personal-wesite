import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%; /* Ensure full width */
  padding: 1rem; /* Padding for the footer */
  background-color: #333; /* Set the background color */
  color: white; /* Text color */
  text-align: center; /* Center the footer text */
  box-sizing: border-box; /* Include padding in width calculation */
  
  /* Responsive styling for smaller screens */
  @media (max-width: 768px) {
    padding: 0.5rem; /* Reduce padding on smaller screens */
  }

  /* Paragraph styling */
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
