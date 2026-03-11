import { Video, Playlist, VideoCategory } from './types';

// Mock Videos Data
export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'How to download data package, CAD and artwork files',
    description: 'Step-by-step guide to locating and downloading the data package, including CAD drawings and artwork assets from the PLM system.',
    thumbnail: 'thumbnail/1.PNG',
    videoUrl: 'https://vimeo.com/1171658806?share=copy&fl=sv&fe=ci',
    category: 'Getting Started',
    duration: 1200,
    views: 2340,
    createdAt: '2024-01-15',
    instructor: 'Sarah Chen',
    level: 'Beginner',
    tags: ['plm', 'basics', 'textile', 'introduction'],
  },
  {
    id: '2',
    title: '⁠How to download article files',
    description: 'Step-by-step instructions for locating and downloading article files from the PLM database.',
    thumbnail: 'thumbnail/2.PNG',
    videoUrl: 'https://vimeo.com/1171658914?share=copy&fl=sv&fe=ci',
    category: 'Product Management',
    duration: 1800,
    views: 1560,
    createdAt: '2024-02-20',
    instructor: 'James Mitchell',
    level: 'Beginner',
    tags: ['product', 'data management', 'specifications'],
  },
  {
    id: '3',
    title: 'How to see status and download FPT and GPT reports',
    description: 'View the current status of FPT/GPT tests and download the corresponding reports from PLM.',
    thumbnail: 'thumbnail/3.PNG',
    videoUrl: 'https://vimeo.com/1171659007?share=copy&fl=sv&fe=ci',
    category: 'Workflow',
    duration: 1500,
    views: 892,
    createdAt: '2024-03-10',
    instructor: 'Emily Rodriguez',
    level: 'Beginner',
    tags: ['workflow', 'automation', 'efficiency'],
  },
  {
    id: '4',
    title: '⁠⁠How to send request for FPT and GPT to lab',
    description: 'Demonstration of submitting an FPT/GPT test request to the lab using the PLM request feature.',
    thumbnail: 'thumbnail/4.PNG',
    videoUrl: 'https://vimeo.com/1171659064?share=copy&fl=sv&fe=ci',
    category: 'Integration',
    duration: 2100,
    views: 645,
    createdAt: '2024-03-25',
    instructor: 'David Kumar',
    level: 'Intermediate',
    tags: ['integration', 'systems', 'api'],
  },
  {
    id: '5',
    title: 'How to acknowledge PO',
    description: 'Walkthrough of acknowledging a purchase order in PLM to confirm receipt and terms.',
    thumbnail: 'thumbnail/5.PNG',
    videoUrl: 'https://vimeo.com/1171659454?share=copy&fl=sv&fe=ci',
    category: 'Best Practices',
    duration: 1650,
    views: 1123,
    createdAt: '2024-04-05',
    instructor: 'Lisa Anderson',
    level: 'Intermediate',
    tags: ['quality', 'compliance', 'standards'],
  },
  {
    id: '6',
    title: 'How to request for final inspection',
    description: 'Guide to creating and tracking a final inspection request within the PLM system.',
    thumbnail: 'thumbnail/6.PNG',
    videoUrl: 'https://vimeo.com/1171659519?share=copy&fl=sv&fe=ci',
    category: 'Best Practices',
    duration: 1400,
    views: 1890,
    createdAt: '2024-04-12',
    instructor: 'Michael Thompson',
    level: 'Intermediate',
    tags: ['vendor', 'collaboration', 'sourcing'],
  },
  {
    id: '7',
    title: 'How to see TNA and update TNA dates',
    description: 'Check the TNA schedule in PLM and adjust key dates to keep your project on track.',
    thumbnail: 'thumbnail/7.PNG',
    videoUrl: 'https://vimeo.com/1171659590?share=copy&fl=sv&fe=ci',
    category: 'Getting Started',
    duration: 780,
    views: 0,
    createdAt: '2026-03-08',
    instructor: 'PLM Training Team',
    level: 'Intermediate',
    tags: ['plm', 'intro', 'onboarding', 'textile'],
  },
  {
    id: '8',
    title: 'How to see samples status',
    description: 'Learn how to review the current status of samples recorded in PLM.',
    thumbnail: 'thumbnail/8.PNG',
    videoUrl: 'https://vimeo.com/1171659691?share=copy&fl=sv&fe=ci',
    category: 'Getting Started',
    duration: 780,
    views: 0,
    createdAt: '2026-03-08',
    instructor: 'PLM Training Team',
    level: 'Advanced',
    tags: ['plm', 'intro', 'onboarding', 'textile'],
  },
  {
    id: '9',
    title: 'How to input sample measurements',
    description: 'Instructions for entering and saving sample measurement data in the PLM module.',
    thumbnail: 'thumbnail/9.PNG',
    videoUrl: 'https://vimeo.com/1171659732?share=copy&fl=sv&fe=ci',
    category: 'Getting Started',
    duration: 780,
    views: 0,
    createdAt: '2026-03-08',
    instructor: 'PLM Training Team',
    level: 'Advanced',
    tags: ['plm', 'intro', 'onboarding', 'textile'],
  },
  {
    id: '10',
    title: 'To update cost on plm',
    description: 'Step-by-step on how to modify cost entries for products within the PLM system.',
    thumbnail: 'thumbnail/10.PNG',
    videoUrl: 'https://vimeo.com/1171659788?share=copy&fl=sv&fe=ci',
    category: 'Getting Started',
    duration: 780,
    views: 0,
    createdAt: '2026-03-08',
    instructor: 'PLM Training Team',
    level: 'Advanced',
    tags: ['plm', 'intro', 'onboarding', 'textile'],
  },
  {
    id: '11',
    title: 'How to see completed cost on PLM',
    description: 'Learn to access and interpret completed cost records for items in the PLM database.',
    thumbnail: 'thumbnail/11.PNG',
    videoUrl: 'https://vimeo.com/1171659905?share=copy&fl=sv&fe=ci',
    category: 'Getting Started',
    duration: 780,
    views: 0,
    createdAt: '2026-03-08',
    instructor: 'PLM Training Team',
    level: 'Advanced',
    tags: ['plm', 'intro', 'onboarding', 'textile'],
  },
];

// Mock Playlists
export const mockPlaylists: Playlist[] = [
  {
    id: 'pl1',
    title: 'Getting Started with PLM',
    description: 'Complete beginner guide to PLM systems for textile vendors',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    createdAt: '2024-01-15',
    videos: [
      { ...mockVideos[0], order: 1 },
      { ...mockVideos[1], order: 2 },
      { ...mockVideos[2], order: 3 },
      { ...mockVideos[3], order: 4 },
      { ...mockVideos[4], order: 5 },
      { ...mockVideos[5], order: 6 },
    ],
  },
  {
    id: 'pl2',
    title: 'Advanced PLM Topics',
    description: 'Advanced concepts and integrations for experienced users',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    createdAt: '2024-03-25',
    videos: [
      { ...mockVideos[1], order: 1 },
      { ...mockVideos[3], order: 2 },
    ],
  },
];

// Simulated Data Service Functions
export async function getVideos(): Promise<Video[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockVideos), 500);
  });
}

export async function getVideoById(id: string): Promise<Video | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const video = mockVideos.find((v) => v.id === id);
      resolve(video || null);
    }, 300);
  });
}

export async function getVideosByCategory(category: VideoCategory): Promise<Video[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockVideos.filter((v) => v.category === category));
    }, 400);
  });
}

export async function getPlaylists(): Promise<Playlist[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockPlaylists), 500);
  });
}

export async function searchVideos(query: string): Promise<Video[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      resolve(
        mockVideos.filter(
          (v) =>
            v.title.toLowerCase().includes(lowerQuery) ||
            v.description.toLowerCase().includes(lowerQuery) ||
            v.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
        )
      );
    }, 400);
  });
}

export function getCategories(): VideoCategory[] {
  return ['Getting Started', 'Product Management', 'Workflow', 'Integration', 'Best Practices'];
}
