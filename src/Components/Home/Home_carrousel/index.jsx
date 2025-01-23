import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const HomeCarrousel = () => {
  const carouselRef = useRef(null); // Create a ref for the Carousel

  const carouselItems = [
    {
      image: '/interior.jpg',
      title: 'Modern Living Spaces',
      description: 'Immerse yourself in the epitome of modern luxury.',
    },
    {
      image: '/interior.jpg',
      title: 'Elegant Office Designs',
      description: 'Boost your productivity in style and comfort.',
    },
    {
      image: '/interior.jpg',
      title: 'Luxurious Bedrooms',
      description: 'Indulge in restful nights with our opulent designs.',
    },
  ];

  return (
    <div className="w-full relative">
      {/* Previous Button */}
      <button
        onClick={() => carouselRef.current.prev()} // Trigger carousel's prev method
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition z-10"
      >
        <LeftOutlined />
      </button>

      {/* Carousel */}
      <Carousel autoplay ref={carouselRef}>
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className="w-full md:h-[400px] h-[220px] flex flex-col items-center justify-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="bg-black bg-opacity-70 text-white p-4 mt-4 text-center">
              <h2 className="text-3xl font-semibold text-yellow-400">
                {item.title}
              </h2>
              <p className="mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Next Button */}
      <button
        onClick={() => carouselRef.current.next()} // Trigger carousel's next method
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition z-10"
      >
        <RightOutlined />
      </button>
    </div>
  );
};

export default HomeCarrousel;
