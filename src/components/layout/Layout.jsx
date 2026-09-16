import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollToTop.jsx'

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="page-enter">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout