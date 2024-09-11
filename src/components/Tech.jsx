import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

const TechSection = ({ title, description, features, imageSrc, isReversed }) => (
  <div className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] mb-16">
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      <div className="lg:w-1/2 p-8">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4 group-hover:scale-105 transition-transform duration-300">
          {title}
        </h2>
        <p className="text-gray-600 text-xl mb-6">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700 group-hover:translate-x-2 transition-transform duration-300 text-xl" style={{ transitionDelay: `${index * 100}ms` }}>
              <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:w-1/2 relative overflow-hidden aspect-w-16 aspect-h-9 group">
  <img
    src={imageSrc}
    alt={title}
    className="w-full object-cover rounded-lg aspect-[16/9]"
  />
  <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/50 to-blue-500/50 opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
</div>

    </div>
  </div>
);

const Techno = () => {
  const sections = [
    {
      title: "Intelligent Tree Health Monitoring",
      description: "Harness the power of drones equipped with multispectral and thermal imaging sensors to monitor the health of your apple trees across vast orchards. Assess key parameters like chlorophyll content, leaf moisture, and overall vitality to ensure optimal growth and yield.",
      features: [
        "Early detection of health issues",
        "Data-driven insights for precise action",
        "Enhanced tree vitality and yield"
      ],
      imageSrc: "https://images.pexels.com/photos/28144764/pexels-photo-28144764/free-photo-of-a-bunch-of-apples-on-a-tree-with-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Precision Nutrient, Pest, and Disease Management",
      description: "Utilizing precision agriculture techniques for managing nutrients, pests, and diseases with pinpoint accuracy. Our drones ensure the precise application of fertilizers, pesticides, and fungicides, reducing waste and environmental impact while enhancing orchard productivity.",
      features: [
        "Reduced costs and environmental footprint",
        "Optimal results through precision application",
        "Swift responses with real-time monitoring"
      ],
      imageSrc: "https://images.pexels.com/photos/5528996/pexels-photo-5528996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Advanced Data Analytics",
      description: "Using advanced data analytics and machine learning to predict yields and optimize decision-making. Our analytics platform processes extensive data to deliver actionable insights and improve productivity and efficiency in orchard management.",
      features: [
        "Accurate yield forecasting with predictive analytics",
        "Insightful data for informed decision-making",
        "Integration with historical and real-time data"
      ],
      imageSrc: "https://www.researchgate.net/publication/338440436/figure/fig4/AS:844877197766657@1578445829192/Comparison-between-the-original-YOLOv3-tiny-and-our-modified-version-that-performs.jpg"
    },
    {
      title: "Innovative Marketing Tools",
      description: "Elevate your marketing strategy with digital marketing tools. From virtual orchard tours to blockchain traceability and engaging digital content, we help enhance the visibility and marketability of your apple produce.",
      features: [
        "Attract buyers with virtual orchard tours",
        "Ensure quality with blockchain traceability",
        "Boost engagement with captivating digital marketing"
      ],
      imageSrc: "https://images.pexels.com/photos/4916114/pexels-photo-4916114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Seamless Integration",
      description: "Our technology integrates smoothly with existing farm management systems. We offer comprehensive support and training to ensure a seamless transition and effective use of our solutions.",
      features: [
        "Effortless integration with current systems",
        "Thorough training and support provided",
        "Quick adoption with minimal disruption"
      ],
      imageSrc: "https://images.pexels.com/photos/274939/pexels-photo-274939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Future Innovations",
      description: "We are committed to driving innovation and continuously improving our technology. Our research and development efforts focus on incorporating the latest advancements to offer even more value and efficiency in orchard management.",
      features: [
        "Ongoing research for next-gen solutions",
        "Exploring emerging technologies",
        "Committed to future-proofing our products"
      ],
      imageSrc: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-teal-900 to-blue-900 py-20">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300 mb-4 animate-pulse">
              Transforming Apple Orchard Management
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore how our advanced technology enhances apple orchard management, from tree health monitoring to precision agriculture and innovative marketing tools.
            </p>
          </header>

          <div className="space-y-16">
            {sections.map((section, index) => (
              <TechSection key={index} {...section} isReversed={index % 2 !== 0} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Techno;