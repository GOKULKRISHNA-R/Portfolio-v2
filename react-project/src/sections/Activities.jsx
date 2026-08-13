import Reveal from '../components/Reveal'
import RichText from '../components/RichText'
import SectionHead from '../components/SectionHead'

export default function Activities({ data }) {
  if (!data?.items?.length) return null

  return (
    <section className="section section--tight">
      <div className="section__inner activities__inner">
        <SectionHead title={data.title} meta={data.meta} />

        <Reveal className="activities__grid">
          {data.items.map((item) => (
            <div className="activity" key={item.title}>
              <h3 className="activity__title">{item.title}</h3>
              <p className="activity__text">
                <RichText>{item.description}</RichText>
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
