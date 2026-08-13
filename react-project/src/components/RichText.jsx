import { Fragment } from 'react'

// Minimal inline markup so the JSON stays readable and editable:
//   **text** -> <strong>   *text* -> <em>
const PATTERN = /(\*\*[^*]+\*\*|\*[^*]+\*)/g

export default function RichText({ children }) {
  if (typeof children !== 'string') return children ?? null

  const parts = children.split(PATTERN).filter(Boolean)

  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}
