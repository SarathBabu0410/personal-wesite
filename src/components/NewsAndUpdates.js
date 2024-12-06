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
  transition: transform 0.3s ease-in-out;
  animation: ${fadeIn} 1s ease-out;

  &:hover {
    transform: scale(1.05);
  }

  /* Special styling for highlighted event (paper accepted) */
  &.highlighted {
    background-color: #e3f2fd; /* Light blue background */
    border-left: 6px solid #3498db; /* Blue left border */
  }
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
  // {
  //   title: "New Research Project Launched",
  //   description: "A new project focusing on AI and cybersecurity has been launched.",
  //   date: "October 1, 2024",
  // },
  // {
  //   title: "Workshop on Vehicular Networks",
  //   description: "Join us for an in-depth workshop on the latest in vehicular network technology.",
  //   date: "October 5, 2024",
  // },
  {
    title: "Papper accepted in Sinconf24 - Sidney AuAustralia",
    description: "Critical Behavior Sequence Monitoring for Early Malware Detection",
    date: "December 2, 2024",
  },
];

// Array of quotes
const quotes = [
  "Research is what I'm doing when I don't know what I'm doing. - Wernher von Braun",
  "The best way to predict the future is to invent it. - Alan Kay",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Science is not only compatible with spirituality; it is a profound source of spirituality. - Carl Sagan",
  "The important thing is not to stop questioning. Curiosity has its own reason for existing. - Albert Einstein",
  "Our grandmother taught us to retain dignity at all costs, a value that’s stayed with me until today. – Ratan Tata",
  "The greatest pleasure I've had is trying to do something, everybody says 'could not be done.- Ratan Tata",
  "A person who won't read has no advantage over one who can't read. -- Mark Twain",
  "Do something everyday that you don't want to do; this is the golden rule for acquiring the habit of doing your duty without pain.  -- Mark Twain",
  "I don't like to commit myself about heaven and hell - you see, I have friends in both places  ~ Mark Twain",
  "Prosperity is the best protector of principle  ~ Mark Twain",
  "When people talk, listen completely. Most people never listen ~ Ernest Hemingway",
  "The most basic of all human needs is the need to understand and be understood. The best way to understand people is to listen to them ~ Ralph Nichols",
  "Storytelling is the most powerful way to put ideas into the world today ~ Robert McKee",
  "If you tell me, it’s an essay. If you show me, it’s a story ~ Barbara Greene",
  "I had no idea that being your authentic self could make me as rich as I've become. If I had, I'd have done it a lot earlier ~ Oprah Winfrey",
  "As a small businessperson, you have no greater leverage than the truth ~ John Whittier",
  "There is no persuasiveness more effectual than the transparency of a single heart, of a sincere life ~ Joseph Berber Lightfoot",
  "Individuals play the game, but teams beat the odds ~ SEAL Team Saying",
  "Alone we can do so little; together we can do so much ~ Helen Keller",
  "Life is 10% what happens to you and 90% how you react to it ~ Charles Swindoll",
  "Your most unhappy customers are your greatest source of learning ~ Bill Gates",
  "When you're finished changing, you're finished ~ Ben Franklin",
  "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change ~ Charles Darwin",
  "The only way to do great work is to love the work you do ~ Steve Jobs",
  "I have no special talents. I am only passionately curious ~ Albert Einstein",
  "A true leader always keeps an element of surprise up his sleeve, which others cannot grasp but which keeps his public excited and breathless ~ Charles de Gaulle",
  "Surprise is the greatest gift which life can grant us ~ Boris Pasternak",
  "Less isn't more; just enough is more ~ Milton Glaser",
  "Simplicity is the ultimate sophistication ~ Leonardo daVinci",
  "I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder ~ Gilbert K Chesterton",
  "The essence of all beautiful art, all great art, is gratitude ~ Friedrich Nietzsche",
  "Management is doing things right; leadership is doing the right things ~ Peter F. Drucker",
  "If your actions inspire others to dream more, learn more, do more and become more, you are a leader ~ John Quincy Adams",
  "Leadership and learning are indispensable to each other ~ John F. Kennedy",
  "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great ~ Mark Twain",
  "The most dangerous of all falsehoods is a slightly distorted truth ~ G.C. Lichtenberg",
  "There is nothing unequal as the equal treatment of unequals ~ Aristotle",
  "Wisdom begins with wonder ~ Socrates",
  "I hear and I forget. I see and I remember. I do and I understand ~ Confucius",
  "Fair is foul and foul is fair ~ Shakespeare, Macbeth",
  "I wasted time and now doth time waste me ~ William Shakespeare",
  "Better an end with horror, than a horror without end ~ German proverb",
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
