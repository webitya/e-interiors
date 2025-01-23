// Premium and Luxury Cards Component for 'e-Interior'

import React from 'react';
import './luxuryCards.css'; // External CSS for luxury design

const LuxuryCards = () => {
  const cardsData = [
    {
      image: './cars_img.jpg',
      title: 'Living Spaces',
      description: 'Elegant designs for modern living.'
    },
    {
      image: './cars_img.jpg',
      title: 'Office Spaces',
      description: 'Functional and stylish office interiors.'
    },
    {
      image: './cars_img.jpg',
      title: 'Bedrooms',
      description: 'Luxurious bedrooms for restful nights.'
    },
    {
      image: './cars_img.jpg',
      title: 'Kitchens',
      description: 'State-of-the-art kitchens with elegance.'
    },
    {
      image: './cars_img.jpg',
      title: 'Bathrooms',
      description: 'Opulent bathrooms with modern aesthetics.'
    }
  ];

  return (
    <div className="luxury-cards-container">
      <h1 className="luxury-title">Explore Our Luxurious Interiors</h1>
      <div className="cards-grid">
        {cardsData.map((card, index) => (
          <div key={index} className="luxury-card">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{card.title}</h2>
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuxuryCards;