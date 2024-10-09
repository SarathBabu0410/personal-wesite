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
  
  @media (max-width: 768px) {
    flex-direction: column; /* Stack vertically on mobile */
  }
`;

const NewsAndUpdatesLayout = styled.div`
  display: flex;
  flex-direction: column; /* Sidebar on top for mobile view */
`;

// Wrapper for the main content area
const MainContent = styled.div`
  flex-grow: 1; /* Take remaining space */
  padding: 1rem; /* Add padding */
`;

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Using the Header component */}
        <TitleUpdater /> {/* Dynamically updates the document title */}
        <Layout>
          <Routes>
            {/* News and Updates Page - Sidebar at the top in mobile */}
            <Route 
              path="/" 
              element={
                <NewsAndUpdatesLayout>
                  <Sidebar isTop /> {/* Sidebar at the top for mobile view */}
                  <MainContent>
                    <NewsAndUpdates />
                  </MainContent>
                </NewsAndUpdatesLayout>
              } 
            />
            {/* Other Pages - Sidebar on the side */}
            <Route 
              path="/about" 
              element={
                <>
                  <Sidebar /> {/* Sidebar on the side for other pages */}
                  <MainContent>
                    <About />
                  </MainContent>
                </>
              } 
            />
            <Route 
              path="/resume" 
              element={
                <>
                  <Sidebar /> {/* Sidebar on the side for other pages */}
                  <MainContent>
                    <Resume />
                  </MainContent>
                </>
              } 
            />
            <Route 
              path="/publications" 
              element={
                <>
                  <Sidebar /> {/* Sidebar on the side for other pages */}
                  <MainContent>
                    <Publications />
                  </MainContent>
                </>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <>
                  <Sidebar /> {/* Sidebar on the side for other pages */}
                  <MainContent>
                    <Contact />
                  </MainContent>
                </>
              } 
            />
            <Route 
              path="/outreach" 
              element={
                <>
                  <Sidebar /> {/* Sidebar on the side for other pages */}
                  <MainContent>
                    <OutreachActivities />
                  </MainContent>
                </>
              } 
            />
          </Routes>
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
