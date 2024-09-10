import React from 'react';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';

const Team= () => {
  return (
    
    <div className="  min-h-screen ">
      <Layout>
      <header className="text-center mb-12 mt-20 pt-20">
        <h1 className="text-4xl font-bold text-gray-100 mb-4 leading-tight">
          About Us: Innovating the Future of Orchard Management
        </h1>
        <p className="text-lg text-gray-100 max-w-3xl mx-auto">
          We are dedicated to revolutionizing apple orchard management through advanced technology and innovative solutions. Learn more about our mission, team, and values.
        </p>
      </header>

  
      <section className=" px-20 rounded-lg shadow-lg mb-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold text-gray-200 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-100 mb-6">
              Our mission is to leverage cutting-edge technology to enhance orchard management, increase productivity, and promote sustainable agriculture practices. We strive to provide farmers with the tools they need to manage their orchards more effectively and efficiently.
            </p>
            <ul className="list-disc pl-6 text-gray-100 space-y-2">
              <li>Enhance productivity through technology.</li>
              <li>Promote sustainability in agriculture.</li>
              <li>Empower farmers with innovative tools.</li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img src="/mission.jpg" className="w-[600px] rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      <section className=" p-8 rounded-lg shadow-lg mb-16">
        <h2 className="text-3xl font-semibold text-white text-center mb-6">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-grey-600 p-6 rounded-lg shadow-lg">
            <img src="/ape6.jpeg" alt="Team Member 1" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Jasleen Kaur</h3>
            <p className="text-gray-100 font-semibold">Team Leader</p>

            <p className='text-gray-100'>Jasleen Kaur is a student at VIT Chennai with a strong passion for research. She is dedicated to exploring new ideas and contributing to the academic community. Her curiosity and drive make her a promising researcher in her field.</p>
          </div>
          <div className=" p-6 rounded-lg shadow-lg">
            <img src="/ape1.avif" alt="Team Member 2" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Nikhil Nair</h3>
            <p className="text-gray-100 font-semibold">Team member </p>
            <p className='text-gray-100'>Nikhil Nair is a student at VIT Chennai with a keen interest in UI/UX design and unmanned vehicles. He is passionate about creating intuitive user experiences and exploring the future of autonomous technology. His enthusiasm drives him to innovate and excel in these cutting-edge fields.</p>
          </div>
          <div className=" p-6 rounded-lg shadow-lg">
            <img src="/ape2.png" alt="Team Member 3" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Sanchit Raj</h3>
            <p className="text-gray-100 font-semibold">Team member</p>
            <p className='text-gray-100'>Sanchit Raj is a student at VIT Chennai with a strong passion for app development, artificial intelligence, and machine learning. He is dedicated to creating innovative applications and exploring the possibilities of AI and ML in shaping the future. His drive to learn and innovate makes him a standout in these rapidly evolving fields.</p>
            
          </div>


          <div className=" p-6 rounded-lg shadow-lg">
            <img src="/ape3.jpeg" alt="Team Member 3" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Kwahish yadav</h3>
            <p className="text-gray-100 font-semibold">Team member</p>
            <p className='text-gray-100'>
            Kwahish Yadav is a student at VIT Chennai with a keen interest in computer vision. She is passionate about exploring how machines can interpret and understand visual data, aiming to contribute to advancements in this dynamic field. Her curiosity and dedication drive her to excel in her studies and research.
            </p>
          </div>

          <div className=" p-6 rounded-lg shadow-lg">
            <img src="/ape4.jpeg" alt="Team Member 3" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Anantabh</h3>
            <p className="text-gray-100 font-semibold">Team member</p>
            <p className='text-gray-100'>Anantabh is a student at VIT Chennai with a strong interest in blockchain technology and UI/UX design. He is passionate about the potential of blockchain to revolutionize industries and is dedicated to creating intuitive and user-friendly interfaces. His dual focus on emerging tech and design makes him a versatile and forward-thinking individual.</p>
          </div>

          <div className=" p-6 rounded-lg shadow-lg">
            <img src="/ape5.jpeg" alt="Team Member 3" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Nilesh Tiwari</h3>
            <p className="text-gray-100 font-semibold">Team member</p>
            <p className='text-gray-100'>Nilesh Tiwari is a student at VIT Chennai with a strong interest in both frontend and backend development, as well as research. He is passionate about building full-stack solutions and diving deep into research to push the boundaries of technology. His diverse skill set and curiosity make him a valuable contributor in the tech field.</p>
          </div>
        </div>
      </section>

    
      <section className="bg-teal-70 p-8 rounded-lg shadow-lg mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-black">
            Our Values
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="lg:w-1/3 p-4">
            <div className="bg-white bg-opacity-40 p-6 rounded-lg shadow-md">
              <div className="bg-black space-x-8 flex flex-row p-4 text-center rounded-full mb-4">
              
                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 11v9l10-5v-9l-10 5z"/></svg>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">Innovation</h3>
              </div>
             
              <p className="text-gray-100">
              We are committed to embracing innovation, constantly seeking new ways to create cutting-edge solutions. Our focus is on driving progress and enhancing efficiency, ensuring that our contributions lead to meaningful advancements. By staying at the forefront of technology, we aim to push boundaries and deliver impactful results.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 p-4">
            <div className="bg-white bg-opacity-40  p-6 rounded-lg shadow-md">
              <div className="bg-black space-x-8 flex flex-row p-4 rounded-full mb-4">
                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4V2L2 7l10 5 10-5-10-5zm0 13l-10-5v9l10 5v-9z"/></svg>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">Integrity</h3>
              </div>
              
              <p className="text-gray-100">
              We are dedicated to upholding the highest standards of integrity in every aspect of our work. In all our interactions and business practices, we prioritize honesty, transparency, and ethical conduct. This commitment to integrity is the foundation of the trust we build with our clients, partners, and community.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 p-4">
            <div className="bg-white  bg-opacity-40  p-6 rounded-lg shadow-md">
              <div className="bg-black space-x-8 flex flex-row p-4 rounded-full mb-4">
                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 11v9l10-5v-9l-10 5z"/></svg>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">Customer-Centric</h3>
              </div>
              
              <p className="text-gray-100">
              We are dedicated to upholding the highest standards of integrity in every aspect of our work. In all our interactions and business practices, we prioritize honesty, transparency, and ethical conduct. This commitment to integrity is the foundation of the trust we build with our clients, partners, and community.
              </p>
            </div>
          </div>
        </div>
      </section>
      </Layout>
    </div>
  )
}

export default Team