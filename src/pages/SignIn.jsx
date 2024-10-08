import React, { useContext, useState } from 'react';
import Layout from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const { dispatch,state } = useContext(AuthContext);
  // Define state to store form data
  const [formData, setFormData] = useState({
    
    email: '',
    password: '',
    
  });

  // Handle input change and update formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(formData)
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    setLoading(true); // Start loading
    
    try {
      const response = await fetch('https://apple-orchard-1.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Login response:', data);
        console.log(state);
        
        dispatch({
          type: 'LOGIN',
          payload: { user: data.user, token: data.token },
        });
        
        const { user, token } = data;
        
        
      
        if (user.role === 'seller') {
          navigate('/user/dashboard');
        } else if (user.role === 'customer') {
          navigate('/user/marketplace');
        } else {
          console.warn('Unknown user role:', user.role);
          navigate('/'); 
        }
        
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
        alert('Failed to login: ' + (errorData.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
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
          Sign In
        </button>
      </div>
    </form>
    {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <svg className="w-16 h-16 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4V1m0 22v-3m-7.071-6.071l-2.121 2.121M20.071 16.071l-2.121-2.121M1 12h3m16 0h3M6.343 6.343l2.121-2.121M17.656 17.656l2.121 2.121M6.343 17.656l2.121-2.121M17.656 6.343l2.121 2.121" />
          </svg>
        </div>
      )}
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
