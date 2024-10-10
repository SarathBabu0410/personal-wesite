import React from "react";
import styled from "styled-components";
import myPhoto from "../assets/myPhoto.jpg"; // Add your photo in the assets folder

// SidebarContainer with responsive design
const SidebarContainer = styled.div`
  width: 300px; /* Default width for larger screens */
  padding: 2rem;
  background-color: #f8f8f8;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1; /* Ensure it's behind the navbar */

  ${({ isTop }) =>
    isTop &&
    `
    @media (max-width: 768px) {
      width: 100%; /* Full width for mobile to match header width */
      height: auto; /* Auto height for mobile when at the top */
      box-shadow: none;
      z-index: 1; /* Ensure it's behind the navbar */
      padding: 1rem; /* Adjust padding to fit smaller screens */
    }
  `}

  @media (max-width: 768px) {
    width: 100%; /* Full width for mobile to match header width */
    height: auto;
    padding: 1rem;
    box-shadow: none;
    margin-top: 0; /* Align sidebar with header */
    z-index: 1; /* Ensure it's behind the navbar */
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
    height: 120px; /* Reduce image size on smaller screens */
  }
`;

const Name = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;

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
  }
`;

function Sidebar({ isTop }) {
  return (
    <SidebarContainer isTop={isTop}>
      <Photo src={myPhoto} alt="Sarath Babu" />
      <Name>Sarath Babu</Name>
      <Description>
        Postdoctoral Researcher at IIT Bombay, specializing in network security and AI-powered adaptive cyber defense.
      </Description>
    </SidebarContainer>
  );
}

export default Sidebar;
