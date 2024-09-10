import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const SignIn = () => {
  // Define state to store form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'customer', // Default role
    address: '',
    phoneNumber: '',
  });

  // Handle input change and update formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic to send formData to server
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully');
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
        <Layout>
        <div className='py-10 md:py-20 px-20'>
    <div className="max-w-3xl mx-auto mt-16 p-10 bg-gray-100 shadow-lg rounded-2xl">
    <h2 className="text-2xl font-bold text-gray-800 mb-8">Sign In</h2>
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Username Input */}
      

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-xl font-bold text-gray-600">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition duration-300 ease-in-out"
        />
      </div>

      {/* Password Input */}
      <div>
        <label htmlFor="password" className="block text-xl font-bold text-gray-600">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition duration-300 ease-in-out"
        />
      </div>

      
      {/* Submit Button */}
      <div className='text-center'>
        <button
          type="submit"
          className="w-72 bg-blue-600 text-white text-xl font-bold px-4 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out"
        >
          Sign Up
        </button>
      </div>
    </form>
    <div className="text-center text-xl font-semibold text-gray-700 mt-6">
  <p className="mb-2">Not a member?</p>
  <Link
    to="/join"
    className="text-blue-600 hover:text-blue-800 underline transition duration-300 ease-in-out"
  >
    Create an account
  </Link>
</div>
    </div>
    </div>
    </Layout>
  </div>
  );
};

export default SignIn;
