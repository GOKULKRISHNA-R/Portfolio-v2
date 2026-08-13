import Reveal from '../components/Reveal'
import RichText from '../components/RichText'
import SectionHead from '../components/SectionHead'

export default function Projects({ data }) {
  if (!data?.items?.length) return null

  return (
    <section className="section section--tight">
      <div className="section__inner projects__inner">
        <SectionHead title={data.title} meta={data.meta} />

        {data.items.map((project) => (
          <Reveal as="article" className="entry" key={project.title}>
            <p className="entry__period">{project.period}</p>
            <div className="project__body">
              <h3 className="project__title">{project.title}</h3>
              <p className="project__text">
                <RichText>{project.description}</RichText>
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
