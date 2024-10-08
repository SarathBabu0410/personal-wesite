import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ContactSection = styled.section`
  padding: 3rem;
  text-align: center;
`;

const ContactContent = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 2rem;
  border: 1px solid #e0e0df;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const EmailLink = styled.a`
  color: #3498db;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialMediaContainer = styled.div`
  margin-top: 1.5rem;
`;

const IconLink = styled.a`
  margin: 0 10px;
  color: #3498db;
  font-size: 1.5rem;
  transition: color 0.3s;
  &:hover {
    color: #2980b9;
  }
`;

const StatusSection = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border-top: 1px solid #e0e0df;
  background-color: #f2f2f2;
`;

const StatusText = styled.p`
  color: #333;
  font-size: 1rem;
  margin: 0;
`;

function Contact() {
  const [visitorCount, setVisitorCount] = useState(0);

  // Increment the visitor count using localStorage
  useEffect(() => {
    const currentCount = localStorage.getItem('visitorCount');
    const newCount = currentCount ? parseInt(currentCount) + 1 : 1;
    localStorage.setItem('visitorCount', newCount);
    setVisitorCount(newCount);
  }, []);

  return (
    <ContactSection>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Get in Touch
      </motion.h2>
      <ContactContent>
        <p>Feel free to get in touch. You can email me at:</p>
        <p>
          <EmailLink href="mailto:sarathbabu0410@gmail.com">sarathbabu0410@gmail.com</EmailLink>
        </p>
        

        {/* Social Media Icons */}
        <SocialMediaContainer>
          <IconLink href="https://www.linkedin.com/in/babu-sarath" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </IconLink>
          <IconLink href="https://www.instagram.com/picturesstack" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </IconLink>
          <IconLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </IconLink>
          <IconLink href="https://github.com/SarathBabu0410" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </IconLink>
          <IconLink href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </IconLink>
        </SocialMediaContainer>
      </ContactContent>

      {/* Status Section */}
      <StatusSection>
        <StatusText>Website Visitors (this browser): {visitorCount}</StatusText>
        <StatusText>Current Online Users: 56</StatusText>
        <StatusText>Last Updated: October 6, 2024</StatusText>
      </StatusSection>
    </ContactSection>
  );
}

export default Contact;
