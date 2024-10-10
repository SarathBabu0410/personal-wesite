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
    position: fixed; /* Fix position on mobile */
    bottom: 0; /* Keep at bottom */
    box-shadow: none; /* Remove shadow for mobile */
    z-index: 999; /* Ensure the sidebar is above other elements */
  }
`;

// Other styled components...

function Sidebar() {
  const location = useLocation();
  const isNewsPage = location.pathname === "/"; // Check if the current page is News and Updates

  return (
    <SidebarContainer isNewsPage={isNewsPage}>
      <Photo src={myPhoto} alt="Sarath Babu" />
      <AboutContainer>
        <Heading>About Me</Heading>
        <Description>
          Hi, I am Sarath Babu, Postdoctoral Researcher at the Indian Institute of Technology Bombay. 
          I completed my Ph.D. in Computer Science from the National Institute of Technology Calicut. 
          My professional journey is driven by a deep commitment to advancing knowledge through research and teaching.
        </Description>
        <Button to="/About">LEARN MORE</Button>
      </AboutContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
