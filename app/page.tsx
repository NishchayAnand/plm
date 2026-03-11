'use client';

import { useState, useEffect } from 'react';
import VideoGrid from '@/components/VideoGrid';
import { getVideos, getPlaylists } from '@/lib/data';
import { Video, Playlist } from '@/lib/types';
import Link from 'next/link';

export default function Home() {
  const [featuredVideos, setFeaturedVideos] = useState<Video[]>([]);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const [videos, playlistData] = await Promise.all([getVideos(), getPlaylists()]);
      setFeaturedVideos(videos.slice(0, 4));
      setPlaylists(playlistData);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="space-y-16">
      
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 md:p-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn PLM Software</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Master Product Lifecycle Management with our comprehensive video library designed for textile vendors.
          From basics to advanced integrations, we've got you covered.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/catalog"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Explore Catalog
          </Link>
          <Link
            href="/playlists"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition border border-white"
          >
            View Playlists
          </Link>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Featured Videos</h2>
          <Link href="/catalog" className="text-blue-600 hover:text-blue-800 font-semibold">
            View All →
          </Link>
        </div>
        <VideoGrid videos={featuredVideos} loading={loading} />
      </section>

      {/* Playlists Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {playlists.map((playlist) => (
            <Link
              key={playlist.id}
              href={`/playlist/${playlist.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <div className="relative pb-[56.25%] bg-gray-200 overflow-hidden">
                <img
                  src={playlist.thumbnail}
                  alt={playlist.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-40 transition flex items-center justify-center">
                  <span className="text-white text-3xl">▶</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{playlist.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{playlist.description}</p>
                <p className="text-sm text-gray-500">{playlist.videos.length} videos</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join textile vendors worldwide who are mastering PLM software with our comprehensive training content.
        </p>
        <Link
          href="/catalog"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Start Learning Today
        </Link>
      </section>

    </div>
  );
}
