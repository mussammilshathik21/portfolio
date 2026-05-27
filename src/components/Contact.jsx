import { useState } from 'react'
import { IoIosMail } from 'react-icons/io'
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import './Contact.css'

const LINKS = [
  { icon: <IoIosMail />,  label: 'mussammilshathik2@gmail.com', href: 'mailto:mussammilshathik2@gmail.com' },
  { icon: <FaPhone />,    label: '+91 88703 94593',              href: 'tel:+918870394593' },
  { icon: <FaGithub />,   label: 'github/mussammilshathik21',    href: 'https://github.com/mussammilshathik21', ext: true },
  { icon: <FaLinkedin />, label: 'LinkedIn Profile',             href: 'https://www.linkedin.com/in/mussammil-shathik-033769404/', ext: true },
]

export default function Contact() {
  const [result,  setResult]  = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true); setResult('Sending…')
    const fd = new FormData(e.target)
    fd.append('access_key', '751a8c56-43da-4b28-8ff0-be7c6f09e80d')
    try {
      const res  = await fetch('https://api.web3forms.com/submit', { method:'POST', body:fd })
      const data = await res.json()
      setResult(data.success ? '✅ Message sent!' : '❌ Something went wrong.')
      if (data.success) e.target.reset()
    } catch {
      setResult('❌ Network error. Please email directly.')
    }
    setLoading(false)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-label">Contact</div>
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-info-title">Let's work together</p>
            <p className="contact-info-sub">
              Open to freelance projects and full-time roles. Drop me a message
              and I'll get back to you promptly.
            </p>
            <div className="contact-links">
              {LINKS.map(l => (
                <a key={l.label} href={l.href} className="contact-row"
                   {...(l.ext ? { target:'_blank', rel:'noreferrer' } : {})}>
                  <span className="contact-icon">{l.icon}</span>
                  <span>{l.label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form-wrap">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="cname">Your Name</label>
                <input id="cname" type="text" name="name" placeholder="John Doe" required minLength="3" />
              </div>
              <div className="form-group">
                <label htmlFor="cemail">Email Address</label>
                <input id="cemail" type="email" name="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="cmsg">Message</label>
                <textarea id="cmsg" name="message" placeholder="Tell me about your project…" required />
              </div>
              <button type="submit" className="btn-mint submit-btn" disabled={loading}>
                {loading ? '⏳ Sending…' : '✉ Send Message'}
              </button>
              {result && <p className="form-result">{result}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
