import React, { useState } from 'react';
import Layout from '../components/Layout';

// Data for Business Models
const businessModels = {
  B2B: {
    title: "B2B Model",
    apple: {
      national: [
        "Bulk supply of apples",
        "Contracts with businesses",
        "Quality assurance services",
        "Custom packaging solutions",
      ],
      international: [
        "Export agreements",
        "Certifications",
        "Market expansion",
      ],
    },
    drone: {
      national: [
        "Custom drone systems for agriculture",
        "Offer data services",
        "Consulting services",
      ],
      international: [
        "Export of drone systems",
        "Global data services",
        "Virtual training and support",
      ],
    },
  },
  B2C: {
    title: "B2C Model",
    apple: {
      national: [
        "Direct sales to consumers",
        "Subscription boxes",
        "Educational content",
      ],
      international: [
        "Online store for global customers",
        "Global subscription services",
        "Export promotions",
      ],
    },
    drone: {
      national: [
        "Drone rental services",
        "Drone kits for personal use",
        "Workshops for drone enthusiasts",
      ],
      international: [
        "Global drone rental service",
        "International drone kits",
      ],
    },
  },
  Subscription: {
    title: "Subscription Model",
    apple: {
      national: ["Subscription boxes for apples"],
      international: ["Global apple subscription services"],
    },
    drone: {
      national: ["Subscription model for drones"],
      international: ["Global drone subscription services"],
    },
  },
  OnDemand: {
    title: "On Demand Model",
    apple: {
      national: ["On-demand orders", "Event supplies", "Emergency deliveries"],
      international: ["International orders", "Global emergency deliveries"],
    },
    drone: {
      national: ["On-demand drone orders", "Emergency drone services"],
      international: ["International on-demand drone services"],
    },
  },
};

// The main component
const BusinessModel = () => {
  const [selectedModel, setSelectedModel] = useState("B2B");

  const modelData = businessModels[selectedModel];
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className="min-h-screen flex-col items-center">
        <Layout>
      {/* Header */}
      <header className="w-full mt-12 bg-gradient-to-r from-gray-900 p-6 text-white shadow-md">
        <h1 className="text-4xl py-8 font-bold text-center">Our Business Models</h1>
      </header>

      {/* Tabs for Models */}
      <div className="w-full  shadow-sm py-16 flex justify-center space-x-8">
        {Object.keys(businessModels).map((model) => (
          <button
            key={model}
            className={`text-3xl font-semibold py-2 px-4  transition ${
              selectedModel === model
                ? "bg-gray-800 text-white "
                : "bg-gray-200 text-gray-600 hover:bg-gray-400 hover:text-white"
            } rounded-lg`}
            onClick={() => setSelectedModel(model)}
          >
            {model}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div 
      className="relative overflow-hidden  text-white "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Grid */}
      <div className={`absolute inset-0 bg-white bg-opacity-10 transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
           style={{
             backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath opacity=\'.5\' d=\'M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z\'/%3E%3Cpath d=\'M6 5V0H5v5H0v1h5v94h1V6h94V5H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
             backgroundSize: '100px 100px'
           }}
      ></div>
      <div className="container mx-auto my-10 p-6  rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          {modelData.title}
        </h2>

        {/* Apples Section */}
        <div className="mb-10 px-40">
          <h3 className="text-4xl font-semibold text-gray-100 mb-4">
            Apples Business
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-3xl font-semibold text-gray-200">
                National Level
              </h4>
              <ul className="list-disc ml-6 text-2xl text-gray-200">
                {modelData.apple.national.map((item, idx) => (
                  <li key={idx} className="my-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-3xl font-semibold text-gray-200">
                International Level
              </h4>
              <ul className="list-disc ml-6 text-2xl text-gray-200">
                {modelData.apple.international.map((item, idx) => (
                  <li key={idx} className="my-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        
      </div>
      </div>
      </Layout>
    </div>
  );
};

export default BusinessModel;
