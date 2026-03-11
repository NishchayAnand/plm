'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getPlaylists } from '@/lib/data';
import { Playlist } from '@/lib/types';
import Link from 'next/link';

export default function PlaylistDetailPage() {
  const params = useParams();
  const router = useRouter();
  const playlistId = params.id as string;

  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPlaylist = async () => {
      setLoading(true);
      const playlists = await getPlaylists();
      const found = playlists.find((p) => p.id === playlistId);
      setPlaylist(found || null);
      setLoading(false);
    };
    loadPlaylist();
  }, [playlistId]);

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="h-64 bg-gray-200 rounded-lg animate-pulse" />
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
        </div>
      </div>
    );
  }

  if (!playlist) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Playlist not found</h1>
        <Link href="/playlists" className="text-blue-600 hover:text-blue-800">
          Back to Playlists
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2"
      >
        ← Back
      </button>

      {/* Playlist Header */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
          {/* Thumbnail */}
          <div className="md:col-span-1">
            <img
              src={playlist.thumbnail}
              alt={playlist.title}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* Info */}
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-4xl font-bold">{playlist.title}</h1>
            <p className="text-gray-600 text-lg">{playlist.description}</p>

            <div className="space-y-2 pt-4 border-t">
              <div className="flex justify-between text-gray-700">
                <span>Total Videos:</span>
                <span className="font-bold">{playlist.videos.length}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Total Duration:</span>
                <span className="font-bold">
                  {Math.floor(
                    playlist.videos.reduce((acc, v) => acc + v.duration, 0) / 60
                  )}
                  {' '}
                  minutes
                </span>
              </div>
            </div>

            <button className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-lg">
              Start Playlist →
            </button>
          </div>
        </div>
      </div>

      {/* Video List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Videos in this Playlist</h2>
        <div className="space-y-3">
          {playlist.videos.map((video, index) => (
            <Link
              key={video.id}
              href={`/video/${video.id}`}
              className="flex gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition group"
            >
              {/* Thumbnail */}
              <div className="shrink-0 w-48 relative pb-[56.25%] bg-gray-200 rounded overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition">
                  <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition">▶</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col justify-between py-2">
                <div>
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-blue-600 font-bold text-xl">{video.order}.</span>
                    <h3 className="font-bold text-lg flex-1">{video.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">{video.description}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
                  <span>{Math.floor(video.duration / 60)} min</span>
                  <span>•</span>
                  <span>{video.level}</span>
                  <span>•</span>
                  <span>By {video.instructor}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
