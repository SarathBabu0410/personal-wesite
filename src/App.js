import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import OutreachActivities from './components/OutreachActivities';
import Footer from "./components/Footer";
import styled from "styled-components";
import NewsAndUpdates from './components/NewsAndUpdates';
import Resume from './components/Resume';

// Layout structure to include both the sidebar and the content
const Layout = styled.div`
  display: flex;
  flex-direction: row; /* Default to row for larger screens */
  
  @media (max-width: 768px) {
    flex-direction: column; /* Stack vertically on smaller screens */
  }
`;

const MainContent = styled.div`
  flex: 1; /* Take up remaining space */
  padding: 20px; /* Padding for main content area */
`;

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Layout>
          <Sidebar />
          <MainContent>
            <TitleUpdater /> {/* Component to handle title changes */}
            <Routes>
              <Route path="/" element={<NewsAndUpdates />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/outreach" element={<OutreachActivities />} />
            </Routes>
          </MainContent>
        </Layout>
        <Footer />
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
        document.title = "Sarath Babu";
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
