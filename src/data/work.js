import { IMAGES } from '../config/images.js'

// Portfolio index.
//
// Two kinds of entries, both real:
//   status: 'documented' — a completed, verifiable engagement. Links to its
//            own case study (real evidence, honest framing).
//   status: 'offering'   — a capability we actively deliver. Shown as
//            portfolio work because it is what we do; links to the service
//            and is documented as its records grow.
//
// Nothing on this page is invented — no fake clients, no made-up awards.
// New entries appear only when they can be described truthfully.

export const WORKING_CASE = {
  id: 'srm-pongal-vizha-2026',
  title: 'SRM Pongal Vizha 2026',
  category: 'Cultural / Campus Event',
  year: '2026',
  status: 'documented',
  featured: true,
  role: 'Cultural Entertainment Participation',
  to: '/events/srm-pongal-vizha-2026',
  image: IMAGES.work.entertainment,
  summary:
    'Entertainment and performance participation in a large campus cultural celebration.',
  focus:
    'Stage knows the room. SRM Pongal Vizha gave the verse a live audience, a stage and a reason to show what ATTII VERSE does with an open floor.',
  description:
    'We took part in the celebration through structured entertainment and performance activities — the kind of work the verse is built around: cultural stage presence, energy and an audience in motion.',
}

export const OFFERINGS = [
  {
    id: 'work-campus-events',
    title: 'Campus Events & Fests',
    category: 'Events',
    year: 'Ongoing',
    status: 'offering',
    featured: true,
    role: 'Planning · coordination · execution',
    to: '/services/events',
    image: IMAGES.work.events,
    summary:
      'Concept-to-ground planning and coordination for fests, cultural celebrations, shows and institutional programs.',
    focus:
      'Campus events need a team that understands students, stages and schedules. That is the entire point of this company.',
  },
  {
    id: 'work-live-stage',
    title: 'Live Stage Entertainment',
    category: 'Entertainment',
    year: 'Ongoing',
    status: 'offering',
    featured: true,
    role: 'Performances · hosting · audience',
    to: '/services/entertainment',
    image: IMAGES.work.entertainment,
    summary:
      'Performances, hosting, anchors and cultural showcases built around real audience energy.',
    focus:
      'Entertainment is not background noise. It is the reason people show up — and we treat it as craft.',
  },
  {
    id: 'work-event-films',
    title: 'Event Films & Aftermovies',
    category: 'Production',
    year: 'Ongoing',
    status: 'offering',
    role: 'Film · edit · deliver',
    to: '/services/production',
    image: IMAGES.work.production,
    summary:
      'Event films, aftermovies, photographic coverage and reels that make the moment last beyond the venue.',
    focus:
      'The frame is part of the event. We capture, cut and hand back a record people actually want to watch again.',
  },
  {
    id: 'work-short-films',
    title: 'Short Films & Direction',
    category: 'Film / Creative',
    year: 'Ongoing',
    status: 'offering',
    role: 'Script · direct · produce',
    to: '/services/film-creative',
    image: IMAGES.work.creative,
    summary:
      'Narrative short films, storytelling, scriptwriting, direction and cinematic craft for screen audiences.',
    focus:
      'Stories first, equipment second. Direction is about making the idea legible on screen.',
  },
  {
    id: 'work-design-reels',
    title: 'Design & Short-Form Content',
    category: 'Creative',
    year: 'Ongoing',
    status: 'offering',
    role: 'Design · reels · social creatives',
    to: '/services/creative',
    image: IMAGES.work.media,
    summary:
      'Posters, campaign design, reels and short-form content built for feeds and walls that hold attention.',
    focus:
      `Creative work that is not just visible on the grid — it has to carry the event's voice.`,
  },
  {
    id: 'work-talent-collab',
    title: 'Talent & Creator Collaborations',
    category: 'Talent / Collaboration',
    year: 'Ongoing',
    status: 'offering',
    role: 'Network · partnerships · shows',
    to: '/services/talent',
    image: IMAGES.work.additional,
    summary:
      'A network of performers, creators and organizers working together on events, productions and content.',
    focus:
      'The verse is bigger than any one name. Collaboration is how the collective actually performs.',
  },
]

export const WORK = [WORKING_CASE, ...OFFERINGS]

export const WORKING_CASE_FEATURED = true

export const WORK_FILTERS = [
  'ALL',
  'CULTURAL / CAMPUS EVENT',
  'EVENTS',
  'ENTERTAINMENT',
  'PRODUCTION',
  'FILM / CREATIVE',
  'CREATIVE',
  'TALENT / COLLABORATION',
]
