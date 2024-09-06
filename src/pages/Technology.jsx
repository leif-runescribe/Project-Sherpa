import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

const Technology = () => {
  return (
    <Layout>
    <div className="bg-gray-50 px-40 min-h-screen py-40 p-8 bg-gradient-to-br from-cyan-800 via-blue-600 to-violet-600">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Transforming Apple Orchard Management System with Drone Intelligent System 
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Explore how our advanced technology enhances apple orchard management, from tree health monitoring to precision agriculture and innovative marketing tools.
        </p>
      </header>

      {/* Section 1: Intelligent Tree Health Monitoring */}
      <section className="bg-white px-20 py-8 rounded-lg shadow-lg mb-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
              Intelligent Tree Health Monitoring
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              Harness the power of drones equipped with multispectral and thermal imaging sensors to monitor the health of your apple trees across vast orchards. Assess key parameters like chlorophyll content, leaf moisture, and overall vitality to ensure optimal growth and yield.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Early detection of health issues.</li>
              <li>Data-driven insights for precise action.</li>
              <li>Enhanced tree vitality and yield.</li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img src="https://images.pexels.com/photos/28144764/pexels-photo-28144764/free-photo-of-a-bunch-of-apples-on-a-tree-with-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Tree Health Monitoring" className="w-full rounded-lg shadow-md h-[60vh]" />
          </div>
        </div>
      </section>

      {/* Section 2: Precision Nutrient, Pest, and Disease Management */}
      <section className="bg-indigo-50 p-8 rounded-lg shadow-lg mb-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
              Precision Nutrient, Pest, and Disease Management
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              Utilizing precision agriculture techniques for managing nutrients, pests, and diseases with pinpoint accuracy. Our drones ensure the precise application of fertilizers, pesticides, and fungicides, reducing waste and environmental impact while enhancing orchard productivity.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Reduced costs and environmental footprint.</li>
              <li>Optimal results through precision application.</li>
              <li>Swift responses with real-time monitoring.</li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img src="https://images.pexels.com/photos/5528996/pexels-photo-5528996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Precision Management" className="w-full rounded-lg shadow-md h-[60vh]" />
          </div>
        </div>
      </section>

      {/* Section 3: Advanced Data Analytics */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold text-teal-600 mb-4">
              Advanced Data Analytics
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              Using advanced data analytics and machine learning to predict yields and optimize decision-making. Our analytics platform processes extensive data to deliver actionable insights and improve productivity and efficiency in orchard management.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Accurate yield forecasting with predictive analytics.</li>
              <li>Insightful data for informed decision-making.</li>
              <li>Integration with historical and real-time data.</li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img src="https://www.researchgate.net/publication/338440436/figure/fig4/AS:844877197766657@1578445829192/Comparison-between-the-original-YOLOv3-tiny-and-our-modified-version-that-performs.jpg" alt="Data Analytics" className="w-full rounded-lg shadow-md " />
          </div>
        </div>
      </section>

      {/* Section 4: Innovative Marketing Tools */}
      <section className="bg-teal-50 p-8 rounded-lg shadow-lg mb-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold text-teal-600 mb-4">
              Innovative Marketing Tools
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              Elevate your marketing strategy with digital marketing tools. From virtual orchard tours to blockchain traceability and engaging digital content, we help enhance the visibility and marketability of your apple produce.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Attract buyers with virtual orchard tours.</li>
              <li>Ensure quality with blockchain traceability.</li>
              <li>Boost engagement with captivating digital marketing.</li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img src="https://images.pexels.com/photos/4916114/pexels-photo-4916114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Marketing Tools" className="w-full rounded-lg shadow-md h-[60vh] " />
          </div>
        </div>
      </section>

      {/* Section 5: Seamless Integration */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Seamless Integration
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              Our technology integrates smoothly with existing farm management systems. We offer comprehensive support and training to ensure a seamless transition and effective use of our solutions.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Effortless integration with current systems.</li>
              <li>Thorough training and support provided.</li>
              <li>Quick adoption with minimal disruption.</li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img src="https://images.pexels.com/photos/5806223/pexels-photo-5806223.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Seamless Integration" className="w-full rounded-lg shadow-md h-[60vh]" />
          </div>
        </div>
      </section>

      {/* Section 6: Future Innovations */}
      <section className="bg-teal-50 p-8 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold text-teal-600 mb-4">
              Future Innovations
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              We are committed to driving innovation and continuously improving our technology. Our research and development efforts focus on incorporating the latest advancements to offer even more value and efficiency in orchard management.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Ongoing research for next-gen solutions.</li>
              <li>Exploring emerging technologies.</li>
              <li>Committed to future-proofing our products.</li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img src="https://images.pexels.com/photos/18660499/pexels-photo-18660499/free-photo-of-view-of-dji-air-3-drone-flying-in-the-forest-in-south-of-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Future Innovations" className="w-full rounded-lg shadow-md h-[60vh]" />
          </div>
        </div>
      </section>
    </div>
   <Footer/>
    </Layout>
  );
};

export default Technology;
