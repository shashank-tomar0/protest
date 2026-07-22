import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

/* ===================================================================
   MOVEMENT — "THE MANIFESTO"
   Digital broadsheet / protest poster aesthetic
   numbered articles | off-register headers | text stutter
   hand-tallied years | pull quotes | watermark section numbers
   =================================================================== */

const chapters = [
  {
    id: 'origins',
    title: 'ORIGINS',
    subtitle: 'From SECMOL to the national stage',
    location: 'Leh, Ladakh',
    year: '1988',
    pullQuote: 'The classroom is not four walls. It is the land, the river, and the people who live alongside it.',
    pullQuoteAttribution: 'Sonam Wangchuk',
    body: [
      'Sonam Wangchuk founded SECMOL (Students\' Educational and Cultural Movement of Ladakh) in 1988 at the age of 22. The organisation was born from a radical idea: education should be rooted in local culture, practical skills, and environmental consciousness — not rote memorisation of textbooks designed for urban India.',
      'SECMOL\'s campus on the banks of the Indus River became a living laboratory. Built entirely with solar power, mud bricks, and local materials, it demonstrated that world-class education can happen anywhere. Over three decades, SECMOL trained hundreds of teachers, developed alternative curricula, and helped thousands of Ladakhi students pass board exams that government schools had failed to prepare them for.',
    ],
    aside: 'The SECMOL campus is net-zero energy, built entirely from sun-dried mud bricks and solar power — a working proof that sustainability and quality education are not competing priorities.',
  },
  {
    id: 'climate',
    title: 'CLIMATE ACTIVISM',
    subtitle: 'Protecting the Third Pole',
    location: 'Himalayan Region',
    year: '2013',
    pullQuote: 'When the glaciers go, the rivers go. When the rivers go, a billion people go thirsty. This is not an environmental issue — it is a survival issue.',
    pullQuoteAttribution: 'Sonam Wangchuk',
    body: [
      'The Himalayan region — often called the "Third Pole" for its massive ice reserves — is warming faster than the global average. Ladakh\'s glaciers, which feed the Indus River system, have been retreating at alarming rates. For Wangchuk, this was never an abstract environmental issue — it was an existential threat to his homeland.',
      'The Ice Stupa project (2013) was his first major climate intervention. The concept is elegantly simple: freeze winter stream water into conical ice mounds that melt slowly in spring, providing water for crops precisely when needed. Each Ice Stupa stores millions of litres of water, costs virtually nothing to build, and is managed entirely by local communities.',
    ],
    aside: '50+ Ice Stupas built across Ladakh. Replicated in Switzerland, Mongolia, and Chile. One billion people depend on water from Himalayan river systems.',
  },
  {
    id: 'statehood',
    title: 'LADAKH STATEHOOD',
    subtitle: 'Fight for constitutional protections',
    location: 'Leh, Kargil, Delhi',
    year: '2019',
    pullQuote: 'A Union Territory without a legislature is not autonomy — it is administration by bureaucrats who have never set foot in Ladakh.',
    pullQuoteAttribution: 'Sonam Wangchuk',
    body: [
      'On August 5, 2019, the Indian government abrogated Article 370, the constitutional provision that granted special status to Jammu and Kashmir. Simultaneously, Ladakh was separated into a Union Territory — but critically, without a legislative assembly. For Ladakh\'s 290,000 people, this meant losing democratic representation while being governed by a centrally-appointed bureaucrat.',
      'The move triggered massive protests across Leh and Kargil. Over 10,000 people marched through the streets — the largest protests in Ladakh\'s history. Since 2019, the movement has been led by a coalition of civil society groups, student unions, and religious organisations — with Wangchuk emerging as one of its most prominent voices.',
    ],
    aside: 'Five years and counting. Over 10,000 protested in Leh. Ladakh remains the only Union Territory in India without a legislature.',
  },
  {
    id: 'education',
    title: 'EDUCATION REFORM',
    subtitle: 'The thread that runs through everything',
    location: 'National',
    year: '2020',
    pullQuote: 'A nation that closes 100,000 schools in three years is not a nation investing in its future. It is a nation that has given up on its children.',
    pullQuoteAttribution: 'Sonam Wangchuk',
    body: [
      'Education reform is the thread that runs through every phase of Wangchuk\'s life. From founding SECMOL in 1988 to his hunger strike at Jantar Mantar in 2026, the demand for meaningful, accessible, culturally-rooted education has been his central cause.',
      'The National Education Policy 2020 was hailed as a progressive framework. But three years after its announcement, implementation has been abysmal. Over 100,000 schools have closed since 2020, many in rural and tribal areas. Approximately 50,000 teacher vacancies remain unfilled. Wangchuk\'s hunger strike was triggered by this failure — the gap between policy and reality.',
    ],
    aside: 'NEP 2020 promised sweeping reform. Since its announcement, over 100,000 schools have closed. Teacher vacancies exceed 50,000.',
  },
  {
    id: 'cjp',
    title: 'THE COCKROACH JANATA PARTY',
    subtitle: 'A people\'s platform, not a political party',
    location: 'National',
    year: '2024',
    pullQuote: 'We are called cockroaches because we will survive every attempt to crush us. We don\'t ask for your permission. We demand your accountability.',
    pullQuoteAttribution: 'Abhijit Dipke, CJP Founder',
    body: [
      'The Cockroach Janata Party was founded by activist-engineer Abhijit Dipke as a radical experiment in citizen-led politics. It is not a political party in the traditional sense — no membership fees, no hierarchical structure, no ticket distribution, no high command. It is a platform for ordinary citizens to hold the education system and political establishment accountable.',
      'The name "Cockroach" is deliberately provocative. It draws on the insect\'s legendary resilience — surviving 320 million years, nuclear radiation, and every extinction event. The message is clear: this movement will survive whatever the establishment throws at it. When Wangchuk began his hunger strike on June 29, 2026, the CJP was the first organisation to mobilise.',
    ],
    aside: 'No membership fees. No high command. No ticket system. Everyone who shows up belongs. Founded in 2024, now one of the fastest-growing citizen platforms in India.',
  },
  {
    id: 'rights',
    title: 'DEMOCRATIC RIGHTS',
    subtitle: 'Defending the right to protest',
    location: 'National',
    year: 'Ongoing',
    pullQuote: 'When they carry a fasting man like a criminal, they reveal not his weakness but their own fear. A democracy that fears peaceful protest has ceased to be a democracy.',
    pullQuoteAttribution: 'Sonam Wangchuk',
    body: [
      'The forcible removal of Sonam Wangchuk from Jantar Mantar on July 18, 2026, was not an isolated incident — it is part of a broader pattern of crackdown on peaceful protest and dissent in India. The misuse of the Public Safety Act, the Unlawful Activities (Prevention) Act, and preventive detention laws has escalated dramatically.',
      'During the Jantar Mantar protests alone, over 200 protesters were detained. Student hunger strikers — Neha, Manish, and Aameen — were arrested and later released. The movement demands: immediate release of all political prisoners, repeal of the draconian provisions of PSA and UAPA, judicial oversight of preventive detention, and protection of the fundamental rights to assembly, speech, and expression.',
    ],
    aside: 'Over 200 protesters detained during the Jantar Mantar protests. Preventive detention laws continue to be used against peaceful demonstrators.',
  },
]

const inlineTimeline = [
  { year: '1988', event: 'SECMOL founded in Leh' },
  { year: '2009', event: '3 Idiots releases; Wangchuk inspires Phunsukh Wangdu' },
  { year: '2013', event: 'First Ice Stupa prototype built' },
  { year: '2016', event: 'Rolex Award for Enterprise' },
  { year: '2019', event: 'Article 370 abrogated; Ladakh statehood demand begins' },
  { year: '2024', event: 'Cockroach Janata Party founded' },
  { year: '29 Jun 2026', event: 'Wangchuk begins hunger strike at Jantar Mantar' },
  { year: '18 Jul 2026', event: 'Forcible removal by Delhi Police' },
  { year: '20 Jul 2026', event: 'Chalo Sansad march — 10,000+ protesters' },
  { year: 'Ongoing', event: 'Legal battles, global advocacy, hunger strike continues' },
]

const keyFigures = [
  {
    name: 'Sonam Wangchuk',
    role: 'Education reformer, climate activist, SECMOL founder',
    desc: 'Began an indefinite hunger strike at Jantar Mantar on June 29, 2026. Forcibly removed by Delhi Police on July 18 after 21 days of fasting.',
  },
  {
    name: 'Abhijit Dipke',
    role: 'Founder, Cockroach Janata Party',
    desc: 'Engineer-turned-activist who founded CJP as a citizen-led platform. Organised the Chalo Sansad march on July 20, 2026.',
  },
  {
    name: 'Gitanjali J. Angmo',
    role: 'Wangchuk\'s wife and activist',
    desc: 'Joined her husband at Jantar Mantar on Day 11 of his hunger strike. Detained during the July 18 police action.',
  },
  {
    name: 'Neha, Manish & Aameen',
    role: 'Student hunger strikers',
    desc: 'Three young activists who continue the indefinite hunger strike even after Wangchuk\'s removal. Over 21 days of fasting.',
  },
]

/* ===================================================================
   COMPONENTS
   =================================================================== */

function SectionNumber({ num }) {
  return (
    <span className="broadsheet-section__number" aria-hidden="true">
      {String(num).padStart(2, '0')}
    </span>
  )
}

function ManifestoArticle({ chapter, index }) {
  return (
    <section
      id={chapter.id}
      className="broadsheet-section scroll-mt-24"
      style={{ backgroundColor: index % 2 === 0 ? 'var(--color-paper)' : 'var(--color-paper-alt)' }}
    >
      <SectionNumber num={index + 1} />

      <div className="broadsheet-section__content max-w-5xl mx-auto">
        {/* Location + year metadata */}
        <div className="flex items-center gap-4 mb-6" style={{ color: 'var(--color-muted)' }}>
          <span className="font-display text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>
            {chapter.year}
          </span>
          <span className="w-px h-4" style={{ backgroundColor: 'var(--color-rule)' }} />
          <span className="font-body text-xs font-medium">{chapter.location}</span>
        </div>

        {/* Off-register headline */}
        <h2
          className="broadsheet-section__title off-register"
          data-text={chapter.title}
        >
          {chapter.title}
        </h2>
        <p className="font-body text-lg mb-10" style={{ color: 'var(--color-muted)' }}>
          {chapter.subtitle}
        </p>

        {/* Pull quote */}
        <blockquote className="pull-quote">
          {chapter.pullQuote}
          <footer className="pull-quote__attribution">&mdash; {chapter.pullQuoteAttribution}</footer>
        </blockquote>

        {/* Body text */}
        <div className="space-y-5 max-w-measure">
          {chapter.body.map((paragraph, pi) => (
            <p key={pi} className="font-body leading-relaxed" style={{ color: pi === 0 ? 'var(--color-ink)' : 'var(--color-muted)' }}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Aside callout */}
        <aside
          className="mt-10 p-5 border-l-4 max-w-sm"
          style={{
            borderColor: 'var(--color-accent)',
            backgroundColor: 'oklch(50% 0.22 25 / 0.04)',
          }}
        >
          <p className="font-display text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--color-accent)' }}>
            Note
          </p>
          <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
            {chapter.aside}
          </p>
        </aside>

        {/* Section divider (except last) */}
        {index < chapters.length - 1 && <hr className="broadsheet-divider" />}
      </div>
    </section>
  )
}

/* ===================================================================
   PAGE
   =================================================================== */
export default function Movement() {
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )

    chapters.forEach((ch) => {
      const el = document.getElementById(ch.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <article style={{ backgroundColor: 'var(--color-paper)' }}>
      {/* ===== HERO ===== */}
      <header className="broadsheet-hero" style={{ minHeight: '80vh' }}>
        <div className="broadsheet-hero__content">
          <p
            className="font-display text-sm font-bold uppercase tracking-widest mb-6"
            style={{ color: 'var(--color-accent)' }}
          >
            A long document
          </p>

          <h1
            className="broadsheet-hero__headline off-register"
            data-text="THE MANIFESTO"
          >
            THE MANIFESTO
          </h1>

          <p className="broadsheet-hero__subhead">
            Six chapters &middot; Four decades &middot; One movement<br />
            From a Ladakhi school in 1988 to the steps of Parliament in 2026
          </p>

          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link to="/action" className="btn btn-primary btn-lg">
              Take action now
            </Link>
            <a href="#contents" className="btn btn-lg">
              Read the manifesto
            </a>
          </div>
        </div>

        <div className="broadsheet-hero__scroll" aria-hidden="true">&#8595;</div>
      </header>

      {/* ===== LEDE ===== */}
      <section className="broadsheet-section" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="broadsheet-section__content max-w-5xl mx-auto">
          <p className="font-body text-lg font-medium mb-8" style={{ color: 'var(--color-muted)' }}>
            Dear reader,
          </p>
          <p className="font-body text-xl leading-relaxed max-w-measure" style={{ color: 'var(--color-ink)' }}>
            <span className="float-left text-6xl leading-none font-display font-bold mr-3 mt-1 select-none" style={{ color: 'var(--color-accent)' }}>T</span>
            his is a story about an engineer who refused to accept that a classroom needs four walls, a climate activist who built glaciers where they were melting, a hunger striker who was carried away like a criminal after twenty-one days of fasting for the children of India, and a movement that refuses to end.
          </p>
          <p className="font-body leading-relaxed max-w-measure mt-6" style={{ color: 'var(--color-muted)' }}>
            From a remote Ladakhi school in 1988 to the steps of Parliament in 2026, this is not a political campaign. It is a citizen-led reckoning with the questions India has avoided for too long: Who gets educated? Who gets heard? Who gets to decide what development looks like in the world&#39;s most fragile mountain ecosystem?
          </p>

          {/* Document metadata */}
          <div className="flex items-center gap-4 mt-10 pt-6 border-t" style={{ borderColor: 'var(--color-rule)' }}>
            <span className="font-body text-xs font-medium" style={{ color: 'var(--color-muted)' }}>
              A long document
            </span>
            <span className="w-px h-3" style={{ backgroundColor: 'var(--color-rule)' }} />
            <span className="font-body text-xs" style={{ color: 'var(--color-muted)' }}>
              Six chapters &middot; Four decades &middot; One movement
            </span>
          </div>
        </div>
      </section>

      {/* ===== TABLE OF CONTENTS ===== */}
      <nav
        id="contents"
        className="anchor-nav"
        aria-label="Chapter navigation"
        style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: 'var(--color-paper)' }}
      >
        {chapters.map((ch, i) => (
          <a
            key={ch.id}
            href={`#${ch.id}`}
            className="anchor-nav__link"
            aria-current={activeSection === ch.id ? 'page' : undefined}
          >
            {String(i + 1).padStart(2, '0')}. {ch.title}
          </a>
        ))}
      </nav>

      {/* ===== NARRATIVE CHAPTERS ===== */}
      {chapters.map((chapter, index) => (
        <ManifestoArticle key={chapter.id} chapter={chapter} index={index} />
      ))}

      {/* ===== INLINE TIMELINE ===== */}
      <section className="broadsheet-section" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="broadsheet-section__content max-w-5xl mx-auto">
          <h2 className="broadsheet-section__title off-register" data-text="CHRONICLE">
            CHRONICLE
          </h2>
          <hr className="broadsheet-divider" />

          <div className="max-w-2xl mx-auto space-y-0">
            {inlineTimeline.map((item, i) => (
              <div
                key={item.year + item.event}
                className="flex items-start gap-6 py-4 border-t"
                style={{ borderColor: 'var(--color-rule)' }}
              >
                <span className="hand-tally shrink-0" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)' }}>
                  {item.year}
                </span>
                <p className="font-body leading-relaxed pt-1" style={{ color: 'var(--color-muted)' }}>
                  {item.event}
                </p>
                {i < inlineTimeline.length - 1 && (
                  <span className="hidden sm:block flex-shrink-0 w-3 h-3 rounded-full mt-2" style={{ backgroundColor: i < 7 ? 'var(--color-accent-alpha)' : 'var(--color-accent)' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KEY FIGURES (simple name cards) ===== */}
      <section className="broadsheet-section" style={{ backgroundColor: 'var(--color-paper-alt)' }}>
        <div className="broadsheet-section__content max-w-5xl mx-auto">
          <h2 className="broadsheet-section__title off-register" data-text="VOICES">
            VOICES
          </h2>
          <p className="font-body leading-relaxed max-w-measure mb-10" style={{ color: 'var(--color-muted)' }}>
            Ordinary citizens doing extraordinary things. These are the people leading from the front.
          </p>

          <div className="principle-grid">
            {keyFigures.map((figure) => (
              <div key={figure.name} className="principle-grid__card">
                <p className="font-display text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-accent)' }}>
                  {figure.role}
                </p>
                <h3 className="principle-grid__card-title">{figure.name}</h3>
                <p className="principle-grid__card-text">{figure.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SIGNOFF ===== */}
      <section className="broadsheet-section" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="broadsheet-section__content max-w-5xl mx-auto">
          <div className="max-w-measure mx-auto text-center">
            <hr className="broadsheet-divider" />

            <p className="font-display text-xl font-bold mb-6" style={{ color: 'var(--color-ink)' }}>
              This movement runs on people, not parties.
            </p>

            <div className="font-body leading-relaxed space-y-4" style={{ color: 'var(--color-muted)' }}>
              <p>
                No billionaire donors. No corporate sponsors. No political machinery. Just citizens who refuse to stay silent.
              </p>

              <p>
                <span className="text-stutter" data-stutter="History does not remember those who stayed silent.">
                  History does not remember those who stayed silent.
                </span>
                It remembers those who showed up. The movement needs you. Not tomorrow. Today.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 pt-6 border-t" style={{ borderColor: 'var(--color-rule)' }}>
              <p className="font-body font-medium" style={{ color: 'var(--color-ink)' }}>
                With resolve,
              </p>
              <p className="font-display font-bold text-xl tracking-tight italic mt-2" style={{ color: 'var(--color-accent)' }}>
                The Movement
              </p>
              <p className="font-body text-xs mt-1" style={{ color: 'var(--color-muted)' }}>
                July 2026
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-10">
              <Link to="/action" className="btn btn-primary btn-lg">
                Take action now
              </Link>
              <Link to="/timeline" className="btn btn-lg">
                View the full chronology
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COLOPHON ===== */}
      <footer className="colophon">
        <p>Set in Fraunces &amp; Big Shoulders Display. Printed two-pass, off-register on purpose.</p>
        <p>This is a living document. The movement continues. <strong>#StandWithSonam</strong></p>
      </footer>
    </article>
  )
}
