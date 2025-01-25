import React, { useRef, useState } from 'react';
import { Form, Input, Button, Typography, Space, Spin } from 'antd';
import { PhoneOutlined, MailOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import emailjs from 'emailjs-com';
import './ContactUs.css'; // Optional for extra styling
import LayoutEl from '../../Shared/Layout';

const { Title, Paragraph } = Typography;

const ContactUs = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (values) => {
    setLoading(true);
    emailjs
      .send(
        'service_hcbpcsa',
        'template_rg90mtq',
        values,
        'qgXpDqSd2HGNEIRTO'
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          formRef.current.resetFields();
          setLoading(false);
        },
        (error) => {
          alert(`Error sending message: ${error.text}`);
          setLoading(false);
        }
      );
  };

  return (
    <LayoutEl>
      <div className="contact-us-container bg-gradient-to-b from-gray-100 to-gray-200 py-10 lg:py-14">
        <div className="container mx-auto px-5 lg:px-16">
          <Title className="text-5xl font-extrabold text-center text-amber-800 mb-6">
            Get in Touch with Us!
          </Title>
          <Paragraph className="text-lg text-center text-gray-700 mb-10">
            Have questions or need assistance with your interior design or plywood needs? Contact us today!
          </Paragraph>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="contact-form bg-white p-8 rounded-lg shadow-lg">
              <Title level={2} className="text-3xl font-bold text-amber-800 mb-4">Send Us a Message</Title>
              <Form ref={formRef} layout="vertical" onFinish={sendEmail}>
                <Form.Item name="name" label="Your Name" rules={[{ required: true, message: 'Please input your name!' }]}>
                  <Input placeholder="Enter your name" />
                </Form.Item>
                <Form.Item name="email" label="Your Email" rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}>
                  <Input placeholder="Enter your email" prefix={<MailOutlined />} />
                </Form.Item>
                <Form.Item name="phone" label="Your Phone" rules={[{ required: true, message: 'Please input your phone number!' }]}>
                  <Input placeholder="Enter your phone number" prefix={<PhoneOutlined />} />
                </Form.Item>
                <Form.Item name="message" label="Your Message" rules={[{ required: true, message: 'Please input your message!' }]}>
                  <Input.TextArea rows={4} placeholder="Enter your message" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="btn-submit w-full bg-amber-800 hover:bg-amber-800 text-white" disabled={loading}>
                    {loading ? <Spin /> : 'Send Message'}
                  </Button>
                </Form.Item>
              </Form>
            </div>

            {/* Contact Information */}
            <div className="contact-info bg-white p-8 rounded-lg shadow-lg">
              <Title level={2} className="text-3xl font-bold text-amber-800 mb-4">Contact Information</Title>
              <Paragraph className="text-lg text-gray-700 mb-2">
                📞 <strong>Phone:</strong> +91 95234 18745
              </Paragraph>
              <Paragraph className="text-lg text-gray-700 mb-2">
                ✉️ <strong>Email:</strong> contact@e-interiors.in
              </Paragraph>

              {/* Social Media Links */}
              <Space className="social-media flex space-x-4 mt-6">
                <a href="https://facebook.com/plywoodhome" target="_blank" rel="noopener noreferrer" className="social-icon text-amber-800 hover:text-amber-900 transition-colors">
                  <FacebookOutlined style={{ fontSize: '24px' }} />
                </a>
                <a href="https://instagram.com/plywoodhome" target="_blank" rel="noopener noreferrer" className="social-icon text-amber-800 hover:text-amber-900 transition-colors">
                  <InstagramOutlined style={{ fontSize: '24px' }} />
                </a>
                <a href="https://twitter.com/plywoodhome" target="_blank" rel="noopener noreferrer" className="social-icon text-amber-800 hover:text-amber-900 transition-colors">
                  <TwitterOutlined style={{ fontSize: '24px' }} />
                </a>
              </Space>

              {/* Logo and Autoplay Video */}
              <div className="mt-6 flex flex-col items-start">
                <img src="./logo.svg" alt="Plywood Home Logo" width="200" className="mb-4" />
                <video
                  src="/video.mp4"
                  autoPlay
                  muted
                  loop
                  controls={false}
                  width="300"
                  className="rounded-lg shadow-lg"
                ></video>
              </div>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="google-map bg-white rounded-lg shadow-lg mt-10">
            <Title level={2} className="text-3xl font-bold text-amber-800 mb-4 text-center">Locate Us Easily</Title>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.5628522469237!2d85.31910237441109!3d23.367847003356946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1f7da0ccef7%3A0x6c5632847ff06185!2sPlywood%20Home%20Delivery!5e0!3m2!1sen!2sin!4v1737771743869!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </LayoutEl>
  );
};

export default ContactUs;