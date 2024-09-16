import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Layout from './Layout';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = ({ data = {} }) => {
  // Set default values if data is undefined or missing
  const {
    Yield = 0,
    Health = "Unknown",
    Pesticide = "Not available",
    Fertilizer = "Not available",
    Humidity = 0,
    Temperature = 0,
    Location = "Unknown",
    Rainfall = 0,
    Sunlight = 0,
    Watering = "Not available",
  } = data;
  const [chartData, setChartData] = useState({
    labels: [], // Default to empty array
    datasets: [
      {
        label: 'Data Overview',
        data: [], // Default to empty array
        backgroundColor: [], // Default to empty array
      },
    ],
  });
  
  useEffect(() => {
    setChartData({
      labels: ['Yield', 'Humidity', 'Temperature', 'Rainfall', 'Sunlight'],
      datasets: [
        {
          label: 'Data Overview',
          data: [
            Yield || 0,
            Humidity || 0,
            Temperature || 0,
            Rainfall || 0,
            Sunlight || 0,
          ],
          backgroundColor: ['#4F46E5', '#06B6D4', '#F59E0B', '#10B981', '#EF4444'],
          borderRadius: 8,
        },
      ],
    });
  }, [Yield, Humidity, Temperature, Rainfall, Sunlight]);
  

  const options = {
    responsive: true,
    maintainAspectRatio: false, // To control chart size
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  const [isHovered, setIsHovered] = useState(false);


  return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 to-green-300 text-white p-12 md:p-20 min-h-screen flex flex-col items-center justify-center p-8"
      >
        {/* Background with transparent grid texture */}
        <div
          className={`absolute inset-0 bg-white bg-opacity-10 transition-opacity duration-300 ease-in-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/cubes.png")', // Example of transparent texture grid
            backgroundSize: "100px 100px",
          }}
        ></div>
      <Layout>
    <div className="p-6  min-h-screen">
      <h1 className="text-6xl font-bold text-gray-100 text-center mt-20 mb-10">APPLE ORCHARD DATA DASHBOARD</h1>
          <div className='py-10 text-center'><span className=' text-4xl '>Report</span></div>
      {/* Ensure data exists before rendering */}
      {Object.keys(data).length > 0 ? (
        <>
          {/* Grid Layout for Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className='flex justify-between flex-row'>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Yield</h2>
              <img className='h-16' src='/yield.jpg'/>
            </div>
              <p className="text-3xl font-bold text-gray-800">{Yield} kg</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className='flex justify-between flex-row'>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Health Status</h2>
              <img className='h-10' src='/h1.jpg'/>
              </div>
              <p className="text-2xl font-bold text-gray-800">{Health.replace('Apple___', '')}</p>
            
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className='flex justify-between flex-row'>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Pesticide</h2>
              <img className='h-12' src='/pesti.jpg'/>
              </div>
              <p className="text-2xl font-bold text-gray-800">{Pesticide}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className='flex justify-between flex-row'>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Fertilizer</h2>
              <img className='h-12' src='/fert.jpg'/>
              </div>
              <p className="text-2xl font-bold text-gray-800">{Fertilizer}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className='flex justify-between flex-row'>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Humidity</h2>
              <img className='h-16' src='/h.jpg'/>
              </div>
              <p className="text-3xl font-bold text-gray-800">{Humidity}%</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className='flex justify-between flex-row'>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Temperature</h2>
              <img className='h-16' src='/temp.jpg'/>
              </div>
              <p className="text-3xl font-bold text-gray-800">{Temperature}°C</p>
            </div>
            

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className='flex justify-between flex-row'>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Location</h2>
              <img className='h-12' src='/location.jpg'/>
              </div>
              <p className="text-2xl font-bold text-gray-800">{Location}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className='flex justify-between flex-row'>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Watering</h2>
              <img className='h-16' src='/water.jpg'/>
               </div>
              <p className="text-2xl font-bold text-gray-800">{Watering}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className='flex justify-between flex-row'>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Rainfall</h2>
              <img className='h-12' src='/rain.jpg'/>
              </div>
              <p className="text-3xl font-bold text-gray-800">{Rainfall} mm</p>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Overview</h2>
            <div className="relative h-80 w-full">
              <Bar data={chartData} options={options} />
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-2xl text-gray-600">Loading data...</p>
      )}
    </div>
    </Layout>
    </div>
  );
};

export default Dashboard;
