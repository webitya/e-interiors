import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "antd";

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const [direction, setDirection] = useState("left"); // State to track animation direction
  const overlayTexts = [
    "Get your plywood delivered to your doorstep now!",
    "Quality interior design materials at your fingertips!",
    "Fast and reliable delivery for your home projects!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => (prev === "left" ? "right" : "left")); // Alternate direction
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % overlayTexts.length);
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval);
  }, [overlayTexts.length]);

  useEffect(() => {
    // Simulate video loading for 3 seconds
    const timeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative w-full overflow-hidden md:h-[80vh] h-[230px]">
      {isLoading ? (
        // Light grey skeleton while loading
        <div className="absolute inset-0 bg-gray-100 flex justify-center items-center">
          <Skeleton
            active
            paragraph={{ rows: 2 }}
            className="w-3/4"
            style={{ backgroundColor: "#f5f5f5" }} // Light grey color
          />
        </div>
      ) : (
        <>
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/video.mp4" // Replace with your video path
            autoPlay
            muted
            loop
          ></video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentTextIndex}
                className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold mb-6"
                initial={{
                  opacity: 0,
                  x: direction === "left" ? -100 : 100,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction === "left" ? 100 : -100,
                }}
                transition={{ duration: 0.8 }}
              >
                {overlayTexts[currentTextIndex]}
              </motion.h1>
            </AnimatePresence>
            <button
  className="border-2 border-white text-white hover:text-white font-medium py-2 px-6 sm:py-3 
  sm:px-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
  onClick={() =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
  }
>
  Contact Us
</button>

          </div>
        </>
      )}
    </section>
  );
};

export default HeroSection;
