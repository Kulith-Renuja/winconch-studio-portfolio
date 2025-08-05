import React, { useState } from 'react';
import { Play } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ videoId: string; title: string } | null>(null);

  const projects = [
    {
      id: 1,
      videoId: 'dQw4w9WgXcQ',
      title: 'Corporate Brand Film',
      category: 'Commercial',
      description: 'A compelling brand story showcasing company values and mission through cinematic storytelling.',
      duration: '2:30',
      tags: ['Branding', 'Corporate', 'Storytelling']
    },
    {
      id: 2,
      videoId: 'z33KlzU5K48',
      title: 'Music Video Production',
      category: 'Creative',
      description: 'Dynamic music video with synchronized editing, color grading, and motion graphics.',
      duration: '3:45',
      tags: ['Music', 'Creative', 'Motion Graphics']
    },
    {
      id: 3,
      videoId: 'oHg5SJYRHA0',
      title: 'Documentary Short',
      category: 'Documentary',
      description: 'Human interest documentary highlighting community stories with emotional depth.',
      duration: '12:15',
      tags: ['Documentary', 'Storytelling', 'Social Impact']
    },
    {
      id: 4,
      videoId: 'xvFZjo5PgG0',
      title: 'Product Launch Video',
      category: 'Commercial',
      description: 'High-energy product showcase with dynamic transitions and compelling call-to-action.',
      duration: '1:20',
      tags: ['Product', 'Commercial', 'Marketing']
    },
    {
      id: 5,
      videoId: '3JZ_D3ELwOQ',
      title: 'Event Highlights Reel',
      category: 'Event',
      description: 'Capturing the energy and excitement of a major conference through dynamic editing.',
      duration: '4:10',
      tags: ['Event', 'Highlights', 'Conference']
    },
    {
      id: 6,
      videoId: 'tVj0ZTS4WF4',
      title: 'Social Media Campaign',
      category: 'Social Media',
      description: 'Series of engaging short-form videos optimized for various social media platforms.',
      duration: '0:30',
      tags: ['Social Media', 'Short Form', 'Viral']
    }
  ];

  const openVideoPlayer = (videoId: string, title: string) => {
    setSelectedVideo({ videoId, title });
  };

  const closeVideoPlayer = () => {
    setSelectedVideo(null);
  };

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
          {projects.map((project) => {
            const thumbnail = `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`;
            return (
              <div
                key={project.id}
                className="group bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 border border-gray-700 hover:border-purple-500/30 cursor-pointer"
                onClick={() => openVideoPlayer(project.videoId, project.title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if(e.key === 'Enter') openVideoPlayer(project.videoId, project.title); }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={thumbnail}
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
                    <div className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-colors duration-300">
                      <Play size={24} />
                    </div>
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
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-16">
          <Link
            to="/projects"
            className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            VIEW ALL PROJECTS
          </Link>
        </div>
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayer
          videoId={selectedVideo.videoId}
          title={selectedVideo.title}
          onClose={closeVideoPlayer}
        />
      )}
    </section>
  );
};

export default Portfolio;


