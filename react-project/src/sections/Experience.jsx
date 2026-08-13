import { Fragment } from 'react'
import Reveal from '../components/Reveal'
import RichText from '../components/RichText'
import SectionHead from '../components/SectionHead'

function Period({ item }) {
  const lines = item.periodLines ?? (item.period ? [item.period] : [])
  return (
    <p className="entry__period">
      {lines.map((line, i) => (
        <Fragment key={line}>
          {i > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </p>
  )
}

export default function Experience({ data }) {
  if (!data?.items?.length) return null

  return (
    <section className="section">
      <div className="section__inner experience__inner">
        <SectionHead title={data.title} meta={data.meta} />

        {data.items.map((item) => (
          <Reveal
            as="article"
            className="entry"
            key={`${item.role}-${item.company}`}
          >
            <Period item={item} />

            <div className="entry__body">
              <div>
                <h3 className="entry__role">{item.role}</h3>
                {item.company && <p className="entry__company">{item.company}</p>}
              </div>

              {item.bullets?.length > 0 && (
                <ul className="entry__list">
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>
                      <RichText>{bullet}</RichText>
                    </li>
                  ))}
                </ul>
              )}

              {item.description && (
                <p className="entry__text">
                  <RichText>{item.description}</RichText>
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
