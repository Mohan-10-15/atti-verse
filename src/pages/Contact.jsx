import { useState } from 'react'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Icon from '../components/ui/Icon.jsx'
import Img from '../components/ui/Img.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import InstitutionalCTA from '../components/sections/InstitutionalCTA.jsx'
import { IMAGES } from '../config/images.js'
import { SITE, CONTACT_PUBLISHED } from '../config/site.js'

const PROJECT_TYPES = [
  'Entertainment',
  'Event Management',
  'Photography',
  'Videography',
  'Video Production',
  'Creative Design',
  'Talent / Performance',
  'College Event',
  'Brand Collaboration',
  'Other',
]

const CATEGORIES = [
  {
    icon: 'calendar',
    title: 'Event Enquiries',
    desc: 'For entertainment and event management requirements.',
    image: IMAGES.services.eventManagement,
  },
  {
    icon: 'camera',
    title: 'Production Enquiries',
    desc: 'For photography, videography and creative production.',
    image: IMAGES.services.mediaProduction,
  },
  {
    icon: 'handshake',
    title: 'Collaborations',
    desc: 'For brands, institutions, creators and organizations.',
    image: IMAGES.work.creative,
  },
  {
    icon: 'mic',
    title: 'Talent / Performance',
    desc: 'For performers, creators and creative professionals.',
    image: IMAGES.services.talentCollaboration,
  },
]

const initial = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  projectType: '',
  preferredDate: '',
  message: '',
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email.'
  if (!values.projectType) errors.projectType = 'Please select a project type.'
  if (!values.message.trim()) errors.message = 'Please tell us a little about your project.'
  return errors
}

function Contact() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const submit = (e) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSent(true)
    }
  }

  return (
    <>
      <Seo
        title="Contact | Let's Work Together — ATTII VERSE"
        description="Have an event, production, creative project or collaboration in mind? Contact ATTII VERSE Entertainment & Productions."
        path="/contact"
      />
      <PageHeader
        eyebrow="Contact"
        crumb="Contact"
        title="LET'S WORK TOGETHER"
        subtitle="Have an event, production, creative project or collaboration in mind? Tell us what you're building. Let's create something memorable together."
      />

      <InstitutionalCTA />

      <section className="section">
        <div className="container contact-grid">
          <div>
            <Reveal dir="up">
              <span className="eyebrow">How To Reach Us</span>
              <h2 className="section-title" style={{ marginTop: '0.8rem' }}>
                THE RIGHT DOOR FOR EVERY PROJECT
              </h2>
            </Reveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
              {CATEGORIES.map((c, i) => (
                <Reveal key={c.title} dir="up" delay={i * 80}>
                  <div className="contact-cat">
                    <div className="contact-cat__media">
                      <Img src={c.image} alt={c.title} />
                      <span className="contact-cat__icon">
                        <Icon name={c.icon} size={19} />
                      </span>
                    </div>
                    <div className="contact-cat__body">
                      <h3 className="contact-cat__title">{c.title}</h3>
                      <p className="contact-cat__desc">{c.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal dir="up" delay={200}>
              <div className="mt-lg" style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '1.2rem' }}>
                <p style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--gold-soft)' }}>
                  Contact Details
                </p>
                {CONTACT_PUBLISHED ? (
                  <>
                    <p className="mt-sm" style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                      Email: <a href={`mailto:${SITE.email}`} style={{ color: 'var(--gold)' }}>{SITE.email}</a>
                    </p>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                      Phone: {SITE.phone}
                    </p>
                    {SITE.address && (
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                        Address: {SITE.address}
                      </p>
                    )}
                  </>
                ) : (
                  <p className="mt-sm" style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                    Official contact details will be published here soon.
                  </p>
                )}
              </div>
            </Reveal>
          </div>

          <Reveal dir="up" delay={120}>
            <div className="form-card">
              {sent ? (
                <div className="form-success">
                  <span className="form-success__mark">
                    <Icon name="check" size={26} />
                  </span>
                  <h3 className="section-title" style={{ fontSize: '1.6rem' }}>
                    ENQUIRY RECEIVED
                  </h3>
                  <p style={{ color: 'var(--text-muted)', maxWidth: '40ch' }}>
                    Thank you for reaching out. Your enquiry has been recorded and our team will respond
                    once the official contact channels are live.
                  </p>
                  <button type="button" className="btn btn--gold" onClick={() => { setSent(false); setValues(initial) }}>
                    <span>Send Another Enquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className="form-grid">
                    <div className={`field ${errors.name ? 'is-invalid' : ''}`}>
                      <label htmlFor="c-name">Name *</label>
                      <input id="c-name" name="name" placeholder="Your name" value={values.name} onChange={set('name')} autoComplete="name" />
                      {errors.name && <p className="error-text">{errors.name}</p>}
                    </div>
                    <div className={`field ${errors.email ? 'is-invalid' : ''}`}>
                      <label htmlFor="c-email">Email *</label>
                      <input id="c-email" name="email" type="email" placeholder="you@email.com" value={values.email} onChange={set('email')} autoComplete="email" />
                      {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>
                    <div className="field">
                      <label htmlFor="c-phone">Phone</label>
                      <input id="c-phone" name="phone" placeholder="+91 — — —" value={values.phone} onChange={set('phone')} autoComplete="tel" />
                    </div>
                    <div className="field">
                      <label htmlFor="c-org">Organization / Institution</label>
                      <input id="c-org" name="organization" placeholder="Institution / brand / company" value={values.organization} onChange={set('organization')} />
                    </div>
                    <div className={`field ${errors.projectType ? 'is-invalid' : ''}`}>
                      <label htmlFor="c-type">Project Type *</label>
                      <select id="c-type" name="projectType" value={values.projectType} onChange={set('projectType')}>
                        <option value="" disabled>
                          Select a project type
                        </option>
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      {errors.projectType && <p className="error-text">{errors.projectType}</p>}
                    </div>
                    <div className="field">
                      <label htmlFor="c-date">Preferred Date</label>
                      <input id="c-date" name="preferredDate" type="date" value={values.preferredDate} onChange={set('preferredDate')} />
                    </div>
                    <div className={`field span-2 ${errors.message ? 'is-invalid' : ''}`}>
                      <label htmlFor="c-msg">Message *</label>
                      <textarea
                        id="c-msg"
                        name="message"
                        placeholder="Tell us about your event, production or idea..."
                        value={values.message}
                        onChange={set('message')}
                      />
                      {errors.message && <p className="error-text">{errors.message}</p>}
                    </div>
                  </div>
                  <button type="submit" className="btn btn--gold" style={{ width: '100%', marginTop: '1.4rem' }}>
                    <span>Send Enquiry</span>
                    <Icon name="send" size={16} className="btn--icon-arrow" />
                  </button>
                  <p className="form-note">
                    Fields marked * are required. Official contact details will be published here when available.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="READY WHEN YOU ARE."
        copy={
          <>
            No matter where your idea starts, ATTII VERSE can help take it to the stage, the screen —
            or both.
          </>
        }
      />
    </>
  )
}

export default Contact