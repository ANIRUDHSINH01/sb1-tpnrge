import React from 'react';
import { Menu, X, Server, Bot, ChevronDown } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gray-900 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Server className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-white font-bold text-xl">HostDual</span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</a>
                <a href="#pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                <a href="#status" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Status</a>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
              Get Started
            </button>
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Login
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
              <a href="#status" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Status</a>
              <button className="w-full text-left bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700">
                Get Started
              </button>
              <button className="w-full text-left text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}