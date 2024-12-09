import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

// Global font import
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap'); /* Adding a serif font for newspaper-like look */

  body {
    font-family: 'Poppins', sans-serif;
  }
`;

// Keyframes for fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Container for the page
const NewsContainer = styled.div`
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

// Header for the News and Updates section
const Heading = styled.h1`
  text-align: center;
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

// Card container for each news item
const NewsCard = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  background: url('https://www.transparenttextures.com/patterns/diagonal-stripes.png') repeat, #ffffff; /* Adding newspaper-like background */
  border: 2px solid #ddd; /* Adding border for clarity */
  padding-top: 3rem; /* Adding extra padding on top for better spacing */

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const NewsTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  font-family: 'Merriweather', serif; /* Serif font for a newspaper-style look */
  text-align: center;
`;

const NewsDescription = styled.p`
  color: #555;
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const NewsDate = styled.p`
  font-size: 0.9rem;
  color: #888;
  text-align: center;
`;

// Sample news items
const newsItems = [
  {
    title: "Paper titled: Critical Behavior Sequence Monitoring for Early Malware Detection, accepted in Sinconf24 - Sidney, Australia",
    description: "This paper explores innovative approaches in early malware detection and behavior monitoring, to be presented at Sinconf24, Sidney, Australia.",
    date: "December 2, 2024",
  },
];

// Array of quotes (no changes here)
const quotes = [
  "Research is what I'm doing when I don't know what I'm doing. - Wernher von Braun",
  "The best way to predict the future is to invent it. - Alan Kay",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  // Add more quotes as needed
];

const NewsAndUpdates = () => {
  // State to hold the random quote
  const [randomQuote, setRandomQuote] = useState("");

  // Function to get a random quote
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  // Use effect to set a random quote on component mount
  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <NewsContainer>
      <GlobalStyle /> {/* Apply global styles */}

      {/* Quotes Section */}
      <QuoteBox>
        <QuoteText>{randomQuote}</QuoteText>
      </QuoteBox>

      <Heading>News and Updates</Heading>

      {newsItems.length > 0 ? (
        newsItems.map((item, index) => (
          <NewsCard key={index}>
            <NewsTitle>{item.title}</NewsTitle>
            <NewsDescription>{item.description}</NewsDescription>
            <NewsDate>{item.date}</NewsDate>
          </NewsCard>
        ))
      ) : (
        <p>No updates available at this time.</p>
      )}
    </NewsContainer>
  );
};

export default NewsAndUpdates;