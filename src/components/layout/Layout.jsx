import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollToTop.jsx'

function Layout() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main key={location.pathname} className="page-enter">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout