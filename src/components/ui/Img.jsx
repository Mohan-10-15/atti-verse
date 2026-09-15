import { useState } from 'react'

// Renders an image. If the source is missing, an elegant
// branded data-URI placeholder is shown instead of a broken image.
function fallbackSVG(label = '') {
  const safe = (label || 'IMAGE COMING SOON')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .slice(0, 40)

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="b" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0C1818"/><stop offset="55%" stop-color="#102020"/><stop offset="100%" stop-color="#102020"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#b)"/>
  <rect x="48" y="36" width="704" height="528" fill="none" stroke="#D4AF37" stroke-opacity="0.4" stroke-width="1"/>
  <text x="400" y="290" text-anchor="middle" font-family="Georgia, serif" font-size="68" font-weight="700" fill="#D4AF37" letter-spacing="10">AV</text>
  <text x="400" y="340" text-anchor="middle" font-family="Georgia, serif" font-size="16" letter-spacing="4" fill="#FFFFFF" font-weight="600">ATTII VERSE</text>
  <text x="400" y="372" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" letter-spacing="3" fill="#E5C76B">${safe}</text>
</svg>`
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

function Img({
  src,
  alt = '',
  className = '',
  aspect,
  priority = false,
  sizes,
  srcSet,
  width,
  height,
  ...rest
}) {
  const [failed, setFailed] = useState(false)

  if (src === null || src === undefined || src === '' || failed) {
    const dsv = fallbackSVG(alt)
    return (
      <div className={`img ${className}`} style={aspect ? { aspectRatio: aspect } : undefined} {...rest}>
        <img
          className="img__el"
          src={dsv}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
        />
      </div>
    )
  }

  return (
    <div className={`img ${className}`} style={aspect ? { aspectRatio: aspect } : undefined} {...rest}>
      <img
        className="img__el"
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        onError={() => setFailed(true)}
      />
    </div>
  )
}

export default Img