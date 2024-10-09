import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";  // Importing Header component
import Footer from "./components/Footer";  // Importing Footer component
import Sidebar from "./components/Sidebar";
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
  flex-direction: row; /* Display sidebar and content in a row by default */
  
  /* Ensure that the layout is responsive */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack content and sidebar vertically in mobile */
  }
`;

const Content = styled.div`
  flex: 1; /* Take up the remaining space for the main content */
  padding: 20px;
`;

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Using the Header component */}
        <Layout>
          <Content>
            <MainContent />
          </Content>
          <Sidebar /> {/* Sidebar will move below content in mobile */}
        </Layout>
        <Footer /> {/* Using the Footer component */}
      </div>
    </Router>
  );
}

// Separate out the MainContent logic to keep things cleaner
function MainContent() {
  return (
    <>
      <TitleUpdater /> {/* Component to handle title changes */}
      <Routes>
        <Route path="/" element={<NewsAndUpdates />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/outreach" element={<OutreachActivities />} />
      </Routes>
    </>
  );
}

// TitleUpdater Component to update the document title based on the route
function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    // Update the document title based on the current path
    switch (location.pathname) {
      case "/":
        document.title = "Sarath Babu - News and Updates";
        break;
      case "/about":
        document.title = "Sarath Babu - About Me";
        break;
      case "/resume":
        document.title = "Sarath Babu - Resume";
        break;
      case "/publications":
        document.title = "Sarath Babu - Publications";
        break;
      case "/contact":
        document.title = "Sarath Babu - Contact";
        break;
      case "/outreach":
        document.title = "Sarath Babu - Outreach";
        break;
      default:
        document.title = "Sarath Babu";
    }
  }, [location]);

  return null; // This component doesn't render anything
}

export default App;
