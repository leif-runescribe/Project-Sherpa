import React, { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';

const Dash = () => {
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

  return (
    <div className="App">
      {droneData ? (
        <Dashboard data={droneData} />
      ) : (
        <p className="flex justify-center items-center h-screen">
  <svg className="animate-spin h-16 w-16 text-black-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 11-8-8z"></path>
  </svg>
  <span className="ml-4 text-4xl font-bold text-green-600">Loading...</span>
</p>
      )}
    </div>
  );
};

export default Dash;
