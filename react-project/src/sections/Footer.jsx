import Link from '../components/Link'

export default function Footer({ data }) {
  if (!data) return null

  return (
    <footer className="footer surface-dark">
      <div className="footer__inner">
        <p className="footer__statement">{data.statement}</p>

        <div className="footer__bar">
          {data.email && <Link {...data.email} />}
          <div className="footer__links">
            {data.links?.map((link) => (
              <Link key={link.href} {...link} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
