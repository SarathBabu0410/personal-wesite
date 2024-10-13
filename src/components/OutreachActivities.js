import React from 'react';
import styled, { keyframes } from 'styled-components';

// Container for the page
const OutreachContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem; /* Reduced padding for mobile */
  }
`;

// Fade-in animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px); /* Slide-in from below */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* Final position */
  }
`;

// Heading with simple fade-in animation
const Heading = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
  animation: ${fadeIn} 1s ease-out; /* Fade-in animation for the heading */
  font-size: 2rem; /* Adjusted font size for better visibility */

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Smaller font size for mobile */
  }
`;

// Individual Activity Item Container
const ActivityItemContainer = styled.div`
  background-color: #f9f9f9;
  padding: 1.5rem;
  margin: 1rem 0; /* Space between each activity item */
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow */
  animation: ${fadeIn} 1s ease-out;
`;

// Styled component for each activity description
const ActivityDescription = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
`;

// OutreachActivities component
const OutreachActivities = () => {
  return (
    <OutreachContainer>
      <Heading>Outreach Activities</Heading>
      
      {/* All outreach activities wrapped inside separate divs */}
      <ActivityItemContainer>
        <ActivityDescription>
          Technical talk/Hands-on training in the SERB Karyashala High-End Workshop on "Developing Robust and Secure Routing Algorithms for Real-time Vehicular Networks" at the National Institute of Technology Calicut, Kerala.
        </ActivityDescription>
      </ActivityItemContainer>
      <ActivityItemContainer>
        <ActivityDescription>
          Assisted in syllabus preparation for the elective course titled "CSXXXXY: Vehicular Networks - From Theory to Practice" offered at the National Institute of Technology, Calicut, Kerala.
        </ActivityDescription>
      </ActivityItemContainer>
      <ActivityItemContainer>
        <ActivityDescription>
          Conducted hands-on training at the Indian Institute of Information Technology (IIIT) Kottayam for the AICTE Training And Learning (ATAL) Academy Online Elementary FDP on "Sensor Data Analytics".
        </ActivityDescription>
      </ActivityItemContainer>
    </OutreachContainer>
  );
};

export default OutreachActivities;
