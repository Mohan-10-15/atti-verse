// ============================================================
// ATTII VERSE — Placeholder art generator
// Generates a deliberate, brand-consistent placeholder system:
// every slot renders a designed monogram lockup (AV / ATTII VERSE)
// on an emerald field with a gold loom frame. Real photos can
// later replace these files without touching any code.
//
// Files are written with their existing .jpg extensions (the
// browser content-sniffs the SVG payload and renders it fine).
// ============================================================

import { mkdirSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'public', 'images')

// Escape XML text content.
const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function placeholder({ w, h, label = '', ratio }) {
  const fs = Math.min(w, h) // base unit derived from the small side
  const g = ['#047857', '#044A37', '#02331F', '#011E12']
  const stops = [
    `<stop offset="0%" stop-color="${g[0]}"/>`,
    `<stop offset="34%" stop-color="${g[1]}"/>`,
    `<stop offset="74%" stop-color="${g[2]}"/>`,
    `<stop offset="100%" stop-color="${g[3]}"/>`,
  ].join('')

  const av = Math.round(fs * 0.22)
  const word = Math.round(fs * 0.034)
  const wordLs = Math.round(fs * 0.006)
  const wordY = h / 2 + av * 0.42
  const labelY = Math.round(h * 0.062)
  const corner = Math.round(fs * 0.045)

  // Optional film grain (subtle turbulence overlay).
  const grain = `
  <filter id="grain" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0"/>
  </filter>`

  const labelBlock = label
    ? `
  <text x="${Math.round(fs * 0.085)}" y="${labelY}" font-family="Inter, Arial, sans-serif" font-size="${font('0.032')}" font-weight="600" letter-spacing="0.30em" fill="#E5C76B" fill-opacity="0.9">${esc(label)}</text>
  <line x1="${Math.round(fs * 0.085)}" y1="${labelY + Math.round(fs * 0.028)}" x2="${Math.round(fs * 0.085) + Math.round(fs * 0.1)}" y2="${labelY + Math.round(fs * 0.028)}" stroke="#D4AF37" stroke-opacity="0.6" stroke-width="1"/>`
    : ''

  const ratioTag = ` aspect-ratio: ${ratio[0]}/${ratio[1]}`

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.9" y2="1">${stops}</linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#E5C76B"/>
      <stop offset="50%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#E5C76B"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.82" cy="0.12" r="0.9">
      <stop offset="0%" stop-color="#E5C76B" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="#E5C76B" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect width="100%" height="100%" fill="url(#glow)"/>
  <g filter="url(#grain)"><rect width="100%" height="100%" fill="#ffffff" fill-opacity="0"/></g>
  <rect x="${Math.round(fs * 0.055)}" y="${Math.round(fs * 0.055)}" width="${w - Math.round(fs * 0.11)}" height="${h - Math.round(fs * 0.11)}" fill="none" stroke="#D4AF37" stroke-opacity="0.42" stroke-width="1"/>
  <rect x="${Math.round(fs * 0.085)}" y="${Math.round(fs * 0.085)}" width="${w - Math.round(fs * 0.17)}" height="${h - Math.round(fs * 0.17)}" fill="none" stroke="#D4AF37" stroke-opacity="0.2" stroke-width="1"/>
  <g>
    <line x1="${corner}" y1="${Math.round(h * 0.5 - fs * 0.19)}" x2="${corner}" y2="${Math.round(h * 0.5 - fs * 0.13)}" stroke="#E5C76B" stroke-opacity="0.85" stroke-width="2"/>
    <line x1="${Math.round(w - corner)}" y1="${Math.round(h * 0.5 - fs * 0.19)}" x2="${Math.round(w - corner)}" y2="${Math.round(h * 0.5 - fs * 0.13)}" stroke="#E5C76B" stroke-opacity="0.85" stroke-width="2"/>
    <line x1="${corner}" y1="${Math.round(h * 0.5 + fs * 0.13)}" x2="${corner}" y2="${Math.round(h * 0.5 + fs * 0.19)}" stroke="#E5C76B" stroke-opacity="0.85" stroke-width="2"/>
    <line x1="${Math.round(w - corner)}" y1="${Math.round(h * 0.5 + fs * 0.13)}" x2="${Math.round(w - corner)}" y2="${Math.round(h * 0.5 + fs * 0.19)}" stroke="#E5C76B" stroke-opacity="0.85" stroke-width="2"/>
  </g>
  <text x="${w / 2}" y="${h / 2 + av * 0.34}" text-anchor="middle" font-family="'Playfair Display', Georgia, serif" font-size="${av}" font-weight="700" fill="url(#gold)" letter-spacing="${Math.round(fs * 0.014)}">ATTII VERSE</text>
  <text x="${w / 2}" y="${wordY}" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="${word}" font-weight="600" letter-spacing="${wordLs}" fill="#FFFFFF" fill-opacity="0.96">ENTERTAINMENT &amp; PRODUCTIONS</text>
  <text x="${w / 2}" y="${wordY + word * 2.1}" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="${Math.round(word * 0.82)}" letter-spacing="0.34em" fill="#E5C76B" fill-opacity="0.62">OUR TALENT.</text>
  ${labelBlock}
</svg>`
}

function font(scale) {
  return Math.round(Math.min(1920, 1080) * scale)
}

const JOBS = [
  // hero / og (wide cinematic)
  { path: 'hero-main.jpg', w: 1920, h: 1080, label: 'Hero Visual', ratio: [16, 9] },
  { path: 'og-image.jpg', w: 1200, h: 630, label: 'ATTII VERSE', ratio: [1.9, 1] },

  // about / story images
  { path: 'about-home.jpg', w: 1280, h: 960, label: 'About — Coming Soon', ratio: [4, 3] },

  // founders (portrait)
  { path: 'founders/founder-rahul.jpg', w: 900, h: 1120, label: 'Rahul R S', ratio: [4, 5] },
  { path: 'founders/founder-tamilselvan.jpg', w: 900, h: 1120, label: 'Tamilselvan', ratio: [4, 5] },
  { path: 'founders/founder-siva.jpg', w: 900, h: 1120, label: 'Siva', ratio: [4, 5] },
  { path: 'founders/founder-harish.jpg', w: 900, h: 1120, label: 'Harish', ratio: [4, 5] },

  // work
  { path: 'work/work-entertainment.jpg', w: 1200, h: 900, label: 'Entertainment Work', ratio: [4, 3] },
  { path: 'work/work-events.jpg', w: 1200, h: 900, label: 'Events Work', ratio: [4, 3] },
  { path: 'work/work-production.jpg', w: 1200, h: 900, label: 'Production Work', ratio: [4, 3] },
  { path: 'work/work-creative.jpg', w: 1200, h: 900, label: 'Creative Work', ratio: [4, 3] },
  { path: 'work/work-media.jpg', w: 1200, h: 900, label: 'Media Work', ratio: [4, 3] },
  { path: 'work/work-additional.jpg', w: 1200, h: 1500, label: 'Live Performance', ratio: [4, 5] },

  // events
  { path: 'events/event-srm-pongal-2026.jpg', w: 1400, h: 875, label: 'SRM Pongal Vizha 2026', ratio: [16, 10] },
  { path: 'events/event-dance-competition.jpg', w: 1400, h: 875, label: 'Dance Competition', ratio: [16, 10] },
  { path: 'events/event-flash-mob.jpg', w: 1400, h: 875, label: 'Flash Mob', ratio: [16, 10] },
  { path: 'events/event-cultural-stage.jpg', w: 1400, h: 875, label: 'Cultural Stage', ratio: [16, 10] },
  { path: 'events/event-future.jpg', w: 1400, h: 875, label: 'Future Event', ratio: [16, 10] },

  // productions
  { path: 'productions/photography.jpg', w: 1280, h: 720, label: 'Photography', ratio: [16, 9] },
  { path: 'productions/videography.jpg', w: 1280, h: 720, label: 'Videography', ratio: [16, 9] },
  { path: 'productions/editing.jpg', w: 1280, h: 720, label: 'Video Editing', ratio: [16, 9] },
  { path: 'productions/reels.jpg', w: 1080, h: 1350, label: 'Reels & Short Content', ratio: [4, 5] },
  { path: 'productions/aftermovies.jpg', w: 1280, h: 720, label: 'Event Aftermovies', ratio: [16, 9] },
  { path: 'productions/promotional.jpg', w: 1280, h: 720, label: 'Promotional Videos', ratio: [16, 9] },
  { path: 'productions/shortfilms.jpg', w: 1280, h: 720, label: 'Short Films', ratio: [16, 9] },
  { path: 'productions/direction.jpg', w: 1280, h: 720, label: 'Scriptwriting & Direction', ratio: [16, 9] },

  // services
  { path: 'services/service-entertainment.jpg', w: 1200, h: 900, label: 'Entertainment', ratio: [4, 3] },
  { path: 'services/service-event-management.jpg', w: 1200, h: 900, label: 'Event Management', ratio: [4, 3] },
  { path: 'services/service-media-production.jpg', w: 1200, h: 900, label: 'Media & Production', ratio: [4, 3] },
  { path: 'services/service-film-creative.jpg', w: 1200, h: 900, label: 'Film & Creative', ratio: [4, 3] },
  { path: 'services/service-creative-design.jpg', w: 1200, h: 900, label: 'Creative & Design', ratio: [4, 3] },
  { path: 'services/service-talent.jpg', w: 1200, h: 900, label: 'Talent & Collaboration', ratio: [4, 3] },

  // gallery (varied ratios for masonry rhythm)
  { path: 'gallery/gallery-01.jpg', w: 960, h: 1200, label: 'Event Moments', ratio: [4, 5] },
  { path: 'gallery/gallery-02.jpg', w: 1200, h: 800, label: 'Live Performance', ratio: [3, 2] },
  { path: 'gallery/gallery-03.jpg', w: 1200, h: 900, label: 'Production Set', ratio: [4, 3] },
  { path: 'gallery/gallery-04.jpg', w: 900, h: 900, label: 'Backstage', ratio: [1, 1] },
  { path: 'gallery/gallery-05.jpg', w: 1280, h: 720, label: 'Team Gathering', ratio: [16, 9] },
  { path: 'gallery/gallery-06.jpg', w: 960, h: 1200, label: 'Creative Shoot', ratio: [4, 5] },
  { path: 'gallery/gallery-07.jpg', w: 1200, h: 900, label: 'Cultural Celebration', ratio: [4, 3] },
  { path: 'gallery/gallery-08.jpg', w: 1200, h: 800, label: 'Stage Energy', ratio: [3, 2] },
  { path: 'gallery/gallery-09.jpg', w: 1280, h: 720, label: 'On Set', ratio: [16, 9] },
  { path: 'gallery/gallery-10.jpg', w: 900, h: 900, label: 'Candid Moments', ratio: [1, 1] },
  { path: 'gallery/gallery-11.jpg', w: 960, h: 1200, label: 'Poster & Design', ratio: [4, 5] },
  { path: 'gallery/gallery-12.jpg', w: 1200, h: 900, label: 'Event Coverage', ratio: [4, 3] },
  { path: 'gallery/gallery-13.jpg', w: 1200, h: 800, label: 'Dance Performance', ratio: [3, 2] },
  { path: 'gallery/gallery-14.jpg', w: 1280, h: 720, label: 'Editing Room', ratio: [16, 9] },
  { path: 'gallery/gallery-15.jpg', w: 900, h: 900, label: 'Pre-show', ratio: [1, 1] },
  { path: 'gallery/gallery-16.jpg', w: 960, h: 1200, label: 'Creative Direction', ratio: [4, 5] },
  { path: 'gallery/gallery-17.jpg', w: 1200, h: 900, label: 'Celebration Night', ratio: [4, 3] },
  { path: 'gallery/gallery-18.jpg', w: 1200, h: 800, label: 'Founders & Crew', ratio: [3, 2] },
  { path: 'gallery/gallery-19.jpg', w: 1280, h: 720, label: 'Framed Moments', ratio: [16, 9] },
  { path: 'gallery/gallery-20.jpg', w: 900, h: 900, label: 'The Verse Community', ratio: [1, 1] },

  // certificates (portrait document ratio)
  { path: 'certificates/certificate-01.jpg', w: 900, h: 1150, label: 'Certificate 01', ratio: [4, 5] },
  { path: 'certificates/certificate-02.jpg', w: 900, h: 1150, label: 'Certificate 02', ratio: [4, 5] },
  { path: 'certificates/certificate-03.jpg', w: 900, h: 1150, label: 'Certificate 03', ratio: [4, 5] },
]

let written = 0
for (const job of JOBS) {
  const { path, ratio } = job
  const abs = join(OUT, path)
  if (!existsSync(abs)) {
    console.warn(`[skip] missing target: ${path}`)
    continue
  }
  const { w, h, label } = job
  const svg = placeholder({ w, h, label, ratio })
  mkdirSync(dirname(abs), { recursive: true })
  writeFileSync(abs, svg, 'utf8')
  written++
}

console.log(`\nGenerated ${written}/${JOBS.length} placeholder artworks.`)