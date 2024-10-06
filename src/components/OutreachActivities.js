import React from 'react';
import styled from 'styled-components';

// Container for the page
const OutreachContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

// Fade-in animation keyframes
const fadeIn = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px); /* Slide-in from below */
    }
    to {
      opacity: 1;
      transform: translateY(0); /* Final position */
    }
  }
`;

// Heading with simple fade-in animation
const Heading = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
  font-family: 'Lato', sans-serif;
  animation: fadeIn 1s ease-out; /* Fade-in animation for the heading */
`;

// Single section containing all outreach activities
const ActivitySection = styled.div`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow */
  animation: fadeIn 1s ease-out;
  animation-fill-mode: both; /* Ensures the animation effect stays in place after completion */
`;

const ActivityItem = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1rem;
`;

const OutreachActivities = () => {
  return (
    <OutreachContainer>
      <style>{fadeIn}</style> {/* Apply fade-in animation */}
      <Heading>Outreach Activities</Heading>
      
      {/* All outreach activities wrapped inside a single div */}
      <ActivitySection>
        <ActivityItem>
          Technical-talk/ Hands-on training in SERB Karyashala High-End Workshop on "Developing Robust and Secure Routing Algorithms for real-time Vehicular Networks", at National Institute of Technology Calicut, Kerala.
        </ActivityItem>
        <ActivityItem>
          Assisted in syllabus preparation for the elective course titled "CSXXXXY: Vehicular Networks- From Theory to Practice" offered at National Institute of Technology, Calicut, Kerala.
        </ActivityItem>
        <ActivityItem>
          Hands-on training at Indian Institute of Information Technology (IIIT) Kottayam for AICTE Training And Learning (ATAL) Academy Online Elementary FDP on "Sensor Data Analytics".
        </ActivityItem>
      </ActivitySection>
    </OutreachContainer>
  );
};

export default OutreachActivities;
