import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import VideoPlayer from '../components/VideoPlayer';

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ videoId: string; title: string } | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'corporate', name: 'Corporate Brand Film' },
    { id: 'music', name: 'Music Video Production' },
    { id: 'documentary', name: 'Documentary Short' },
    { id: 'product', name: 'Product Launch Video' },
    { id: 'social', name: 'Social Media Content' },
    { id: 'commercial', name: 'Commercial Ads' }
  ];

  const videos = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'Tech Company Brand Story',
      duration: '2:45',
      description: 'A compelling brand story showcasing the tech company’s vision and mission.',
      category: 'corporate'
    },
    {
      id: 'z33KlzU5K48',
      title: 'Financial Services Overview',
      duration: '3:20',
      description: 'An overview of innovative financial solutions tailored for modern customers.',
      category: 'corporate'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Indie Rock Music Video',
      duration: '3:45',
      description: 'A creative and dynamic music video featuring an indie rock band’s latest single.',
      category: 'music'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Urban Wildlife Documentary',
      duration: '12:30',
      description: 'Exploring the hidden urban wildlife thriving in metropolitan areas.',
      category: 'documentary'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Smartphone Launch Campaign',
      duration: '1:30',
      description: 'A sleek campaign introducing the latest smartphone model to the market.',
      category: 'product'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Instagram Reel Series',
      duration: '0:30',
      description: 'Short, engaging reels optimized for Instagram audience engagement.',
      category: 'social'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Restaurant Commercial',
      duration: '0:30',
      description: 'A commercial showcasing the ambience and signature dishes of a local restaurant.',
      category: 'commercial'
    }
  ];

  const filteredVideos = activeCategory === 'all'
    ? videos
    : videos.filter(video => video.category === activeCategory);

  const handleVideoClick = (videoId: string, title: string) => {
    setSelectedVideo({ videoId, title });
  };

  const closeVideoPlayer = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-3 text-white hover:text-purple-400 transition-colors"
            >
              <ArrowLeft size={24} />
              <span className="font-medium">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-white">All Projects</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredVideos.map((video, index) => (
            <VideoCard
              key={`${video.category}-${index}`}
              title={video.title}
              duration={video.duration}
              description={video.description}
              videoId={video.id}
              onClick={handleVideoClick}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 text-xl mb-4">No videos found in this category</div>
            <button
              onClick={() => setActiveCategory('all')}
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayer
          videoId={selectedVideo.videoId}
          title={selectedVideo.title}
          onClose={closeVideoPlayer}
        />
      )}
    </div>
  );
};

export default Projects;
