import Reveal from '../components/Reveal'
import RichText from '../components/RichText'
import SectionHead from '../components/SectionHead'
import Link from '../components/Link'

export default function Research({ data }) {
  if (!data?.items?.length) return null

  return (
    <section className="section surface-dark">
      <div className="section__inner research__inner">
        <SectionHead title={data.title} meta={data.meta} />

        <div className="research__grid">
          {data.items.map((paper) => (
            <Reveal as="article" className="paper" key={paper.title}>
              {paper.meta && <p className="paper__meta">{paper.meta}</p>}
              <h3 className="paper__title">{paper.title}</h3>
              <p className="paper__body">
                <RichText>{paper.description}</RichText>
              </p>

              {paper.tags?.length > 0 && (
                <div className="tags">
                  {paper.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {paper.link && (
                <Link className="paper__link" external {...paper.link} />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
