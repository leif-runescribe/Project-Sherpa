import React from 'react';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';

const Team= () => {
  return (
    
    <div className="bg-gray-50  bg-gradient-to-br from-cyan-800 via-blue-600 to-violet-600 min-h-screen p-8">
      <Layout>
      {/* Header Section */}
      <header className="text-center mb-12 mt-20 pt-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          About Us: Innovating the Future of Orchard Management
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We are dedicated to revolutionizing apple orchard management through advanced technology and innovative solutions. Learn more about our mission, team, and values.
        </p>
      </header>

      {/* Section 1: Our Mission */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              Our mission is to leverage cutting-edge technology to enhance orchard management, increase productivity, and promote sustainable agriculture practices. We strive to provide farmers with the tools they need to manage their orchards more effectively and efficiently.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Enhance productivity through technology.</li>
              <li>Promote sustainability in agriculture.</li>
              <li>Empower farmers with innovative tools.</li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img src="https://images.pexels.com/photos/6289027/pexels-photo-6289027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our Mission" className="w-full rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Section 2: Our Team */}
      <section className="bg-indigo-50 p-8 rounded-lg shadow-lg mb-16">
        <h2 className="text-3xl font-semibold text-indigo-600 text-center mb-6">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://i.pinimg.com/736x/7d/89/88/7d8988a6691d6a64f154deafbadcb148.jpg" alt="Team Member 1" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Jasleen Kaur</h3>
            <p className="text-gray-600 font-semibold">Team Leader</p>

            <p className='text-gray-800'>Jasleen Kaur is a student at VIT Chennai with a strong passion for research. She is dedicated to exploring new ideas and contributing to the academic community. Her curiosity and drive make her a promising researcher in her field.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://media.istockphoto.com/id/1331350936/vector/male-avatar-icon.jpg?s=612x612&w=0&k=20&c=0qgFWWanz2PIMz6OeUvQPrPGTSqM1qyZCW8czACBvyc=" alt="Team Member 2" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Nikhil Nair</h3>
            <p className="text-gray-600 font-semibold">Team member </p>
            <p className='text-gray-800'>Nikhil Nair is a student at VIT Chennai with a keen interest in UI/UX design and unmanned vehicles. He is passionate about creating intuitive user experiences and exploring the future of autonomous technology. His enthusiasm drives him to innovate and excel in these cutting-edge fields.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png" alt="Team Member 3" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sanchit Raj</h3>
            <p className="text-gray-600 font-semibold">Team member</p>
            <p className='text-gray-800'>Sanchit Raj is a student at VIT Chennai with a strong passion for app development, artificial intelligence, and machine learning. He is dedicated to creating innovative applications and exploring the possibilities of AI and ML in shaping the future. His drive to learn and innovate makes him a standout in these rapidly evolving fields.</p>
            
          </div>


          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png" alt="Team Member 3" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Kwahish yadav</h3>
            <p className="text-gray-600 font-semibold">Team member</p>
            <p className='text-gray-800'>
            Kwahish Yadav is a student at VIT Chennai with a keen interest in computer vision. She is passionate about exploring how machines can interpret and understand visual data, aiming to contribute to advancements in this dynamic field. Her curiosity and dedication drive her to excel in her studies and research.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg" alt="Team Member 3" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Anantabh</h3>
            <p className="text-gray-600 font-semibold">Team member</p>
            <p className='text-gray-800'>Anantabh is a student at VIT Chennai with a strong interest in blockchain technology and UI/UX design. He is passionate about the potential of blockchain to revolutionize industries and is dedicated to creating intuitive and user-friendly interfaces. His dual focus on emerging tech and design makes him a versatile and forward-thinking individual.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://th.bing.com/th/id/OIP.EwG6x9w6RngqsKrPJYxULAHaHa?rs=1&pid=ImgDetMain" alt="Team Member 3" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Nilesh Tiwari</h3>
            <p className="text-gray-600 font-semibold">Team member</p>
            <p className='text-gray-800'>Nilesh Tiwari is a student at VIT Chennai with a strong interest in both frontend and backend development, as well as research. He is passionate about building full-stack solutions and diving deep into research to push the boundaries of technology. His diverse skill set and curiosity make him a valuable contributor in the tech field.</p>
          </div>
        </div>
      </section>

      {/* Section 3: Our Values */}
      <section className="bg-teal-50 p-8 rounded-lg shadow-lg mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-teal-600">
            Our Values
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="lg:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-teal-600 p-4 rounded-full mb-4">
                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 11v9l10-5v-9l-10 5z"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">
              We are committed to embracing innovation, constantly seeking new ways to create cutting-edge solutions. Our focus is on driving progress and enhancing efficiency, ensuring that our contributions lead to meaningful advancements. By staying at the forefront of technology, we aim to push boundaries and deliver impactful results.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-teal-600 p-4 rounded-full mb-4">
                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4V2L2 7l10 5 10-5-10-5zm0 13l-10-5v9l10 5v-9z"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">
              We are dedicated to upholding the highest standards of integrity in every aspect of our work. In all our interactions and business practices, we prioritize honesty, transparency, and ethical conduct. This commitment to integrity is the foundation of the trust we build with our clients, partners, and community.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-teal-600 p-4 rounded-full mb-4">
                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 11v9l10-5v-9l-10 5z"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer-Centric</h3>
              <p className="text-gray-600">
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