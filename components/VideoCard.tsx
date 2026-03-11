import Link from 'next/link';
import Image from 'next/image';
import { Video } from '@/lib/types';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const minutes = Math.floor(video.duration / 60);
  const seconds = video.duration % 60;

  return (
    <Link href={`/video/${video.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
        <div className="relative pb-[56.25%] bg-gray-200 overflow-hidden">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm font-medium">
            {minutes}:{seconds.toString().padStart(2, '0')}
          </div>
          <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
            {video.level}
          </div>
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-bold text-lg mb-2 line-clamp-2 text-gray-900">{video.title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{video.description}</p>
          <div className="mt-auto">
            {/* <p className="text-sm text-gray-500 mb-2">By {video.instructor}</p> */}
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>{video.views.toLocaleString()} views</span>
              <span className="bg-gray-100 px-2 py-1 rounded">{video.category}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
