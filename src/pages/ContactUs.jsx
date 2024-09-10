import React from 'react';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';

const ContactUs = () => {
  return (
    <div className="relative">
        <Layout>
      <div className="mt-40 px-40 absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-0 left-0 -z-10 h-full w-full"
          fill="none"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="600"
            cy="400"
            r="500"
            stroke="url(#gradient)"
            strokeWidth="1"
            strokeOpacity="0.2"
          />
          
        </svg>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center px-40 py-20 relative">
        {/* Heading */}
        <div className="lg:w-1/2 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Get in Touch with Us
          </h1>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 mt-20 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="john.doe@example.com"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      </Layout>
    </div>
  );
};

export default ContactUs;
