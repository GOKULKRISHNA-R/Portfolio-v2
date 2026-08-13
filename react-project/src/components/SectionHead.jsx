import Reveal from './Reveal'

export default function SectionHead({ title, meta }) {
  return (
    <Reveal className="section-head">
      <h2 className="section-head__title">{title}</h2>
      {meta && <span className="section-head__meta">{meta}</span>}
    </Reveal>
  )
}
