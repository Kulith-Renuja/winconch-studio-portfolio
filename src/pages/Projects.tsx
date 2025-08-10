import React, { useState } from 'react';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import VideoPlayer from '../components/VideoPlayer';
import { videosAPI } from '../services/api';

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState<{videoId: string, title: string} | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'corporate', name: 'Corporate Brand Film' },
    { id: 'music', name: 'Music Video Production' },
    { id: 'documentary', name: 'Documentary Short' },
    { id: 'product', name: 'Product Launch Video' },
    { id: 'social', name: 'Social Media Content' },
    { id: 'commercial', name: 'Commercial Ads' }
  ];

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await videosAPI.getAll();
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
      // Fallback to empty array if API fails
      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  const handleVideoClick = (videoId: string, title: string) => {
    setSelectedVideo({ videoId, title });
  };

  const closeVideoPlayer = () => {
    setSelectedVideo(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading videos...</div>
      </div>
    );
  }

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
                className={`px-3 py-2 rounded-full font-medium transition-all duration-300 ${
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
              key={video._id || `${video.category}-${index}`}
              title={video.title}
              duration={video.duration}
              videoId={video.videoId}
              onClick={handleVideoClick} 
              description={video.description}           
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