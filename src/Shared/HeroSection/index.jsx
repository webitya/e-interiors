import React, { useState } from "react";
import { Card, Tabs, Rate, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const CleaningService = () => {
  // Data stored as an array of objects
  const services = [
    { key: "1", title: "Packages", description: "Details about packages." },
    { key: "2", title: "Bathroom cleaning", description: "Details about bathroom cleaning." },
    { key: "3", title: "Kitchen cleaning", description: "Details about kitchen cleaning." },
    { key: "4", title: "Mini services", description: "Details about mini services." },
  ];

  const images = [
    { id: 1, src: "https://via.placeholder.com/300", alt: "Cleaning Image 1" },
    { id: 2, src: "https://via.placeholder.com/300", alt: "Cleaning Image 2" },
    { id: 3, src: "https://via.placeholder.com/300", alt: "Cleaning Image 3" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Handlers for image navigation
  const handlePrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Container */}
      <Card className="rounded-lg shadow-lg mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="md:w-1/3 p-4">
            <h2 className="text-xl font-bold mb-2">Bathroom & Kitchen Cleaning</h2>
            <div className="flex items-center mb-4">
              <Rate disabled defaultValue={4.8} className="text-yellow-500" />
              <span className="ml-2 text-gray-500 text-sm">(7.8M bookings)</span>
            </div>
            <Tabs defaultActiveKey="1" className="text-gray-700">
              {services.map((service) => (
                <Tabs.TabPane tab={service.title} key={service.key}>
                  {service.description}
                </Tabs.TabPane>
              ))}
            </Tabs>
          </div>

          {/* Right Section */}
          <div className="md:w-2/3 flex items-center justify-center relative">
            {/* Image */}
            <div className="w-full">
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="rounded-lg"
              />
            </div>
            {/* Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
              <LeftOutlined />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
              <RightOutlined />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">Steam for spotless clean</h3>
        </div>
      </Card>
    </div>
  );
};

export default CleaningService;
