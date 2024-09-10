import React from "react";
import Sherpa from "./Sherpa";
import Info from "./Info";

export default function HeroSection() {
  return (
    <div className="relative z-[1] overflow-hidden">
      <div className="flex mt-12 bg-white opacity- justify-center items-center ">
        <video
          className="w-full h-[1000px]  object-cover rounded-lg shadow-lg"
          autoPlay
          loop
          muted
          src="/v2.mp4"
          alt="A sample video"
        >
          Your browser does not support the video tag.
        </video>
        <div className='absolute text-center bg-black bg-opacity-50 text-white p-4 pb-20 rounded  '>
          
          <h1 className="text-4xl w-full md:mt-40 text-center mt-28 font-extrabold text-white sm:text-6xl md:text-6xl">
            <span className=" block text-6xl md:text-6xl">Join the Future of</span>
            <span className="block text-6xl md:text-6xl text-green-200">Technology based<br/> Orchard Management</span>
          </h1>
          
          <div className="mt-5 sm:mt-8 sm:flex space-x-4 sm:justify-center">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-6 border border-transparent text-2xl font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-xl md:px-10"
              >
                Get started
              </a>
            </div>
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-6 border border-transparent text-2xl font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-xl md:px-10"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <Sherpa/>
      <Info/>
    </div>
  );
}