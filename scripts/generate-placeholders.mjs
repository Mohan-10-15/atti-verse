// ============================================================
// ATTII VERSE — Placeholder art generator
// Generates quiet, on-theme placeholders: a deep emerald field
// with a small gold-soft label. No monogram, no ornament,
// deliberately plain. Real photos can later replace these files
// without touching any code.
//
// Files are written with their existing .jpg extensions (the
// browser content-sniffs the SVG payload and renders it fine).
// ============================================================

import { mkdirSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'public', 'images')

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function placeholder({ w, h, label = '' }) {
  const fs = Math.min(w, h)
  const bgA = '#03382A'
  const bgB = '#064E3B'
  const labelColor = '#E5C76B'
  const subColor = '#B9D2C2'
  const labelSize = Math.round(fs * 0.05)
  const subSize = Math.round(fs * 0.027)
  const labelY = h / 2
  const subY = h / 2 + labelSize * 1.6

  const labelBlock = label
    ? `<text x="${w / 2}" y="${labelY}" text-anchor="middle" font-family="Manrope, Inter, Arial, sans-serif" font-size="${labelSize}" font-weight="600" letter-spacing="0.22em" fill="${labelColor}">${esc(label)}</text>`
    : ''

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bgA}"/><stop offset="100%" stop-color="${bgB}"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  ${labelBlock}
  <text x="${w / 2}" y="${subY}" text-anchor="middle" font-family="Manrope, Inter, Arial, sans-serif" font-size="${subSize}" letter-spacing="0.3em" fill="${subColor}" fill-opacity="0.75">PHOTO TO BE ADDED</text>
</svg>`
}

const JOBS = [
  { path: 'hero-main.jpg', w: 1920, h: 1080, label: 'Hero Visual' },
  { path: 'og-image.jpg', w: 1200, h: 630, label: 'ATTII VERSE' },

  { path: 'about-home.jpg', w: 1280, h: 960, label: 'About — Coming Soon' },

  { path: 'founders/founder-rahul.jpg', w: 900, h: 1120, label: 'Rahul R S' },
  { path: 'founders/founder-tamilselvan.jpg', w: 900, h: 1120, label: 'Tamilselvan' },
  { path: 'founders/founder-siva.jpg', w: 900, h: 1120, label: 'Siva' },
  { path: 'founders/founder-harish.jpg', w: 900, h: 1120, label: 'Harish' },

  { path: 'work/work-entertainment.jpg', w: 1200, h: 900, label: 'Entertainment Work' },
  { path: 'work/work-events.jpg', w: 1200, h: 900, label: 'Events Work' },
  { path: 'work/work-production.jpg', w: 1200, h: 900, label: 'Production Work' },
  { path: 'work/work-creative.jpg', w: 1200, h: 900, label: 'Creative Work' },
  { path: 'work/work-media.jpg', w: 1200, h: 900, label: 'Media Work' },
  { path: 'work/work-additional.jpg', w: 1200, h: 1500, label: 'Live Performance' },

  { path: 'events/event-srm-pongal-2026.jpg', w: 1400, h: 875, label: 'SRM Pongal Vizha 2026' },
  { path: 'events/event-dance-competition.jpg', w: 1400, h: 875, label: 'Dance Competition' },
  { path: 'events/event-flash-mob.jpg', w: 1400, h: 875, label: 'Flash Mob' },
  { path: 'events/event-cultural-stage.jpg', w: 1400, h: 875, label: 'Cultural Stage' },
  { path: 'events/event-future.jpg', w: 1400, h: 875, label: 'Future Event' },

  { path: 'productions/photography.jpg', w: 1280, h: 720, label: 'Photography' },
  { path: 'productions/videography.jpg', w: 1280, h: 720, label: 'Videography' },
  { path: 'productions/editing.jpg', w: 1280, h: 720, label: 'Video Editing' },
  { path: 'productions/reels.jpg', w: 1080, h: 1350, label: 'Reels & Short Content' },
  { path: 'productions/aftermovies.jpg', w: 1280, h: 720, label: 'Event Aftermovies' },
  { path: 'productions/promotional.jpg', w: 1280, h: 720, label: 'Promotional Videos' },
  { path: 'productions/shortfilms.jpg', w: 1280, h: 720, label: 'Short Films' },
  { path: 'productions/direction.jpg', w: 1280, h: 720, label: 'Scriptwriting & Direction' },

  { path: 'services/service-entertainment.jpg', w: 1200, h: 900, label: 'Entertainment' },
  { path: 'services/service-event-management.jpg', w: 1200, h: 900, label: 'Event Management' },
  { path: 'services/service-media-production.jpg', w: 1200, h: 900, label: 'Media & Production' },
  { path: 'services/service-film-creative.jpg', w: 1200, h: 900, label: 'Film & Creative' },
  { path: 'services/service-creative-design.jpg', w: 1200, h: 900, label: 'Creative & Design' },
  { path: 'services/service-talent.jpg', w: 1200, h: 900, label: 'Talent & Collaboration' },

  { path: 'gallery/gallery-01.jpg', w: 960, h: 1200, label: 'Event Moments' },
  { path: 'gallery/gallery-02.jpg', w: 1200, h: 800, label: 'Live Performance' },
  { path: 'gallery/gallery-03.jpg', w: 1200, h: 900, label: 'Production Set' },
  { path: 'gallery/gallery-04.jpg', w: 900, h: 900, label: 'Backstage' },
  { path: 'gallery/gallery-05.jpg', w: 1280, h: 720, label: 'Team Gathering' },
  { path: 'gallery/gallery-06.jpg', w: 960, h: 1200, label: 'Creative Shoot' },
  { path: 'gallery/gallery-07.jpg', w: 1200, h: 900, label: 'Cultural Celebration' },
  { path: 'gallery/gallery-08.jpg', w: 1200, h: 800, label: 'Stage Energy' },
  { path: 'gallery/gallery-09.jpg', w: 1280, h: 720, label: 'On Set' },
  { path: 'gallery/gallery-10.jpg', w: 900, h: 900, label: 'Candid Moments' },
  { path: 'gallery/gallery-11.jpg', w: 960, h: 1200, label: 'Poster & Design' },
  { path: 'gallery/gallery-12.jpg', w: 1200, h: 900, label: 'Event Coverage' },
  { path: 'gallery/gallery-13.jpg', w: 1200, h: 800, label: 'Dance Performance' },
  { path: 'gallery/gallery-14.jpg', w: 1280, h: 720, label: 'Editing Room' },
  { path: 'gallery/gallery-15.jpg', w: 900, h: 900, label: 'Pre-show' },
  { path: 'gallery/gallery-16.jpg', w: 960, h: 1200, label: 'Creative Direction' },
  { path: 'gallery/gallery-17.jpg', w: 1200, h: 900, label: 'Celebration Night' },
  { path: 'gallery/gallery-18.jpg', w: 1200, h: 800, label: 'Founders & Crew' },
  { path: 'gallery/gallery-19.jpg', w: 1280, h: 720, label: 'Framed Moments' },
  { path: 'gallery/gallery-20.jpg', w: 900, h: 900, label: 'The Verse Community' },

  { path: 'certificates/certificate-01.jpg', w: 900, h: 1150, label: 'Certificate 01' },
  { path: 'certificates/certificate-02.jpg', w: 900, h: 1150, label: 'Certificate 02' },
  { path: 'certificates/certificate-03.jpg', w: 900, h: 1150, label: 'Certificate 03' },
]

let written = 0
for (const job of JOBS) {
  const { path } = job
  const abs = join(OUT, path)
  if (!existsSync(abs)) {
    console.warn(`[skip] missing target: ${path}`)
    continue
  }
  const { w, h, label } = job
  const svg = placeholder({ w, h, label })
  mkdirSync(dirname(abs), { recursive: true })
  writeFileSync(abs, svg, 'utf8')
  written++
}

console.log(`Generated ${written}/${JOBS.length} placeholder artworks.`)