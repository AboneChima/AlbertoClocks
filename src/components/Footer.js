import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaSnapchat, FaArrowUp } from 'react-icons/fa';
import { SiAmericanexpress, SiApplepay, SiStripe, SiVisa, SiMastercard, SiPaypal, SiAmazonpay } from 'react-icons/si';
import { BiMap, BiPhone, BiEnvelope } from 'react-icons/bi';
import '../styles/Footer.css';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="contact-section">
            <h2>Contact Us</h2>
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon-container">
                  <BiMap className="contact-icon" />
                </div>
                <p>Aptech Computer School, Onitsha Centre, Nigeria.</p>
              </div>
              <div className="contact-item">
                <div className="icon-container">
                  <BiPhone className="contact-icon" />
                </div>
                <p>Reach us at: +234-805-990-2440</p>
              </div>
              <div className="contact-item">
                <div className="icon-container">
                  <BiEnvelope className="contact-icon" />
                </div>
                <p>contact@albertoclocks.com</p>
              </div>
            </div>
            
            <form action="https://formspree.io/f/xwpbopqg" method="POST" className="contact-form">
              <input type="text" name="name" placeholder="Name" className="form-input" required />
              <textarea 
                name="message" 
                placeholder="Your Message" 
                className="form-input message-input" 
                required
              ></textarea>
              <button type="submit" className="submit-btn">Submit</button>
            </form>

            <div className="social-links">
              <button onClick={() => window.open('https://facebook.com', '_blank')} aria-label="Facebook">
                <FaFacebook />
              </button>
              <button onClick={() => window.open('https://instagram.com', '_blank')} aria-label="Instagram">
                <FaInstagram />
              </button>
              <button onClick={() => window.open('https://twitter.com', '_blank')} aria-label="Twitter">
                <FaTwitter />
              </button>
              <button onClick={() => window.open('https://linkedin.com', '_blank')} aria-label="LinkedIn">
                <FaLinkedin />
              </button>
              <button onClick={() => window.open('https://snapchat.com', '_blank')} aria-label="Snapchat">
                <FaSnapchat />
              </button>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h3>Our Company</h3>
              <nav>
                <ul>
                  <li><button onClick={() => window.location.href = '/about'}>About</button></li>
                  <li><button onClick={() => window.location.href = '/gallery'}>Gallery</button></li>
                  <li><button onClick={() => window.location.href = '/reviews'}>Rave Reviews</button></li>
                  <li><button onClick={() => window.location.href = '/store-locator'}>Store Locator</button></li>
                  <li><button onClick={() => window.location.href = '/privacy'}>Privacy Policy</button></li>
                </ul>
              </nav>
            </div>

            <div className="link-column">
              <h3>Products</h3>
              <nav>
                <ul>
                  <li><button onClick={() => window.location.href = '/collections'}>Our Collections</button></li>
                  <li><button onClick={() => window.location.href = '/vintage'}>Vintage Timepieces</button></li>
                  <li><button onClick={() => window.location.href = '/luxury'}>Luxury Timepieces</button></li>
                  <li><button onClick={() => window.location.href = '/smart-watches'}>Smart Watches</button></li>
                  <li><button onClick={() => window.location.href = '/prices'}>Prices Drop</button></li>
                </ul>
              </nav>
            </div>

            <div className="link-column">
              <h3>Services</h3>
              <nav>
                <ul>
                  <li><button onClick={() => window.location.href = '/technology'}>Technology</button></li>
                  <li><button onClick={() => window.location.href = '/appraisal'}>Appraisal</button></li>
                  <li><button onClick={() => window.location.href = '/repairs'}>Repairs</button></li>
                  <li><button onClick={() => window.location.href = '/support'}>Support</button></li>
                  <li><button onClick={() => window.location.href = '/payment'}>Secure Payment</button></li>
                </ul>
              </nav>
            </div>

            <div className="link-column">
              <h3>Features</h3>
              <nav>
                <ul>
                  <li><button onClick={() => window.location.href = '/sitemap'}>Site map</button></li>
                  <li><button onClick={() => window.location.href = '/cart'}>Add to Cart</button></li>
                  <li><button onClick={() => window.location.href = '/favorite'}>Favorite</button></li>
                  <li><button onClick={() => window.location.href = '/legal'}>Legal Notice</button></li>
                  <li><button onClick={() => window.location.href = '/terms'}>Terms and Conditions</button></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="payment-methods">
            <SiApplepay />
            <SiStripe />
            <SiVisa />
            <SiMastercard />
            <SiAmericanexpress />
            <SiPaypal />
            <SiAmazonpay />
          </div>
          <p className="copyright">Copyright © Alberto Clocks. All Right Reserved 2025.</p>
        </div>
      </footer>
      <button 
        className={`scroll-to-top ${showScroll ? 'show' : ''}`}
        onClick={scrollTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default Footer;