import React from 'react';
import { Carousel } from 'antd';
import './carousel.css'; // External CSS for luxury design

const Carrousel = () => {
  const carouselItems = [
    {
      image: './interior.jpg',
      title: 'Modern Living Spaces',
      description: 'Immerse yourself in the epitome of modern luxury.'
    },
    {
      image: './interior.jpg',
      title: 'Elegant Office Designs',
      description: 'Boost your productivity in style and comfort.'
    },
    {
      image: './interior.jpg',
      title: 'Luxurious Bedrooms',
      description: 'Indulge in restful nights with our opulent designs.'
    }
  ];

  return (
    <div className="premium-carousel-full">
      <Carousel
        autoplay
        dots={{ className: 'custom-dots' }}                                                                                                     
        arrows={true}
        prevArrow={<div className="custom-arrow prev-arrow">&#9664;</div>}
        nextArrow={<div className="custom-arrow next-arrow">&#9654;</div>}
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-slide">
            <img src={item.image} alt={item.title} className="carousel-image" />
            <button className="carousel-button">Explore More</button>
            <div className="carousel-content premium-overlay">
              <h2 className="carousel-title">{item.title}</h2>
              <p className="carousel-description">{item.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carrousel;
