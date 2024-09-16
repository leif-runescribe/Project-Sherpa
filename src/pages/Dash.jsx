import React, { useState, useEffect, useContext } from 'react';
import Dashboard from '../components/Dashboard';
import AuthContext from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Dash = () => {
  const { state } = useContext(AuthContext); // Access the authentication state
  const navigate = useNavigate();
  const [droneData, setDroneData] = useState(null); 
  const apiURL = 'https://66e0956a2fb67ac16f2a1664.mockapi.io/sih/users';

  // Fetch the data from the API
  useEffect(() => {
    const fetchDroneData = async () => {
      try {
        const response = await fetch(apiURL); 
        const data = await response.json(); 

  
        if (Array.isArray(data) && data.length > 0) {
          const latestData = data[data.length - 1]; 
          setDroneData(latestData); 
        }
      } catch (error) {
        console.error('Error fetching data:', error); 
      }
    };

    fetchDroneData(); 
  }, []);

  return (<div>
    {/* {state.isAuthenticated ? (
    <div className="App">
      {droneData ? (
        <Dashboard data={droneData} />
      ) : (
        <div className='mt-40 text-4xl flex font-bold justify-center items-center'>Fetching report...
        <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black"
        role="status">
        <span
        className="!absolute text-b !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        ></span>
        </div>
        </div>
        
      )}
    </div>):
    (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">You must log in to access this page.</h2>
        <Link 
          to="/signin" 
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
        >
          Sign In
        </Link>
      </div>
    </div>
    )
    } */}
    <div className="App">
      {droneData ? (
        <Dashboard data={droneData} />
      ) : (
        <div className='mt-40 text-4xl flex font-bold justify-center items-center'>Fetching report...
        <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black"
        role="status">
        <span
        className="!absolute text-b !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        ></span>
        </div>
        </div>
        
      )}
    </div>
    </div>
  
  );
};

export default Dash;
