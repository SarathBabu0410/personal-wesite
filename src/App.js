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
`;

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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
        document.title = "News and Updates - My Website";
        break;
      case "/about":
        document.title = "About Me - My Website";
        break;
      case "/resume":
        document.title = "Resume - My Website";
        break;
      case "/publications":
        document.title = "Publications - My Website";
        break;
      case "/contact":
        document.title = "Contact - My Website";
        break;
      case "/outreach":
        document.title = "Outreach Activities - My Website";
        break;
      default:
        document.title = "My Website";
    }
  }, [location]);

  return null; // This component doesn't render anything
}

export default App;
