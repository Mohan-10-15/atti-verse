import React, { Suspense, lazy } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'))
const Work = lazy(() => import('./pages/Work.jsx'))
const Events = lazy(() => import('./pages/Events.jsx'))
const EventDetail = lazy(() => import('./pages/EventDetail.jsx'))
const Productions = lazy(() => import('./pages/Productions.jsx'))
const Team = lazy(() => import('./pages/Team.jsx'))
const Achievements = lazy(() => import('./pages/Achievements.jsx'))
const Gallery = lazy(() => import('./pages/Gallery.jsx'))
const Upcoming = lazy(() => import('./pages/Upcoming.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))

function PageLoader() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '60vh', color: 'var(--gold)' }}>
      <p style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Loading...</p>
    </div>
  )
}

function NotFound() {
  return (
    <section className="page-header">
      <div className="container page-header__inner">
        <h1 className="page-header__title">Page Not Found</h1>
        <p className="page-header__sub">The page you are looking for does not exist.</p>
        <Link to="/" className="btn btn--gold mt-md" style={{ alignSelf: 'flex-start' }}>
          <span>Back to Home</span>
        </Link>
      </div>
    </section>
  )
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) {
      return (
        <section className="page-header">
          <div className="container page-header__inner">
            <h1 className="page-header__title">Something Went Wrong</h1>
            <p className="page-header__sub">An unexpected error occurred. Please try refreshing the page.</p>
            <Link to="/" className="btn btn--gold mt-md" style={{ alignSelf: 'flex-start' }}>
              <span>Back to Home</span>
            </Link>
          </div>
        </section>
      )
    }
    return this.props.children
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:slug" element={<ServiceDetail />} />
            <Route path="work" element={<Work />} />
            <Route path="events" element={<Events />} />
            <Route path="events/:slug" element={<EventDetail />} />
            <Route path="productions" element={<Productions />} />
            <Route path="team" element={<Team />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="upcoming" element={<Upcoming />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
