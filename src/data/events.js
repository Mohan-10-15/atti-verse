import { IMAGES } from '../config/images.js'

// Each event object below is structured for easy addition.
// Verified events carry status: 'verified'. Everything else is
// clearly marked 'to-be-added' and shows "To Be Added" labels.
export const EVENTS = [
  {
    id: 'srm-pongal-vizha-2026',
    title: 'SRM Pongal Vizha 2026',
    category: 'Cultural / Entertainment',
    role: 'Entertainment / Cultural Participation',
    status: 'verified',
    date: null, // To be added
    location: null, // To be added
    description:
      'ATTII VERSE participated in cultural celebrations through entertainment and performance activities.',
    image: IMAGES.events.srmPongal2026,
    gallery: [],
    certificate: null,
    video: null, // set to a YouTube embed URL or video path later
  },
  {
    id: 'dance-competition',
    title: 'Dance Competition',
    category: 'Dance / Competition',
    role: 'Entertainment Participation',
    status: 'to-be-added',
    date: null,
    location: null,
    description: 'Participation in dance competitions. Details to be added.',
    image: IMAGES.events.danceCompetition,
    gallery: [],
    certificate: null,
    video: null,
  },
  {
    id: 'flash-mob',
    title: 'Flash Mob Performance',
    category: 'Performance / Entertainment',
    role: 'Performance',
    status: 'to-be-added',
    date: null,
    location: null,
    description: 'Flash mob performances by the ATTII VERSE performance team. Details to be added.',
    image: IMAGES.events.flashMob,
    gallery: [],
    certificate: null,
    video: null,
  },
  {
    id: 'cultural-stage',
    title: 'Cultural Stage Performance',
    category: 'Cultural / Stage',
    role: 'Stage Entertainment',
    status: 'to-be-added',
    date: null,
    location: null,
    description: 'Cultural stage performances delivered by our performers. Details to be added.',
    image: IMAGES.events.culturalStage,
    gallery: [],
    certificate: null,
    video: null,
  },
]

export const FEATURED_EVENTS = EVENTS.filter((e) => e.status === 'verified')

export const EVENT_PLACEHOLDERS = EVENTS.filter((e) => e.status !== 'verified')