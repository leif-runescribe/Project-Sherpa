import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-20 border bg-opacity-80 bg-black border-gray-200 border-opacity-60 transition-transform transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-4xl text-white font-medium border-l-2 px-6 title-font mb-2">
        {title}
      </h2>
      <br/>
      <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg><p className="leading-relaxed text-xl mb-4 text-white">{description}</p>
      
        
     
    </div>
  );
};

const CardContainer = () => {
  const cards = [
    {
      title: "AI-Powered Image Analysis",
      description:
        "Our system leverages advanced AI algorithms to analyze drone-captured images in real-time, allowing accurate detection of anomalies, ensuring prompt and targeted interventions.",
    },
    {
      title: "Machine Learning for Predictive Analytics",
      description:
        "Utilizing machine learning models, our platform predicts future orchard conditions, from yield estimates to potential pest outbreaks.",
    },
    {
      title: "Blockchain-Based Traceability",
      description:
        "Implement blockchain technology to ensure complete traceability of apple produce. Consumers can track the journey of apples from orchard to table.",
    },
    {
      title: "Advanced Drone Services",
      description:
        "Our drones are equipped with multispectral and thermal imaging capabilities, providing a comprehensive view of your orchard’s health.",
    },
    {
      title: "Smart Marketing Tools",
      description:
        "Leverage drone-captured content to create immersive marketing campaigns like virtual orchard tours and promotional videos.",
    },
    {
      title: "Reporting and Analytics",
      description:
        "We offer customizable reporting and analytics tools that deliver insights you need to drive growth and enhance productivity.",
    },
  ];

  return (
    <div className="flex flex-wrap">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardContainer;
