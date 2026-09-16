import { useEffect } from 'react'
import { SITE } from '../../config/site.js'

// Lightweight SEO manager: sets document title + meta description
// per page, preserving global defaults otherwise.
const SITE_URL = 'https://mohan-10-15.github.io/atti-verse'
const OG_IMAGE = `${SITE_URL}/images/og-image.jpg`

function Seo({
  title,
  description,
  image = OG_IMAGE,
  type = 'website',
  path = '/',
}) {
  useEffect(() => {
    document.title = title || SITE.description

    const setMeta = (attr, key, content) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      if (content) el.setAttribute('content', content)
    }

    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:image', image)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:url', `${SITE.url}${path}`)
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', image)

    const canonicallink = document.head.querySelector('link[rel="canonical"]')
    if (canonicallink) {
      canonicallink.setAttribute('href', `${SITE.url}${path === '/' ? '' : path}`)
    }
  }, [title, description, image, type, path])

  return null
}

export default Seo