import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [status, setStatus] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const API_URL = "https://script.google.com/macros/s/AKfycbzm9DTT7_cmrj3sYKuuro_PBiOK-C6lpOCqJo-0dH86bccBaFE4C8h3oQycO4K2q8iaGA/exec"

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setStatus('')

    const form = e.target
    const name = form.name.value || ''
    const email = form.email.value || ''
    const message = form.message.value || ''

    try {
  const formData = new URLSearchParams()
  formData.append('name', name)
  formData.append('email', email)
  formData.append('message', message)

  const response = await fetch(API_URL, {
    method: 'POST',
    body: formData
  })

  const result = await response.text()

  if (!response.ok) {
    throw new Error(result || 'Gagal mengirim pesan')
  }

  setStatus('Pesan berhasil dikirim. Terima kasih!')
  form.reset()
} catch (error) {
  console.error(error)
  setStatus('Terjadi kesalahan. Silakan coba lagi nanti.')
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
              <input type="text" name="name" placeholder="Nama" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="message" placeholder="Pesan" rows="4" required />

              <button type="submit" disabled={submitting}>
                {submitting ? 'Mengirim...' : 'Kirim Pesan'}
              </button>

              {status && <div className="contact-status">{status}</div>}
            </form>
          </div>

          <div className="contact-info-column reveal-item" style={{ transitionDelay: '120ms' }}>
            
            <div className="contact-card">
              <h4 className="contact-title">🐱 GitHub</h4>
              <a href="https://github.com/ercenttannius123" target="_blank" rel="noreferrer">
                github.com/ercenttannius123
              </a>
            </div>

            <div className="contact-card">
              <h4 className="contact-title">✉️ Email</h4>
              <a href="mailto:ercent.tannius@binus.ac.id">
                ercent.tannius@binus.ac.id
              </a>
            </div>

            <div className="contact-card">
              <h4 className="contact-title">🔗 LinkedIn</h4>
              <a href="https://www.linkedin.com/in/ercent-tannius-654751326/" target="_blank" rel="noreferrer">
                linkedin.com/in/ercent-tannius
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

