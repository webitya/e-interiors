import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importing WhatsApp icon

const LuxuryCards = () => {
  const initialCardsData = [
    {
      image: './cars_img.jpg',
      title: 'Living Spaces',
      description: 'Elegant designs for modern living.',
    },
    {
      image: './cars_img.jpg',
      title: 'Office Spaces',
      description: 'Functional and stylish office interiors.',
    },
    {
      image: './cars_img.jpg',
      title: 'Bedrooms',
      description: 'Luxurious bedrooms for restful nights.',
    },
    {
      image: './cars_img.jpg',
      title: 'Kitchens',
      description: 'State-of-the-art kitchens with elegance.',
    },
    {
      image: './cars_img.jpg',
      title: 'Bathrooms',
      description: 'Opulent bathrooms with modern aesthetics.',
    },
    {
      image: './cars_img.jpg',
      title: 'Outdoor Spaces',
      description: 'Stylish outdoor designs for a peaceful retreat.',
    },
    {
      image: './cars_img.jpg',
      title: 'Luxury Hotels',
      description: 'World-class designs for hospitality.',
    },
    {
      image: './cars_img.jpg',
      title: 'Commercial Interiors',
      description: 'Modern designs for business spaces.',
    },
  ];

  const [visibleCards, setVisibleCards] = useState(4); // Initially show 4 cards

  const handleLoadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4); // Load 4 more cards on click
  };

  const handleWhatsAppClick = (message) => {
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleEnquiryClick = (title) => {
    const url = `mailto:info@example.com?subject=Enquiry about ${encodeURIComponent(title)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="py-12 bg-gradient-to-b from-white to-gray-100 px-4">
      <h1 className="text-4xl font-serif text-center text-yellow-500 mb-12">Explore Our Luxurious Interiors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {initialCardsData.slice(0, visibleCards).map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <img src={card.image} alt={card.title} className="w-full h-60 object-cover" />
            <div className="p-4 text-center">
              <h2 className="text-xl font-medium text-gray-800 mb-2">{card.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{card.description}</p>
              <div className="flex justify-center space-x-2">
                {/* Enquiry Button */}
                <button
                  onClick={() => handleEnquiryClick(card.title)}
                  className="bg-blue-500 text-white text-sm py-1 px-3 rounded transition hover:bg-blue-400"
                >
                  Enquiry Now
                </button>

                {/* WhatsApp Button */}
                <button
                  onClick={() => handleWhatsAppClick(`${card.title}: ${card.description}`)}
                  className="bg-green-500 text-white text-sm py-1 px-3 rounded transition hover:bg-green-400"
                >
                  <FaWhatsapp className="inline-block mr-1" />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCards < initialCardsData.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="bg-yellow-500 text-white py-2 px-4 text-sm font-medium rounded shadow-md hover:bg-yellow-400 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default LuxuryCards;
