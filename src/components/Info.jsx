import React, { useState } from 'react';

const InfoCard = ({ title, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-gray-800 transition-all duration-300 ease-in-out ${isHovered ? 'h-full' : 'h-0'}`}></div>
      <div className={`relative z-10 p-6 h-full flex flex-col justify-between transition-colors duration-300 ${isHovered ? 'text-white' : 'text-black'}`}>
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-2xl">{content}</p>
      </div>
    </div>
  );
};

const Info = () => {
  const cards = [
    {
      title: "Apple Capital",
      content: "Himachal Pradesh, the apple capital of India, is renowned for its lush orchards and high-quality produce."
    },
    {
      title: "Challenges",
      content: "Monitoring tree health, managing nutrients, controlling pests and diseases, and estimating production accurately have long hindered the region's agricultural potential."
    },
    {
      title: "Our Solution",
      content: "Our drone-based intelligent system offers a revolutionary approach to orchard management, combining advanced imaging technologies with AI-driven analytics."
    }
  ];

  return (
    <div className='bg-white'>
    <div className="container mx-auto px-4 py-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <InfoCard key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Info;