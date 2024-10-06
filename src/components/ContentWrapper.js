// src/components/ContentWrapper.js
import styled from "styled-components";

const ContentWrapper = styled.div`
  width: 90%; /* Use 90% width to fill most of the page */
  max-width: 1200px; /* Maximum width to keep the content readable on large screens */
  background-color: #f9f9f9; /* Light background color for highlighting */
  padding: 1.5rem; /* Padding for the content area */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  margin: 0 auto; /* Center the content wrapper */
`;

export default ContentWrapper;
