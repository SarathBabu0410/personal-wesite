import React from "react";
import styled from "styled-components";
import myPhoto from "../assets/myPhoto.jpg"; // Add your photo in the assets folder

const SidebarContainer = styled.div`
  width: 300px;
  padding: 2rem;
  background-color: #f8f8f8;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const Photo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  text-align: center;
  color: #555;
  font-size: 1.1rem;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <Photo src={myPhoto} alt="Sarath Babu" />
      <h3>Sarath Babu</h3>
      <Description>
        Postdoctoral Researcher at IIT Bombay, specializing in network security and AI-powered adaptive cyber defense.
      </Description>
    </SidebarContainer>
  );
}

export default Sidebar;
