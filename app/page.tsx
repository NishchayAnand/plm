'use client';

import { useState, useEffect } from 'react';
import VideoGrid from '@/components/VideoGrid';
import { getVideos, getPlaylists } from '@/lib/data';
import { Video, Playlist } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';

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
      <section className="bg-linear-to-r from-teal-600 to-teal-800 text-white rounded-lg p-8 md:p-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn PLM Software</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Master Product Lifecycle Management with our comprehensive video library designed for vendors.
        </p>
        {/* <div className="flex gap-4 flex-wrap">
          <Link
            href="/catalog"
            className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition"
          >
            Explore Catalog
          </Link>
          <Link
            href="/playlists"
            className="bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition border border-white"
          >
            View Playlists
          </Link>
        </div> */}
      </section>

      {/* Featured Videos Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Featured Videos</h2>
          <Link href="/catalog" className="text-teal-600 hover:text-teal-800 font-semibold">
            View All →
          </Link>
        </div>
        <VideoGrid videos={featuredVideos} loading={loading} />
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 rounded-lg p-6 md:p-8 text-center">
        {/* <h2 className="text-2xl md:text-3xl font-semibold mb-2">Workflow Resources</h2> */}
        <p className="text-gray-600 mb-4 max-w-xl mx-auto text-sm md:text-base">
          Quick access to the workflow PDF and full training video.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/additional-resources/Vendor%20PLM%20Workflow.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-teal-700 transition"
          >
            Workflow PDF
          </a>
          <a
            href="https://vimeo.com/1173021240?share=copy&fl=sv&fe=ci"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-teal-700 px-6 py-2.5 rounded-lg font-medium border border-teal-600 hover:bg-teal-50 transition"
          >
            Training Video
          </a>
        </div>
      </section>

      {/* Playlists Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {playlists.map((playlist) => (
            <Link
              key={playlist.id}
              href={`/playlist/${playlist.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <div className="relative pb-[56.25%] bg-gray-200 overflow-hidden">
                <Image
                  src={playlist.thumbnail}
                  alt={playlist.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-3xl">▶</span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-base mb-1 line-clamp-1">{playlist.title}</h3>
                <p className="text-gray-600 text-xs mb-2 line-clamp-2">{playlist.description}</p>
                <p className="text-sm text-gray-500">{playlist.videos.length} videos</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      

    </div>
  );
}
