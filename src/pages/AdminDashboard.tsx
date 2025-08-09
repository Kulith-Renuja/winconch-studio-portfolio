import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, LogOut, Video, Eye, Clock } from 'lucide-react';
import { videosAPI } from '../services/api';

interface Video {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoId: string;
  duration: string;
  views: string;
  category: string;
  featured: boolean;
  createdAt: string;
}

const AdminDashboard = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);
  const navigate = useNavigate();

  const categories = [
    { value: 'corporate', label: 'Corporate Brand Film' },
    { value: 'music', label: 'Music Video Production' },
    { value: 'documentary', label: 'Documentary Short' },
    { value: 'product', label: 'Product Launch Video' },
    { value: 'social', label: 'Social Media Content' },
    { value: 'commercial', label: 'Commercial Ads' }
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
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminData');
    navigate('/admin/login');
  };

  const handleDeleteVideo = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this video?')) {
      try {
        await videosAPI.delete(id);
        setVideos(videos.filter(video => video._id !== id));
      } catch (error) {
        console.error('Error deleting video:', error);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Plus size={20} />
                <span>Add Video</span>
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center">
              <Video className="text-purple-400" size={24} />
              <div className="ml-4">
                <p className="text-gray-400">Total Videos</p>
                <p className="text-2xl font-bold text-white">{videos.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center">
              <Eye className="text-green-400" size={24} />
              <div className="ml-4">
                <p className="text-gray-400">Featured Videos</p>
                <p className="text-2xl font-bold text-white">
                  {videos.filter(v => v.featured).length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center">
              <Clock className="text-blue-400" size={24} />
              <div className="ml-4">
                <p className="text-gray-400">Categories</p>
                <p className="text-2xl font-bold text-white">{categories.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Videos Table */}
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">All Videos</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Video
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Views
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Featured
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {videos.map((video) => (
                  <tr key={video._id} className="hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                          alt={video.title}
                          className="w-16 h-12 object-cover rounded"
                        />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">{video.title}</div>
                          <div className="text-sm text-gray-400 truncate max-w-xs">
                            {video.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-medium bg-purple-600 text-white rounded-full">
                        {categories.find(c => c.value === video.category)?.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {video.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {video.views}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        video.featured 
                          ? 'bg-green-600 text-white' 
                          : 'bg-gray-600 text-gray-300'
                      }`}>
                        {video.featured ? 'Yes' : 'No'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setEditingVideo(video)}
                          className="text-purple-400 hover:text-purple-300"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteVideo(video._id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add/Edit Video Modal */}
      {(showAddForm || editingVideo) && (
        <VideoForm
          video={editingVideo}
          categories={categories}
          onClose={() => {
            setShowAddForm(false);
            setEditingVideo(null);
          }}
          onSave={() => {
            fetchVideos();
            setShowAddForm(false);
            setEditingVideo(null);
          }}
        />
      )}
    </div>
  );
};

// Video Form Component
const VideoForm: React.FC<{
  video: Video | null;
  categories: Array<{value: string, label: string}>;
  onClose: () => void;
  onSave: () => void;
}> = ({ video, categories, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: video?.title || '',
    description: video?.description || '',
    thumbnail: video?.thumbnail || '',
    videoId: video?.videoId || '',
    duration: video?.duration || '',
    views: video?.views || '0',
    category: video?.category || 'corporate',
    featured: video?.featured || false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (video) {
        await videosAPI.update(video._id, formData);
      } else {
        await videosAPI.create(formData);
      }
      onSave();
    } catch (error: any) {
      setError(error.response?.data?.message || 'Operation failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-6">
            {video ? 'Edit Video' : 'Add New Video'}
          </h2>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-300 block mb-2 font-medium">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="text-gray-300 block mb-2 font-medium">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                  required
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-gray-300 block mb-2 font-medium">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                rows={3}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-300 block mb-2 font-medium">YouTube Video ID</label>
                <input
                  type="text"
                  value={formData.videoId}
                  onChange={(e) => setFormData({...formData, videoId: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="dQw4w9WgXcQ"
                  required
                />
              </div>

              <div>
                <label className="text-gray-300 block mb-2 font-medium">Duration</label>
                <input
                  type="text"
                  value={formData.duration}
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="3:45"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-300 block mb-2 font-medium">Thumbnail URL</label>
                <input
                  type="url"
                  value={formData.thumbnail}
                  onChange={(e) => setFormData({...formData, thumbnail: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-gray-300 block mb-2 font-medium">Views</label>
                <input
                  type="text"
                  value={formData.views}
                  onChange={(e) => setFormData({...formData, views: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="1.2M"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                  className="w-5 h-5 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                />
                <span className="text-gray-300 font-medium">Featured Video</span>
              </label>
            </div>

            <div className="flex justify-end space-x-4 pt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
              >
                {loading ? 'Saving...' : (video ? 'Update Video' : 'Add Video')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
