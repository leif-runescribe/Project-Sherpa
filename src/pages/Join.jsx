import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Join = () => {
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
    <div >
        <Layout>
            <div className='py-10 md:py-20 px-20'>
    <div className="max-w-3xl mt-16 mx-auto  p-10 bg-gray-200 shadow-lg rounded-2xl">
    <h2 className="text-2xl font-bold text-gray-800 mb-8">Create an Account</h2>
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Username Input */}
      <div>
        <label htmlFor="username" className="block text-xl font-bold text-gray-600">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition duration-300 ease-in-out"
        />
      </div>

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

      {/* Role Dropdown */}
      <div>
        <label htmlFor="role" className="block text-xl font-bold text-gray-600">Role</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          className="mt-2 block w-full px-4 py-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition duration-300 ease-in-out"
        >
          <option className='text-xl' value="customer">Customer</option>
          <option className='text-xl' value="seller">Seller</option>
          <option className='text-xl' value="admin">Admin</option>
        </select>
      </div>

      {/* Address Input */}
      <div>
        <label htmlFor="address" className="block text-xl font-bold text-gray-600">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition duration-300 ease-in-out"
        />
      </div>

      {/* Phone Number Input */}
      <div>
        <label htmlFor="phoneNumber" className="block text-xl font-bold text-gray-600">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
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
  <p className="mb-2">Already a member?</p>
  <Link
    to="/signin"
    className="text-blue-600 hover:text-blue-800 underline transition duration-300 ease-in-out"
  >
    Sign In
  </Link>
</div>
    </div>
    </div>
    </Layout>
  </div>
  );
};

export default Join;
