import { useRef, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function useScrollProgress() {
  const [p, s] = useState(0)
  useEffect(() => {
    const o = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      s(h > 0 ? (window.scrollY / h) * 100 : 0)
    }
    window.addEventListener('scroll', o, { passive: true })
    return () => window.removeEventListener('scroll', o)
  }, [])
  return p
}

const tally = [
  '21 Days Hunger Strike', '10,000 Marched on Parliament',
  '50M+ Viral Photo Views', '200+ Detained and Released',
  '15+ Countries in Solidarity', '500K+ Petition Signatures',
  '100+ Arrests at Chalo Sansad', '54 kg Weight at Removal',
  '1.4M Students Betrayed', 'NEET 2024 Paper Leak',
]

const planks = [
  { i: '01', title: 'Education Reform is a right, not a privilege.',
    desc: '100,000 schools closed since 2020. 50,000 teacher vacancies. NEET paper leak exposed systemic corruption — 1.4 million students\' futures betrayed. NEP 2020 exists on paper only. Every child in Ladakh and across India deserves a classroom with a trained teacher and a fair exam.' },
  { i: '02', title: 'Ladakh Statehood. Land, jobs, culture.',
    desc: 'Full statehood with elected assembly. Article 371 protections for land, jobs, and culture. End bureaucratic rule from Delhi. Ladakhis decide Ladakh\'s future.' },
  { i: '03', title: 'Peaceful protest is not a crime.',
    desc: 'Release all political prisoners. End misuse of PSA and UAPA. Independent inquiry into the July 18 police action at Jantar Mantar. Democracy includes the right to dissent.' },
  { i: '04', title: 'The Third Pole cannot burn.',
    desc: 'Stop unchecked Himalayan industrialisation. Mandatory EIAs for all projects. Protect glaciers and wetlands — the water source for a billion people.' },
  { i: '05', title: 'Healthcare is a human right.',
    desc: 'AIIMS-level facilities in Ladakh. Year-round air ambulances. Altitude medicine. A system that doesn\'t leave 300,000 people to freeze or suffocate.' },
  { i: '06', title: 'Jobs here, not despair.',
    desc: '50,000 jobs for Ladakhi youth. Sustainable tourism. Renewable energy. Traditional crafts. A future worth staying home for.' },
]

export default function Home() {
  const sp = useScrollProgress()

  return (
    <main id="top">
      {/* Scroll bar */}
      <div className="scroll-progress" style={{ width: `${sp}%` }} />

      {/* Press marks */}
      <div className="press-marks" aria-hidden="true">
        <span className="crop crop--tl"></span>
        <span className="crop crop--tr"></span>
        <span className="crop crop--bl"></span>
        <span className="crop crop--br"></span>
      </div>
      <div className="reg-target" aria-hidden="true"><span></span></div>

      {/* ═══════════ MASTHEAD ═══════════ */}
      <header className="sheet masthead">
        <div className="masthead__bar">
          <a className="masthead__mark" href="#top">
            Stand With Sonam Wangchuk <span className="no">PROTEST&nbsp;Nº&nbsp;001</span>
          </a>
          <p className="masthead__edition">
            Free sheet · printed by hand<br />
            July 2026 · New Delhi
          </p>
        </div>
        <nav className="masthead__nav" aria-label="Primary">
          <Link to="/">Home</Link>
          <span className="dot" aria-hidden="true">·</span>
          <Link to="/movement">The Movement</Link>
          <span className="dot" aria-hidden="true">·</span>
          <Link to="/timeline">Timeline</Link>
          <span className="dot" aria-hidden="true">·</span>
          <Link to="/action">Take Action</Link>
          <span className="dot" aria-hidden="true">·</span>
          <Link to="/donate">Donate</Link>
          <span className="dot" aria-hidden="true">·</span>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* ═══════════ HERO — Full-screen photo ═══════════ */}
      <section className="photo-hero" aria-label="Hero">
        <div className="photo-hero__bg">
          <img src="/images/sonam-wangchuk-carried.jpg" alt="Sonam Wangchuk being carried by Delhi Police at Jantar Mantar, July 18, 2026"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="photo-hero__content">
          <div className="strapline" style={{ color: 'var(--color-accent-ink)', opacity: 0.7 }}>
            A broadsheet for things worth keeping · est. at Jantar Mantar
          </div>
          <div className="fold__inner" style={{ marginTop: 'var(--space-xl)' }}>
            <div>
              <h1 className="fold__slogan" id="fold-title" style={{ color: 'white' }}>
                <span className="ln ghost" style={{ '--i': 0 }}>
                  <span className="ink">They</span>
                  <span className="reg reg--teal" aria-hidden="true">They</span>
                </span>
                <span className="ln ghost" style={{ '--i': 1 }}>
                  <span className="ink">Carried</span>
                  <span className="reg" aria-hidden="true">Carried</span>
                </span>
                <span className="ln ln--red ln--indent ghost" style={{ '--i': 2 }}>
                  <span className="ink">a Fasting Man.</span>
                  <span className="reg reg--teal" aria-hidden="true">a Fasting Man.</span>
                </span>
              </h1>
              <div style={{ marginTop: 'var(--space-lg)' }}>
                <p className="fold__meta" style={{ color: 'oklch(94% 0.012 85 / 0.6)' }}>
                  <span>Sonam Wangchuk</span>
                  <span>Day 21 of hunger strike</span>
                  <span>Jantar Mantar, Delhi</span>
                  <span>6:30 AM · July 18, 2026</span>
                </p>
              </div>
            </div>
            <div>
              <p className="fold__lede" style={{ color: 'oklch(80% 0.01 60 / 0.9)', borderLeftColor: 'var(--color-accent)' }}>
                A frailing man, 7 kg lighter than when he started, carried away by
                <strong style={{ color: 'white' }}> six police officers</strong>.
                He did not resist. He was too weak to walk.
                <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}> The image reached 50 million screens in 24 hours.</span>
              </p>
              <div className="fold__meta" style={{ marginTop: 'var(--space-lg)' }}>
                <Link to="/action" className="btn">Take Action <span className="arw" aria-hidden="true">&rarr;</span></Link>
                <Link to="/timeline" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'white', textDecoration: 'underline' }}>Read the Story</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TALLY MARQUEE ═══════════ */}
      <section className="sheet" id="tally" aria-labelledby="tally-label" style={{ paddingTop: 'var(--space-2xl)' }}>
        <h2 className="u-vh" id="tally-label">Movement tally</h2>
        <div className="tally">
          <span className="tally__cap tally__cap--l" aria-hidden="true">The count</span>
          <div className="tally__strip">
            <div className="tally__track" aria-hidden="true">
              {[...tally, ...tally].map((t, i) => (
                <span className="tally__item" key={i}>
                  <span className={i % 3 === 0 ? 'n n--teal' : 'n'}>{t.split(' ')[0]}</span>
                  {' '}{t.slice(t.split(' ')[0].length)} <span className="sep">/</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ MANIFESTO ═══════════ */}
      <section className="sheet spine" id="manifesto" aria-labelledby="spine-title">
        <div className="spine__head">
          <p className="spine__eyebrow">Six things we hold to be true</p>
          <h2 className="spine__title">The Non-Negotiable <span style={{ color: 'var(--color-accent)' }}>Demands</span></h2>
        </div>

        {planks.map((p, idx) => (
          <article key={p.i} className={`plank ${idx % 2 === 0 ? 'plank--hang' : ''}`} style={{ '--i': idx + 1 }}>
            <p className="plank__num">{p.i}</p>
            <div>
              <p className={`plank__slab ghost`}>
                <span className="ink">{p.title.split('. ')[0]} <span className="red">.</span></span>
                <span className="reg" aria-hidden="true">{p.title.split('. ')[0]}.</span>
              </p>
              <p className="plank__gloss">{p.desc}</p>
            </div>
          </article>
        ))}
      </section>

      {/* ═══════════ PHOTO SECTION ═══════════ */}
      <section className="sheet" style={{ paddingBlock: 'clamp(var(--space-2xl), 7vw, var(--space-4xl))' }}
        aria-label="The viral photo">
        <div className="photo-section">
          <div>
            <div className="spine__eyebrow" style={{ marginBottom: 'var(--space-sm)' }}>The Viral Photo</div>
            <h2 className="spine__title" style={{ maxWidth: '100%', fontSize: 'var(--text-slab)' }}>
              <span className="ghost" style={{ '--i': 3 }}>
                <span className="ink">50M Views</span>
                <span className="reg reg--teal" aria-hidden="true">50M Views</span>
              </span>
              <br />
              <span style={{ color: 'var(--color-accent)' }}>in 24 Hours</span>
            </h2>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 'var(--lh-body)', color: 'var(--color-ink-2)', maxWidth: '48ch', marginTop: 'var(--space-lg)' }}>
              <p>The image of Sonam Wangchuk being carried away by six police officers — frail, hands folded in namaste, wearing his traditional red Ladakhi pheran — reached 50 million screens within one day. Shared by heads of state, human rights organizations, and citizens across every continent.</p>
            </div>
            <div style={{ marginTop: 'var(--space-md)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-ink-mute)' }}>
              Photo: Associated Press / Manish Swarup
            </div>
          </div>
          <div>
            <div className="photo-section__frame">
              <img src="/images/sonam-wangchuk-carried.jpg" alt="Sonam Wangchuk being carried by police"
                style={{ display: 'block', width: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PLEDGE ═══════════ */}
      <section className="sheet pledge" aria-labelledby="pledge-title">
        <h2 className="pledge__call" id="pledge-title">
          A reminder,<br />not a <span className="red">sign-up</span>.
        </h2>
        <div className="pledge__action">
          <Link to="/action" className="btn">
            Take Action <span className="arw" aria-hidden="true">&rarr;</span>
          </Link>
          <p className="pledge__small">This is a stand, not a mailing list. Every action counts.</p>
        </div>
      </section>

      {/* ═══════════ COLOPHON ═══════════ */}
      <footer className="sheet colophon" role="contentinfo">
        <div>
          <p className="colophon__mark">Stand With Sonam Wangchuk</p>
          <p className="colophon__body">
            A people's campaign for education reform, Ladakh statehood, and democratic rights.
            A workbench, not a headquarters — built in solidarity with the hunger strikers at
            Jantar Mantar and the Cockroach Janata Party.
          </p>
        </div>
        <address className="colophon__meta" style={{ fontStyle: 'normal' }}>
          Jantar Mantar, New Delhi · July 2026<br />
          <Link to="/action">Take Action</Link><br />
          <Link to="/donate">Donate</Link><br />
          <a href="https://twitter.com/StandWithSonam" target="_blank">Twitter / X</a>
        </address>
        <div className="colophon__rule">
          <span>Set in Big Shoulders &amp; Fraunces · printed two-pass, off-register on purpose</span>
          <span>Protest Nº 001 · free to copy, free to post</span>
        <span>Built by <a href="https://github.com/shashank-tomar0" target="_blank" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>shashank-tomar0</a></span></div>
      </footer>
    </main>
  )
}
