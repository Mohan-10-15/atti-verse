import { IMAGES } from '../config/images.js'

// Placeholder titles/descriptions are used until real project
// details are provided. Replace freely.

export const SERVICES = [
  {
    id: 'entertainment',
    slug: 'entertainment',
    number: '01',
    title: 'Entertainment',
    tagline: 'Performance. Energy. Experience.',
    description:
      'Dance performances, stage performances, flash mobs, cultural performances, hosting, MC and audience engagement.',
    hero:
      'Entertainment is where ATTII VERSE lives — live performance, energy, cultural expression and the craft of holding an audience.',
    capabilities: [
      'Dance Performances',
      'Stage Performances',
      'Flash Mobs',
      'Cultural Performances',
      'Hosting & MC',
      'Audience Engagement',
    ],
    image: IMAGES.services.entertainment,
    cta: { label: 'Explore Entertainment →', to: '/services/entertainment' },
    lens: 'EVENTS',
    summary: 'Performance. Energy. Experience.',
    home: true,
    portfolio: [
      { title: 'SRM Pongal Vizha 2026 — Cultural Participation', category: 'Entertainment', year: '2026' },
      { title: 'Cultural Stage Showcase', category: 'Entertainment', year: 'TBA' },
    ],
  },
  {
    id: 'event-management',
    slug: 'events',
    number: '02',
    title: 'Event Management',
    tagline: 'From Planning to Execution.',
    description:
      'Event planning, coordination, program management, logistics, team coordination and on-ground execution.',
    hero:
      'From the first brief to the final performance, we plan, coordinate and execute events that run with clarity and care.',
    capabilities: [
      'Event Planning',
      'Coordination',
      'Program Management',
      'Logistics',
      'Team Coordination',
      'On-Ground Execution',
      'College & Institutional Events',
    ],
    image: IMAGES.services.eventManagement,
    cta: { label: 'Explore Events →', to: '/services/events' },
    lens: 'EVENTS',
    summary: 'From planning to execution.',
    home: true,
    portfolio: [{ title: 'Event Planning & Coordination', category: 'Events', year: 'TBA' }],
  },
  {
    id: 'media-production',
    slug: 'production',
    number: '03',
    title: 'Media & Production',
    tagline: 'Stories Through Visuals.',
    description:
      'Photography, videography, editing, reels, event films, promotional videos, short films and cinematic content.',
    hero:
      'We capture, edit and produce visual stories — from a single frame to a complete film.',
    capabilities: [
      'Photography',
      'Videography',
      'Video Editing',
      'Reels & Short Content',
      'Event Films',
      'Promotional Videos',
      'Cinematic Content',
    ],
    image: IMAGES.services.mediaProduction,
    cta: { label: 'Explore Productions →', to: '/services/production' },
    lens: 'PRODUCTION',
    summary: 'Stories through visuals.',
    home: true,
    portfolio: [{ title: 'Event Film & Aftermovie', category: 'Production', year: 'TBA' }],
  },
  {
    id: 'film-creative',
    slug: 'production',
    number: '04',
    title: 'Film & Creative Production',
    tagline: 'Cinematic Storytelling.',
    description:
      'Short films, scriptwriting, direction and cinematic storytelling for digital and screen audiences.',
    hero:
      'Concept, script, direction and screen — cinematic storytelling built for digital and audience experiences.',
    capabilities: [
      'Short Films',
      'Scriptwriting',
      'Direction',
      'Cinematography Planning',
      'Cinematic Storytelling',
    ],
    image: IMAGES.services.filmCreative,
    cta: { label: 'Explore Productions →', to: '/services/production#film-creative' },
    lens: 'PRODUCTION',
    summary: 'Cinematic storytelling.',
    home: false,
    portfolio: [{ title: 'Short Film Project', category: 'Production', year: 'TBA' }],
  },
  {
    id: 'creative-design',
    slug: 'creative',
    number: '05',
    title: 'Creative & Design',
    tagline: 'Ideas Into Visual Identity.',
    description:
      'Posters, social media creatives, promotional materials, branding, campaigns and motion graphics.',
    hero:
      'Every idea deserves an identity — posters, branding, creatives and campaigns designed to be seen and remembered.',
    capabilities: [
      'Graphic Design',
      'Poster Design',
      'Social Media Creatives',
      'Promotional Materials',
      'Branding',
      'Campaign Design',
      'Motion Graphics',
    ],
    image: IMAGES.services.creativeDesign,
    cta: { label: 'View Creative Work →', to: '/services/creative' },
    lens: 'CREATIVE',
    summary: 'Ideas into visual identity.',
    home: true,
    portfolio: [{ title: 'Campaign & Poster Design', category: 'Creative', year: 'TBA' }],
  },
  {
    id: 'talent-collaboration',
    slug: 'talent',
    number: '06',
    title: 'Talent & Collaboration',
    tagline: 'Talent Meets Opportunity.',
    description:
      'A creative network bringing together dancers, performers, hosts, photographers, videographers, editors, designers, writers, directors and creators.',
    hero:
      'Talent is where everything begins — a network where creators, performers and production people find opportunity.',
    capabilities: [
      'Talent Development',
      'Creator Network',
      'Performance Teams',
      'Creative Collaboration',
      'Auditions & Recruitment',
    ],
    image: IMAGES.services.talentCollaboration,
    cta: { label: 'Collaborate With Us →', to: '/services/talent' },
    lens: 'CREATIVE',
    summary: 'Talent meets opportunity.',
    home: true,
    portfolio: [{ title: 'Creator Collaborations', category: 'Collaboration', year: 'TBA' }],
  },
]

export const HOME_SERVICES = SERVICES.filter((s) => s.home === true)