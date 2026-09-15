import { IMAGES } from '../config/images.js'

// Portfolio items. Titles/years marked as To Be Added / TBA until
// real projects are documented. Categories mirror the Work filters.
export const WORK = [
  {
    id: 'work-01',
    title: 'Cultural Stage Experience',
    category: 'Entertainment',
    year: 'TBA',
    description: 'Curated cultural stage entertainment. Details to be added.',
    image: IMAGES.work.entertainment,
    featured: true,
  },
  {
    id: 'work-02',
    title: 'Event Experience',
    category: 'Events',
    year: 'TBA',
    description: 'Event coordination and on-ground experience. Details to be added.',
    image: IMAGES.work.events,
    featured: true,
  },
  {
    id: 'work-03',
    title: 'Visual Production',
    category: 'Production',
    year: 'TBA',
    description: 'Photography, videography and visual storytelling. Details to be added.',
    image: IMAGES.work.production,
    featured: true,
  },
  {
    id: 'work-04',
    title: 'Brand Creative',
    category: 'Creative',
    year: 'TBA',
    description: 'Posters, branding and campaign design. Details to be added.',
    image: IMAGES.work.creative,
    featured: true,
  },
  {
    id: 'work-05',
    title: 'Media & Reels',
    category: 'Media',
    year: 'TBA',
    description: 'Short-form content and reels. Details to be added.',
    image: IMAGES.work.media,
    featured: false,
  },
  {
    id: 'work-06',
    title: 'Live Performance',
    category: 'Entertainment',
    year: '2026',
    description: 'SRM Pongal Vizha 2026 — cultural participation and performances.',
    image: IMAGES.work.additional,
    featured: false,
  },
]

export const WORK_FILTERS = ['ALL', 'ENTERTAINMENT', 'EVENTS', 'PRODUCTION', 'CREATIVE', 'MEDIA']