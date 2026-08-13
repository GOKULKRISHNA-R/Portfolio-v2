import Reveal from '../components/Reveal'

// Skills and Education share one two-column band at the end of the page.
export default function Closing({ skills, education }) {
  if (!skills?.groups?.length && !education?.items?.length) return null

  return (
    <section className="section section--tight">
      <Reveal className="closing__grid">
        {skills?.groups?.length > 0 && (
          <div className="closing__col">
            <div className="section-head">
              <h2 className="section-head__title">{skills.title}</h2>
            </div>
            <dl className="skills__list">
              {skills.groups.map((group) => (
                <div key={group.label}>
                  <dt className="skills__label">{group.label}</dt>
                  <dd className="skills__value">{group.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {education?.items?.length > 0 && (
          <div className="closing__col">
            <div className="section-head">
              <h2 className="section-head__title">{education.title}</h2>
            </div>
            <div className="education__list">
              {education.items.map((item) => (
                <div key={item.degree}>
                  <h3 className="education__degree">{item.degree}</h3>
                  <p className="education__meta">{item.meta}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Reveal>
    </section>
  )
}
