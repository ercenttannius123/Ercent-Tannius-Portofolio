import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [status, setStatus] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const API_URL = import.meta.env.VITE_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:3000' : 'https://alluring-creativity-production.up.railway.app')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus('')

    const form = e.target
    const name = form.name.value || ''
    const email = form.email.value || ''
    const message = form.message.value || ''

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!response.ok) {
        throw new Error('Gagal mengirim pesan')
      }

      setStatus('Pesan berhasil dikirim. Terima kasih!')
      form.reset()
    } catch (error) {
      setStatus('Terjadi kesalahan. Silakan coba lagi nanti.')
      console.error(error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="contact-inner">
        <div className="contact-two-column">
          <div className="contact-header">
            <div className="section-label">Contact</div>
            <div className="section-title">Hubungi Saya</div>
          </div>
          <div className="contact-form-card reveal-item" style={{ transitionDelay: '60ms' }}>
          <h4 className="contact-title">
            <span className="contact-icon">📝</span>
            Kirim Pesan
          </h4>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nama" />
            <input type="email" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Pesan" rows="4"></textarea>
            <button type="submit" disabled={submitting}>
              {submitting ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
            {status && <div className="contact-status">{status}</div>}
          </form>
        </div>

        <div className="contact-info-column reveal-item" style={{ transitionDelay: '120ms' }}>
          <div className="contact-card">
            <h4 className="contact-title">
              <span className="contact-icon">🐱</span>
              GitHub
            </h4>
            <a href="https://github.com/ercenttannius123" target="_blank" rel="noreferrer">github.com/ercenttannius123</a>
          </div>

          <div className="contact-card">
            <h4 className="contact-title">
              <span className="contact-icon">✉️</span>
              Email
            </h4>
            <div className="contact-email-row">
              <a href="mailto:ercent.tannius@binus.ac.id">ercent.tannius@binus.ac.id</a>
              <button type="button" className="copy-btn" onClick={() => navigator.clipboard.writeText('ercent.tannius@binus.ac.id')} title="Salin alamat email">
                <span className="copy-icon">📋</span>
                <span>Salin</span>
              </button>
            </div>
            <div className="contact-email-links">
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('ercent.tannius@binus.ac.id')}`} target="_blank" rel="noreferrer" title="Buka di Gmail">Gmail</a>
              <a href={`https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent('ercent.tannius@binus.ac.id')}`} target="_blank" rel="noreferrer" title="Buka di Outlook">Outlook</a>
            </div>
          </div>

          <div className="contact-card">
            <h4 className="contact-title">
              <span className="contact-icon">🔗</span>
              LinkedIn
            </h4>
            <a href="https://www.linkedin.com/in/ercent-tannius-654751326/" target="_blank" rel="noreferrer">linkedin.com/in/ercent-tannius-654751326/</a>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
