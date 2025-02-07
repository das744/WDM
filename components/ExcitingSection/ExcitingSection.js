import React from "react";
import "./ExcitingSection.style.css"; // Import the CSS file

const ExcitingSection = () => {
  return (
    <section className="exciting-section">
      {/* Heading & Paragraph */}
      <h2 className="exciting-heading">Stay Ahead with Modern Technologies </h2>
      <p className="exciting-text">
        We build cutting-edge websites using the latest and most secure web technologies.
      </p>

      {/* Continuous Left-to-Right Movement Icons */}
      <div className="icon-container">
        <div className="icon-slider">
          {/* Add your icons here */}
          <i className="fab fa-html5"></i>
          <i className="fab fa-css3-alt"></i>
          <i className="fab fa-js"></i>
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-react" title="React"></i>
        </a>
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-js-square" title="Next.js"></i>
        </a>
        <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-wordpress" title="WordPress"></i>
        </a>
        <a href="https://www.shopify.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-shopify" title="Shopify"></i>
        </a>
        <a href="https://www.google.com/ads" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-google" title="Google Ads"></i>
        </a>
        <a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-google-analytics" title="Google Analytics"></i>
        </a>
          
          <i className="fab fa-aws"></i>
          <i className="fab fa-bootstrap"></i>
          <i className="fas fa-shield-alt"></i> {/* Security */}
          <i className="fas fa-database"></i> {/* Database */}
          <i className="fab fa-wpforms"></i> {/* Forms */}
          {/* Duplicate to create a seamless loop */}
          <i className="fab fa-html5"></i>
          <i className="fab fa-css3-alt"></i>
          <i className="fab fa-js"></i>
          <i className="fab fa-google"></i>
          <i className="fab fa-aws"></i>
          <i className="fab fa-bootstrap"></i>
          <i className="fas fa-shield-alt"></i>  
          <i className="fas fa-database"></i>  
          <i className="fab fa-wpforms"></i>  
        </div>
      </div>
    </section>
  );
};

export default ExcitingSection;
