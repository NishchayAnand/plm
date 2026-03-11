'use client';

import { useState, useEffect } from 'react';
import VideoGrid from '@/components/VideoGrid';
import CategoryFilter from '@/components/CategoryFilter';
import { getVideos, getCategories, getVideosByCategory, searchVideos } from '@/lib/data';
import { Video, VideoCategory } from '@/lib/types';

export default function CatalogPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  //const [categories, setCategories] = useState<VideoCategory[]>([]);
  //const [selectedCategory, setSelectedCategory] = useState<VideoCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const [allVideos, allCategories] = await Promise.all([
        getVideos(),
        Promise.resolve(getCategories()),
      ]);
      setVideos(allVideos);
      setFilteredVideos(allVideos);
      //setCategories(allCategories);
      setLoading(false);
    };
    loadData();
  }, []);

  // Handle category filter
  // useEffect(() => {
  //   const filterVideos = async () => {
  //     if (selectedCategory) {
  //       const categoryVideos = await getVideosByCategory(selectedCategory);
  //       setFilteredVideos(categoryVideos);
  //     } else {
  //       setFilteredVideos(videos);
  //     }
  //     setSearchQuery('');
  //   };
  //   filterVideos();
  // }, [selectedCategory, videos]);

  // Handle search
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const results = await searchVideos(searchQuery);
      setFilteredVideos(results);
      //setSelectedCategory(null);
    }
  };

  // Clear search
  const clearSearch = async () => {
    setSearchQuery('');
    //setSelectedCategory(null);
    setFilteredVideos(videos);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Video Catalog</h1>
        <p className="text-gray-600">Browse our complete library of PLM training videos</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 space-y-6">
            {/* Search */}
            <div>
              <h3 className="font-bold text-lg mb-3">Search</h3>
              <form onSubmit={handleSearch} className="space-y-3">
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
                  >
                    Search
                  </button>
                  {(searchQuery) && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Filters */}
            <hr className="my-4" />
            {/* <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            /> */}

            {/* Results Summary */}
            <div className="bg-teal-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-bold text-lg text-teal-600">{filteredVideos.length}</span>{' '}
                video{filteredVideos.length !== 1 ? 's' : ''} found
              </p>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="lg:col-span-3">
          <VideoGrid
            videos={filteredVideos}
            loading={loading}
            title={searchQuery ? `Search Results for "${searchQuery}"` : undefined}
          />
        </div>
      </div>
    </div>
  );
}
