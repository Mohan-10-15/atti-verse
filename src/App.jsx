import { Routes, Route, Link } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import Work from './pages/Work.jsx'
import Events from './pages/Events.jsx'
import EventDetail from './pages/EventDetail.jsx'
import Productions from './pages/Productions.jsx'
import Team from './pages/Team.jsx'
import Achievements from './pages/Achievements.jsx'
import Gallery from './pages/Gallery.jsx'
import Upcoming from './pages/Upcoming.jsx'
import Contact from './pages/Contact.jsx'

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

function App() {
  return (
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
  )
}

export default App