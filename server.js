import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
app.use(express.json())

// CORS: allow frontend origin via env CORS_ORIGIN (default allow all)
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }))

const SMTP_HOST = process.env.SMTP_HOST
const SMTP_PORT = Number(process.env.SMTP_PORT || 587)
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS
const EMAIL_TO = process.env.EMAIL_TO || 'ercent.tannius@binus.ac.id'

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
})

// Verify SMTP connection at startup so logs show auth/connect errors early
transporter.verify()
  .then(() => console.log('SMTP transporter ready'))
  .catch((err) => console.error('SMTP verify failed:', err && err.message ? err.message : err))

app.post('/api/contact', async (req, res) => {
  const { name = '', email = '', message = '' } = req.body

  if (!message.trim()) {
    return res.status(400).json({ error: 'Pesan harus diisi.' })
  }

  if (!email.trim()) {
    return res.status(400).json({ error: 'Email harus diisi.' })
  }

  const mailOptions = {
    from: `${name || 'Pengunjung Website'} <${SMTP_USER}>`,
    to: EMAIL_TO,
    subject: `Contact from ${name || email}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.status(200).json({ message: 'Pesan dikirim.' })
  } catch (error) {
    // Log detailed error for debugging (Railway logs)
    console.error('Email error:', error && error.message ? error.message : error)
    if (error && error.response) console.error('SMTP response:', error.response)
    if (error && error.stack) console.error(error.stack)
    return res.status(500).json({ error: 'Gagal mengirim email.' })
  }
})

// simple root route for quick deployment/health check
app.get('/', (req, res) => {
  res.send('Backend OK')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})
