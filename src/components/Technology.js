import React from 'react';
import '../styles/Technology.css';

const Technology = () => {
  const techServices = [
    {
      title: "Advanced Diagnostic Tools",
      description: "Our certified technicians utilize industry-standard telegrapher machines to test movement accuracy and beat error, ensuring your mechanical watch runs with optimal precision."
    },
    {
      title: "Precision Repair Equipment",
      description: "We employ high-precision Burgeon tools for meticulous component handling, ensuring every screw and gear is serviced with utmost care."
    },
    {
      title: "Smartwatch Diagnostics",
      description: "Our technology lab is equipped to handle diagnostics and repairs for leading smartwatches, using manufacturer-compatible tools and software updates."
    }
  ];

  return (
    <section className="technology">
      <h2>Technology</h2>
      <div className="tech-services">
        {techServices.map((service, index) => (
          <div key={index} className="tech-card">
            <div className="tech-header">
              <h3>{service.title}</h3>
              <div className="icon-circle">
                <span className="material-icons">arrow_forward</span>
              </div>
            </div>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;