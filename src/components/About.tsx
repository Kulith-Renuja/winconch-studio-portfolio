import React from 'react';

const About = () => {
  const services = [
    'Cash Cow Editing',
    'Reels Editing', 
    'Logo Animation',
    'Podcast Edit'
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            ABOUT ME
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Welcome To The Cinematic Realm Of Jimmy, Where Creativity Meets Technology To Craft Visually Stunning Narratives. With
              A Passion For Storytelling And A Keen Eye For Detail, I Embark On A Journey To Transform Ordinary Footage Into
              Extraordinary Visual Experiences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
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