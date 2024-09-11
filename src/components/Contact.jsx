import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar';

export default function Contact() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className=" min-h-screen m-2 flex justify-center items-center pt-20">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    <div className="w-full max-w-lg  rounded-lg shadow-md p-8 bg-white">
        
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-800">Contact Us</h2>
      <p className="mb-8 font-light text-center text-white sm:text-xl">Give Your Valuable Feedback</p>
      <form className="space-y-6">
        <div>
          <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-800">Your email</label>
          <input
            type="email"
            id="email"
            name="to_name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Subject"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Leave a comment..."
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send message
        </button>
      </form>
    </div>
  </div>
  )
}
