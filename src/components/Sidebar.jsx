import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, onClose }) {
    return (
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="space-y-12 py-20 text-2xl">
          <Link to="/technology" className="block text-gray-700 hover:text-indigo-600 ">Technology</Link>                
          <Link to="/about" className="block text-gray-700 hover:text-indigo-600">About Us</Link>                
          <Link to='/contact' className="block text-gray-700 hover:text-indigo-600 ">Contact</Link>

          </div>
        </div>
      </div>
    );
  }