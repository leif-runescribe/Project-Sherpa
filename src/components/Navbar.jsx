import { Link } from "react-router-dom";

export default function Navbar({ onMenuClick }) {
    
    return (
      <nav className="fixed top-0 h-20 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-md item-center justify-center py-4 ">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between  md:h-15">
            <Link to='/'><div className="flex gap-2 sm:gap-6 items-center">
              <img src="/a.png" alt="Logo" className="h-[50px] w-auto" />
              <span className="ml-2 text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Project Sherpa</span>
            </div>
            </Link>
            
            <div className="flex items-center">
            <button
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
                onClick={onMenuClick}
              >
                <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>



              <div className="hidden lg:flex items-center gap-5 font-bold text-xl">
                <Link to="/technology" className="text-gray-700 hover:text-indigo-600 ">Technology</Link>                
                <Link to="/about" className="text-gray-700 hover:text-indigo-600">About Us</Link>                
                <Link to='/contact' className="text-gray-700 hover:text-indigo-600 ">Contact</Link>
                
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }