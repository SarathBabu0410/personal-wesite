import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

// Global font import
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

  body {
    font-family: 'Poppins', sans-serif; /* Apply the Poppins font */
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
  padding: 3rem 2rem;
  max-width: 1200px; /* Maximum width for larger screens */
  margin: 0 auto;
  background-color: #f8f8f8; /* Light background for better contrast */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-out; /* Fade-in animation */

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

// Box for the quotes section
const QuoteBox = styled.div`
  padding: 2rem;
  background-color: #0077cc; /* Subtle blue background */
  color: #fff;
  border-radius: 8px;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1.5s ease-out; /* Fade-in animation */
  text-align: center;
`;

const QuoteText = styled.p`
  font-size: 1.3rem;
  font-style: italic;
  line-height: 1.6;
`;

// Header for the News and Updates section
const Heading = styled.h1`
  text-align: center;
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase; /* Adding a touch of sophistication */
  letter-spacing: 1px;
`;

// Card container for each news item
const NewsCard = styled.div`
  background-color: #ffffff; /* White background for news cards */
  padding: 2rem;
  border-radius: 12px; /* More rounded corners */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Subtle shadow for cards */
  margin-bottom: 2rem; /* Space between cards */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Smooth hover effect */

  &:hover {
    transform: translateY(-10px); /* Lift the card on hover */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
  }
`;

const NewsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  text-align: center; /* Center the title */
`;

const NewsDescription = styled.p`
  color: #555;
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  text-align: center; /* Center align the description */
`;

const NewsDate = styled.p`
  font-size: 0.9rem;
  color: #888;
  text-align: center; /* Center align the date */
`;

// Sample news items
const newsItems = [
  {
    title: "Paper titled: Critical Behavior Sequence Monitoring for Early Malware Detection, accepted in Sinconf24 - Sidney, Australia",
    description: "This paper explores innovative approaches in early malware detection and behavior monitoring, to be presented at Sinconf24, Sidney, Australia.",
    date: "December 2, 2024",
  },
];

// Array of quotes
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