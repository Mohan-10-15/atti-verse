import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import TeamCard from '../components/cards/TeamCard.jsx'
import WhatMeans from '../components/sections/WhatMeans.jsx'
import OrganizationTree from '../components/sections/OrganizationTree.jsx'
import FutureDirection from '../components/sections/FutureDirection.jsx'
import WhyWorkWithUs from '../components/sections/WhyWorkWithUs.jsx'
import LegalFoundation from '../components/sections/LegalFoundation.jsx'
import { IMAGES } from '../config/images.js'
import { LEADERSHIP } from '../data/team.js'
import { MISSION_ITEMS, VALUES } from '../data/organization.js'

const TIMELINE = [
  {
    title: 'The Beginning',
    desc: 'ATTII VERSE began as a college-based creative initiative built around talent and entertainment.',
  },
  {
    title: 'Building the Team',
    desc: 'Performers, creators and organizers came together to form a stronger creative community.',
  },
  {
    title: 'Formalizing the Organization',
    desc: 'Leadership, divisions, governance and operational systems were established.',
  },
  {
    title: 'Events & Productions',
    desc: 'The organization expanded through cultural participation, performances, media and creative activities.',
  },
  {
    title: 'Registrations & Structure',
    desc: 'Partnership, MSME / Udyam and governance foundations were put in place.',
  },
  {
    title: 'Growth',
    desc: 'ATTII VERSE continues to build its portfolio, network, collaborations and digital presence.',
  },
]

function WhoWeAre() {
  return (
    <section className="section">
      <div className="container grid-2">
        <div>
          <SectionHeading eyebrow="Who We Are" title={<>A MULTI-DISCIPLINARY <span className="text-gold">CREATIVE ORGANIZATION</span></>} />
          <Reveal dir="up" delay={100}>
            <p style={{ color: 'var(--text-muted)' }}>
              {`ATTII VERSE Entertainment & Productions is a multi-disciplinary creative organization working
              across entertainment, media production, event management and creative services.`}
            </p>
          </Reveal>
          <Reveal dir="up" delay={200}>
            <p style={{ color: 'var(--text-muted)', marginTop: '1.1rem' }}>
              What began as a creative initiative has evolved into a structured organization built
              around talented performers, creators, organizers and production teams.
            </p>
          </Reveal>
          <Reveal dir="up" delay={300}>
            <p style={{ color: 'var(--text-muted)', marginTop: '1.1rem' }}>
              We are growing, but we are serious — and the way we organize, coordinate and deliver
              reflects that.
            </p>
          </Reveal>
        </div>
        <Reveal dir="right" delay={150}>
          <Img
            src={IMAGES.aboutHome}
            alt="The people and creative work of ATTII VERSE"
            aspect="4 / 3"
            style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-soft)' }}
          />
        </Reveal>
      </div>
    </section>
  )
}

function OurStory() {
  return (
    <section className="section section--off-white">
      <div className="container">
        <SectionHeading center eyebrow="Our Story" title="THE JOURNEY OF THE VERSE" />
        <div className="timeline" style={{ marginTop: '3rem' }}>
          {TIMELINE.map((item, i) => (
            <Reveal key={item.title} dir="up" delay={i * 60}>
              <article className="timeline__item">
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__desc">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Vision() {
  return (
    <section className="section section--dark">
      <div className="container grid-2">
        <div>
          <SectionHeading
            dark
            eyebrow="Vision"
            title={<>A RECOGNIZED PLATFORM FOR <span className="text-gold">TALENT &amp; CREATION</span></>}
          />
        </div>
        <Reveal dir="left" delay={120}>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.05rem' }}>
            ATTII VERSE aims to become a recognized entertainment and production platform that
            nurtures talent, creates opportunities, expands cultural expression and builds
            professional influence.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', marginTop: '1.1rem', fontSize: '1.05rem' }}>
            The direction of that growth — across Tamil Nadu, large-scale entertainment, film and
            media, talent management and industry collaborations — is detailed in the Future
            Direction section below. It represents our ambition, not yet our achievement.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function Mission() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Mission"
          title="WHAT WE ARE BUILT TO DO"
          subtitle="Eight commitments that guide how ATTII VERSE organizes, creates and grows."
        />
        <div className="mission-num" style={{ marginTop: '2.5rem' }}>
          {MISSION_ITEMS.map((text, i) => (
            <Reveal key={text} dir="up" delay={(i % 2) * 80}>
              <article className="mission-num__item">
                <span className="mission-num__num">{String(i + 1).padStart(2, '0')}</span>
                <p className="mission-num__text">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CoreValues() {
  return (
    <section className="section section--light-green">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Values"
          title="THE PRINCIPLES WE PERFORM BY"
          subtitle="Sixteen principles held together by one culture."
        />
        <div className="values-editorial" style={{ marginTop: '1.5rem' }}>
          {VALUES.map((v, i) => (
            <Reveal key={v} dir="up" delay={(i % 4) * 60}>
              <span className="values-editorial__item">{v}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Structure() {
  return (
    <section className="section section--off-white">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Organizational Structure"
          title={<>BUILT WITH STRUCTURE.<br /><span className="text-gold">DRIVEN BY CREATIVITY.</span></>}
          subtitle="Executive leadership and governance oversee five dedicated divisions."
        />
        <OrganizationTree />
      </div>
    </section>
  )
}

function Leadership() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Leadership"
          title="THE PEOPLE BEHIND THE VISION"
          subtitle="The founders who set the direction, the standards and the culture of ATTII VERSE."
        />
        <div className="grid-4" style={{ marginTop: '2.5rem' }}>
          {LEADERSHIP.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <>
      <Seo
        title="About ATTII VERSE | Talent, Creativity & Opportunity"
        description="ATTII VERSE Entertainment & Productions is a multi-disciplinary creative organization working across entertainment, media production, event management and creative services."
        path="/about"
      />
      <PageHeader
        eyebrow="About Us"
        crumb="About"
        title="ABOUT ATTII VERSE"
        subtitle="A universe built around talent, creativity and opportunity."
      />
      <WhoWeAre />
      <OurStory />
      <WhatMeans />
      <Vision />
      <Mission />
      <CoreValues />
      <Structure />
      <Leadership />
      <LegalFoundation />
      <WhyWorkWithUs />
      <FutureDirection eyebrow="Growth Direction" />
      <CTASection
        copy={
          <>
            Curious about how we create? Work with us on your next event, production or creative
            project.
          </>
        }
      />
    </>
  )
}

export default About