import React, { useRef, useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const FooterEl = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendSubscription = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        'service_hcbpcsa',
        'template_subscription',
        formRef.current,
        'qgXpDqSd2HGNEIRTO'
      )
      .then(
        () => {
          alert('Subscription successful!');
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          alert(`Error: ${error.text}`);
          setLoading(false);
        }
      );
  };

  const socialLinks = [
    { href: 'https://facebook.com', icon: <FaFacebook size={30} />, label: 'Facebook' },
    { href: 'https://twitter.com', icon: <FaTwitter size={30} />, label: 'Twitter' },
    { href: 'https://instagram.com', icon: <FaInstagram size={30} />, label: 'Instagram' },
    { href: 'https://linkedin.com', icon: <FaLinkedin size={30} />, label: 'LinkedIn' },
  ];

  const usefulLinks = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'About Us' },
    { href: '#', label: 'Services' },
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1e2a3a] to-[#1f2937] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/logo.svg" alt="Company Logo" className="mb-4 w-32" />
            <p className="text-gray-400 text-center md:text-left">
              Your trusted partner for premium interior design and plywood supply, delivered to your doorstep.
            </p>
            <div className="flex justify-center mt-4 space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white hover:text-teal-500 transition transform hover:scale-105"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4 text-teal-500">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white hover:text-teal-500 transition duration-200 hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Now Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4 text-teal-500">Subscribe Now</h3>
            <form ref={formRef} onSubmit={sendSubscription} className="w-full">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded mb-4 text-gray-800"
                required
              />
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition transform hover:scale-105"
                disabled={loading}
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-12 border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">
            &copy; 2025 Your Company. All rights reserved. Website design by <a href="https://webitya.com" className="text-teal-500 hover:underline" target="_blank" rel="noopener noreferrer">Webitya</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterEl;
