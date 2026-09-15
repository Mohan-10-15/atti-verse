import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import Img from './Img.jsx'

function PageHeader({ eyebrow, title, subtitle, crumb, image }) {
  return (
    <header className="page-header">
      {image ? (
        <>
          <Img src={image} alt="" className="page-header__bg" priority />
          <div className="page-header__overlay" />
        </>
      ) : null}
      <div className="container page-header__inner">
        <Reveal dir="up" delay={60}>
          <nav className="page-header__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">HOME</Link>
            <span>/</span>
            <span>{crumb || eyebrow || 'PAGE'}</span>
          </nav>
        </Reveal>
        <Reveal dir="up" delay={140}>
          <h1 className="page-header__title">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal dir="up" delay={220}>
            <p className="page-header__sub">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </header>
  )
}

export default PageHeader