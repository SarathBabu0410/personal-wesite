import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

// Global font import
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

  body {
    font-family: 'Lato', sans-serif; /* Apply the Lato font */
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
  max-width: 1200px; /* Maximum width for larger screens */
  margin: 0 auto;
`;

// Box for the quotes section
const QuoteBox = styled.div`
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 1.5rem; /* Space between quotes and news box */
  animation: ${fadeIn} 1s ease-out; /* Fade-in animation */
  height: 33vh; /* Take 1/3 of the viewport height */
  display: flex; /* Center content vertically */
  align-items: center; /* Align items in the center vertically */
  justify-content: center; /* Center content horizontally */
`;

const QuoteText = styled.p`
  font-size: 1.5rem; /* Larger font for quotes */
  font-style: italic;
  color: #0077cc; /* Change color for better visibility */
  text-align: center;
  margin: 0;
`;

// Header for the News and Updates section
const Heading = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
  font-family: 'Lato', sans-serif;
`;

// Card container for each news item
const NewsCard = styled.div`
  background-color: #ffffff; /* White background for news cards */
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle shadow for cards */
  margin-bottom: 1.5rem; /* Space between cards */
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
  margin-top: 0.5rem;
`;

// Sample news items
const newsItems = [
  {
    title: "New Research Project Launched",
    description: "A new project focusing on AI and cybersecurity has been launched.",
    date: "October 1, 2024",
  },
  {
    title: "Workshop on Vehicular Networks",
    description: "Join us for an in-depth workshop on the latest in vehicular network technology.",
    date: "October 5, 2024",
  },
  {
    title: "Publication in Leading Journal",
    description: "A recent paper has been accepted for publication in a leading journal.",
    date: "October 7, 2024",
  },
];

// Array of quotes
const quotes = [
  "Research is what I'm doing when I don't know what I'm doing. - Wernher von Braun",
  "The best way to predict the future is to invent it. - Alan Kay",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Science is not only compatible with spirituality; it is a profound source of spirituality. - Carl Sagan",
  "The important thing is not to stop questioning. Curiosity has its own reason for existing. - Albert Einstein",
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

      {newsItems.length > 0 ? ( // Check if there are news items
        newsItems.map((item, index) => (
          <NewsCard key={index}>
            <NewsTitle>{item.title}</NewsTitle>
            <NewsDescription>{item.description}</NewsDescription>
            <NewsDate>{item.date}</NewsDate>
          </NewsCard>
        ))
      ) : (
        <p>No updates available at this time.</p> // Message if no news items
      )}
    </NewsContainer>
  );
};

export default NewsAndUpdates;
