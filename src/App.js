import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";  // Importing Header component
import Footer from "./components/Footer";  // Importing Footer component
import Sidebar from "./components/Sidebar"; // Importing Sidebar component
import About from "./components/About";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import OutreachActivities from './components/OutreachActivities';
import NewsAndUpdates from './components/NewsAndUpdates';
import Resume from './components/Resume';
import styled from "styled-components";

// Layout structure to include both the sidebar and the content
const Layout = styled.div`
  display: flex;
  flex-direction: row; /* Sidebar and content side by side in normal view */
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack vertically on mobile */
  }
`;

// Main content area for each page
const ContentArea = styled.div`
  flex-grow: 1; /* Take up remaining space next to the sidebar */
  padding: 2rem;
  background-color: #ffffff; /* White background for content area */
`;

function App() {
  const location = useLocation(); // Get current location
  const isNewsPage = location.pathname === "/"; // Check if the current page is News and Updates

  return (
    <Router>
      <div className="App">
        <Header /> {/* Using the Header component */}
        <TitleUpdater /> {/* Dynamically updates the document title */}
        <Layout>
          {/* Conditionally render the Sidebar only for News and Updates page */}
          <Sidebar isVisible={isNewsPage} /> 
          
          {/* Define routes and content for each page */}
          <ContentArea>
            <Routes>
              {/* News and Updates Page */}
              <Route path="/" element={<NewsAndUpdates />} />
              
              {/* Other Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/outreach" element={<OutreachActivities />} />
            </Routes>
          </ContentArea>
        </Layout>
        <Footer /> {/* Using the Footer component */}
      </div>
    </Router>
  );
}

// TitleUpdater Component to update the document title based on the route
function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    // Update the document title based on the current path
    switch (location.pathname) {
      case "/":
        document.title = "Sarath Babu - News & Updates";
        break;
      case "/about":
        document.title = "About Me";
        break;
      case "/resume":
        document.title = "Resume";
        break;
      case "/publications":
        document.title = "Publications";
        break;
      case "/contact":
        document.title = "Contact";
        break;
      case "/outreach":
        document.title = "Outreach";
        break;
      default:
        document.title = "Sarath Babu";
    }
  }, [location]);

  return null; // This component doesn't render anything
}

export default App;
