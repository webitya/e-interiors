import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Importing the arrow icon
import { useSpring, animated } from "react-spring"; // Importing react-spring for animation

const CallToAction = () => {
  // Animation for the CTA text and button
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const slideUp = useSpring({
    transform: "translateY(0px)",
    from: { transform: "translateY(50px)" },
    config: { duration: 1000 },
  });

  return (
    <div className="bg-[#e23744] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side Content with animation */}
        <animated.div style={fadeIn} className="text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl font-semibold mb-4">
            Need Help With Your Interior Design Project?
          </h2>
          <p className="text-lg mb-6">
            We offer expert guidance and customized solutions for your dream space.
            Our team is here to support you every step of the way.
          </p>
          <button
            className="bg-white text-[#e23744] py-2 px-6 text-lg font-semibold rounded-full hover:bg-[#f5f5f5] transition-all"
          >
            Contact Us Now
          </button>
        </animated.div>

        {/* Right Section with animation */}
        
      </div>

      {/* Arrow Icon for Scroll Down with animation */}
      <div className="text-center mt-8">
        <animated.a
          href="#nextSection"
          style={slideUp}
          className="text-white text-3xl animate-bounce"
        >
          <FaArrowRight />
        </animated.a>
      </div>
    </div>
  );
};

export default CallToAction;
