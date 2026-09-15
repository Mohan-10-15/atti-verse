import { IMAGES } from '../config/images.js'

// Media & production disciplines. Each maps to a page section.
// Add a `video` URL later to embed YouTube/Vimeo/MP4 content.
export const PRODUCTIONS = [
  {
    id: 'photography',
    title: 'Photography',
    summary: 'Event photography, portraits and creative frames that capture the moment.',
    capabilities: ['Event Photography', 'Creative Portraits', 'Candid Coverage'],
    image: IMAGES.productions.photography,
    video: null,
  },
  {
    id: 'videography',
    title: 'Videography',
    summary: 'Cinematic event coverage, interviews and visual documentation.',
    capabilities: ['Event Films', 'Interviews', 'Documentary Coverage'],
    image: IMAGES.productions.videography,
    video: null,
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    summary: 'Story-driven editing with rhythm, color and sound in mind.',
    capabilities: ['Event Edits', 'Cinematic Edits', 'Color & Sound'],
    image: IMAGES.productions.editing,
    video: null,
  },
  {
    id: 'reels',
    title: 'Reels & Short-Form Content',
    summary: 'Scroll-stopping vertical content built for social platforms.',
    capabilities: ['Reels', 'Short Videos', 'Platform-First Content'],
    image: IMAGES.productions.reels,
    video: null,
  },
  {
    id: 'aftermovies',
    title: 'Event Aftermovies',
    summary: 'High-energy recap films that relive the best moments of an event.',
    capabilities: ['Event Recaps', 'High-Energy Edits', 'Multi-Event Films'],
    image: IMAGES.productions.aftermovies,
    video: null,
  },
  {
    id: 'promotional',
    title: 'Promotional Videos',
    summary: 'Promo films for events, brands and campaigns.',
    capabilities: ['Promo Films', 'Brand Videos', 'Teasers'],
    image: IMAGES.productions.promotional,
    video: null,
  },
  {
    id: 'short-films',
    title: 'Short Films',
    summary: 'Fiction and concept short films with a cinematic purpose.',
    capabilities: ['Short Film Production', 'Storytelling', 'Cinematic Execution'],
    image: IMAGES.productions.shortfilms,
    video: null,
  },
  {
    id: 'direction',
    title: 'Scriptwriting & Direction',
    summary: 'From script to screen — writing, direction and creative leadership.',
    capabilities: ['Scriptwriting', 'Direction', 'Creative Leadership'],
    image: IMAGES.productions.direction,
    video: null,
  },
]