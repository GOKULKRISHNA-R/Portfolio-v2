import { Fragment } from 'react'
import RichText from '../components/RichText'
import Link from '../components/Link'

export default function Hero({ data }) {
  if (!data) return null

  const {
    eyebrowLeft,
    eyebrowRight,
    nameLines = [],
    roleLines = [],
    intro,
    stats = [],
    links = [],
  } = data

  return (
    <section className="hero">
      <div className="hero__row hero__eyebrow">
        <span>{eyebrowLeft}</span>
        <span>{eyebrowRight}</span>
      </div>

      <div className="hero__row hero__main">
        <h1 className="hero__name">
          {nameLines.map((line, i) => (
            <Fragment key={line}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h1>

        <div className="hero__lede">
          <p className="hero__role">
            {roleLines.map((line, i) => (
              <Fragment key={line}>
                {i > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </p>
          <p className="hero__intro">
            <RichText>{intro}</RichText>
          </p>
        </div>
      </div>

      <div className="hero__row hero__foot">
        <div className="stats">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat__value">{stat.value}</span>
              <span className="stat__label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="hero__links">
          {links.map((link) => (
            <Link key={link.href} {...link} />
          ))}
        </div>
      </div>
    </section>
  )
}
