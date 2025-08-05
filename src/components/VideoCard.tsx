import React from 'react';
import { Play, Clock } from 'lucide-react';

interface VideoCardProps {
  title: string;
  duration: string;
  description: string;
  videoId: string;
  onClick: (videoId: string, title: string) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ 
  title, 
  duration, 
  description,
  videoId, 
  onClick 
}) => {
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div 
      className="group cursor-pointer"
      onClick={() => onClick(videoId, title)}
    >
      <div className="relative overflow-hidden rounded-xl bg-gray-800 aspect-video mb-4">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Play className="text-gray-800 ml-1" size={24} />
          </div>
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
          {duration}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-white font-semibold text-lg group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
        
      </div>
    </div>
  );
};

export default VideoCard;
