import React, { useState } from 'react';
import { FaWhatsapp, FaTruck, FaHeadphonesAlt, FaCertificate } from 'react-icons/fa'; // Importing necessary icons

const LuxuryCards = () => {
  const initialCardsData = [
    {
      image: '/1.jpg',
      title: 'Fast Delivery',
      description: 'Get your project completed and delivered in record time.',
      icon: <FaTruck className="text-[#e23744]" />,
    },
    {
      image: '/2.jpg',
      title: '24/7 Support',
      description: 'We are available round the clock to assist you.',
      icon: <FaHeadphonesAlt className="text-[#e23744]" />,
    },
    {
      image: '/3.jpg',
      title: 'Best Quality',
      description: 'Only the finest materials and designs for your spaces.',
      icon: <FaCertificate className="text-[#e23744]" />,
    },
    {
      image: '/4.jpg',
      title: 'Luxury Projects',
      description: 'Explore our portfolio of luxury residential and commercial projects.',
      icon: <FaTruck className="text-[#e23744]" />,
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
    <div className="py-12 bg-gradient-to-b from-white to-[#f5f5f5] px-4">
      <h1 className="text-4xl font-serif text-center text-[#e23744] mb-12">Explore Our Premium Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {initialCardsData.slice(0, visibleCards).map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            <img src={card.image} alt={card.title} className="w-full h-60 object-cover" />
            <div className="p-4 text-center">
              <div className="flex justify-center items-center mb-3">
                {card.icon}
                <h2 className="text-xl font-medium text-[#000000] ml-2">{card.title}</h2>
              </div>
              <p className="text-gray-600 text-sm mb-4">{card.description}</p>
              <div className="flex justify-center space-x-4">
                {/* Enquiry Button */}
                <button
                  onClick={() => handleEnquiryClick(card.title)}
                  className="bg-[#e23744] text-white text-sm py-1 px-3 rounded transition hover:bg-[#cc1f35]"
                >
                  Enquiry Now
                </button>

                {/* WhatsApp Button */}
                <button
                  onClick={() => handleWhatsAppClick(`${card.title}: ${card.description}`)}
                  className="bg-[#25d366] text-white text-sm py-1 px-3 rounded transition hover:bg-[#128c7e]"
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
            className="bg-[#e23744] text-white py-2 px-4 text-sm font-medium rounded shadow-md hover:bg-[#cc1f35] transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* Full-Width Button "Get Delivery Now" */}
      <div className="mt-12">
        <button
          onClick={() => alert("Get delivery now")}
          className="w-full bg-[#e23744] text-white py-4 text-lg font-medium flex items-center justify-center space-x-2 rounded transition hover:bg-[#cc1f35]"
        >
          <FaTruck className="text-white text-xl" />
          <span>Get Delivery Now</span>
        </button>
      </div>
    </div>
  );
};

export default LuxuryCards;
