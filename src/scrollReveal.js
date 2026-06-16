export default function initScrollReveal() {
  if (typeof window === 'undefined') return

  const supportsIO = !!window.IntersectionObserver

  const reveals = Array.from(document.querySelectorAll('.reveal, .reveal-item'))
  if (!reveals.length) return

  if (!supportsIO) {
    // fallback: immediately show all
    reveals.forEach((el) => el.classList.add('in-view'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    },
    {
      threshold: 0.12,
    }
  )

  reveals.forEach((el) => observer.observe(el))

  // ensure elements already visible become in-view immediately
  requestAnimationFrame(() => {
    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) el.classList.add('in-view')
    })
  })
}

export { initScrollReveal }
