import { useEffect, useRef } from 'react'

// One shared observer for the whole page, so the stagger reads as a group
// the way it does in the original static page.
let observer = null

function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return
        const delay = Math.min(i, 4) * 70
        setTimeout(() => entry.target.classList.add('is-in'), delay)
        observer.unobserve(entry.target)
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
  )
  return observer
}

export default function Reveal({ as: Tag = 'div', children, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-in')
      return
    }

    const io = getObserver()
    io.observe(el)
    return () => io.unobserve(el)
  }, [])

  return (
    <Tag ref={ref} data-reveal {...rest}>
      {children}
    </Tag>
  )
}
