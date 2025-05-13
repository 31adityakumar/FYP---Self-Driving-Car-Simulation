import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-14 h-14 mr-3 bg-white rounded-full p-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 fill-blue-600">
                <path d="M19 20h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zM4 20h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zm4.5-2h7a2.5 2.5 0 1 0 0-5h-.5l-1.424-1.927A4 4 0 0 0 10.382 9H7.618a4 4 0 0 0-3.194 1.573L3 12.5h-.5A2.5 2.5 0 1 0 5 15h.5v1.978a2.5 2.5 0 0 0 .91 1.922 2.5 2.5 0 0 0 2.09.6zM8 13.5l1.5-2h5l1.5 2h-8z" />
                <path d="M14.5 13.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                <path d="M22 13.5h-1V12h-2v1.5h-2v-6a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v3a3 3 0 0 1-2 2.83z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Self Driving Car Simulation</h1>
              <p className="text-sm text-blue-100 opacity-90">B.Tech Final Year Project 2024-2025</p>
            </div>
          </div>
          
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-2 md:space-x-8">
              <li>
                <Link 
                  to="/" 
                  className="block px-3 py-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-700/50 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block px-3 py-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-700/50 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/simulation" 
                  className="block px-3 py-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-700/50 transition-colors duration-200"
                >
                  Simulation
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 