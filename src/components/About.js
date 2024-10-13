import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import ContentWrapper from "./ContentWrapper"; // Import the reusable ContentWrapper

// Global font import
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

  body {
    font-family: 'Lato', sans-serif; /* Apply the Lato font */
  }
`;

// Fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Slide-in animation for paragraphs and list items
const slideIn = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AboutContainer = styled.div`
  padding: 2rem;
  width: 100%;
  max-width: 1200px; 
  margin: 0 auto; /* Center content on desktop */
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 100%; /* Increase width to 90% of the viewport width */
    margin-left: auto; /* Ensure it's centered */
    margin-right: auto; /* Ensure it's centered */
  }
`;

const Heading = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Adjust font size for mobile */
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem; /* Adjust margin for mobile */
  }
`;

const SectionHeading = styled.h2`
  color: #333;
  margin-bottom: 1rem;
  font-family: 'Lato', sans-serif;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    font-size: 1.6rem; /* Adjust heading size for mobile */
  }
`;

const Paragraph = styled.p`
  text-align: justify;
  color: #555;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-family: 'Lato', sans-serif;
  animation: ${slideIn} 0.8s ease-out;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for mobile */
    line-height: 1.4; /* Adjust line height for mobile */
  }
`;

const LikesList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  color: #555;
  font-size: 1.1rem;
  font-family: 'Lato', sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for mobile */
  }
`;

const LikesListItem = styled.li`
  margin-bottom: 0.5rem;
  animation: ${slideIn} 0.8s ease-out;
  animation-delay: 0.3s;
`;

function About() {
  return (
    <AboutContainer>
      <GlobalStyle /> {/* Apply global styles */}
      <Heading>About Me</Heading>

      <ContentWrapper>
        {/* Introduction Section */}
        <Section>
          <SectionHeading>Introduction</SectionHeading>
           <Paragraph>
            I am Sarath Babu, a dedicated researcher and educator with a background in computer science and engineering, particularly in the areas of network engineering, vehicular networks, and cybersecurity. I received my Ph.D. from the National Institute of Technology Calicut in 2023, where I focused on developing robust multicast routing protocols for vehicular ad-hoc networks (VANETs). My journey in research has always been driven by a passion for tackling complex problems in network security and communication technologies.
          </Paragraph>
          <Paragraph>
            Currently, I am working as a Post-Doctoral Researcher at the Indian Institute of Technology Bombay, where I am involved in a project centered on creating an AI-powered adaptive cyber defense framework. This research involves using artificial intelligence to enhance malware detection and improve the resilience of networks against evolving cyber threats. The project has further strengthened my knowledge of cybersecurity and advanced my skills in practical implementation, especially in the area of network defense and AI integration.
          </Paragraph>
          <Paragraph>
            Throughout my career, I have been actively involved in teaching and mentoring students. I have had the opportunity to guide Ph.D. and M.Tech students and have served as a teaching assistant in master's and undergraduate courses. This hands-on experience has helped me develop a teaching style that emphasizes clarity and engagement, ensuring that students not only grasp theoretical concepts. Additionally, I have contributed to technical workshops and training programs, where I delivered lectures and provided practical training on topics such as vehicular networks and routing algorithms.
          </Paragraph>
          <Paragraph>
            My experience extends beyond academia. I have done internships at IIT Guwahati, where I contributed to research projects on congestion management in network-on-chip (NoC) architectures and application-aware routing. These experiences have given me a broader understanding of multicore systems, particularly in specialized contexts such as NoC and vehicular networks. 
          </Paragraph>
          <Paragraph>
            My passion for research is reflected in my publications in leading journals and conferences. In addition to research and teaching, I have been actively involved in outreach activities, including organizing high-end workshops, contributing to syllabus preparation, and serving as a reviewer for leading journals and conferences. 
          </Paragraph>
        </Section>

        <Section>
          <SectionHeading>Research Interests</SectionHeading>
          <LikesList>
            <LikesListItem>Emerging Networks</LikesListItem>
            <LikesListItem>Vehicular Adhoc networks</LikesListItem>
            <LikesListItem>Network and System Security</LikesListItem>
            <LikesListItem>Network on Chip</LikesListItem>
          </LikesList>
        </Section>

        <Section>
          <SectionHeading>I Like</SectionHeading>
          <LikesList>
            <LikesListItem>Playing Badminton</LikesListItem>
            <LikesListItem>Walking</LikesListItem>
            <LikesListItem>Coding</LikesListItem>
            <LikesListItem>Traveling</LikesListItem>
          </LikesList>
        </Section>
      </ContentWrapper>
    </AboutContainer>
  );
}

export default About;
