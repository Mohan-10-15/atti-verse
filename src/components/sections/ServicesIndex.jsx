import { useState } from 'react'
import { Link } from 'react-router-dom'
import Eyebrow from './../ui/Eyebrow.jsx'
import SectionHeading from './../ui/SectionHeading.jsx'
import Img from './../ui/Img.jsx'
import { HOME_SERVICES } from '../../data/services.js'

function ServicesIndex() {
  const [active, setActive] = useState(0)

  return (
    <section className="section section--dark services-index">
      <div className="container">
        <SectionHeading
          onDark
          index="03"
          eyebrow="What We Do"
          title="Six disciplines, one ecosystem."
        />

        <div className="services-index__layout">
          <ul className="services-index__list" onMouseLeave={() => setActive(0)}>
            {HOME_SERVICES.map((service, i) => (
              <li key={service.id}>
                <Link
                  to={`/services/${service.slug}`}
                  className={`services-index__row ${active === i ? 'services-index__row--is-active' : ''}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span className="services-index__num">{service.number}</span>
                  <span className="services-index__body">
                    <span className="services-index__title">{service.title}</span>
                    <span className="services-index__caps">{service.summary}</span>
                  </span>
                  <span className="services-index__arrow" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="services-index__preview" aria-hidden="true">
            {HOME_SERVICES.map((service, i) => (
              <Img
                key={service.id}
                src={service.image}
                alt=""
                className={`services-index__shot ${active === i ? 'is-active' : ''}`}
              />
            ))}
          </div>
        </div>

        <p className="services-index__foot">
          <Link to="/services" className="text-link text-link--dark">View all services</Link>
        </p>
      </div>
    </section>
  )
}

export default ServicesIndex