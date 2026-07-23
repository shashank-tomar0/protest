import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function TakeAction() {
  const [volunteer, setVolunteer] = useState({ name: '', email: '', phone: '', city: '', message: '' })
  const [volunteerStatus, setVolunteerStatus] = useState('idle')
  const [volunteerMsg, setVolunteerMsg] = useState('')

  async function handleVolunteerSubmit(e) {
    e.preventDefault()
    if (!volunteer.email) {
      setVolunteerStatus('error'); setVolunteerMsg('Email is required'); return
    }
    setVolunteerStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...volunteer, type: 'volunteer' }),
      })
      const data = await res.json()
      if (res.ok) {
        setVolunteerStatus('success')
        setVolunteerMsg('Thank you for signing up! We\'ll reach out soon.')
        setVolunteer({ name: '', email: '', phone: '', city: '', message: '' })
      } else {
        setVolunteerStatus('error'); setVolunteerMsg(data.error || 'Failed to submit')
      }
    } catch {
      setVolunteerStatus('error'); setVolunteerMsg('Network error. Please try again.')
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
          <Link className="masthead__mark" to="/">
            Stand With Sonam Wangchuk <span className="no">PROTEST&nbsp;Nº&nbsp;001</span>
          </Link>
          <p className="masthead__edition">Free sheet · printed by hand<br />July 2026 · New Delhi</p>
        </div>
        <nav className="masthead__nav" aria-label="Primary">
          <Link to="/">Home</Link><span className="dot" aria-hidden="true">·</span>
          <Link to="/movement">The Movement</Link><span className="dot" aria-hidden="true">·</span>
          <Link to="/timeline">Timeline</Link><span className="dot" aria-hidden="true">·</span>
          <Link to="/action">Take Action</Link><span className="dot" aria-hidden="true">·</span>
          <Link to="/donate">Donate</Link><span className="dot" aria-hidden="true">·</span>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className="sheet spine" style={{ borderTop: 'none', paddingTop: 'var(--space-2xl)' }}>
        <div className="spine__head">
          <p className="spine__eyebrow">Take Action</p>
          <h1 className="spine__title">
            Your Voice. <span style={{ color: 'var(--color-accent)' }}>Your Power.</span>
          </h1>
          <p className="plank__gloss" style={{ maxWidth: '48ch', marginTop: 'var(--space-lg)' }}>
            A donation. A share. A phone call to your MP. Showing up at Jantar Mantar.
            Every action writes a sentence in the story of this movement.
          </p>
        </div>
      </section>

      {/* Six action planks */}
      <section className="sheet" style={{ paddingBottom: 'var(--space-xl)' }}>
        {[
          { icon: '01', title: 'Donate', desc: 'Fund legal aid, medical support for hunger strikers, protest logistics, and grassroots organizing across Ladakh and India. Every rupee is accounted for.', cta: 'Donate →', to: '/donate' },
          { icon: '02', title: 'Share', desc: 'Use our social media toolkit with pre-written posts, graphics, and hashtags. Every share reaches new people who can act. Copy, paste, post, amplify.', cta: 'Get Toolkit →', to: '/action#toolkit' },
          { icon: '03', title: 'Volunteer', desc: 'Join local teams for protest support, legal aid clinics, medical coordination, media outreach, and community organizing. Sign up below.', cta: 'Sign Up →', to: '/action#volunteer' },
          { icon: '04', title: 'Contact Your MP', desc: 'Your elected representative works for you. Email, call, or visit their office. Pre-written templates make it easy. Make them accountable.', cta: 'Find Your MP →', to: '/action#mps' },
          { icon: '05', title: 'Demand NEET Re-test', desc: 'Sign the petition demanding a full re-test after the NEET paper leak betrayed 1.4 million students. Justice, transparency, and accountability for every aspiring doctor in India.', cta: 'Sign Now →', to: '/action#petitions' },
          { icon: '06', title: 'Join Protests', desc: 'Upcoming peaceful demonstrations, vigils, and marches. Safety guidelines, legal rights information, and coordination channels available.', cta: 'Find Events →', to: '/action#events' },
        ].map((a, i) => (
          <article key={a.title} className={`plank ${i % 2 === 0 ? 'plank--hang' : ''}`} style={{ '--i': i }}>
            <p className="plank__num">{a.icon}/06</p>
            <div>
              <p className="plank__slab ghost" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}>
                <span className="ink">{a.title}</span>
                <span className="reg" aria-hidden="true">{a.title}</span>
              </p>
              <p className="plank__gloss">{a.desc}</p>
              <Link to={a.to} className="btn" style={{ marginTop: 'var(--space-md)' }}>{a.cta}</Link>
            </div>
          </article>
        ))}
      </section>

      {/* Social toolkit — plain text */}
      <section className="sheet" id="toolkit" style={{ borderTop: 'var(--rule-ink)', paddingBlock: 'clamp(var(--space-xl), 5vw, var(--space-3xl))' }}>
        <div className="spine__head">
          <p className="spine__eyebrow">Share the Message</p>
          <h2 className="spine__title">Social <span style={{ color: 'var(--color-accent)' }}>Toolkit</span></h2>
        </div>
        <p className="plank__gloss" style={{ marginBottom: 'var(--space-lg)' }}>Copy and paste these directly onto your social channels.</p>
        <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
          {[
            'After 21 days of hunger strike for education reform and Ladakh rights, Sonam Wangchuk was forcibly removed by Delhi Police at 6:30 AM. He did not resist — he was too weak to walk. This image will define our times. #StandWithSonam #ChaloSansad',
            '10,000+ marched to Parliament demanding justice for Sonam Wangchuk. The Cockroach Janata Party\'s demands: education reform, Ladakh statehood, democratic rights, environmental justice, healthcare, and jobs. #CJP #StandWithSonam',
            'They carried a fasting man like a criminal. He folded his hands in namaste and did not resist. Our democracy is being tested. #StandWithSonam #India',
          ].map((p, i) => (
            <div key={i} className="card-broadsheet" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', lineHeight: '1.7' }}>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Volunteer form — now functional */}
      <section className="sheet" id="volunteer" style={{ borderTop: 'var(--rule-ink)', paddingBlock: 'clamp(var(--space-xl), 5vw, var(--space-3xl))' }}>
        <div className="spine__head">
          <p className="spine__eyebrow">Get Involved</p>
          <h2 className="spine__title">Volunteer <span style={{ color: 'var(--color-accent)' }}>On the Ground</span></h2>
        </div>
        <form style={{ maxWidth: '40rem' }} onSubmit={handleVolunteerSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
            <input type="text" placeholder="Your name" className="input-broadsheet"
              value={volunteer.name} onChange={e => setVolunteer({ ...volunteer, name: e.target.value })} />
            <input type="email" placeholder="Your email" required className="input-broadsheet"
              value={volunteer.email} onChange={e => setVolunteer({ ...volunteer, email: e.target.value })} />
            <input type="tel" placeholder="Phone / WhatsApp" className="input-broadsheet"
              value={volunteer.phone} onChange={e => setVolunteer({ ...volunteer, phone: e.target.value })} />
            <input type="text" placeholder="City / Region" className="input-broadsheet"
              value={volunteer.city} onChange={e => setVolunteer({ ...volunteer, city: e.target.value })} />
          </div>
          <textarea placeholder="How you want to help — legal, medical, media, organizing, tech, translation..."
            className="input-broadsheet" rows={3} style={{ marginBottom: 'var(--space-md)', resize: 'vertical' }}
            value={volunteer.message} onChange={e => setVolunteer({ ...volunteer, message: e.target.value })} />
          <button type="submit" className="btn" disabled={volunteerStatus === 'sending'}>
            {volunteerStatus === 'sending' ? 'Submitting…' : 'Submit →'}
          </button>
          {volunteerStatus === 'success' && <p style={{ marginTop: 'var(--space-sm)', color: 'var(--color-teal)', fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', textTransform: 'uppercase' }}>✅ {volunteerMsg}</p>}
          {volunteerStatus === 'error' && <p style={{ marginTop: 'var(--space-sm)', color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)' }}>⚠️ {volunteerMsg}</p>}
        </form>
      </section>

      {/* Contact Your MP */}
      <section className="sheet" id="mps" style={{ borderTop: 'var(--rule-ink)', paddingBlock: 'clamp(var(--space-xl), 5vw, var(--space-3xl))' }}>
        <div className="spine__head">
          <p className="spine__eyebrow">Contact Your MP</p>
          <h2 className="spine__title">Make Them <span style={{ color: 'var(--color-accent)' }}>Accountable</span></h2>
        </div>
        <div style={{ maxWidth: '48rem' }}>
          <p className="plank__gloss" style={{ marginBottom: 'var(--space-lg)' }}>
            Your elected representative works for you. Call, email, or visit their office.
            Demand they raise the Ladakh statehood and education reform crisis in Parliament.
          </p>
          <div className="bill">
            <div className="bill__line">
              <span className="bill__k">Template — Email</span>
              <p className="bill__v" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)', fontFamily: 'var(--font-mono)', fontWeight: 400, textTransform: 'none' }}>
                "I am writing to demand immediate action on the Sonam Wangchuk hunger strike and Ladakh statehood. As your constituent, I ask you to: 1) Raise the issue in Parliament, 2) Demand implementation of NEP 2020, 3) Support Sixth Schedule protections for Ladakh. The world is watching. — A concerned citizen"
              </p>
            </div>
            <div className="bill__line">
              <span className="bill__k">Find Your MP</span>
              <p className="bill__v" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)', fontFamily: 'var(--font-mono)', fontWeight: 400, textTransform: 'none' }}>
                Visit <a href="https://sansad.in" target="_blank" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>sansad.in</a> or SMS "MP {'<pin-code>'}" to 51969 to find your Lok Sabha representative's contact details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demand NEET Re-test */}
      <section className="sheet" id="petitions" style={{ borderTop: 'var(--rule-ink)', paddingBlock: 'clamp(var(--space-xl), 5vw, var(--space-3xl))' }}>
        <div className="spine__head">
          <p className="spine__eyebrow">Demand NEET Re-test</p>
          <h2 className="spine__title">Justice for 1.4 <span style={{ color: 'var(--color-accent)' }}>Million</span></h2>
        </div>
        <div style={{ maxWidth: '48rem' }}>
          <p className="plank__gloss" style={{ marginBottom: 'var(--space-lg)' }}>
            The NEET-UG paper leak betrayed the dreams of 1.4 million medical aspirants. The Supreme Court refused a full re-test. Sign these petitions demanding accountability and a fair examination.
          </p>
          <div className="bill">
            <div className="bill__line">
              <span className="bill__k">Petition 1</span>
              <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-body)' }}>
                <strong>Supreme Court review petition:</strong> Demand a full re-test, CBI investigation, and strict action against the leak network.
              </p>
              <a href="https://change.org" target="_blank" className="btn" style={{ marginTop: 'var(--space-md)' }}>Sign on Change.org →</a>
            </div>
            <div className="bill__line">
              <span className="bill__k">Petition 2</span>
              <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--lh-body)' }}>
                <strong>Parliamentary committee:</strong> Demand the Ministry of Education conduct a transparent re-test within 90 days.
              </p>
              <a href="https://petitions.gov.in" target="_blank" className="btn" style={{ marginTop: 'var(--space-md)' }}>Sign on petitions.gov.in →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Join Protests */}
      <section className="sheet" id="events" style={{ borderTop: 'var(--rule-ink)', paddingBlock: 'clamp(var(--space-xl), 5vw, var(--space-3xl))' }}>
        <div className="spine__head">
          <p className="spine__eyebrow">Upcoming Events</p>
          <h2 className="spine__title">Show Up. Be <span style={{ color: 'var(--color-accent)' }}>Counted.</span></h2>
        </div>
        <div style={{ maxWidth: '48rem' }}>
          <div className="bill">
            <div className="bill__line">
              <span className="bill__k">Ongoing</span>
              <p className="bill__v" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>Jantar Mantar — Daily Protest</p>
              <p className="bill__note">Daily peaceful sit-in at Jantar Mantar, New Delhi, demanding Ladakh statehood and education reform. Join the hunger strikers in solidarity from 8 AM to 8 PM.</p>
            </div>
            <div className="bill__line">
              <span className="bill__k">Next Action</span>
              <p className="bill__v" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>Nationwide Solidarity Day</p>
              <p className="bill__note">Simultaneous protests in Delhi, Leh, Kargil, Mumbai, Bengaluru, Chennai, Kolkata, and Hyderabad. Watch this space for the confirmed date.</p>
            </div>
            <div className="bill__line">
              <span className="bill__k">Legal</span>
              <p className="bill__v" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>Know Your Rights</p>
              <p className="bill__note">If detained at a protest: stay calm, ask for legal aid, do not resist arrest. Contact legal@standwithsonam.org for pro-bono counsel. Our legal team is on standby.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="sheet colophon">
        <div>
          <p className="colophon__mark">Stand With Sonam Wangchuk</p>
          <p className="colophon__body">A people's campaign for education reform, Ladakh statehood, and democratic rights.</p>
        </div>
        <address className="colophon__meta" style={{ fontStyle: 'normal' }}>
          <Link to="/">Home</Link><br />
          <Link to="/donate">Donate</Link><br />
          <Link to="/contact">Contact</Link>
        </address>
        <div className="colophon__rule">
          <span>Set in Big Shoulders &amp; Fraunces · printed two-pass, off-register on purpose</span>
          <span>Protest Nº 001 · free to copy, free to post</span>
          <a href="https://x.com/shashank1tomar" target="_blank" style={{ color: "var(--color-accent)", textDecoration: "underline" }}>Built by @shashank1tomar</a>
        </div>
      </footer>
    </main>
  )
}
