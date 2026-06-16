import 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'

const app = express()
app.use(express.json())

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
    console.error('Email error:', error)
    return res.status(500).json({ error: 'Gagal mengirim email.' })
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})
