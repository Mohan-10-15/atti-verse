import { useEffect } from 'react'
import { SITE } from '../../config/site.js'

// Lightweight SEO manager: sets document title + meta description
// per page, preserving global defaults otherwise.
const OG_IMAGE = `${import.meta.env.BASE_URL}images/og-image.jpg`

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
  }, [title, description, image, type, path])

  return null
}

export default Seo