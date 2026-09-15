import { IMAGES } from '../config/images.js'
import { CERTIFICATES } from './achievements.js'

// Gallery items. Each item maps to one of the filter categories.
// Replace the placeholder captions and swap image paths as real
// photos become available.
export const GALLERY = [
  { id: 'g-01', src: IMAGES.gallery[0], caption: 'Event Moments', category: 'Events' },
  { id: 'g-02', src: IMAGES.gallery[1], caption: 'Live Performance', category: 'Performances' },
  { id: 'g-03', src: IMAGES.gallery[2], caption: 'Production Set', category: 'Production' },
  { id: 'g-04', src: IMAGES.gallery[3], caption: 'Backstage Preparation', category: 'Behind The Scenes' },
  { id: 'g-05', src: IMAGES.gallery[4], caption: 'Team Gathering', category: 'Behind The Scenes' },
  { id: 'g-06', src: IMAGES.gallery[5], caption: 'Creative Shoot', category: 'Creative' },
  { id: 'g-07', src: IMAGES.gallery[6], caption: 'Cultural Celebration', category: 'Events' },
  { id: 'g-08', src: IMAGES.gallery[7], caption: 'Stage Energy', category: 'Performances' },
  { id: 'g-09', src: IMAGES.gallery[8], caption: 'Camera on Set', category: 'Behind The Scenes' },
  { id: 'g-10', src: IMAGES.gallery[9], caption: 'Candid Moments', category: 'Behind The Scenes' },
  { id: 'g-11', src: IMAGES.gallery[10], caption: 'Poster & Design Work', category: 'Creative' },
  { id: 'g-12', src: IMAGES.gallery[11], caption: 'Event Coverage', category: 'Events' },
  { id: 'g-13', src: IMAGES.gallery[12], caption: 'Dance Performance', category: 'Performances' },
  { id: 'g-14', src: IMAGES.gallery[13], caption: 'Editing Room', category: 'Production' },
  { id: 'g-15', src: IMAGES.gallery[14], caption: 'Pre-show Moments', category: 'Behind The Scenes' },
  { id: 'g-16', src: IMAGES.gallery[15], caption: 'Creative Direction', category: 'Creative' },
  { id: 'g-17', src: IMAGES.gallery[16], caption: 'Celebration Night', category: 'Events' },
  { id: 'g-18', src: IMAGES.gallery[17], caption: 'Founders & Crew', category: 'Behind The Scenes' },
  { id: 'g-19', src: IMAGES.gallery[18], caption: 'Framed Moments', category: 'Production' },
  { id: 'g-20', src: IMAGES.gallery[19], caption: 'The Verse Community', category: 'Behind The Scenes' },
]

// Certificates appear in the gallery under their own category.
export const GALLERY_CERTIFICATES = CERTIFICATES.map((cert) => ({
  id: cert.id,
  src: cert.src,
  caption: cert.label,
  category: 'Certificates',
}))

export const GALLERY_FILTERS = [
  'ALL',
  'EVENTS',
  'PERFORMANCES',
  'PRODUCTION',
  'BEHIND THE SCENES',
  'CREATIVE',
  'CERTIFICATES',
]