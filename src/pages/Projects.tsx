import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import VideoPlayer from '../components/VideoPlayer';

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState<{videoId: string, title: string} | null>(null);
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
    // Corporate Brand Film
    {
      id: 'dQw4w9WgXcQ',
      title: 'Tech Company Brand Story',
      thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '2:45',
      views: '125K',
      category: 'corporate'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Financial Services Overview',
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '3:20',
      views: '89K',
      category: 'corporate'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Healthcare Innovation',
      thumbnail: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '4:15',
      views: '156K',
      category: 'corporate'
    },

    // Music Video Production
    {
      id: 'dQw4w9WgXcQ',
      title: 'Indie Rock Music Video',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '3:45',
      views: '234K',
      category: 'music'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Hip Hop Artist Feature',
      thumbnail: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '4:20',
      views: '445K',
      category: 'music'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Electronic Dance Music',
      thumbnail: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '5:10',
      views: '678K',
      category: 'music'
    },

    // Documentary Short
    {
      id: 'dQw4w9WgXcQ',
      title: 'Urban Wildlife Documentary',
      thumbnail: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '12:30',
      views: '89K',
      category: 'documentary'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Local Artist Profile',
      thumbnail: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '8:45',
      views: '67K',
      category: 'documentary'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Community Stories',
      thumbnail: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '15:20',
      views: '123K',
      category: 'documentary'
    },

    // Product Launch Video
    {
      id: 'dQw4w9WgXcQ',
      title: 'Smartphone Launch Campaign',
      thumbnail: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '1:30',
      views: '567K',
      category: 'product'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Fashion Brand Collection',
      thumbnail: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '2:15',
      views: '234K',
      category: 'product'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Fitness Equipment Demo',
      thumbnail: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '3:00',
      views: '189K',
      category: 'product'
    },

    // Social Media Content
    {
      id: 'dQw4w9WgXcQ',
      title: 'Instagram Reel Series',
      thumbnail: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '0:30',
      views: '1.2M',
      category: 'social'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'TikTok Viral Content',
      thumbnail: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '0:15',
      views: '2.5M',
      category: 'social'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'YouTube Shorts Collection',
      thumbnail: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '0:45',
      views: '890K',
      category: 'social'
    },

    // Commercial Ads
    {
      id: 'dQw4w9WgXcQ',
      title: 'Restaurant Commercial',
      thumbnail: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '0:30',
      views: '345K',
      category: 'commercial'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Automotive Advertisement',
      thumbnail: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '0:45',
      views: '678K',
      category: 'commercial'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Real Estate Showcase',
      thumbnail: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '1:15',
      views: '234K',
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
              thumbnail={video.thumbnail}
              duration={video.duration}
              views={video.views}
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