import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-4">VideoAlchemist</h3>
            <p className="text-gray-400 max-w-md">
              Transforming ordinary footage into extraordinary visual experiences through professional video editing.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-6">
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-colors">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-colors">
                <span className="text-white font-bold">in</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-colors">
                <span className="text-white font-bold">yt</span>
              </div>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 VideoAlchemist. All rights reserved. | Crafted with passion for visual storytelling.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;