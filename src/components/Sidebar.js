import React from "react";
import styled from "styled-components";
import myPhoto from "../assets/1234x.jpeg"; // Add your photo in the assets folder

// SidebarContainer with responsive design
const SidebarContainer = styled.div`
  width: 100%; /* Full width for mobile to match the header */
  max-width: 300px; /* Maximum width for larger screens */
  padding: 1rem; /* Padding for the sidebar */
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 20px; /* Add some margin for separation */
  
  @media (min-width: 769px) {
    height: 100vh; /* Full height for larger screens */
    margin-top: 0; /* No margin on larger screens */
  }
`;

const Photo = styled.img`
  width: 120px; /* Adjusted for better fit */
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px; /* Reduce image size on smaller screens */
  }
`;

const Name = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
  text-align: center; /* Center text */

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Adjust font size for mobile */
  }
`;

const Description = styled.p`
  text-align: center;
  color: #555;
  font-size: 1.1rem;
  line-height: 1.4;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for mobile */
    padding: 0 1rem; /* Add padding to prevent overflow */
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <Photo src={myPhoto} alt="Sarath Babu" />
      <Name>Sarath Babu</Name>
      <Description>
        Postdoctoral Researcher at IIT Bombay, specializing in network security and AI-powered adaptive cyber defense.
      </Description>
    </SidebarContainer>
  );
}

export default Sidebar;
