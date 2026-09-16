// ============================================================
// ATTII VERSE — Central Site Configuration
// ============================================================
// Everything in this file is safe to update without touching
// components. Replace the placeholder values below with real
// contact information, social links and brand details later.
// ============================================================

export const SITE = {
  name: 'ATTII VERSE',
  fullName: 'ATTII VERSE Entertainment & Productions',
  tagline: 'Our Talent. Our Verse.',
  descriptor: 'Entertainment. Production. Experiences.',
  brandLine: 'Entertainment • Production • Events • Creative',
  description:
    'A creative entertainment and production organization bringing together talent, creativity, media and event experiences under one platform.',
  year: 2026,
  email: '', // e.g. 'hello@attiverse.in'
  phone: '', // e.g. '+91 90000 00000'
  address: '', // e.g. 'Chennai, Tamil Nadu, India'
  url: 'https://mohan-10-15.github.io/atti-verse/',
}

// True only once real contact details are filled in above.
// While placeholders, the site shows "coming soon" instead of raw text.
const isFilled = (v) => typeof v === 'string' && v.trim() !== '' && !/PLACEHOLDER|YOUR_|OFFICIAL_/i.test(v)
export const CONTACT_PUBLISHED = isFilled(SITE.email) && isFilled(SITE.phone)

// Stateless placeholders — DO NOT replace with made-up content.
// Keep these keys until real details are provided.
export const PLACEHOLDER = {
  email: 'OFFICIAL_EMAIL',
  phone: 'OFFICIAL_PHONE',
  address: 'OFFICIAL_ADDRESS',
  tba: 'To Be Added',
  comingSoon: 'Coming Soon',
  tbaShort: 'TBA',
}

export const SOCIAL = {
  instagram: 'INSTAGRAM_URL', // TODO: replace with real profile
  youtube: 'YOUTUBE_URL', // TODO: replace with real channel
  linkedin: 'LINKEDIN_URL', // TODO: replace with real profile
}

export const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Events', to: '/events' },
  { label: 'Team', to: '/team' },
]

// Secondary links surfaced in the footer for deep pages.
export const FOOTER_EXTRA_LINKS = [
  { label: 'Milestones', to: '/achievements' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Media & Productions', to: '/productions' },
  { label: "What's Next", to: '/upcoming' },
  { label: 'Contact', to: '/contact' },
]