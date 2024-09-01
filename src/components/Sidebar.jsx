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
          <nav className="mt-8">
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-50 hover:text-indigo-600">Home</a>
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-50 hover:text-indigo-600">Features</a>
            <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-50 hover:text-indigo-600">Connect Wallet</a>

          </nav>
        </div>
      </div>
    );
  }