import React from "react";
import Slider from "react-slick";
import "./OurPartners.css"
const PartnerCarousel = () => {
  // Array of partner logos
  const partnerLogos = [
    { id: 1, src: "/logo.svg", alt: "Partner 1" },
    { id: 2, src: "/logo.svg", alt: "Partner 2" },
    { id: 3, src: "/logo.svg", alt: "Partner 3" },
    { id: 4, src: "/logo.svg", alt: "Partner 4" },
    { id: 5, src: "/logo.svg", alt: "Partner 5" },
    { id: 6, src: "/logo.svg", alt: "Partner 6" },
  ];

  // Settings for the Slick Carousel
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Shows 3 logos at once
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 2000, // 2 seconds delay
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 bg-gradient-to-b from-[#f5f5f5] to-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#e23744] mb-8">Our Trusted Partners</h2>
        <Slider {...settings}>
          {partnerLogos.map((logo) => (
            <div key={logo.id} className="px-4">
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full max-w-[200px] mx-auto rounded-md shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnerCarousel;
