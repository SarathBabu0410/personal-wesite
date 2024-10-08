import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Function to set meta tags dynamically
const setMetaTags = () => {
  const metaDescription = document.createElement('meta');
  metaDescription.name = "description";
  metaDescription.content = "Web site created using create-react-app";
  document.head.appendChild(metaDescription);

  const metaViewport = document.createElement('meta');
  metaViewport.name = "viewport";
  metaViewport.content = "width=device-width, initial-scale=1";
  document.head.appendChild(metaViewport);
};

setMetaTags(); // Call the function to set the meta tags

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
