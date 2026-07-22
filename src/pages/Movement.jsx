import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function useReveal(threshold = 0.15) {
  const ref = { current: null }
  const [vis, set] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { set(true); o.unobserve(el) } }, { threshold })
    o.observe(el)
    return () => o.disconnect()
  }, [threshold])
  return [ref, vis]
}

const timeline = [
  { year: '1988', title: 'SECMOL Founded',
    desc: 'Sonam Wangchuk establishes Students\' Educational and Cultural Movement of Ladakh — transforming education in one of India\'s most remote regions.' },
  { year: '2009', title: '3 Idiots Released',
    desc: 'Wangchuk\'s life story inspires the character Phunsukh Wangdu in the Bollywood blockbuster. Ladakh\'s education model reaches global audiences.' },
  { year: '2013', title: 'Ice Stupa Innovation',
    desc: 'First Ice Stupa prototype built to address water scarcity from glacial melt. Wins Rolex Award for Enterprise in 2016.' },
  { year: '2019', title: 'Article 370 Abrogated',
    desc: 'Ladakh becomes a Union Territory without a legislature. Mass protests begin demanding statehood and Sixth Schedule tribal protections.' },
  { year: 'Jun 29, 2026', title: 'Hunger Strike Begins',
    desc: 'Wangchuk starts indefinite hunger strike at Jantar Mantar. Demands: education reform, Ladakh statehood, democratic rights.' },
  { year: 'Jul 18, 2026', title: 'Forced Removal — 6:30 AM',
    desc: 'Delhi Police forcibly remove Wangchuk from protest site. 50+ personnel. His wife Gitanjali detained separately. Footage goes viral.' },
  { year: 'Jul 20, 2026', title: 'Chalo Sansad March',
    desc: '10,000+ march from Jantar Mantar to Parliament. Police use tear gas and water cannons. CJP founder Abhijit Dipke begins hunger strike.' },
]

export default function Movement() {
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

      {/* Spine title */}
      <section className="sheet spine" style={{ borderTop: 'none', paddingTop: 'var(--space-2xl)' }}>
        <div className="spine__head">
          <p className="spine__eyebrow">The Movement · 1988–Present</p>
          <h1 className="spine__title">
            A Journey Across <span style={{ color: 'var(--color-accent)' }}>Decades</span>
          </h1>
          <p className="plank__gloss" style={{ maxWidth: '48ch', marginTop: 'var(--space-lg)' }}>
            From a remote Ladakhi classroom to the steps of Parliament — the story of a people's
            movement for education, ecology, and democracy.
          </p>
        </div>
      </section>

      {/* Timeline as manifesto planks */}
      <section className="sheet" style={{ paddingBottom: 'var(--space-2xl)' }}>
        {timeline.map((t, i) => (
          <article key={t.year} className={`plank ${i % 2 === 0 ? 'plank--hang' : ''}`} style={{ '--i': i + 1 }}>
            <p className="plank__num">{t.year}</p>
            <div>
              <p className="plank__slab ghost" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
                <span className="ink">{t.title}</span>
                <span className="reg" aria-hidden="true">{t.title}</span>
              </p>
              <p className="plank__gloss">{t.desc}</p>
            </div>
          </article>
        ))}
      </section>

      {/* Key Figures */}
      <section className="sheet" style={{ borderTop: 'var(--rule-ink)', paddingBlock: 'clamp(var(--space-xl), 5vw, var(--space-3xl))' }}>
        <div className="spine__head">
          <p className="spine__eyebrow">Key Figures</p>
          <h2 className="spine__title">Voices of the <span style={{ color: 'var(--color-accent)' }}>Movement</span></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 'var(--space-lg)' }}>
          {[
            { name: 'Sonam Wangchuk', role: 'Education Reformer & Climate Activist', desc: 'Founder of SECMOL, Ice Stupa inventor, Rolex laureate. Inspiration for 3 Idiots. Led the 21-day hunger strike at Jantar Mantar.' },
            { name: 'Abhijit Dipke', role: 'Founder, Cockroach Janata Party', desc: 'Engineer-turned-activist. Founded CJP as a citizen platform for education accountability. Began hunger strike on July 20, 2026.' },
            { name: 'Gitanjali J. Angmo', role: 'Wangchuk\'s Wife & Activist', desc: 'Joined her husband at Jantar Mantar on Day 11 of his hunger strike. Detained during the July 18 police action.' },
            { name: 'Neha, Manish, Aameen', role: 'Student Hunger Strikers', desc: 'Young activists continuing the indefinite hunger strike after Wangchuk\'s removal. On 21+ days as of July 2026.' },
          ].map((p, i) => (
            <article key={p.name} className="card-broadsheet" style={{ '--i': i }}>
              <p className="spine__eyebrow" style={{ marginBottom: 'var(--space-sm)' }}>{p.role}</p>
              <p className="plank__slab ghost" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                <span className="ink">{p.name}</span>
                <span className="reg" aria-hidden="true">{p.name}</span>
              </p>
              <p className="plank__gloss" style={{ marginTop: 'var(--space-sm)' }}>{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Colophon */}
      <footer className="sheet colophon">
        <div>
          <p className="colophon__mark">Stand With Sonam Wangchuk</p>
          <p className="colophon__body">A people's campaign for education reform, Ladakh statehood, and democratic rights.</p>
        </div>
        <address className="colophon__meta" style={{ fontStyle: 'normal' }}>
          <Link to="/">Home</Link><br />
          <Link to="/timeline">Timeline</Link><br />
          <Link to="/action">Take Action</Link>
        </address>
        <div className="colophon__rule">
          <span>Set in Big Shoulders &amp; Fraunces · printed two-pass, off-register on purpose</span>
          <span>Protest Nº 001 · free to copy, free to post</span>
        </div>
      </footer>
    </main>
  )
}
