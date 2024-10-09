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
`;

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Using the Header component */}
        <Layout>
          <Sidebar />
          <TitleUpdater /> {/* Component to handle title changes */}
          <Routes>
            <Route path="/" element={<NewsAndUpdates />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/outreach" element={<OutreachActivities />} />
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
