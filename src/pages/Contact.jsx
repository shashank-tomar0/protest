import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  { q: 'What is this movement about?', a: 'We stand with Sonam Wangchuk and the Cockroach Janata Party in demanding education reform, Ladakh statehood, democratic rights, environmental justice, healthcare access, and youth employment.' },
  { q: 'How can I help from outside India?', a: 'Share our social toolkit, contact your local Indian embassy, donate (international cards accepted), organize diaspora protests, and sign international petitions.' },
  { q: 'Where does donation money go?', a: '35% legal aid, 25% medical support, 20% protest logistics, 12% grassroots organizing, 8% digital and media. Zero overhead. Monthly reports.' },
  { q: 'Is my donation tax-deductible?', a: 'In India, donations qualify for 80G tax exemption. International donors receive an official receipt.' },
  { q: 'How can I volunteer?', a: 'Fill the volunteer form on our Take Action page or email us. We need legal, medical, media, organizing, translation, and logistics help.' },
]

export default function Contact() {
  const [open, setOpen] = useState(null)

  // Contact form state
  const [contact, setContact] = useState({ name: '', email: '', subject: 'General inquiry', message: '' })
  const [contactStatus, setContactStatus] = useState('idle')
  const [contactMsg, setContactMsg] = useState('')

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('idle')

  async function handleContactSubmit(e) {
    e.preventDefault()
    if (!contact.email) {
      setContactStatus('error'); setContactMsg('Email is required'); return
    }
    setContactStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...contact, type: 'contact' }),
      })
      const data = await res.json()
      if (res.ok) {
        setContactStatus('success')
        setContactMsg('Message sent! We\'ll respond within 24 hours.')
        setContact({ name: '', email: '', subject: 'General inquiry', message: '' })
      } else {
        setContactStatus('error'); setContactMsg(data.error || 'Failed to send')
      }
    } catch {
      setContactStatus('error'); setContactMsg('Network error. Please try again.')
    }
  }

  async function handleNewsletterSubmit(e) {
    e.preventDefault()
    if (!newsletterEmail) return
    setNewsletterStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail, type: 'newsletter' }),
      })
      if (res.ok) {
        setNewsletterStatus('success')
        setNewsletterEmail('')
      } else {
        setNewsletterStatus('idle')
      }
    } catch {
      setNewsletterStatus('idle')
    }
  }

  return (
    <main id="top">
      <div className="press-marks" aria-hidden="true">
        <span className="crop crop--tl" /><span className="crop crop--tr" />
        <span className="crop crop--bl" /><span className="crop crop--br" />
      </div>
      <div className="reg-target" aria-hidden="true"><span /></div>
      <header className="sheet masthead">
        <div className="masthead__bar">
          <Link className="masthead__mark" to="/">Stand With Sonam Wangchuk <span className="no">PROTEST&nbsp;Nº&nbsp;001</span></Link>
          <p className="masthead__edition">Free sheet · printed by hand<br />July 2026 · New Delhi</p>
        </div>
        <nav className="masthead__nav" aria-label="Primary">
          <Link to="/">Home</Link><span className="dot">·</span>
          <Link to="/movement">The Movement</Link><span className="dot">·</span>
          <Link to="/timeline">Timeline</Link><span className="dot">·</span>
          <Link to="/action">Take Action</Link><span className="dot">·</span>
          <Link to="/donate">Donate</Link><span className="dot">·</span>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <section className="sheet spine" style={{ borderTop: 'none', paddingTop: 'var(--space-2xl)' }}>
        <div className="spine__head">
          <p className="spine__eyebrow">The Directory</p>
          <h1 className="spine__title">Get in <span style={{ color: 'var(--color-accent)' }}>Touch</span></h1>
          <p className="plank__gloss" style={{ maxWidth: '48ch', marginTop: 'var(--space-lg)' }}>Press inquiries, legal support, medical aid coordination, or general questions. We respond within 24 hours.</p>
        </div>
      </section>
      <section className="sheet" style={{ paddingBottom: 'var(--space-xl)' }}>
        <div className="bill">
          <div className="bill__line">
            <span className="bill__k">General</span>
            <p className="bill__v" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>hello@standwithsonam.org</p>
            <p className="bill__note">General inquiries, partnerships, and speaking requests.</p>
          </div>
          <div className="bill__line">
            <span className="bill__k">Press</span>
            <p className="bill__v" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>press@standwithsonam.org</p>
            <p className="bill__note">Media inquiries, interview requests, press kit download.</p>
          </div>
          <div className="bill__line">
            <span className="bill__k">Legal</span>
            <p className="bill__v" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>legal@standwithsonam.org</p>
            <p className="bill__note">Legal support, pro-bono counsel, habeas corpus coordination.</p>
          </div>
        </div>
      </section>

      {/* Contact form — now functional */}
      <section className="sheet" style={{ borderTop: 'var(--rule-ink)', paddingBlock: 'clamp(var(--space-xl), 5vw, var(--space-3xl))' }}>
        <div className="spine__head" style={{ marginBottom: 'var(--space-xl)' }}>
          <p className="spine__eyebrow">Send a Message</p>
          <h2 className="spine__title">Write to <span style={{ color: 'var(--color-accent)' }}>Us</span></h2>
        </div>
        <form style={{ maxWidth: '40rem' }} onSubmit={handleContactSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
            <input type="text" placeholder="Your name" className="input-broadsheet"
              value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })} />
            <input type="email" placeholder="Your email" required className="input-broadsheet"
              value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })} />
          </div>
          <select className="input-broadsheet" style={{ marginBottom: 'var(--space-sm)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)' }}
            value={contact.subject} onChange={e => setContact({ ...contact, subject: e.target.value })}>
            <option>General inquiry</option><option>Press / media</option><option>Legal support</option><option>Medical aid</option><option>Volunteer</option>
          </select>
          <textarea placeholder="Your message" className="input-broadsheet" rows={5}
            style={{ marginBottom: 'var(--space-md)', resize: 'vertical' }}
            value={contact.message} onChange={e => setContact({ ...contact, message: e.target.value })} />
          <button type="submit" className="btn" disabled={contactStatus === 'sending'}>
            {contactStatus === 'sending' ? 'Sending…' : 'Send →'}
          </button>
          {contactStatus === 'success' && <p style={{ marginTop: 'var(--space-sm)', color: 'var(--color-teal)', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', textTransform: 'uppercase' }}>✅ {contactMsg}</p>}
          {contactStatus === 'error' && <p style={{ marginTop: 'var(--space-sm)', color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)' }}>⚠️ {contactMsg}</p>}
        </form>
      </section>

      <section className="sheet" style={{ borderTop: 'var(--rule-ink)', paddingBlock: 'clamp(var(--space-xl), 5vw, var(--space-3xl))' }}>
        <div className="spine__head" style={{ marginBottom: 'var(--space-xl)' }}>
          <p className="spine__eyebrow">Frequently Asked</p>
          <h2 className="spine__title">Common <span style={{ color: 'var(--color-accent)' }}>Questions</span></h2>
        </div>
        <div style={{ maxWidth: '48rem' }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: 'var(--rule-hair)', paddingBlock: 'var(--space-md)' }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', textAlign: 'left', fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', fontWeight: 700, textTransform: 'uppercase', background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                {f.q} <span style={{ color: 'var(--color-accent)' }}>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <p className="plank__gloss" style={{ marginTop: 'var(--space-sm)' }}>{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter — now functional */}
      <section className="sheet pledge" style={{ marginTop: 'var(--space-xl)' }}>
        <h2 className="pledge__call">A reminder,<br />not a <span className="red">sign-up</span>.</h2>
        <div className="pledge__action">
          <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
            <input type="email" placeholder="your@email.com" className="input-broadsheet" style={{ minWidth: '200px' }}
              value={newsletterEmail} onChange={e => setNewsletterEmail(e.target.value)} required />
            <button type="submit" className="btn" disabled={newsletterStatus === 'sending'}>
              {newsletterStatus === 'sending' ? '…' : newsletterStatus === 'success' ? '✅ Done' : 'Stay Updated →'}
            </button>
          </form>
          <p className="pledge__small">We never sell your details. One email per week. Unsubscribe anytime.</p>
        </div>
      </section>

      <footer className="sheet colophon">
        <div>
          <p className="colophon__mark">Stand With Sonam Wangchuk</p>
          <p className="colophon__body">A people's campaign for education reform, Ladakh statehood, and democratic rights.</p>
        </div>
        <address className="colophon__meta" style={{ fontStyle: 'normal' }}>
          <Link to="/action">Take Action</Link><br />
          <Link to="/donate">Donate</Link><br />
          <a href="https://twitter.com/StandWithSonam" target="_blank">Twitter / X</a><br />
          <a href="https://x.com/shashank1tomar" target="_blank" style="color:var(--color-accent);text-decoration:underline">Built by @shashank1tomar</a>
        </address>
        <div className="colophon__rule">
          <span>Set in Big Shoulders &amp; Fraunces · printed two-pass, off-register on purpose</span>
          <span>Protest Nº 001 · free to copy, free to post</span>
        </div>
      </footer>
    </main>
  )
}
