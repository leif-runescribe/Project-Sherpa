import React from "react";

export default function HeroSection() {



    return (
      <div className="relative overflow-auto">
        <div className="max-w-7xl sm:px-20 py-20 pl-40">
          <div className="relative z-10 text-center pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-20  max-w-7xl  sm:mt-12 sm:px-6 md:mt-16 lg:mt-20  xl:mt-28">
              <div className="text-center ">
                <h1 className="text-4xl mt-60  tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl ">
                  <span className="block">Join the Future of </span>
                  <span className="block text-indigo-400">Technology based Orchard Management</span>
                </h1>
                <p className="mt-3 text-center  text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-3xl ">
                Revolutionizing Apple Cultivation in Himachal Pradesh Through Intelligent Drone Solutions
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center ">
                  <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-white text-3xl pt-80">
              Himachal Pradesh, the apple capital of India, is renowned for its lush orchards and high-quality produce. <br/><br/>However, the challenges of monitoring tree health, managing nutrients, controlling pests and diseases, and estimating production accurately have long hindered the region’s agricultural potential. 
              <br/><br/><span className="bg-gradient-to-r from-slate-300 via-red-400 to-gray-300 bg-clip-text text-transparent">Our drone-based intelligent system offers a revolutionary approach to orchard management, combining advanced imaging technologies with AI-driven analytics to optimize every aspect of apple cultivation.</span>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="items-center">
      <video
        className="h-full rounded-lg shadow-lg"
        autoPlay
        loop
        muted
        src="/v2.mp4"
        alt="A sample video"
      >
        Your browser does not support the video tag.
      </video>
    </div>
        </div>
      </div>
    );
  }