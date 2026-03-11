'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-linear-to-r from-blue-600 to-blue-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 font-bold text-lg">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-blue-600">
              📚
            </div>
            <span className="hidden sm:inline">PLM Library</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/catalog" className="hover:text-blue-100 transition">
              Explore
            </Link>
            <Link href="/playlists" className="hover:text-blue-100 transition">
              Playlists
            </Link>
            {/* <a href="#about" className="hover:text-blue-100 transition">
              About
            </a> */}
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden sm:flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Search videos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none w-32 md:w-48 px-2 text-gray-800 placeholder-gray-800"
            />
            <button type="submit" className="text-white hover:text-gray-800 transition">
              🔍
            </button>
          </form>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-blue-500">
            <nav className="flex flex-col space-y-3 pt-4">
              <Link href="/catalog" className="hover:text-blue-100 transition">
                Explore
              </Link>
              <Link href="/playlists" className="hover:text-blue-100 transition">
                Playlists
              </Link>
              <a href="#about" className="hover:text-blue-100 transition">
                About
              </a>
            </nav>
            <form onSubmit={handleSearch} className="mt-4">
              <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent outline-none flex-1 text-white placeholder-blue-100"
                />
                <button type="submit" className="text-white">
                  🔍
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
