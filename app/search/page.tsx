'use client';

import { Suspense } from 'react';
import { SearchResults } from '@/components/SearchResults';

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="text-center py-12">Loading search results...</div>}>
      <SearchResults />
    </Suspense>
  );
}
