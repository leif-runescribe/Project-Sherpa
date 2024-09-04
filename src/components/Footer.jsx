import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import from brands
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Import from solid

function Footer() {
  return (
    <footer className="bg-gray-900 z-0 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
         
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-2xl font-bold">Company</h4>
            <ul className="mt-4">
              <li>
                <a href="#" className="text-gray-400 text-xl hover:text-white">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-xl hover:text-white">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-xl hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

         
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-2xl font-bold">Products</h4>
            <ul className="mt-4">
              <li>
                <a href="#" className="text-gray-400 text-xl hover:text-white">Drone Monitoring</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-xl hover:text-white">Product Traceability</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-xl hover:text-white">Smart Sales</a>
              </li>
            </ul>
          </div>

          
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-2xl font-bold">Contact Us</h4>
            <ul className="mt-4">
              <li className="flex items-center text-gray-400 text-xl hover:text-white">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                info@projectsherpa.com
              </li>
              <li className="flex items-center text-gray-400 text-xl hover:text-white mt-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                +91 1234 567 890
              </li>
              <li className="flex items-center text-gray-400 text-xl hover:text-white mt-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                Vellore Institute of Technology, Chennai
              </li>
            </ul>
          </div>

       
          <div className="w-full md:w-1/4">
            <h4 className="text-2xl font-bold">Follow Us</h4>
            <ul className="mt-4 flex space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>

      
        <div className="mt-28 text-center">
          <p className="text-gray-400 text-xl">&copy; 2024 Project Sherpa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
