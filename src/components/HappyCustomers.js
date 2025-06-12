import React from 'react';
import '../styles/HappyCustomers.css';

const HappyCustomers = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Jordan",
      image: `https://api.dicebear.com/6.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4`, 
      review: "Service was impeccable! My watch feels brand new, and the team was super friendly."
    },
    {
      id: 2,
      name: "Riley Taylor",
      image: `https://api.dicebear.com/6.x/avataaars/svg?seed=Riley&backgroundColor=d1d4f9`,
      review: "An effortless experience! The watch selection is unbeatable."
    },
    {
      id: 3,
      name: "Morgan Casey",
      image: `https://api.dicebear.com/6.x/avataaars/svg?seed=Morgan&backgroundColor=c0aede`,
      review: "Friendly and professional service. Found the perfect gift and learned a lot about watches!"
    }
  ];

  return (
    <section className="happy-customers">
      <div className="customers-header">
        <h2>Our happy customers</h2>
        <h3>Rave reviews</h3>
        <p>See why our clients rave about us! From exquisite timepieces to top-notch service, hear their stories.</p>
      </div>
      
      <div className="reviews-container">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <img src={review.image} alt={review.name} className="reviewer-image" />
            <h4>{review.name}</h4>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyCustomers;