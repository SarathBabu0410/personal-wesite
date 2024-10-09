import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import Sidebar from "./Sidebar"; // Import Sidebar

// Global font import
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
  body {
    font-family: 'Lato', sans-serif;
  }
`;

// Keyframes for fade-in animation
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

// Container for the page
const NewsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column; /* Stack content vertically */
  @media (max-width: 768px) {
    padding-top: 80px; /* Add padding for navbar */
  }
`;

const QuoteBox = styled.div`
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  animation: ${fadeIn} 1s ease-out;
  height: 33vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuoteText = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  color: #0077cc;
  text-align: center;
  margin: 0;
`;

const Heading = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
`;

const NewsCard = styled.div`
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
`;

const NewsTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const NewsDescription = styled.p`
  color: #555;
  line-height: 1.5;
`;

const NewsDate = styled.p`
  font-size: 0.9rem;
  color: #999;
  margin-top: 0.
