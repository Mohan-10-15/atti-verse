// ============================================================
// ATTII VERSE — Central Image Configuration
// ============================================================
// Edit the paths below to point to your real images.
// When a file is missing at runtime, the site automatically
// shows an elegant branded placeholder instead of a broken image.
//
// Supported formats: /images/your-file.jpg|webp|png|...
// You can drop real files into /public/images and the paths
// below will just work.
// ============================================================

export const IMAGES = {
  // --- Brand logo -------------------------------------------
  // Replace with your final logo file (png/webp/svg) as needed.
  logo: '/images/atti-verse-logo.jpeg',

  // --- Hero / brand visuals ---------------------------------
  hero: '/images/hero-main.jpg',
  heroVideo: null, // set to '/videos/hero.mp4' to use a video hero
  ogImage: '/images/og-image.jpg',
  aboutHome: '/images/about-home.jpg',

  // --- Founders & team --------------------------------------
  founders: {
    rahul: '/images/founders/founder-rahul.jpg',
    tamilselvan: '/images/founders/founder-tamilselvan.jpg',
    siva: '/images/founders/founder-siva.jpg',
    harish: '/images/founders/founder-harish.jpg',
  },

  // --- Featured work (Home + Work filters) -------------------
  work: {
    entertainment: '/images/work/work-entertainment.jpg',
    events: '/images/work/work-events.jpg',
    production: '/images/work/work-production.jpg',
    creative: '/images/work/work-creative.jpg',
    media: '/images/work/work-media.jpg',
    additional: '/images/work/work-additional.jpg',
  },

  // --- Events ------------------------------------------------
  events: {
    srmPongal2026: '/images/events/event-srm-pongal-2026.jpg',
    danceCompetition: '/images/events/event-dance-competition.jpg',
    flashMob: '/images/events/event-flash-mob.jpg',
    culturalStage: '/images/events/event-cultural-stage.jpg',
    future: '/images/events/event-future.jpg',
  },

  // --- Productions / media sections --------------------------
  productions: {
    photography: '/images/productions/photography.jpg',
    videography: '/images/productions/videography.jpg',
    editing: '/images/productions/editing.jpg',
    reels: '/images/productions/reels.jpg',
    aftermovies: '/images/productions/aftermovies.jpg',
    promotional: '/images/productions/promotional.jpg',
    shortfilms: '/images/productions/shortfilms.jpg',
    direction: '/images/productions/direction.jpg',
  },

  // --- Services ----------------------------------------------
  services: {
    entertainment: '/images/services/service-entertainment.jpg',
    eventManagement: '/images/services/service-event-management.jpg',
    mediaProduction: '/images/services/service-media-production.jpg',
    filmCreative: '/images/services/service-film-creative.jpg',
    creativeDesign: '/images/services/service-creative-design.jpg',
    talentCollaboration: '/images/services/service-talent.jpg',
  },

  // --- Gallery -----------------------------------------------
  gallery: [
    '/images/gallery/gallery-01.jpg',
    '/images/gallery/gallery-02.jpg',
    '/images/gallery/gallery-03.jpg',
    '/images/gallery/gallery-04.jpg',
    '/images/gallery/gallery-05.jpg',
    '/images/gallery/gallery-06.jpg',
    '/images/gallery/gallery-07.jpg',
    '/images/gallery/gallery-08.jpg',
    '/images/gallery/gallery-09.jpg',
    '/images/gallery/gallery-10.jpg',
    '/images/gallery/gallery-11.jpg',
    '/images/gallery/gallery-12.jpg',
    '/images/gallery/gallery-13.jpg',
    '/images/gallery/gallery-14.jpg',
    '/images/gallery/gallery-15.jpg',
    '/images/gallery/gallery-16.jpg',
    '/images/gallery/gallery-17.jpg',
    '/images/gallery/gallery-18.jpg',
    '/images/gallery/gallery-19.jpg',
    '/images/gallery/gallery-20.jpg',
  ],

  // --- Certificates & documents ------------------------------
  certificates: [
    '/images/certificates/certificate-01.jpg',
    '/images/certificates/certificate-02.jpg',
    '/images/certificates/certificate-03.jpg',
  ],
}

// Alternative flat export for convenience
export const IMG = IMAGES
export default IMAGES