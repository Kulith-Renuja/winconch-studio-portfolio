import React from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';


const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-16 h-16 bg-purple-500/20 rounded-lg rotate-12 animate-pulse flex items-center justify-center"><span className="text-gray-200 font-bold text-2xl">Ai</span></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-600/30 rounded-lg -rotate-12 animate-bounce flex items-center justify-center"><span className="text-gray-200 font-bold text-2xl">3D</span></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-purple-400/10 rounded-lg rotate-45 animate-pulse flex items-center justify-center"><span className="text-gray-200 font-bold text-2xl">Ps</span></div>
        
        {/* Lightning Effects */}
        <div className="absolute top-1/4 right-1/4 w-32 h-1 bg-gradient-to-r from-purple-500 to-transparent opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-1 bg-gradient-to-l from-purple-400 to-transparent opacity-40 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="text-purple-400 font-medium text-lg mb-4 tracking-wider">
              🎬 Creative Video Production & Editing
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              WinConch
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                Studio
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Cinematic edits, brand videos, and social media content that captivate and inspire.
            </p>
            <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              LET'S TALK
            </button>
            <Link
            to="/projects" >
             <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 ml-4 mt-4">
              View Our Work
            </button>
            </Link>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* Floating Icons */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-600 rounded-xl flex items-center justify-center animate-float">
              <span className="text-white font-bold text-2xl">Pr</span>
            </div>
            <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center animate-float-delay">
              <span className="text-white font-bold text-xl">Ae</span>
            </div>
            
            {/* Main Image Placeholder */}
            <div className="relative w-80 h-96 bg-gradient-to-b from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Play size={40} className="text-gray-400" />
                </div>
                <div className="text-white text-lg font-semibold">intro video</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;