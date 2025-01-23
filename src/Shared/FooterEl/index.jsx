import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MailOutlined, PhoneOutlined, GithubOutlined } from '@ant-design/icons'; // Ant Design Icons

const FooterEl = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-yellow-500 transition">
                <FaFacebook size={30} />
              </a>
              <a href="#" className="text-white hover:text-yellow-500 transition">
                <FaTwitter size={30} />
              </a>
              <a href="#" className="text-white hover:text-yellow-500 transition">
                <FaInstagram size={30} />
              </a>
              <a href="#" className="text-white hover:text-yellow-500 transition">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-yellow-500 transition">Home</a></li>
              <li><a href="#" className="text-white hover:text-yellow-500 transition">About Us</a></li>
              <li><a href="#" className="text-white hover:text-yellow-500 transition">Services</a></li>
              <li><a href="#" className="text-white hover:text-yellow-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center space-x-2 mb-4">
              <MailOutlined className="text-yellow-500" />
              <span className="text-white">email@example.com</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <PhoneOutlined className="text-yellow-500" />
              <span className="text-white">+123 456 7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <GithubOutlined className="text-yellow-500" />
              <span className="text-white">GitHub</span>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-12 border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterEl;
