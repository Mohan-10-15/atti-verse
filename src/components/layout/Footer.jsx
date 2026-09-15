import { Link } from 'react-router-dom'
import { NAV_LINKS, SITE, SOCIAL, CONTACT_PUBLISHED, FOOTER_EXTRA_LINKS } from '../../config/site.js'
import Icon from '../ui/Icon.jsx'

const isReadyUrl = (href) => typeof href === 'string' && /\bhttps?:\/\//i.test(href) && !/(YOUR_)|(INSTAGRAM_URL)|(YOUTUBE_URL)|(LINKEDIN_URL)|PLACEHOLDER/i.test(href)

const socials = [
  { label: 'Instagram', href: SOCIAL.instagram, icon: 'instagram' },
  { label: 'YouTube', href: SOCIAL.youtube, icon: 'youtube' },
  { label: 'LinkedIn', href: SOCIAL.linkedin, icon: 'linkedin' },
].filter((s) => isReadyUrl(s.href))

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="footer__brand">
            <div>
              <Link to="/" className="footer__brand-name">
                ATTII VERSE
              </Link>
              <p className="footer__tagline">Our Talent. Our Verse.</p>
              <p className="footer__brand-line">{SITE.brandLine}</p>
              <p className="footer__desc">{SITE.description}</p>
            </div>
          </div>
            <div className="footer__socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  className="footer__social"
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="footer__heading">Explore</h3>
            <ul className="footer__links">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link className="footer__link" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer extras">
            <h3 className="footer__heading">More</h3>
            <ul className="footer__links">
              {FOOTER_EXTRA_LINKS.map((link) => (
                <li key={link.to}>
                  <Link className="footer__link" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="footer__heading">Get in Touch</h3>
            <ul className="footer__contact">
              {CONTACT_PUBLISHED ? (
                <>
                  <li>
                    <a href={`mailto:${SITE.email}`} className="footer__link">
                      {SITE.email}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="footer__link">
                      {SITE.phone}
                    </a>
                  </li>
                  {SITE.address && <li>{SITE.address}</li>}
                </>
              ) : (
                <li className="footer__link">Contact details coming soon.</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <p>
            © {year} {SITE.fullName}. All Rights Reserved.
          </p>
          <p>
            Crafted with <span aria-hidden="true" style={{ color: 'var(--gold)' }}>✦</span> in the ATTII VERSE ecosystem.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer