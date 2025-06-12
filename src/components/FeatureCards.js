const FeatureCards = () => {
  const features = [
    {
      title: "Swiss Movement",
      description: "Precision engineered with authentic Swiss movement mechanisms",
      icon: "⚙️"
    },
    {
      title: "Handcrafted",
      description: "Each timepiece meticulously assembled by master craftsmen",
      icon: "🛠️"
    },
    {
      title: "Limited Edition",
      description: "Exclusive collections with numbered pieces",
      icon: "💎"
    },
    {
      title: "Lifetime Warranty",
      description: "Our commitment to lasting quality and customer satisfaction",
      icon: "✨"
    }
  ];

  return (
    <section className="feature-cards">
      <div className="feature-cards-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <span className="feature-icon">{feature.icon}</span>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;