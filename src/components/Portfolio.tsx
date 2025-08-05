import React from 'react';
import { ExternalLink, Play } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Corporate Brand Film',
      category: 'Commercial',
      description: 'A compelling brand story showcasing company values and mission through cinematic storytelling.',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '2:30',
      tags: ['Branding', 'Corporate', 'Storytelling']
    },
    {
      id: 2,
      title: 'Music Video Production',
      category: 'Creative',
      description: 'Dynamic music video with synchronized editing, color grading, and motion graphics.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '3:45',
      tags: ['Music', 'Creative', 'Motion Graphics']
    },
    {
      id: 3,
      title: 'Documentary Short',
      category: 'Documentary',
      description: 'Human interest documentary highlighting community stories with emotional depth.',
      image: 'https://images.pexels.com/photos/7005465/pexels-photo-7005465.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '12:15',
      tags: ['Documentary', 'Storytelling', 'Social Impact']
    },
    {
      id: 4,
      title: 'Product Launch Video',
      category: 'Commercial',
      description: 'High-energy product showcase with dynamic transitions and compelling call-to-action.',
      image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '1:20',
      tags: ['Product', 'Commercial', 'Marketing']
    },
    {
      id: 5,
      title: 'Event Highlights Reel',
      category: 'Event',
      description: 'Capturing the energy and excitement of a major conference through dynamic editing.',
      image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '4:10',
      tags: ['Event', 'Highlights', 'Conference']
    },
    {
      id: 6,
      title: 'Social Media Campaign',
      category: 'Social Media',
      description: 'Series of engaging short-form videos optimized for various social media platforms.',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '0:30',
      tags: ['Social Media', 'Short Form', 'Viral']
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of recent projects demonstrating creative vision and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 border border-gray-700 hover:border-purple-500/30"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-gray-900/80 text-white px-2 py-1 rounded text-sm">
                    {project.duration}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-colors duration-300">
                    <Play size={24} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 group/btn">
                  <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;