import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, title, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gray-800">
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Controls */}
        <div className="p-4 bg-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;