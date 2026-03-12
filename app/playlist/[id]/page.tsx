'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getPlaylists } from '@/lib/data';
import { Playlist } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';

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
        <Link href="/playlists" className="text-teal-600 hover:text-teal-800">
          Back to Playlists
        </Link>
      </div>
    );
  }

  const totalMinutes = Math.floor(
    playlist.videos.reduce((acc, v) => acc + v.duration, 0) / 60
  );

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="text-teal-600 hover:text-teal-800 font-semibold flex items-center gap-2"
      >
        ← Back
      </button>

      {/* Playlist Header */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        <div className="md:col-span-3 space-y-3">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">{playlist.title}</h1>
          <p className="text-gray-600">{playlist.description}</p>
          
        </div>
      </div>

      {/* Video List */}
      <div className="space-y-4">
        <div className="space-y-4">
          {playlist.videos.map((video) => (
            <Link
              key={video.id}
              href={`/video/${video.id}`}
              className="group flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition"
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-video shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:w-64 lg:w-72">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 256px, 288px"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-3xl">▶</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col justify-between sm:py-1">
                <div>
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-teal-600 font-bold text-xl">{video.order}.</span>
                    <h3 className="font-bold text-lg flex-1 group-hover:text-teal-700 transition-colors">{video.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">{video.description}</p>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500 mt-3">
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
