import React from 'react';

import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import Ticker from './components/ticker/Ticker';
import CollectionShowcase from './components/CollectionShowcase';
import ProductSection from './components/ProductSection';
import HappyCustomers from './components/HappyCustomers';
import Technology from './components/Technology';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';

// Import CSS files
import './styles/CollectionShowcase.css';
import './styles/ProductSection.css';
import './styles/HappyCustomers.css';
import './styles/Technology.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="about-section">
        <Hero />
      </div>
      <div id="product-section">
        <ProductSection />
      </div>
      <CollectionShowcase />
      <div id="happy-customers-section">
        <HappyCustomers />
      </div>
      <div id="technology-section">
        <Technology />
      </div>
      <GetInTouch />
      <Ticker />
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;