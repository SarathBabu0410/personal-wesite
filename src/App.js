import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

export default App;

