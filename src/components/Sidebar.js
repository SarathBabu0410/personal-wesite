import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import myPhoto from "../assets/1234x.jpeg"; // Your photo

const SidebarContainer = styled.div`
  width: 300px;
  padding: 2rem;
  background-color: #f8f8f8;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    height: auto; /* Adjust height for mobile */
    position: ${(props) => (props.isNewsPage ? "relative" : "fixed")}; /* Position sidebar relative on News page, fixed on others */
    bottom: ${(props) => (props.isNewsPage ? "auto" : "0")}; /* Keep at bottom unless it's news page */
    box-shadow: none; /* Remove shadow for mobile */
    z-index: 999; /* Ensure the sidebar is above other elements */
  }
`;

const Photo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const AboutContainer = styled.div`
  margin-top: 2rem; /* Space below the name */
`;

const Heading = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  text-align: justify; 
  color: #555;
  font-size: 0.95rem;
  margin-top: 1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.5rem 1.5rem;
  background-color: #f39c12;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e67e22;
  }
`;

function Sidebar() {
  const location = useLocation(); // Get current location
  const isNewsPage = location.pathname === "/"; // Check if the current page is News and Updates

  return (
    <SidebarContainer isNewsPage={isNewsPage}>
      <Photo src={myPhoto} alt="Sarath Babu" />
      <AboutContainer>
        <Heading>About Me</Heading>
        <Description>
          Hi, I am Sarath Babu, Postdoctoral Researcher at the Indian Institute of Technology Bombay. I completed my Ph.D. in Computer Science from the National Institute of Technology Calicut. My professional journey is driven by a deep commitment to advancing knowledge through research and teaching.
        </Description>
        <Button to="/About">LEARN MORE</Button>
      </AboutContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
