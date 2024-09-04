import React from "react";

export default function HeroSection() {
  return (
    <div className="relative z-[1] overflow-hidden">
      <div className="flex justify-center items-center ">
        <video
          className="w-full h-[1000px] object-cover rounded-lg shadow-lg"
          autoPlay
          loop
          muted
          src="/v2.mp4"
          alt="A sample video"
        >
          Your browser does not support the video tag.
        </video>
        <div className='absolute text-center bg-black bg-opacity-50 text-white p-4 rounded px-40 '>
          <h1 className="text-4xl md:mt-40 text-center mt-28 font-extrabold text-white sm:text-6xl md:text-6xl">
            <span className="mx-auto block">Join the Future of</span>
            <span className="block text-indigo-400">Technology based Orchard Management</span>
          </h1>
          <p className="mt-3 text-center w-full text-gray-300 sm:mt-5 sm:text-3xl sm:max-w-xl md:mt-5 md:text-5xl">
            Revolutionizing Apple Cultivation in Himachal Pradesh Through Intelligent Drone Solutions
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-xl md:px-10"
              >
                Get started
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3 pb-5">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="">
          <div className="relative z-10 text-center pb-6 sm:pb-12 md:pb-16 px-20 md:px-[250px] lg:pb-20 xl:pb-24 mx-auto">
            <main className="mt-12 w-full sm:mt-8 sm:px-4 md:mt-12 lg:mt-16 xl:mt-20">
              <div className="text-center">
                <div className="text-white text-4xl sm:text-5xl pt-8">
                  Himachal Pradesh, the apple capital of India, is renowned for its lush orchards and high-quality produce.
                  <br />
                  <br />
                  However, the challenges of monitoring tree health, managing nutrients, controlling pests and diseases, and
                  estimating production accurately have long hindered the region’s agricultural potential.
                  <br />
                  <br />
                  <span className="bg-gradient-to-r from-slate-300 via-red-400 to-gray-300 font-bold bg-clip-text text-transparent">
                    Our drone-based intelligent system offers a revolutionary approach to orchard management, combining
                    advanced imaging technologies with AI-driven analytics to optimize every aspect of apple cultivation.
                  </span>
                </div>
              </div>
            </main>
          </div>
        </div>

      </div>
    </div>
  );
}