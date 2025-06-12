import React, { useState } from 'react';

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Add categories data
  const categories = [
    {
      name: 'Vintage Timepieces',
      subcategories: [
        { title: 'Luxury Watches', description: 'Premium timepieces for the discerning collector' },
        { title: 'Limited Editions', description: 'Exclusive and rare Rolex models' }
      ]
    },
    {
      name: 'Luxury Watches',
      subcategories: [
        { title: 'Fashion Watches', description: 'Contemporary designs for modern style' },
        { title: 'Bestsellers', description: 'Our most popular Michael Kors selections' }
      ]
    },
    {
      name: 'Smart Watches',
      subcategories: [
        { title: 'Antique Clocks', description: 'Timeless pieces with historical value' },
        { title: 'Wall Clocks', description: 'Statement pieces for your home' }
      ]
    }
  ];

  // Add toggleCategory function
  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  // Add renderStars function
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className="star">
          {i < rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  const products = [
    {
      id: 1,
      name: "Casio A500WA",
      price: 1500,
      rating: 4.5,
      image: "/assets/images/casio1.jpg"
    },
    {
      id: 2,
      name: "Casio Royale",
      price: 580,
      rating: 4.5,
      image: "/assets/images/casio2.jpg"
    },
    {
      id: 3,
      name: "Casio Time Royale",
      price: 6800,
      rating: 4.5,
      image: "/assets/images/casio3.jpg"
    },
    {
      id: 4,
      name: "Casio A158WA",
      price: 78,
      rating: 4.5,
      image: "/assets/images/casio4.jpg"
    },
    {
      id: 5,
      name: "Casio G-CasiOAK",
      price: 127,
      rating: 4.5,
      image: "/assets/images/casio5.jpg"
    },
    {
      id: 6,
      name: "Apple Series 4",
      price: 720,
      rating: 4.5,
      image: "/assets/images/smartwatch1.jpg"
    },
    {
      id: 7,
      name: "Huawei GT5",
      price: 389,
      rating: 4.5,
      image: "/assets/images/smartwatch2.jpg"
    },
    {
      id: 8,
      name: "Samsung Watch 6",
      price: 850,
      rating: 4.5,
      image: "/assets/images/smartwatch3.jpg"
    },
    {
      id: 9,
      name: "Fitbit Sense 2",
      price: 270,
      rating: 4.5,
      image: "/assets/images/smartwatch4.jpg"
    },
    {
      id: 10,
      name: "Garmin Vivo-active 3",
      price: 250,
      rating: 4.5,
      image: "/assets/images/smartwatch5.jpg"
    },
    {
      id: 11,
      name: "Waltham Vanguard",
      price: 1250,
      rating: 4.5,
      image: "/assets/images/pocketwatch1.jpg"
    },
    {
      id: 12,
      name: "Bulova Pocket Watch",
      price: 5600,
      rating: 4.5,
      image: "/assets/images/pocketwatch2.jpg"
    },
    {
      id: 13,
      name: "Dueber Special",
      price: 3200,
      rating: 4.5,
      image: "/assets/images/pocketwatch3.jpg"
    },
    {
      id: 14,
      name: "Audemars Piguet",
      price: 2000,
      rating: 4.5,
      image: "/assets/images/pocketwatch4.jpg"
    },
    {
      id: 15,
      name: "Baume & Mercier",
      price: 850,
      rating: 4.5,
      image: "/assets/images/pocketwatch5.jpg"
    },
    {
      id: 16,
      name: "Rolex Day-Date",
      price: 22500,
      rating: 4.5,
      image: "/assets/images/rolex1.jpg"
    },
    {
      id: 17,
      name: "Rolex Yacht-Master",
      price: 20000,
      rating: 4.5,
      image: "/assets/images/rolex2.jpg"
    },
    {
      id: 18,
      name: "Rolex Submariner",
      price: 50000,
      rating: 4.5,
      image: "/assets/images/rolex3.jpg"
    },
    {
      id: 19,
      name: "Rolex Sea-Dweller",
      price: 12500,
      rating: 4.5,
      image: "/assets/images/rolex4.jpg"
    },
    {
      id: 20,
      name: "Rolex GMT-Master II",
      price: 11600,
      rating: 4.5,
      image: "/assets/images/rolex5.jpg"
    },
    {
      id: 21,
      name: "Darci MK",
      price: 150,
      rating: 4.5,
      image: "/assets/images/michael1.jpg"
    },
    {
      id: 22,
      name: "Glitz MK",
      price: 195,
      rating: 4.5,
      image: "/assets/images/michael2.jpg"
    },
    {
      id: 23,
      name: "Slim Runway MK",
      price: 112,
      rating: 4.5,
      image: "/assets/images/michael3.jpg"
    },
    {
      id: 24,
      name: "Dylan Black MK",
      price: 300,
      rating: 4.5,
      image: "/assets/images/michael4.jpg"
    },
    {
      id: 25,
      name: "Sand Clock",
      price: 772,
      rating: 4.5,
      image: "/assets/images/pocketwatch3.jpg"
    },
    {
      id: 26,
      name: "Banjo Clock",
      price: 6000,
      rating: 4.5,
      image: "/assets/images/vintage1.jpg"
    },
    {
      id: 27,
      name: "Tavern Clock",
      price: 18903,
      rating: 4.5,
      image: "/assets/images/vintage6.jpg"
    },
    {
      id: 28,
      name: "Grafton Wall Clock",
      price: 375000,
      rating: 4.5,
      image: "/assets/images/.jpg"
    },
    {
      id: 29,
      name: "Grandfather Clock",
      price: 15000,
      rating: 4.5,
      image: "/assets/images/vintage4.jpg"
    },
 
  ];

  const visibleProducts = showAllProducts ? products : products.slice(0, 14);

  return (
    <section className="product-section" id="product-section">
      <div className="product-container">
        <div className="collection-sidebar">
          <h2>Our Collection</h2>
          <ul className="collection-categories">
            {categories.map((category, index) => (
              <li key={index} className="category-item">
                <button 
                  className={`category-button ${activeCategory === index ? 'active' : ''}`}
                  onClick={() => toggleCategory(index)}
                >
                  {category.name}
                  <span className="dropdown-icon">▼</span>
                </button>
                {activeCategory === index && (
                  <ul className="subcategory-list">
                    {category.subcategories.map((sub, subIndex) => (
                      <li key={subIndex} className="subcategory-item">
                        <h4>{sub.title}</h4>
                        <p>{sub.description}</p>
                      </li>
                    ))}                    
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="product-grid">
          {visibleProducts.slice(0, 4).map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <div className="product-rating">{renderStars(product.rating)}</div>
                <div className="product-price">${product.price.toLocaleString()}</div>
                <button className="add-to-cart">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row-2">
          {visibleProducts.slice(4, 9).map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <div className="product-rating">{renderStars(product.rating)}</div>
                <div className="product-price">${product.price.toLocaleString()}</div>
                <button className="add-to-cart">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row-3">
          {visibleProducts.slice(9).map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <div className="product-rating">{renderStars(product.rating)}</div>
                <div className="product-price">${product.price.toLocaleString()}</div>
                <button className="add-to-cart">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="see-more" 
          onClick={() => setShowAllProducts(!showAllProducts)}
        >
          {showAllProducts ? 'Show Less' : 'See More'}
        </button>
      </div>
    </section>
  );
};

export default ProductSection;