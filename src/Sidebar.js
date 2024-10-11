import React, { useState, useEffect } from "react"; // Add useState and useEffect
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import myPhoto from "../assets/1234x.jpeg"; // Your photo
import image1 from "../assets/images/image1.jpeg"; // Import the images
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";

// Sample array of images for the carousel
const images = [image1, image2, image3];

const SidebarContainer = styled.div`
  width: 300px; /* Default width for larger screens */
  padding: 2rem;
  background-color: #f8f8f8;
  height: 100vh; /* Full height for desktop view */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    height: auto; /* Auto height for mobile */
    padding: 1rem; /* Reduce padding for mobile */
    box-shadow: none; /* Remove shadow for mobile */
    display: ${(props) => (props.isVisible ? "flex" : "none")}; /* Show or hide based on isVisible */
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
    font-size: 0.85rem; /* Adjust font size for mobile */
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

const CarouselContainer = styled.div`
  margin-top: 1.5rem;
  width: 100%; /* Full width for mobile */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px; /* Max height for the carousel images */
  border-radius: 8px; /* Rounded corners for images */
  object-fit: cover;
`;

function Sidebar() {
  const location = useLocation(); // Get current location
  const isVisible = location.pathname === "/"; // Show only on News and Updates page for mobile view
  const [currentImage, setCurrentImage] = useState(0);

  // Function to change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // Cycle through images
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <SidebarContainer isVisible={isVisible}>
      <Photo src={myPhoto} alt="Sarath Babu" />
      <AboutContainer>
        <Heading>About Me</Heading>
        <Description>
          Hi, I am Sarath Babu, Postdoctoral Researcher at the Indian Institute of Technology Bombay. I completed my Ph.D. in Computer Science from the National Institute of Technology Calicut. My professional journey is driven by a deep commitment to advancing knowledge through research and teaching.
        </Description>
        <Button to="/About">LEARN MORE</Button>
      </AboutContainer>
      {/* Image carousel */}
      <CarouselContainer>
        <CarouselImage src={images[currentImage]} alt="Dynamic Carousel" /> {/* Display dynamic image */}
      </CarouselContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
