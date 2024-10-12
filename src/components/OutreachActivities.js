import React from 'react';
import styled, { keyframes } from 'styled-components';

// Container for the page
const OutreachContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
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
  font-family: 'Lato', sans-serif;
  animation: ${fadeIn} 1s ease-out; /* Fade-in animation for the heading */
`;

// Single section containing all outreach activities
const ActivitySection = styled.div`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow */
  animation: ${fadeIn} 1s ease-out;
  animation-fill-mode: both; /* Ensures the animation effect stays in place after completion */
`;

// Styled component for each activity item
const ActivityItem = styled.li`
  font-family: 'Lato', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1rem;
  position: relative; /* For animation */
  padding-left: 1.5rem; /* Padding to create space for the bullet */
  
  /* Adding a custom bullet point */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.9rem; /* Adjust for vertical alignment */
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #f39c12; /* Color of the bullet */
    animation: ${fadeIn} 0.5s ease-in; /* Animation for bullet */
  }
`;

const OutreachActivities = () => {
  return (
    <OutreachContainer>
      <Heading>Outreach Activities</Heading>
      
      {/* All outreach activities wrapped inside a single div */}
      <ActivitySection>
        <ul>
          <ActivityItem>
            Technical talk/Hands-on training in SERB Karyashala High-End Workshop on "Developing Robust and Secure Routing Algorithms for real-time Vehicular Networks" at National Institute of Technology Calicut, Kerala.
          </ActivityItem>
          <ActivityItem>
            Assisted in syllabus preparation for the elective course titled "CSXXXXY: Vehicular Networks- From Theory to Practice" offered at National Institute of Technology, Calicut, Kerala.
          </ActivityItem>
          <ActivityItem>
            Hands-on training at Indian Institute of Information Technology (IIIT) Kottayam for AICTE Training And Learning (ATAL) Academy Online Elementary FDP on "Sensor Data Analytics".
          </ActivityItem>
        </ul>
      </ActivitySection>
    </OutreachContainer>
  );
};

export default OutreachActivities;
