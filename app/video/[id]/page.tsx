'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getVideoById, getVideos } from '@/lib/data';
import { Video } from '@/lib/types';
import Link from 'next/link';
import VideoCard from '@/components/VideoCard';

function normalizeVideoSource(url: string): { src: string; type: 'media' | 'embed' } {
  const trimmed = url.trim();

  if (trimmed.startsWith('/')) {
    return { src: trimmed, type: 'media' };
  }

  const lower = trimmed.toLowerCase();
  const mediaExtensions = ['.mp4', '.webm', '.ogg', '.m3u8'];
  if (mediaExtensions.some((ext) => lower.includes(ext))) {
    return { src: trimmed, type: 'media' };
  }

  // Convert Vimeo page links to player embed links.
  const vimeoMatch = trimmed.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch?.[1] && !trimmed.includes('player.vimeo.com')) {
    return { src: `https://player.vimeo.com/video/${vimeoMatch[1]}`, type: 'embed' };
  }

  return { src: trimmed, type: 'embed' };
}

export default function VideoPlayerPage() {
  const params = useParams();
  const router = useRouter();
  const videoId = params.id as string;

  const [video, setVideo] = useState<Video | null>(null);
  const [relatedVideos, setRelatedVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideo = async () => {
      setLoading(true);
      const videoData = await getVideoById(videoId);
      if (videoData) {
        setVideo(videoData);

        // Get related videos - videos from the same category
        const allVideos = await getVideos();
        const related = allVideos
          .filter((v) => v.category === videoData.category && v.id !== videoId)
          .slice(0, 4);
        setRelatedVideos(related);
      }
      setLoading(false);
    };
    loadVideo();
  }, [videoId]);

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="bg-gray-200 rounded-lg pb-[56.25%] relative animate-pulse" />
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
        </div>
      </div>
    );
  }

  if (!video) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Video not found</h1>
        <Link href="/catalog" className="text-teal-600 hover:text-teal-800">
          Back to Catalog
        </Link>
      </div>
    );
  }

  const minutes = Math.floor(video.duration / 60);
  const seconds = video.duration % 60;
  const playerSource = normalizeVideoSource(video.videoUrl);
  const isMediaSource = playerSource.type === 'media';

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="text-teal-600 hover:text-teal-800 font-semibold flex items-center gap-2"
      >
        ← Back
      </button>

      {/* Video Player Section */}
      <div className="space-y-4">
        {/* Local files in /public/videos play inline; external URLs use embedded player */}
        <div className="relative w-full rounded-lg overflow-hidden bg-black aspect-video">
          {isMediaSource ? (
            <video
              className="absolute inset-0 h-full w-full"
              controls
              preload="metadata"
              poster={video.thumbnail}
            >
              <source src={playerSource.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <iframe
              src={playerSource.src}
              title={video.title}
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          )}
        </div>

        {/* Video Info */}
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{video.title}</h1>
            <div className="flex flex-wrap gap-4 text-gray-600">
              {/* <span>By {video.instructor}</span>
              <span>•</span> */}
              {/* <span>{minutes} minutes</span> */}
              {/* <span>•</span>
              <span>{video.views.toLocaleString()} views</span> */}
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3">About this video</h3>
            <p className="text-gray-700 leading-relaxed mb-6">{video.description}</p>

            {/* Metadata */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-600">Level</p>
                <p className="font-semibold">{video.level}</p>
              </div>
              {/* <div>
                <p className="text-sm text-gray-600">Category</p>
                <p className="font-semibold">{video.category}</p>
              </div> */}
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold">
                  {minutes}:{seconds.toString().padStart(2, '0')}
                </p>
              </div>
              {/* <div>
                <p className="text-sm text-gray-600">Published</p>
                <p className="font-semibold">{video.createdAt}</p>
              </div> */}
            </div>

            {/* Tags */}
            {/* {video.tags.length > 0 && (
              <div className="mt-6">
                <p className="text-sm text-gray-600 mb-2">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {video.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>

      {/* Related Videos */}
      {relatedVideos.length > 0 && (
        <div className="space-y-6 border-t pt-8">
          <h2 className="text-2xl font-bold">Related Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedVideos.map((relatedVideo) => (
              <VideoCard key={relatedVideo.id} video={relatedVideo} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
