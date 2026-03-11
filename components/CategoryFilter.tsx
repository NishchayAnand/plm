'use client';

import { VideoCategory } from '@/lib/types';

interface CategoryFilterProps {
  categories: VideoCategory[];
  selectedCategory: VideoCategory | null;
  onSelectCategory: (category: VideoCategory | null) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-bold text-lg">Categories</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-4 py-2 rounded-full transition ${
            selectedCategory === null
              ? 'bg-teal-600 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-full transition ${
              selectedCategory === category
                ? 'bg-teal-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
