import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 z-0 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-3xl font-bold">Company</h4>
            <ul className="mt-4">
              <li>
                <a href="#" className="text-gray-400 text-2xl hover:text-white">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-2xl hover:text-white">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-2xl hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-3xl font-bold">Products</h4>
            <ul className="mt-4">
              <li>
                <a href="#" className="text-gray-400 text-2xl hover:text-white">Drone Monitoring</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-2xl hover:text-white">Product Traceability</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-2xl hover:text-white">Smart Sales</a>
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/4">
            <h4 className="text-3xl font-bold">Follow Us</h4>
            <ul className="mt-4  ">
            <li>
                <a href="#" className="text-gray-400 text-2xl hover:text-white">Drone Monitoring</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-2xl hover:text-white">Product Traceability</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-2xl hover:text-white">Smart Sales</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-28 text-center">
          <p className="text-gray-400 text-3xl">&copy; 2024 Project Sherpa . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
