import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import googleScholarIcon from '../assets/googlescholar.png'; // Path to your Google Scholar icon
import dblpIcon from '../assets/dblp.jpeg'; // Path to your DBLP icon
import scopusIcon from '../assets/scopus.png'; // Path to your Scopus icon
import orcidIcon from '../assets/orcid.png'; // Path to your ORCID icon

const PubSection = styled.section`
  padding: 3rem;
  text-align: center;
`;

const ProfileLinks = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center; /* Center the icons horizontally */

  a {
    margin: 0 1rem;
    color: #007bff; /* Default color */
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    margin-right: 0.5rem; /* Space between icon and text */
    width: 24px; /* Adjust icon size */
    height: 24px; /* Adjust icon size */
  }
`;

// Div container for the publication list
const PublicationListContainer = styled.div`
  max-width: 600px; /* Limit width for better readability */
  margin: 0 auto; /* Center the list */
  text-align: left; /* Align text to the left */
`;

const PublicationList = styled.ul`
  list-style-type: disc; /* Add bullet points */
  padding-left: 1.5rem; /* Indentation for the list */
  margin: 0; /* Remove margin */
`;

const publications = [
  {
    title: "BD-MDLC: Behavior Description-Based Enhanced Malware Detection for Windows Environment using Longformer Classifier",
    journal: "Computers & Security",
    year: 2024,
  },
  {
    title: "CDSPAN: A Collaborative Distributed SPANner backbone for multiple source multicast routing in vehicular network",
    journal: "IEEE Transactions on Vehicular Technology",
    year: 2024,
  },
  {
    title: "DTMR: An adaptive distributed tree-based multicast routing protocol for vehicular networks.",
    journal: "Computer Standards & Interfaces",
    year: 2022,
  },
  {
    title: "A comprehensive survey on simulators, emulators, and testbeds for VANETs.",
    journal: "International Journal of Communication Systems",
    year: 2022,
  },
  {
    title: "Critical packet prioritization by slack-aware re-routing in on-chip networks.",
    journal: "Twelfth IEEE/ACM International Symposium on Networks-on-Chip (NOCS).",
    year: 2018,
  },
  {
    title: "Performance Enhancement of NoCs Using Single Cycle Deflection Routers and Adaptive Priority Schemes.",
    journal: "VLSI Design and Test: 22nd International Symposium, VDAT 2018.",
    year: 2019,
  },
  {
    title: "Secure routing in software-defined networking and Internet of Things for big data.",
    journal: "IET Handbook of Big Data Analytics Volume 2: Applications in ICT, security, and business analytics.",
    year: 2021,
  },
];

function Publications() {
  return (
    <PubSection>
      <h2>Publications</h2>
      <ProfileLinks>
        <a href="https://scholar.google.com/citations?user=O4sNzkoAAAAJ&hl=en&oi=sra" target="_blank" rel="noopener noreferrer">
          <img src={googleScholarIcon} alt="Google Scholar" /> Google Scholar
        </a>
        <a href="https://dblp.org/pid/310/0220.html" target="_blank" rel="noopener noreferrer">
          <img src={dblpIcon} alt="DBLP" /> DBLP
        </a>
        <a href="https://www.scopus.com" target="_blank" rel="noopener noreferrer">
          <img src={scopusIcon} alt="Scopus" /> Scopus
        </a>
        <a href="https://orcid.org/0000-0003-3823-2213" target="_blank" rel="noopener noreferrer">
          <img src={orcidIcon} alt="ORCID" /> ORCID
        </a>
      </ProfileLinks>
      <PublicationListContainer>
        <PublicationList>
          {publications.map((pub, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <strong>{pub.title}</strong>, <em>{pub.journal}</em> ({pub.year})
            </motion.li>
          ))}
        </PublicationList>
      </PublicationListContainer>
    </PubSection>
  );
}

export default Publications;
