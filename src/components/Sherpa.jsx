import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const HoverCard = ({ title, description }) => {
    
    const [isHovered, setIsHovered] = useState(false);
    return (
      <div 
        className="  hover:bg-gray-300 hover:text-gray-700  p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3 className="text-3xl  font-bold mb-2">{title}</h3>
        <p className={`text-gray-700 transition-all font-bold text-2xl duration-300 ${isHovered ? 'h-auto opacity-100' : 'h-0 opacity-0'}`}>
          {description}
        </p>
      </div>
    );
  };

const Drone = () => (
    
  <div className="absolute top-10 left-10 w-12 h-12 animate-float " style={{
    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath opacity=\'.5\' d=\'M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z\'/%3E%3Cpath d=\'M6 5V0H5v5H0v1h5v94h1V6h94V5H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    backgroundSize: '100px 100px'
  }}>
    <div className="w-8 h-2 bg-gray-700 mx-auto mb-1"></div>
    <div className="flex justify-between">
      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
      <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
    </div>
  </div>
);

const Sherpa = () => {
    const [isHovered, setIsHovered] = useState(false);


    return (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative py-20 overflow-hidden  bg-gradient-to-b from-gray-900 via-green-300 to-white text-white md:px-40 min-h-screen flex flex-col items-center justify-center "
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
      <Drone />
      
      <ScrollReveal animationClass="opacity-100 translate-y-0">
      <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-white mb-8 mt-20 animate-pulse">
        Sherpa
      </h1>
      </ScrollReveal>
      
      <p className="text-4xl py-20  md:text-4xl text-gray-800 max-w-3xl font-medium text-center mb-12">
        Revolutionizing apple cultivation in Himachal Pradesh with drone-based intelligent systems and AI-driven analytics.
      </p>
      <ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <HoverCard 
          title="Tree Health Monitoring" 
          description="Our advanced imaging technology detects early signs of stress or disease in apple trees, allowing for timely interventions."
        />
        <HoverCard 
          title="Nutrient Management" 
          description="AI-driven analysis of soil and leaf data provides precise recommendations for optimal fertilization strategies."
        />
        <HoverCard 
          title="Pest Control" 
          description="Early detection of pest infestations enables targeted and efficient pest control measures, reducing chemical usage."
        />
      </div>
      </ScrollReveal>
      
      <div className="mt-16 relative">
        <img src="/drone.jpg" alt="Drone flying over apple orchard" className="rounded-lg shadow-xl" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-xl font-bold">Experience the future of orchard management</p>
        </div>
      </div>
      
      <button className="mt-12 bg-blue-500 hover:bg-blue-600 text-white font-bold py-8 px-6 rounded-full transition-colors duration-300 text-3xl transform hover:scale-105">
        Learn More
      </button>

    </div>
  );
};

export default Sherpa;