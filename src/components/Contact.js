import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Correct import for faEnvelope

// Styled components
const ContactSection = styled.section`
  padding: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin: 0 auto;
  max-width: 800px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const ContactContent = styled.div`
  flex: 1;
  padding: 1.5rem;
  border: 1px solid #e0e0df;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 100%;
  max-width: 450px; /* Reduced the width for standard look */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 100%;
  }
`;

const SocialMediaContent = styled.div`
  flex: 1;
  padding: 1.5rem;
  border: 1px solid #e0e0df;
  border-radius: 8px;
  background-color: #f9f9f9;
  width: 100%;
  max-width: 450px; /* Same width as the form for consistency */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 100%;
  }
`;

const EmailLink = styled.a`
  color: #3498db;
  text-decoration: none;
  display: flex; /* Use flexbox to align the icon and text */
  align-items: center; /* Center the icon vertically */
  margin-top: 1rem; /* Add space above the email link */
  font-size: 1rem; /* Adjust font size for better visibility */
  
  &:hover {
    text-decoration: underline;
  }
`;

const EmailIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem; /* Space between icon and text */
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px; /* Spacing between icons */
  margin-top: 1rem;
`;

const IconLink = styled.a`
  color: #3498db;
  font-size: 2rem;
  transition: color 0.3s;

  &:hover {
    color: #2980b9;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1rem;
  height: 150px;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;

const StatusSection = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border-top: 1px solid #e0e0df;
  background-color: #f2f2f2;
  width: 100%; /* Full width for mobile */
  max-width: 450px; /* Align width with other sections */
  margin-left: auto; /* Center alignment */
  margin-right: auto; /* Center alignment */

  @media (max-width: 768px) {
    margin-top: 1.5rem;
    padding: 0.75rem;
  }
`;

const StatusText = styled.p`
  color: #333;
  font-size: 1rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

function Contact() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [onlineUsers, setOnlineUsers] = useState(Math.floor(Math.random() * 100)); // Random number for online users

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

      <ContactWrapper>
        {/* Social Media Links */}
        <SocialMediaContent>
          <h3>Feel free to get in touch:</h3>
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
          <p>You can email me at:</p>
          <EmailLink href="mailto:sarathbabu0410@gmail.com">
            <EmailIcon icon={faEnvelope} />
            sarathbabu0410@gmail.com
          </EmailLink>
        </SocialMediaContent>

        {/* Contact Form */}
        <ContactContent>
          <FormContainer
            method="POST"
            action="https://kwes.io/api/foreign/forms/YOUR_FORM_ID" // Replace with your Kwes.io form ID
            className="kwes-form"
          >
            <Input type="text" name="name" placeholder="Your Name" required />
            <Input type="email" name="email" placeholder="Your Email" required />
            <Input type="text" name="subject" placeholder="Subject" required />
            <TextArea name="message" placeholder="Your Message" required></TextArea>
            <Button type="submit">Send</Button>
          </FormContainer>
        </ContactContent>
      </ContactWrapper>

      {/* Status Section */}
      <StatusSection>
        <StatusText>Website Visitors (this browser): {visitorCount}</StatusText>
        <StatusText>Current Online Users: {onlineUsers}</StatusText>
        <StatusText>Last Updated: October 6, 2024</StatusText>
      </StatusSection>
    </ContactSection>
  );
}

export default Contact;
