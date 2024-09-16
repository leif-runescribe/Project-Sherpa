import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

export default function Navbar({ onMenuClick }) {
  const { state, dispatch} = useContext(AuthContext); // Access the authentication state
 
  const handleSignOut = () => {
    dispatch({ type: 'LOGOUT' });
    // Redirect to the sign-in page
  };
  return (
    <nav className="fixed top-0 h-28 left-0 right-0 z-50 bg-gray-600 bg-opacity-70 backdrop-blur-sm shadow-md py-6">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:h-15">
          <Link to="/">
            <div className="flex items-center">
              <img src="/log2.png" alt="Logo" className="h-[70px] w-auto  border-white " />
              <span className="ml-4 text-2xl sm:text-3xl font-bold text-white bg-clip-text text-transparent">SHERPA</span>
            </div>
          </Link>

          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              className="p-2 rounded-md text-white hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 lg:hidden"
              onClick={onMenuClick}
            >
              <svg
                className="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Desktop Menu Links */}
            <div className="hidden lg:flex items-center gap-5 text-xl space-x-10 font-semibold text-white">
              <Link to="/technology" className="hover:underline hover:text-gray-300 transition duration-600 relative group">
                Technology
                <span className="block h-1 bg-gray-300 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-600"></span>
              </Link>
              <Link to="/businessmodel" className="hover:underline hover:text-gray-300 transition duration-600 relative group">
                Business Model
                <span className="block h-1 bg-gray-300 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-600"></span>
              </Link>
              <Link to="/about" className="hover:underline hover:text-gray-300 transition duration-600 relative group">
                About Us
                <span className="block h-1 bg-gray-300 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-600"></span>
              </Link>
              <Link to="/contact" className="hover:underline hover:text-gray-300 transition duration-600 relative group">
                Contact
                <span className="block h-1 bg-gray-300 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-600"></span>
              </Link>
              {state.isAuthenticated ? (
          <button 
            className="block text-gray-100 hover:text-red-600"
            onClick={handleSignOut}
          >
            Logout<br/>
            <span className="text-blue-500">{state.user.username}</span>

          </button>
        ) : (
          <Link 
            to="/signin"
            className="hover:underline hover:text-gray-300 transition duration-600 relative group"
          >
Sign In
<span className="block h-1 bg-gray-300 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-600"></span>          </Link>
        )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
