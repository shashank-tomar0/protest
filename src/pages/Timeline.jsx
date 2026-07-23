import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const days = [
  { day: '00', date: '2024–25', title: 'NEET Paper Leak Scandal',
    desc: 'The NEET-UG exam paper is leaked on a massive scale — 1.4 million students\' futures compromised. The Supreme Court refuses a full re-test. The betrayal becomes a national symbol of education system rot, directly fueling Wangchuk\'s hunger strike for reform.' },
  { day: '01', date: 'Jun 29', title: 'Hunger Strike Begins',
    desc: 'Sonam Wangchuk starts an indefinite hunger strike at Jantar Mantar, New Delhi. His demands: full implementation of NEP 2020, Ladakh statehood with Sixth Schedule protections, and immediate release of all political prisoners.' },
  { day: '05', date: 'Jul 3', title: 'Students Rally',
    desc: 'Hundreds of students from Delhi University, JNU, and Jamia Millia Islamia join the protest. CJP founder Abhijit Dipke addresses the growing crowd.' },
  { day: '11', date: 'Jul 9', title: 'Health Worsens',
    desc: 'Wangchuk loses 7 kg. Blood pressure drops to 103/68. Doctors warn of organ damage. His wife Gitanjali J. Angmo arrives at Jantar Mantar to join him.' },
  { day: '18', date: 'Jul 18', title: 'The Raid — 6:30 AM',
    desc: 'Over 50 Delhi Police personnel enter the protest site. They forcibly remove Wangchuk. His hands remain folded in namaste as six officers carry him away. The photograph goes viral — 50 million views in 24 hours.' },
  { day: '20', date: 'Jul 20', title: 'Chalo Sansad',
    desc: '10,000+ protesters march from Jantar Mantar to Parliament. Police deploy tear gas, water cannons, and batons. Abhijit Dipke begins an indefinite hunger strike.' },
  { day: '21', date: 'Jul 21', title: 'Global Solidarity',
    desc: 'Protests erupt in 15+ countries — London, New York, Sydney, Berlin, Dubai. UN Rapporteurs issue an urgent statement. BBC, Guardian, Al Jazeera, NYT lead with the story.' },
  { day: '—', date: 'Ongoing', title: 'The Fight Continues',
    desc: 'Legal habeas corpus petitions filed. Parliament debates the issue. Student hunger strikers Neha, Manish, and Aameen continue their fast. The movement grows.' },
]

export default function Timeline() {
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
          <p className="spine__eyebrow">The Chronology</p>
          <h1 className="spine__title">
            21 Days That Shook <span style={{ color: 'var(--color-accent)' }}>India</span>
          </h1>
          <p className="plank__gloss" style={{ maxWidth: '48ch', marginTop: 'var(--space-lg)' }}>
            From the NEET paper leak that exposed a broken system to the 21-day hunger strike
            at Jantar Mantar, the forced removal, and the Chalo Sansad march — a day-by-day
            account of the movement that captured the world's attention.
          </p>
        </div>
      </section>

      <section className="sheet" style={{ paddingBottom: 'var(--space-2xl)' }}>
        {days.map((d, i) => (
          <article key={d.day} className={`plank ${i % 2 === 0 ? 'plank--hang' : ''}`} style={{ '--i': i + 1 }}>
            <div className="plank__num" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontSize: 'var(--text-lg)' }}>DAY {d.day}</span>
              <span style={{ fontSize: 'var(--text-xs)', fontWeight: 400, color: 'var(--color-ink-mute)' }}>{d.date}</span>
            </div>
            <div>
              <p className="plank__slab ghost" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
                <span className="ink">{d.title}</span>
                <span className="reg" aria-hidden="true">{d.title}</span>
              </p>
              <p className="plank__gloss">{d.desc}</p>
            </div>
          </article>
        ))}
      </section>

      <footer className="sheet colophon">
        <div>
          <p className="colophon__mark">Stand With Sonam Wangchuk</p>
          <p className="colophon__body">A people's campaign for education reform, Ladakh statehood, and democratic rights.</p>
        </div>
        <address className="colophon__meta" style={{ fontStyle: 'normal' }}>
          <Link to="/">Home</Link><br />
          <Link to="/action">Take Action</Link><br />
          <Link to="/donate">Donate</Link>
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
