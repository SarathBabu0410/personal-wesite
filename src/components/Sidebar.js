import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import myPhoto from "../assets/1234x.jpeg"; // Add your photo in the assets folder

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

const Name = styled.h3`
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.3rem;
  color: #333;
`;

const AboutContainer = styled.div`
  margin-top: 2rem; /* Added small space below the name */
`;

const Heading = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
  color: #333;
`;

const Description = styled.p`
  text-align: justify; /* Justify alignment for a clean, standard look */
  color: #555;
  font-size: 0.95rem; /* Reduced font size */
  margin-top: 1rem;
  line-height: 1.6;
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
  return (
    <SidebarContainer>
      <Photo src={myPhoto} alt="Sarath Babu" />
      <AboutContainer>
        <Heading>About Me</Heading>
        <Description>
          Hi, I am Sarath Babu, Postdoctoral Researcher at the Indian Institute of Technology Bombay. I completed my Ph.D. in Computer Science from the National Institute of Technology Calicut. My professional journey is driven by a deep commitment to advancing knowledge through research and teaching.
        </Description>
        {/* "LEARN MORE" button linked to the About page */}
        <Button to="/About">LEARN MORE</Button>
      </AboutContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
