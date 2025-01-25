import React, { useState } from "react";
import { Card, Tabs, Rate, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const HomeTabSection = () => {
  // Data stored as an array of objects
  const services = [
    { key: "1", title: "Living Spaces", description: "Elegant designs for modern living." },
    { key: "2", title: "Bedrooms", description: "Luxurious bedrooms for restful nights." },
    { key: "3", title: "Office Spaces", description: "Functional and stylish office interiors." },
    { key: "4", title: "Kitchens", description: "State-of-the-art kitchens with elegance." },
  ];

  const images = [
    { id: 1, src: "/l1.jpg", alt: "Living Room" },
    { id: 2, src: "/l2.jpg", alt: "Bedroom Design" },
    { id: 3, src: "/l3.jpg", alt: "Office Interior" },
    { id: 4, src: "/l4.jpg", alt: "Office Interior" },
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
    <div className="md:p-6 p-4 bg-gradient-to-b from-white to-[#f5f5f5]">
      {/* Container */}
      <Card className="rounded-lg shadow-lg mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Left Section (Images) */}
          <div className="md:w-1/3 p-2">
            {/* Image Carousel */}
            <div className="w-full">
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="rounded-lg w-full mb-4"
              />
            </div>
            {/* Arrows for Image Navigation */}
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                className="bg-white p-2 rounded-full shadow-md"
              >
                <LeftOutlined />
              </button>
              <button
                onClick={handleNext}
                className="bg-white p-2 rounded-full shadow-md"
              >
                <RightOutlined />
              </button>
            </div>
          </div>

          {/* Right Section (Content) */}
          <div className="md:w-2/3 p-4">
            <h2 className="text-xl font-bold mb-2">Premium Interior Design Services</h2>
            <div className="flex items-center mb-4">
              <Rate disabled defaultValue={4.8} className="text-yellow-500" />
              <span className="ml-2 text-gray-500 text-sm">(7.8M projects delivered)</span>
            </div>
            <Tabs defaultActiveKey="1" className="text-gray-700 mb-4">
              {services.map((service) => (
                <Tabs.TabPane tab={service.title} key={service.key}>
                  {service.description}
                </Tabs.TabPane>
              ))}
            </Tabs>

            {/* Contact Us Button */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Contact Us for Your Next Project</h3>
              <p className="text-gray-500 mb-4">Let us help you bring your dream interior to life.</p>
              <Button type="primary" size="large" className="bg-[#e23744] text-white">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HomeTabSection;
