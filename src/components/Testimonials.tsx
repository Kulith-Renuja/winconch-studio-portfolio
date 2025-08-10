import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Pavithra Gomis',
      role: 'CEO',
      text: 'Working with WinConch Studio was a seamless and inspiring experience. Their creativity and professionalism exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Uvini Amaya',
      role: 'Manager',
      text: 'They delivered exactly what we needed, on time and with outstanding quality. Truly impressive work.',
      rating: 5
    },
    {
      name: 'Viraj',
      role: 'Co Founder',
      text: 'Exceptional communication, top-tier skills, and an eye for detail. Highly recommended for any video production needs.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            TESTIMONIALS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 rounded-xl text-center hover:scale-105 transition-transform duration-300 shadow-xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{testimonial.name}</h3>
                <p className="text-purple-200 font-medium">{testimonial.role}</p>
              </div>
              
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              
              <p className="text-white leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;