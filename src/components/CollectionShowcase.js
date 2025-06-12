import React from 'react';

const CollectionShowcase = () => {
  const collections = [
    {
      id: 1,
      title: "Timeless style awaits",
      description: "Browse our exquisite range of luxury watches, where elegance meets precision.",
      image: "/assets/images/rolex1.jpg",
      buttonText: "Browse"
    },
    {
      id: 2,
      title: "Redefining excellence",
      description: "Step into a realm of precision and luxury with our exclusive collection.",
      image: "/assets/images/gallery5.jpg",
      buttonText: "See Now"
    },
    {
      id: 3,
      title: "Innovation in luxury",
      description: "Discover the seamless fusion of tradition and technology in our watches.",
      image: "/assets/images/michael3.jpg",
      buttonText: "Shop now"
    },
    {
      id: 4,
      title: "Every tick tells a story",
      description: "Our watches are more than timepieces; they're a mark of sophistication.",
      image: "/assets/images/gallery1.jpg",
      buttonText: "Explore"
    },
    {
      id: 5,
      title: "Elegant timepieces",
      description: "Explore our curated selection of luxury watches, perfect for those who value style and precision.",
      image: "/assets/images/gallery4.jpg",
      buttonText: "Browse"
    },
    {
      id: 6,
      title: "Style meets precision",
      description: "Discover the blend of advanced technology and timeless design in our exclusive collections.",
      image: "/assets/images/michael2.jpg",
      buttonText: "See more"
    },
    {
      id: 7,
      title: "Redefining craftsmanship",
      description: "Experience the artistry and innovation behind our meticulously crafted watches.",
      image: "/assets/images/gallery6.jpg",
      buttonText: "Learn more"
    },
    {
      id: 8,
      title: "Luxury, reimagined",
      description: "Indulge in sophistication with our handpicked line of iconic watch brands.",
      image: "/assets/images/michael1.jpg",
      buttonText: "Shop now"
    },
    {
      id: 9,
      title: "Classic elegance",
      description: "Experience timeless sophistication with our classic collection.",
      image: "/assets/images/vintage1.jpg",
      buttonText: "View more"
    },
    {
      id: 10,
      title: "Modern masterpiece",
      description: "Discover our contemporary designs that blend style with innovation.",
      image: "/assets/images/michael4.jpg",
      buttonText: "Explore now"
    },
    {
      id: 11,
      title: "Premium selection",
      description: "Indulge in our premium range of expertly crafted timepieces.",
      image: "/assets/images/casio7.jpg",
      buttonText: "Shop collection"
    }
  ];

  return (
    <section className="collection-showcase">
      <div className="collection-container">
        <div className="collection-grid">
          {collections.map((item) => (
            <div key={item.id} className="collection-card">
              <div className="collection-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="collection-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="collection-button">{item.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase;