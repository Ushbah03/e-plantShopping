import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              background: 'rgba(16, 185, 129, 0.2)',
              color: '#6ee7b7',
              borderRadius: '999px',
              fontSize: '13.5px',
              fontWeight: 700,
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              marginBottom: '16px',
              border: '1px solid rgba(110, 231, 183, 0.35)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
            }}>
              🌿 Botanical Sanctuary
            </span>
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
         
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started <span>&rarr;</span>
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList onHomeClick={handleHomeClick} />
      </div>
    </div>
  );
}

export default App;
