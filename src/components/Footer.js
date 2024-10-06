import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: #333;
  color: white;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© 2024 Sarath Babu | Designed with React & Framer Motion</p>
    </FooterContainer>
  );
}

export default Footer;
