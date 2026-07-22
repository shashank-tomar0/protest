import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

/* ---- Scroll Progress Hook ---- */
function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return progress
}

/* ---- Parallax Hook ---- */
function useParallax(speed = 0.3) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const scrolled = window.innerHeight - rect.top
      setOffset(scrolled * speed)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])
  return [ref, offset]
}

/* ---- Scroll Reveal Intersection ---- */
function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); obs.unobserve(el) } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, isVisible]
}

/* ---- Manifesto data ---- */
const demands = [
  { id: '01', title: 'Education Reform', tagline: 'Reopen every closed school. Reopen every closed school.', desc: 'Implement NEP 2020. 100,000 schools closed since 2020. 50,000 teacher vacancies. Every child in Ladakh and across India deserves a classroom.' },
  { id: '02', title: 'Ladakh Statehood', tagline: 'Land, jobs, culture. Land, jobs, culture.', desc: 'Full statehood with elected assembly. Article 371 protections. End bureaucratic rule from Delhi. Ladakhis decide Ladakh\'s future.' },
  { id: '03', title: 'Democratic Rights', tagline: 'Peaceful protest is not a crime. Peaceful protest is not a crime.', desc: 'Release political prisoners. End PSA and UAPA misuse. Independent inquiry into the July 18 police action. Democracy includes dissent.' },
  { id: '04', title: 'Environmental Justice', tagline: 'The Third Pole cannot burn. The Third Pole cannot burn.', desc: 'Stop unchecked Himalayan industrialization. Mandatory EIAs. Protect glaciers, wetlands, the water source for a billion people.' },
  { id: '05', title: 'Healthcare Access', tagline: 'AIIMS for Ladakh. AIIMS for Ladakh.', desc: 'Year-round air ambulances. Altitude medicine. A hospital system that doesn\'t leave 300,000 people to freeze or suffocate.' },
  { id: '06', title: 'Youth Employment', tagline: 'Jobs here, not despair. Jobs here, not despair.', desc: '50,000 jobs for Ladakhi youth. Sustainable tourism. Renewable energy. Traditional crafts. A future worth staying home for.' },
]

const tally = [
  '21 Days Hunger Strike',
  '10,000 Marched on Parliament',
  '50M+ Viral Photo Views',
  '200+ Detained and Released',
  '15+ Countries in Solidarity',
  '500,000+ Petition Signatures',
  '100+ Arrests at Chalo Sansad',
  '54 kg Weight at Removal',
]

export default function Home() {
  const scrollProgress = useScrollProgress()
  const [heroRef, heroOffset] = useParallax(0.25)
  const [tallyRef, tallyVisible] = useReveal(0.1)

  return (
    <>
      {/* ---- Scroll Progress Bar ---- */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* ============================================================
           HERO — Full-screen broadsheet with viral photo
           ============================================================ */}
      <section
        ref={heroRef}
        className="broadsheet-hero"
        aria-label="Sonam Wangchuk — They carried a fasting man"
      >
        {/* Photo Background with 3D Parallax */}
        <div
          className="broadsheet-hero-media"
          style={{ transform: `translateY(${heroOffset}px)` }}
        >
          <object
            data="/images/sonam-wangchuk-carried.svg"
            type="image/svg+xml"
            aria-label="Sonam Wangchuk being carried by Delhi Police at Jantar Mantar, July 18, 2026"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="broadsheet-hero-content">
          <div className="max-w-4xl">
            {/* Small label — off-register */}
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-bold tracking-widest"
                    style={{
                      fontFamily: 'var(--font-display)',
                      background: 'var(--color-accent)',
                      color: 'white',
                    }}>
                EXCLUSIVE
              </span>
              <span className="text-xs tracking-wide text-white/60">
                July 18, 2026 — 6:30 AM — Jantar Mantar
              </span>
            </div>

            {/* Poster headline — off-register, multi-line */}
            <h1 className="poster poster-lg text-white mb-4"
                style={{ lineHeight: '0.85' }}>
              <span className="off-register" data-text="THEY CARRIED">THEY CARRIED</span>
              <br />
              <span className="off-register off-register-heavy" data-text="A FASTING MAN" style={{ color: 'var(--color-accent)' }}>
                A FASTING MAN
              </span>
            </h1>

            {/* Hero sub — text stutter style */}
            <div className="text-stutter max-w-xl mb-8"
                 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2vw, 1.5rem)', color: 'white' }}>
              <span>Sonam Wangchuk. Day 21. He did not resist.</span>
              <span>Sonam Wangchuk. Day 21. He did not resist.</span>
            </div>

            {/* Meta bar */}
            <div className="flex flex-wrap gap-6 text-xs text-white/50 font-display tracking-widest uppercase">
              <span>Jantar Mantar, Delhi</span>
              <span>6:30 AM</span>
              <span>50+ Police Deployed</span>
              <span>21st Day of Hunger Strike</span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Link to="/action" className="btn-broadsheet btn-broadsheet-primary">
                TAKE ACTION
              </Link>
              <Link to="/timeline"
                    className="btn-broadsheet"
                    style={{ borderColor: 'white', color: 'white' }}>
                READ THE STORY
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator" style={{ color: 'white' }}>
          <span className="block mb-2">SCROLL</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="mx-auto">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="2"/>
            <circle cx="8" cy="8" r="2" fill="currentColor">
              <animate attributeName="cy" values="8;14;8" dur="2s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>
      </section>

      {/* ============================================================
           SECTION 2 — THE TALLY (marquee strip)
           ============================================================ */}
      <section className="broadsheet-section" style={{ padding: '2rem 0' }}
               aria-label="Movement tally">
        <div className="broadsheet-container">
          <div className="tally-strip" ref={tallyRef}>
            <div className="tally-strip-inner">
              {[...tally, ...tally].map((item, i) => (
                <span key={i} className="mx-8">
                  <span style={{ color: 'var(--color-accent)' }}>◆</span> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ============================================================
           SECTION 3 — THE MANIFESTO (off-register, stutter)
           ============================================================ */}
      <section className="broadsheet-section" id="manifesto"
               aria-labelledby="manifesto-title">
        <div className="broadsheet-container">
          <div className="max-w-5xl mx-auto">
            <span className="section-label">THE SIX DEMANDS</span>
            <h2 id="manifesto-title" className="poster mb-16">
              <span className="off-register" data-text="NON-NEGOTIABLE">NON-NEGOTIABLE</span>
              <br />
              <span style={{ color: 'var(--color-accent)' }}>NON-NEGOTIABLE</span>
            </h2>

            <div className="space-y-0">
              {demands.map((d) => (
                <article key={d.id} className="manifesto-item">
                  <div className="flex items-start gap-6 lg:gap-12">
                    <span className="manifesto-number">{d.id}/06</span>
                    <div className="flex-1">
                      <div className="text-stutter mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem, 2.5vw, 2.5rem)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.1 }}>
                        <span>{d.title}</span>
                        <span>{d.title}</span>
                      </div>
                      <p className="broadsheet-body text-stutter"
                         style={{ fontSize: 'clamp(0.875rem, 1.1vw, 1.125rem)' }}>
                        <span>{d.desc}</span>
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/movement" className="btn-broadsheet btn-broadsheet-primary btn-lg">
                Read the Full Manifesto →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           SECTION 4 — THE PHOTO (full-bleed treatment)
           ============================================================ */}
      <section className="broadsheet-section" style={{ padding: '4rem 0', background: 'var(--color-ink)' }}
               aria-label="The viral photo">
        <div className="broadsheet-container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="section-label" style={{ color: 'var(--color-gold)' }}>THE VIRAL PHOTO</span>
              <h2 className="poster text-white mb-6">
                <span className="off-register" data-text="50M VIEWS" style={{ color: 'white' }}>50M VIEWS</span>
                <br />
                <span style={{ color: 'var(--color-accent)' }}>IN 24 HOURS</span>
              </h2>
              <div className="broadsheet-body"
                   style={{ color: 'oklch(80% 0.005 25 / 0.85)' }}>
                <p className="mb-4">
                  The image of Sonam Wangchuk being carried away by six police officers — frail,
                  hands folded in namaste, wearing his traditional red Ladakhi pheran — reached
                  50 million screens within one day. It was shared by heads of state, human rights
                  organizations, and citizens across every continent.
                </p>
                <p>
                  The BBC called it "the image that defined India's summer." The Guardian said
                  "India's democracy is being tested." UN Rapporteurs cited it in an urgent
                  statement on protest rights in India.
                </p>
              </div>
              <div className="mt-8">
                <p className="caption">
                  Photo: Delhi Police remove Sonam Wangchuk from Jantar Mantar, July 18, 2026
                </p>
              </div>
            </div>

            <div className="relative">
              <div style={{
                border: '2px solid oklch(100% 0 0 / 0.15)',
                overflow: 'hidden',
              }}>
                <object
                  data="/images/sonam-wangchuk-carried.svg"
                  type="image/svg+xml"
                  aria-label="Sonam Wangchuk being carried by police"
                  className="w-full"
                  style={{ display: 'block' }}
                />
              </div>
              <div className="mt-3 caption text-center" style={{ color: 'oklch(60% 0.005 25)' }}>
                Photograph distributed by Associated Press / Manish Swarup
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           SECTION 5 — THE COUNT (hand-tallied numbers)
           ============================================================ */}
      <section className="broadsheet-section" id="tally"
               aria-labelledby="tally-title">
        <div className="broadsheet-container">
          <div className="max-w-5xl mx-auto text-center">
            <span className="section-label">THE COUNT</span>
            <h2 id="tally-title" className="poster mb-12">
              <span className="off-register" data-text="KEPT HONEST">KEPT HONEST</span>
              <br />
              <span style={{ color: 'var(--color-accent)' }}>NO NUMBER WE DIDN'T COUNT</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8">
              {[
                { value: '21+', label: 'Days of hunger strike' },
                { value: '10,000+', label: 'Marched on Parliament' },
                { value: '50M+', label: 'Photo views in 24h' },
                { value: '200+', label: 'Detained and released' },
                { value: '15+', label: 'Countries in solidarity' },
                { value: '500K+', label: 'Petition signatures' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="hand-tally">{s.value}</div>
                  <div className="hand-tally-label">{s.label}</div>
                </div>
              ))}
            </div>

            <p className="caption" style={{ maxWidth: '40rem', margin: '0 auto' }}>
              Figures are kept honest — no number we didn't count ourselves.
              Records maintained by CJP volunteer teams at Jantar Mantar.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
           SECTION 6 — CALL TO ACTION
           ============================================================ */}
      <section className="broadsheet-section"
               style={{ background: 'var(--color-ink)' }}
               aria-label="Take action">
        <div className="broadsheet-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="poster text-white mb-6">
              <span className="off-register" data-text="A REMINDER" style={{ color: 'white' }}>
                A REMINDER
              </span>
              <br />
              <span style={{ color: 'var(--color-accent)' }}>NOT A SIGN-UP</span>
            </h2>
            <p className="broadsheet-body-lg mb-10"
               style={{ color: 'oklch(80% 0.005 25 / 0.85)', maxWidth: '40rem', margin: '0 auto 2.5rem' }}>
              This is not a mailing list. This is not a newsletter. This is a stand.
              Every action — a share, a donation, a phone call — writes the next sentence
              in this movement's story.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/action" className="btn-broadsheet btn-broadsheet-primary btn-lg">
                TAKE ACTION NOW
              </Link>
              <Link to="/donate"
                    className="btn-broadsheet btn-lg"
                    style={{ borderColor: 'white', color: 'white' }}>
                DONATE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           SECTION 7 — COLOPHON
           ============================================================ */}
      <section className="broadsheet-section" style={{ padding: '3rem 0' }}>
        <div className="broadsheet-container">
          <div className="max-w-4xl mx-auto">
            <div className="divider" />
            <div className="colophon">
              <p>
                <strong>Protest Nº 001</strong> — Stand With Sonam Wangchuk.
                Set in <strong>Big Shoulders Display</strong> &amp; <strong>Fraunces</strong>.
                Printed two-pass, off-register on purpose.
                <br />
                Free to copy, free to post, free to share. In solidarity with the hunger strikers
                at Jantar Mantar, New Delhi. July 2026.
              </p>
              <p className="mt-2">
                <strong>Info:</strong> sonamwangchuk.com &middot;
                <Link to="/action" className="underline hover:no-underline" style={{ color: 'var(--color-accent)' }}> Take Action</Link>
                &middot;
                <Link to="/donate" className="underline hover:no-underline" style={{ color: 'var(--color-accent)' }}> Donate</Link>
                &middot;
                <a href="https://twitter.com/StandWithSonam" target="_blank" rel="noopener noreferrer"
                   className="underline hover:no-underline" style={{ color: 'var(--color-accent)' }}> Twitter / X</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}