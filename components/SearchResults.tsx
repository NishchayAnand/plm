'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import VideoGrid from '@/components/VideoGrid';
import { searchVideos } from '@/lib/data';
import { Video } from '@/lib/types';

export function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const [results, setResults] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const performSearch = async () => {
      if (query.trim()) {
        setLoading(true);
        const searchResults = await searchVideos(query);
        setResults(searchResults);
        setLoading(false);
      }
    };
    performSearch();
  }, [query]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Search</h1>
        <p className="text-gray-600">
          {query && `Results for "${query}"`}
          {results.length > 0 && ` (${results.length} found)`}
        </p>
      </div>

      {!query ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Enter a search query to find videos</p>
        </div>
      ) : (
        <VideoGrid videos={results} loading={loading} />
      )}
    </div>
  );
}
