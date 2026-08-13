export default function Link({ href, label, external, ...rest }) {
  const target = external ? { target: '_blank', rel: 'noreferrer' } : {}
  return (
    <a href={href} {...target} {...rest}>
      {label}
    </a>
  )
}
