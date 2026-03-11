'use client';

import { useState, useEffect } from 'react';
import { getPlaylists } from '@/lib/data';
import { Playlist } from '@/lib/types';
import Link from 'next/link';

export default function PlaylistsPage() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPlaylists = async () => {
      setLoading(true);
      const data = await getPlaylists();
      setPlaylists(data);
      setLoading(false);
    };
    loadPlaylists();
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Learning Paths</h1>
        <p className="text-gray-600">
          Curated collections of videos to help you master PLM software step by step
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 rounded-lg pb-[56.25%] relative animate-pulse"
            />
          ))}
        </div>
      ) : playlists.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No playlists found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playlists.map((playlist) => (
            <Link
              key={playlist.id}
              href={`/playlist/${playlist.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              {/* Thumbnail */}
              <div className="relative pb-[56.25%] bg-gray-200 overflow-hidden">
                <img
                  src={playlist.thumbnail}
                  alt={playlist.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition flex items-center justify-center">
                  <span className="text-white text-4xl opacity-0 group-hover:opacity-100 transition">▶</span>
                </div>
                {/* Video Count Badge */}
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {playlist.videos.length} videos
                </div>
              </div>

              {/* Info */}
              <div className="p-4 space-y-3">
                <h3 className="font-bold text-lg line-clamp-2">{playlist.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{playlist.description}</p>

                {/* Video List Preview */}
                <div className="space-y-2 pt-2 border-t">
                  {playlist.videos.slice(0, 3).map((video) => (
                    <div key={video.id} className="flex items-start gap-2 text-xs text-gray-700">
                      <span className="text-blue-600 font-bold">{video.order}.</span>
                      <span className="line-clamp-1">{video.title}</span>
                    </div>
                  ))}
                  {playlist.videos.length > 3 && (
                    <p className="text-xs text-gray-500">
                      +{playlist.videos.length - 3} more videos
                    </p>
                  )}
                </div>

                {/* CTA */}
                <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Start Learning
                </button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
