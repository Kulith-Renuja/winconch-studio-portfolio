import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, MessageSquare, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#home', icon: Home },
    { name: 'ABOUT', href: '#about', icon: User },
    { name: 'PORTFOLIO', href: '#portfolio', icon: Briefcase },
    { name: 'TESTIMONIALS', href: '#testimonials', icon: MessageSquare },
    { name: 'CONTACT', href: '#contact', icon: Phone },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">
            VideoAlchemist
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm font-medium tracking-wider"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex space-x-4">
            <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-colors">
              <span className="text-white text-sm">f</span>
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-colors">
              <span className="text-white text-sm">in</span>
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-colors">
              <span className="text-white text-sm">yt</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2 py-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-3 w-full px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-gray-800/50 transition-all duration-200"
              >
                <item.icon size={18} />
                <span className="text-sm font-medium tracking-wider">{item.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;