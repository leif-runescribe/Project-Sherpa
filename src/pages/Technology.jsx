import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

const Technology = () => {
  return (
    <Layout>
      <div className="bg-gray-50 px-5 bg-gradient-to-br from-gray-900 to-green-300 sm:px-10 md:px-20 lg:px-40 min-h-screen py-20 mt-12 sm:py-10  w-full">
        <header className="text-center">
          <h1 className="text-xl mt-16 sm:text-2xl lg:text-4xl font-bold text-gray-100 mb-4">
            Transforming Apple Orchard Management System with Drone Intelligent System
          </h1>
          <p className="text-sm sm:text-2xl font-bold text-gray-100 max-w-xl mx-auto pb-10">
            Explore how our advanced technology enhances apple orchard management, from tree health monitoring to precision agriculture and innovative marketing tools.
          </p>
        </header>


        <section className="relative bg-indigo-50 p-6 sm:p-10 rounded-lg shadow-lg mb-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out overflow-hidden">
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
    
    <div className="lg:w-1/2 mb-8 lg:mb-0 space-y-6">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105 uppercase tracking-wider">
      Intelligent Tree Health Monitoring      </h2>
      <p className="text-md sm:text-xl text-gray-700 mb-6 leading-relaxed">
      Harness the power of drones equipped with multispectral and thermal imaging sensors to monitor the health of your apple trees across vast orchards. Assess key parameters like chlorophyll content, leaf moisture, and overall vitality to ensure optimal growth and yield.
      </p>

      <ul className="list-none space-y-4 text-gray-700 text-md sm:text-lg">
        <li className="flex items-center">
          <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
          <span className="hover:text-indigo-600 transition-colors duration-300">Early detection of health issues.</span>
        </li>
        <li className="flex items-center">
          <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
          <span className="hover:text-indigo-600 transition-colors duration-300">Data-driven insights for precise action.</span>
        </li>
        <li className="flex items-center">
          <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
          <span className="hover:text-indigo-600 transition-colors duration-300">Enhanced tree vitality and yield.</span>
        </li>
      </ul>
    </div>
    <div className="lg:w-1/2">
      <div className="relative overflow-hidden rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105">
        <img
          className="w-full object-cover rounded-lg aspect-[16/9]"
          src="https://images.pexels.com/photos/28144764/pexels-photo-28144764/free-photo-of-a-bunch-of-apples-on-a-tree-with-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Precision Management"
        />
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 hover:opacity-30 transition-opacity duration-500 ease-in-out"></div>
      </div>
    </div>
  </div>

</section>
        
        {/* Section 2: Precision Nutrient, Pest, and Disease Management */}
        <section className="relative bg-indigo-50 p-6 sm:p-10 rounded-lg shadow-lg mb-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out overflow-hidden">
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
    
    <div className="lg:w-1/2 mb-8 lg:mb-0 space-y-6">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105 uppercase tracking-wider">
        Precision Nutrient, Pest, and Disease Management
      </h2>
      <p className="text-md sm:text-xl text-gray-700 mb-6 leading-relaxed">
        Utilizing precision agriculture techniques for managing nutrients, pests, and diseases with pinpoint accuracy. 
        <span className="font-semibold text-indigo-600"> Our drones</span> ensure the precise application of fertilizers, pesticides, and fungicides, 
        reducing waste and environmental impact while enhancing orchard productivity.
      </p>

      <ul className="list-none space-y-4 text-gray-700 text-md sm:text-lg">
        <li className="flex items-center">
          <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
          <span className="hover:text-indigo-600 transition-colors duration-300">Reduced costs and environmental footprint.</span>
        </li>
        <li className="flex items-center">
          <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
          <span className="hover:text-indigo-600 transition-colors duration-300">Optimal results through precision application.</span>
        </li>
        <li className="flex items-center">
          <svg className="h-6 w-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
          <span className="hover:text-indigo-600 transition-colors duration-300">Swift responses with real-time monitoring.</span>
        </li>
      </ul>
    </div>
    <div className="lg:w-1/2">
      <div className="relative overflow-hidden rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105">
        <img
          className="w-full object-cover rounded-lg aspect-[16/9]"
          src="https://images.pexels.com/photos/5528996/pexels-photo-5528996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Precision Management"
        />
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 hover:opacity-30 transition-opacity duration-500 ease-in-out"></div>
      </div>
    </div>
  </div>

</section>


        {/* Section 3: Advanced Data Analytics */}
        <section className="bg-white p-5 sm:p-8 rounded-lg shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl font-semibold text-teal-600 mb-4">
                Advanced Data Analytics
              </h2>
              <p className="text-sm sm:text-lg text-gray-800 mb-6">
                Using advanced data analytics and machine learning to predict yields and optimize decision-making. Our analytics platform processes extensive data to deliver actionable insights and improve productivity and efficiency in orchard management.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm sm:text-lg">
                <li>Accurate yield forecasting with predictive analytics.</li>
                <li>Insightful data for informed decision-making.</li>
                <li>Integration with historical and real-time data.</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img className="w-full rounded-lg shadow-md object-cover aspect-[16/9]" 
              src="https://www.researchgate.net/publication/338440436/figure/fig4/AS:844877197766657@1578445829192/Comparison-between-the-original-YOLOv3-tiny-and-our-modified-version-that-performs.jpg" alt="Data Analytics" />
            </div>
          </div>
        </section>

        {/* Section 4: Innovative Marketing Tools */}
        <section className="bg-teal-50 p-5 sm:p-8 rounded-lg shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl font-semibold text-teal-600 mb-4">
                Innovative Marketing Tools
              </h2>
              <p className="text-sm sm:text-lg text-gray-800 mb-6">
                Elevate your marketing strategy with digital marketing tools. From virtual orchard tours to blockchain traceability and engaging digital content, we help enhance the visibility and marketability of your apple produce.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm sm:text-lg">
                <li>Attract buyers with virtual orchard tours.</li>
                <li>Ensure quality with blockchain traceability.</li>
                <li>Boost engagement with captivating digital marketing.</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img className="w-full rounded-lg shadow-md object-cover aspect-[16/9]"
              src="https://images.pexels.com/photos/4916114/pexels-photo-4916114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Marketing Tools"  />
            </div>
          </div>
        </section>

        <section className="bg-teal-50 p-5 sm:p-8 rounded-lg shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl font-semibold text-teal-600 mb-4">
              Seamless Integration
              </h2>
              <p className="text-sm sm:text-lg text-gray-800 mb-6">
              Our technology integrates smoothly with existing farm management systems. We offer comprehensive support and training to ensure a seamless transition and effective use of our solutions.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm sm:text-lg">
                <li>Effortless integration with current systems.</li>
                <li>Thorough training and support provided.</li>
                <li>Quick adoption with minimal disruption.</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img className="w-full rounded-lg shadow-md object-cover aspect-[16/9]"  src="\images\single_drone.jpg" alt="Marketing Tools"  />
            </div>
          </div>
        </section>

        <section className="bg-teal-50 p-5 sm:p-8 rounded-lg shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl font-semibold text-teal-600 mb-4">
              Future Innovations
              </h2>
              <p className="text-sm sm:text-lg text-gray-800 mb-6">
              We are committed to driving innovation and continuously improving our technology. Our research and development efforts focus on incorporating the latest advancements to offer even more value and efficiency in orchard management.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm sm:text-lg">
                <li>Ongoing research for next-gen solutions.</li>
                <li>Exploring emerging technologies.</li>
                <li>Committed to future-proofing our products.</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img className="w-full rounded-lg shadow-md object-cover aspect-[16/9]" src="\images\double_drone.jpg" alt="Marketing Tools"  />
            </div>
          </div>
        </section>
        
      </div>
      <Footer />
    </Layout>
  );
};

export default Technology;
