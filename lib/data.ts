import { Video, Playlist, VideoCategory } from './types';

// Mock Videos Data
export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'How to download data package, CAD and artwork files',
    description: 'Step-by-step guide to locating and downloading the data package, including CAD drawings and artwork assets from the PLM system.',
    thumbnail: '/thumbnail/1.PNG',
    videoUrl: 'https://vimeo.com/1172810019?share=copy&fl=sv&fe=ci',
    category: 'Product Management',
    duration: 319,
    views: 0,
    createdAt: '2026-03-11',
    instructor: 'Sarah Chen',
    level: 'Beginner',
    tags: ['data package', 'cad files', 'artwork files', 'download'],
  },
  {
    id: '2',
    title: '⁠How to download article files',
    description: 'Step-by-step instructions for locating and downloading article files from the PLM database.',
    thumbnail: '/thumbnail/2.PNG',
    videoUrl: 'https://vimeo.com/1172810153?share=copy&fl=sv&fe=ci',
    category: 'Product Management',
    duration: 178,
    views: 0,
    createdAt: '2026-03-11',
    instructor: 'James Mitchell',
    level: 'Beginner',
    tags: ['article files', 'download', 'product files', 'plm'],
  },
  {
    id: '3',
    title: 'How to see status and download FPT and GPT reports',
    description: 'View the current status of FPT/GPT tests and download the corresponding reports from PLM.',
    thumbnail: '/thumbnail/3.PNG',
    videoUrl: 'https://vimeo.com/1172810370?share=copy&fl=sv&fe=ci',
    category: 'Workflow',
    duration: 101,
    views: 0,
    createdAt: '2026-03-11',
    instructor: 'Emily Rodriguez',
    level: 'Beginner',
    tags: ['status', 'fpt report', 'gpt report', 'download'],
  },
  {
    id: '4',
    title: '⁠⁠How to send request for FPT and GPT to lab',
    description: 'Demonstration of submitting an FPT/GPT test request to the lab using the PLM request feature.',
    thumbnail: '/thumbnail/4.PNG',
    videoUrl: 'https://vimeo.com/1172810431?share=copy&fl=sv&fe=ci',
    category: 'Workflow',
    duration: 140,
    views: 0,
    createdAt: '2026-03-11',
    instructor: 'David Kumar',
    level: 'Intermediate',
    tags: ['fpt request', 'gpt request', 'lab request', 'submission'],
  },
  {
    id: '5',
    title: 'How to acknowledge PO',
    description: 'Walkthrough of acknowledging a purchase order in PLM to confirm receipt and terms.',
    thumbnail: '/thumbnail/5.PNG',
    videoUrl: 'https://vimeo.com/1172810534?share=copy&fl=sv&fe=ci',
    category: 'Product Management',
    duration: 123,
    views: 0,
    createdAt: '2026-03-11',
    instructor: 'Lisa Anderson',
    level: 'Intermediate',
    tags: ['purchase order', 'po acknowledgment', 'vendor response', 'plm'],
  },
  {
    id: '6',
    title: 'How to request for final inspection',
    description: 'Guide to creating and tracking a final inspection request within the PLM system.',
    thumbnail: '/thumbnail/6.PNG',
    videoUrl: 'https://vimeo.com/1172810807?share=copy&fl=sv&fe=ci',
    category: 'Workflow',
    duration: 57,
    views: 0,
    createdAt: '2026-03-11',
    instructor: 'Michael Thompson',
    level: 'Intermediate',
    tags: ['final inspection', 'inspection request', 'quality check', 'approval'],
  },
  {
    id: '7',
    title: 'How to see TNA and update TNA dates',
    description: 'Check the TNA schedule in PLM and adjust key dates to keep your project on track.',
    thumbnail: '/thumbnail/7.PNG',
    videoUrl: 'https://vimeo.com/1172810872?share=copy&fl=sv&fe=ci',
    category: 'Workflow',
    duration: 317,
    views: 0,
    createdAt: '2026-03-11',
    instructor: 'PLM Training Team',
    level: 'Intermediate',
    tags: ['tna', 'timeline', 'tna dates', 'schedule update'],
  },
  {
    id: '8',
    title: 'How to see samples status',
    description: 'Learn how to review the current status of samples recorded in PLM.',
    thumbnail: '/thumbnail/8.png',
    videoUrl: 'https://vimeo.com/1172811089?share=copy&fl=sv&fe=ci',
    category: 'Workflow',
    duration: 90,
    views: 0,
    createdAt: '2026-03-11',
    instructor: 'PLM Training Team',
    level: 'Advanced',
    tags: ['sample status', 'tracking', 'progress', 'plm'],
  },
  {
    id: '9',
    title: 'How to input sample measurements',
    description: 'Instructions for entering and saving sample measurement data in the PLM module.',
    thumbnail: '/thumbnail/9.PNG',
    videoUrl: 'https://vimeo.com/1172811166?share=copy&fl=sv&fe=ci',
    category: 'Product Management',
    duration: 97,
    views: 0,
    createdAt: '2026-03-11',
    instructor: 'PLM Training Team',
    level: 'Advanced',
    tags: ['sample measurements', 'measurement entry', 'data input', 'plm'],
  },
  {
    id: '10',
    title: 'To update cost on plm',
    description: 'Step-by-step on how to modify cost entries for products within the PLM system.',
    thumbnail: '/thumbnail/10.PNG',
    videoUrl: 'https://vimeo.com/1172811248?share=copy&fl=sv&fe=ci',
    category: 'Product Management',
    duration: 309,
    views: 0,
    createdAt: '2026-03-11',
    instructor: 'PLM Training Team',
    level: 'Advanced',
    tags: ['cost update', 'pricing', 'costing', 'plm'],
  },
  {
    id: '11',
    title: 'How to see completed cost on PLM',
    description: 'Learn to access and interpret completed cost records for items in the PLM database.',
    thumbnail: '/thumbnail/11.PNG',
    videoUrl: 'https://vimeo.com/1172811479?share=copy&fl=sv&fe=ci',
    category: 'Product Management',
    duration: 191,
    views: 0,
    createdAt: '2026-03-11',
    instructor: 'PLM Training Team',
    level: 'Advanced',
    tags: ['completed cost', 'cost review', 'cost records', 'plm'],
  },
];

// Mock Playlists
export const mockPlaylists: Playlist[] = [
  {
    id: 'pl1',
    title: 'Getting Started with PLM',
    description: 'Complete beginner guide to PLM systems for textile vendors',
    thumbnail: '/thumbnail/beginner-module.jpeg',
    createdAt: '2026-03-11',
    additionalResources: [
      {
        title: 'Beginner Level Guide',
        url: '/additional-resources/beginner-level.pdf',
      },
    ],
    videos: [
      { ...mockVideos[0], order: 1 },
      { ...mockVideos[1], order: 2 },
    ],
  },
  {
    id: 'pl3',
    title: 'Intermediate PLM Module',
    description: 'Essential intermediate workflows for day-to-day PLM operations',
    thumbnail: '/thumbnail/intermediate-module.jpeg',
    createdAt: '2026-03-11',
    additionalResources: [
      {
        title: 'Intermediate Level Guide',
        url: '/additional-resources/intermediate-level.pdf',
      },
    ],
    videos: [
      { ...mockVideos[3], order: 1 },
      { ...mockVideos[3], order: 2 },
      { ...mockVideos[4], order: 3 },
      { ...mockVideos[5], order: 4 },
    ],
  },
  {
    id: 'pl2',
    title: 'Advanced PLM Topics',
    description: 'Advanced concepts and integrations for experienced users',
    thumbnail: '/thumbnail/advanced-module.jpeg',
    createdAt: '2026-03-11',
    additionalResources: [
      {
        title: 'Advanced Level Guide',
        url: '/additional-resources/advanced-level.pdf',
      },
    ],
    videos: [
      { ...mockVideos[6], order: 1 },
      { ...mockVideos[7], order: 2 },
      { ...mockVideos[8], order: 3 },
      { ...mockVideos[9], order: 4 },
      { ...mockVideos[10], order: 5 },
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
