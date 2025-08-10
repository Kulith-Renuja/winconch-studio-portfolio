import React from 'react';

const About = () => {
  const services = [
    '🎯 Brand & Commercial Video Editing',
    '🎯 Reels & Social Media Content', 
    '🎯 Logo Animation & Motion Graphics',
    '🎯 Podcast Video Production'
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            ABOUT US
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Welcome to WinConch Studio, where creativity meets precision to craft visually stunning stories. Our passion for cinematic storytelling and attention to detail transforms ordinary footage into captivating visual experiences that inspire, engage, and connect.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center mb-4">
              </div>
              <h3 className="text-white font-semibold text-lg group-hover:text-purple-400 transition-colors duration-300">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;