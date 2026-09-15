// Generate branded SVG placeholder images for every path in
// src/config/images.js so the site never shows broken images.
// Run: node scripts/generate-placeholders.mjs
// When you replace files with real images, simply overwrite them.

import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'

const OUT = resolve('public')

const SIZES = {
  hero: { w: 1920, h: 1080, label: 'Hero Visual' },
  'og-image': { w: 1200, h: 630, label: 'Open Graph' },
  default: { w: 1200, h: 800, label: '' },
  portrait: { w: 800, h: 1000, label: '' },
  'events': { w: 1200, h: 800, label: '' },
  certificates: { w: 1000, h: 1200, label: 'Certificate' },
}

function svg(w, h, label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0c1818"/>
      <stop offset="55%" stop-color="#102020"/>
      <stop offset="100%" stop-color="#102020"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#E5C76B"/>
      <stop offset="50%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#E5C76B"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect x="${w * 0.06}" y="${h * 0.06}" width="${w * 0.88}" height="${h * 0.88}" fill="none" stroke="#D4AF37" stroke-opacity="0.4" stroke-width="1"/>
  <rect x="${w * 0.073}" y="${h * 0.073}" width="${w * 0.854}" height="${h * 0.854}" fill="none" stroke="#D4AF37" stroke-opacity="0.22" stroke-width="1"/>
  <text x="${w / 2}" y="${h / 2}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="${Math.round(w * 0.085)}" font-weight="700" fill="url(#gold)" letter-spacing="${Math.round(w * 0.014)}">AV</text>
  <text x="${w / 2}" y="${h / 2 + h * 0.115}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="${Math.round(Math.max(16, w * 0.016))}" letter-spacing="${Math.round(Math.max(3, w * 0.006))}" fill="#FFFFFF" font-weight="600">ATTII VERSE</text>
  <text x="${w / 2}" y="${h / 2 + h * 0.155}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${Math.round(Math.max(12, w * 0.011))}" letter-spacing="${Math.round(Math.max(2, w * 0.004))}" fill="#E5C76B" fill-opacity="0.85">${label}</text>
</svg>`
}

const PLAN = [
  // brand visuals
  ['/images/hero-main.jpg', SIZES.hero],
  ['/images/og-image.jpg', SIZES['og-image']],
  ['/images/about-home.jpg', SIZES.default],
  ['/favicon.svg', null],
  // founders (portrait)
  ['/images/founders/founder-rahul.jpg', SIZES.portrait],
  ['/images/founders/founder-tamilselvan.jpg', SIZES.portrait],
  ['/images/founders/founder-siva.jpg', SIZES.portrait],
  ['/images/founders/founder-harish.jpg', SIZES.portrait],
  // work
  ['/images/work/work-entertainment.jpg', SIZES.default],
  ['/images/work/work-events.jpg', SIZES.default],
  ['/images/work/work-production.jpg', SIZES.default],
  ['/images/work/work-creative.jpg', SIZES.default],
  ['/images/work/work-media.jpg', SIZES.default],
  ['/images/work/work-additional.jpg', SIZES.default],
  // events
  ['/images/events/event-srm-pongal-2026.jpg', SIZES.events],
  ['/images/events/event-dance-competition.jpg', SIZES.events],
  ['/images/events/event-flash-mob.jpg', SIZES.events],
  ['/images/events/event-cultural-stage.jpg', SIZES.events],
  ['/images/events/event-future.jpg', SIZES.events],
  // productions
  ['/images/productions/photography.jpg', SIZES.default],
  ['/images/productions/videography.jpg', SIZES.default],
  ['/images/productions/editing.jpg', SIZES.default],
  ['/images/productions/reels.jpg', SIZES.default],
  ['/images/productions/aftermovies.jpg', SIZES.default],
  ['/images/productions/promotional.jpg', SIZES.default],
  ['/images/productions/shortfilms.jpg', SIZES.default],
  ['/images/productions/direction.jpg', SIZES.default],
  // services
  ['/images/services/service-entertainment.jpg', SIZES.default],
  ['/images/services/service-event-management.jpg', SIZES.default],
  ['/images/services/service-media-production.jpg', SIZES.default],
  ['/images/services/service-film-creative.jpg', SIZES.default],
  ['/images/services/service-creative-design.jpg', SIZES.default],
  ['/images/services/service-talent.jpg', SIZES.default],
  // gallery
  ...Array.from({ length: 20 }, (_, i) => [`/images/gallery/gallery-${String(i + 1).padStart(2, '0')}.jpg`, SIZES.default]),
  // certificates
  ['/images/certificates/certificate-01.jpg', SIZES.certificates],
  ['/images/certificates/certificate-02.jpg', SIZES.certificates],
  ['/images/certificates/certificate-03.jpg', SIZES.certificates],
]

for (const [relPath, size] of PLAN) {
  const abs = resolve(OUT, `.${relPath}`)
  mkdirSync(dirname(abs), { recursive: true })
  if (relPath === '/favicon.svg') {
    writeFileSync(
      abs,
      `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0c1818"/><stop offset="100%" stop-color="#102020"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="url(#g)"/>
  <rect x="4" y="4" width="56" height="56" rx="11" fill="none" stroke="#D4AF37" stroke-opacity="0.6" stroke-width="1.5"/>
  <text x="32" y="41" text-anchor="middle" font-family="Georgia, serif" font-size="28" font-weight="700" fill="#D4AF37">AV</text>
</svg>`,
    )
    continue
  }
  writeFileSync(abs, svg(size.w, size.h, size.label))
  console.log('generated', relPath)
}

console.log('\nDone. Placeholder images were written to /public/images')