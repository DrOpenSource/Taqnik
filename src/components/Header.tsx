import React from 'react';
import { Menu, X, Mail, Search } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-indigo-600">TAQNIK</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#products" className="text-gray-700 hover:text-indigo-600">Products</a>
          <a href="#blog" className="text-gray-700 hover:text-indigo-600">Blog</a>
          <a href="#ai-tools" className="text-gray-700 hover:text-indigo-600">AI Tools</a>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Subscribe
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#products" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-md">Products</a>
            <a href="#blog" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-md">Blog</a>
            <a href="#ai-tools" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-md">AI Tools</a>
            <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      )}
    </header>
  );
}