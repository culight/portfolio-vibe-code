import { Project } from '../types';

// In a real Next.js + Sanity app, this would be a GROQ query fetcher.
const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'neon-finance-dashboard',
    title: 'Neon Finance',
    shortDescription: 'A real-time dashboard for tracking crypto assets with high-frequency updates.',
    fullDescription: 'Neon Finance is a conceptual dashboard designed for the modern crypto trader. Built with performance in mind, it utilizes WebSockets for real-time data ingestion and D3.js for complex visualizations. The design philosophy focuses on "information density without clutter," using a dark mode aesthetic that reduces eye strain during late-night trading sessions. The challenge was optimizing the render cycle for the order book component, which handles thousands of updates per second.',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    tags: ['React', 'D3.js', 'WebSockets'],
    date: '2023-11-15'
  },
  {
    id: '2',
    slug: 'focal-point-photography',
    title: 'Focal Point',
    shortDescription: 'An award-winning portfolio template for landscape photographers.',
    fullDescription: 'Focal Point allows photographers to showcase their work in its highest fidelity. The platform implements adaptive image loading to serve the correct resolution based on the user\'s device and network conditions. It features a custom lightbox implementation that supports keyboard navigation and touch gestures. The project was built using a headless CMS architecture, allowing clients to update their portfolios without touching a line of code.',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    tags: ['Next.js', 'Framer Motion', 'Sanity'],
    date: '2023-09-22'
  },
  {
    id: '3',
    slug: 'urban-pulse',
    title: 'Urban Pulse',
    shortDescription: 'IoT visualization platform for smart city metrics.',
    fullDescription: 'Urban Pulse aggregates data from thousands of IoT sensors across the city to monitor air quality, traffic flow, and energy consumption. The frontend challenge was to render a 3D map of the city with overlaid data points without crashing the browser. We utilized WebGL via Three.js to achieve smooth 60fps rendering. This tool is currently being piloted by three major municipalities to improve urban planning decisions.',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    tags: ['Three.js', 'WebGL', 'TypeScript'],
    date: '2023-07-10'
  },
  {
    id: '4',
    slug: 'echo-chat',
    title: 'Echo Chat',
    shortDescription: 'End-to-end encrypted messaging for enterprise teams.',
    fullDescription: 'Security first. Echo Chat was built to provide a secure alternative to popular team messaging apps. It employs signal protocol for end-to-end encryption. The UI is deliberately stripped back to focus on communication. We faced significant challenges with key management in the browser, eventually solving it using WebAssembly for cryptographic operations to ensure speed and security.',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    tags: ['Rust', 'WASM', 'React'],
    date: '2023-05-05'
  },
  {
    id: '5',
    slug: 'botanica-encyclopedia',
    title: 'Botanica',
    shortDescription: 'A minimalist guide to rare indoor plants.',
    fullDescription: 'Botanica is a digital garden. It serves as an encyclopedia for rare plant collectors. The aesthetic is soft, organic, and calming. Technically, it uses static site generation (SSG) for incredibly fast load times and SEO benefits. The search functionality is powered by a fuzzy search algorithm running entirely client-side to ensure instant results as the user types.',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    tags: ['Gatsby', 'Algolia', 'UI/UX'],
    date: '2023-02-18'
  },
  {
    id: '6',
    slug: 'zenith-architecture',
    title: 'Zenith Arch',
    shortDescription: 'Visual identity and web presence for a brutalist architecture firm.',
    fullDescription: 'Zenith represents a brutalist architecture firm. The website reflects their design language: raw, bold, and unpologetic. We used large typography, stark contrast, and unorthodox grid layouts. The site features smooth scroll-jacking (implemented carefully to avoid UX pitfalls) and rigorous accessibility testing to ensure the high-contrast mode works perfectly for all users.',
    imageUrl: 'https://picsum.photos/800/600?random=6',
    tags: ['Design', 'GSAP', 'Accessibility'],
    date: '2023-01-30'
  }
];

export const getProjects = async (): Promise<Project[]> => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PROJECTS), 300);
  });
};

export const getProjectBySlug = async (slug: string): Promise<Project | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_PROJECTS.find(p => p.slug === slug));
    }, 200);
  });
};