import React from 'react';

const Team= () => {
  return (
    <div className="bg-gray-50  bg-gradient-to-br from-cyan-800 via-blue-600 to-violet-600 min-h-screen p-8">
      {/* Header Section */}
      <header className="text-center mb-12">
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
            <img src="/images/mission.jpg" alt="Our Mission" className="w-full rounded-lg shadow-md" />
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
            <img src="/images/team-member-1.jpg" alt="Team Member 1" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/images/team-member-2.jpg" alt="Team Member 2" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/images/team-member-3.jpg" alt="Team Member 3" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Emily Johnson</h3>
            <p className="text-gray-600">Lead Engineer</p>
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
                We embrace innovation to create cutting-edge solutions that drive progress and efficiency.
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
                We uphold the highest standards of integrity in all our interactions and business practices.
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
                Our customers are at the heart of everything we do, driving us to exceed their expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Story */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Our Story
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-lg text-gray-800 leading-relaxed">
              Founded in 2020, our company emerged from a passion for technology and a commitment to transforming orchard management. Our journey began with a small team of dedicated innovators who saw the potential of drone technology to make a significant impact on agriculture. Over the years, we have expanded our team and capabilities, but our core mission remains the same: to empower farmers and revolutionize orchard management.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src="/images/our-story.jpg" alt="Our Story" className="w-full rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Section 5: Contact Us */}
      <section className="bg-indigo-50 p-8 rounded-lg shadow-lg mb-16">
        <h2 className="text-3xl font-semibold text-indigo-600 text-center mb-6">
          Contact Us
        </h2>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-lg text-gray-800 mb-6">
              We would love to hear from you! Whether you have questions, feedback, or just want to connect, feel free to reach out to us. Our team is here to assist you and provide the support you need.
            </p>
            <address className="text-gray-700">
              
              </address>
              </div>
              </div>
              </section>
            </div>
  )
}

export default Team