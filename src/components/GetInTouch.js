import React from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import '../styles/GetInTouch.css';

const GetInTouch = () => {
  return (
    <section className="get-in-touch">
      <div className="expert-image">
        <img src="/assets/images/gallery3.jpg" alt="Watch Expert" />
      </div>
      <div className="get-in-touch-content">
        <div className="get-in-touch-header">
          <span className="subtitle">GET IN TOUCH</span>
          <h2>Chat with Our Experts</h2>
          <p>We're ready to help with your luxury timepiece needs, appraisal and repairs.</p>
        </div>

        <div className="contact-cards">
          <div className="contact-card">
            <div className="icon-wrapper">
              <FiMail className="contact-icon" />
            </div>
            <h4>Send an Email</h4>
            <p>Reach out whenever you like.</p>
            <a href="mailto:albertoclocks@gmsil.com">albertoclocks@gmail.com</a>
          </div>

          <div className="contact-card">
            <div className="icon-wrapper">
              <FiPhone className="contact-icon" />
            </div>
            <h4>Give Us a Call</h4>
            <p>We're here Mon - Fri, 8am to 5pm.</p>
            <a href="tel:+2348059902440">+234-805-990-2440</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;