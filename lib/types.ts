// PLM Video Library Data Model

export type VideoCategory = 'Getting Started' | 'Product Management' | 'Workflow' | 'Integration' | 'Best Practices';

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: VideoCategory;
  duration: number; // in seconds
  views: number;
  createdAt: string;
  instructor: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
}

export interface PlaylistVideo extends Video {
  order: number;
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  videos: PlaylistVideo[];
  thumbnail: string;
  createdAt: string;
}

export interface UserProgress {
  videoId: string;
  watchedDuration: number; // in seconds
  completed: boolean;
  completedAt?: string;
}
