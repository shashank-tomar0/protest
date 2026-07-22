import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/* ===================================================================
   TIMELINE — "THE CHRONOLOGY"
   Digital broadsheet / 21-day format
   Large date watermarks | short daily entries | newsprint layout
   =================================================================== */

const days = [
  {
    day: 1,
    date: '1988',
    label: 'The Seed',
    body: 'Sonam Wangchuk, age 22, founds SECMOL (Students\' Educational and Cultural Movement of Ladakh) on the banks of the Indus River. The campus is built entirely with solar power and sun-dried mud bricks — a working model of what education could be: local, practical, and sustainable. Over three decades, this single institution transforms Ladakh\'s educational landscape.',
  },
  {
    day: 2,
    date: '2009',
    label: 'A Character, Not a Person',
    body: 'Aamir Khan\'s film 3 Idiots releases, featuring Phunsukh Wangdu — a character inspired by Sonam Wangchuk. The film becomes the highest-grossing Bollywood film of its time, introducing millions to the idea that education should be about creativity, not rote memorisation. Wangchuk remains humble: "The film is fiction. The struggle is real."',
  },
  {
    day: 3,
    date: '2013',
    label: 'Building Glaciers',
    body: 'Wangchuk invents the Ice Stupa — artificial glaciers that store winter meltwater in conical ice mounds for spring irrigation. The innovation addresses water scarcity caused by glacial melt in the Himalayas. Each Ice Stupa stores millions of litres of water, costs virtually nothing to build, and is managed by local communities.',
  },
  {
    day: 4,
    date: '2016',
    label: 'Global Recognition',
    body: 'The Ice Stupa project wins the Rolex Awards for Enterprise. Wangchuk travels to Geneva to accept the award. The technology is later replicated in Switzerland, Mongolia, and Chile. A Ladakhi solution to a global problem — proving that grassroots innovation can outperform top-down policy.',
  },
  {
    day: 5,
    date: '5 Aug 2019',
    label: 'The Political Earthquake',
    body: 'The Indian government abrogates Article 370, stripping Jammu & Kashmir of special status. Ladakh is separated into a Union Territory — but without a legislative assembly. For Ladakh\'s 290,000 people, this means losing democratic representation. Mass protests erupt across Leh and Kargil. The demand for statehood is born.',
  },
  {
    day: 6,
    date: '2024',
    label: 'The Cockroach Rises',
    body: 'Engineer-activist Abhijit Dipke founds the Cockroach Janata Party — not a political party but a citizen platform. No membership fees, no high command, no ticket distribution. The name is deliberate: cockroaches have survived 320 million years. The message: this movement will survive whatever the establishment throws at it.',
  },
  {
    day: 7,
    date: '29 Jun 2026',
    label: 'One Man, One Fast',
    body: 'Sonam Wangchuk begins an indefinite hunger strike at Jantar Mantar, New Delhi. His demands: full implementation of NEP 2020, Ladakh statehood with legislative assembly, and protection of democratic rights. He is accompanied by a small group of supporters from SECMOL and Ladakhi student organisations. The nation barely notices.',
  },
  {
    day: 8,
    date: '5 Jul 2026',
    label: 'The Movement Grows',
    body: 'CJP founder Abhijit Dipke arrives at Jantar Mantar with hundreds of supporters. The protest grows from dozens to thousands. Student unions from JNU, Delhi University, and Jamia Millia Islamia announce solidarity. The first wave of arrests begins — 47 students detained under the Public Safety Act. #StandWithSonam trends nationally.',
  },
  {
    day: 9,
    date: '8 Jul 2026',
    label: 'Health Falters',
    body: 'Medical reports show Wangchuk has lost 7 kgs. Blood pressure drops to 103/68. Doctors from AIIMS warn of irreversible organ damage if the fast continues beyond 21 days. The nation holds its breath. Wangchuk\'s response: "I am fasting for the children of India. My body is not the issue."',
  },
  {
    day: 10,
    date: '10 Jul 2026',
    label: 'Nation Wakes Up',
    body: 'Protests erupt across India: Leh (10,000+), Kargil (5,000+), Mumbai (3,000+), Bangalore (2,000+), Chennai (1,500+). The hunger strike has become a national movement. Opposition MPs demand a parliamentary discussion. The Home Ministry remains silent. Solidarity events begin in London, New York, and Toronto.',
  },
  {
    day: 11,
    date: '12 Jul 2026',
    label: 'Global Attention',
    body: 'International media picks up the story. BBC, Al Jazeera, and The Guardian run features on Wangchuk\'s hunger strike. UN Special Rapporteurs express concern. The Indian diaspora organises protests in 15 countries. What started as one man\'s fast is now an international story.',
  },
  {
    day: 12,
    date: '14 Jul 2026',
    label: 'Two Weeks In',
    body: 'Wangchuk has now fasted for 16 days. His weight has dropped to 56 kg. His wife Gitanjali Angmo joins him at the protest site, issuing emotional appeals. The government has not responded to any of the six demands. Pressure builds. The stalemate deepens.',
  },
  {
    day: 13,
    date: '16 Jul 2026',
    label: 'The Line Holds',
    body: 'Over 200 arrests nationwide. Student hunger strikers Neha, Manish, and Aameen join Wangchuk in the fast. The government deploys additional police forces to Jantar Mantar. Rumours of a crackdown circulate. Activists prepare legal defences. The air is thick with anticipation.',
  },
  {
    day: 14,
    date: '17 Jul 2026',
    label: 'The Calm Before',
    body: 'A relatively quiet day at Jantar Mantar. Wangchuk meets with his legal team. Medical checks show his condition worsening. Supporters bring blankets and water for the overnight vigil. No one knows what tomorrow will bring. The silence is ominous.',
  },
  {
    day: 15,
    date: '18 Jul 2026',
    label: 'The Raid — 6:30 AM',
    body: 'In a pre-dawn operation, over 50 Delhi Police personnel forcibly remove Sonam Wangchuk from the protest site. Wangchuk — weak from 21 days of fasting — is carried away by six officers. He does not resist. He does not shout. Witnesses report he simply said: "I was fasting for the children of India."',
  },
  {
    day: 16,
    date: '18 Jul 2026',
    label: 'Forced Hospitalisation',
    body: 'Wangchuk is taken to AIIMS Delhi where he is administered IV fluids and nutrients against his will. His legal team files an urgent habeas corpus petition in the Delhi High Court, arguing that forced medical treatment violates his right to bodily autonomy. AIIMS doctors report his condition as "critical but stable."',
  },
  {
    day: 17,
    date: '19 Jul 2026',
    label: 'Solidarity Refuses to Die',
    body: 'Abhijit Dipke announces he will continue the hunger strike. Students Neha, Manish, and Aameen — now on Day 7 of their own fast — refuse to back down. "We will not leave until Sonam is free and our demands are met." The hunger strike continues, even without its leader.',
  },
  {
    day: 18,
    date: '19 Jul 2026',
    label: 'The Opposition Speaks',
    body: 'Opposition parties — INC, AAP, CPI(M), TMC, DMK, NCP, SP — demand a statement from the Prime Minister in Parliament. Privilege motions moved against the Home Minister. Parliament adjourned twice amid protests. The political establishment can no longer ignore the movement.',
  },
  {
    day: 19,
    date: '20 Jul 2026',
    label: 'Chalo Sansad',
    body: 'Organised by CJP and supported by 30+ student unions, the "Chalo Sansad" march draws over 10,000 peaceful protesters from Jantar Mantar to Parliament. Police deploy tear gas and water cannons. Over 200 protesters are detained. The marchers do not retreat. The message is clear: we will be heard.',
  },
  {
    day: 20,
    date: '21 Jul 2026',
    label: 'The Aftermath',
    body: 'Legal battles escalate. Habeas corpus petitions filed in three High Courts. The Supreme Court is petitioned. International human rights organisations call for an independent investigation. Global protests continue in 15+ countries. The movement has become unstoppable.',
  },
  {
    day: 21,
    date: '19 Jul 2026',
    label: 'The Image That Defined a Movement',
    body: 'The photograph of police officers carrying a fasting, emaciated Sonam Wangchuk spreads globally within hours. 50 million views on X/Twitter within 24 hours. BBC, The Guardian, Al Jazeera, The New York Times, and Le Monde lead with the story. The image of six officers carrying one man who refused to give up becomes the defining symbol of state overreach in modern India. It is not a photograph. It is a question: what kind of democracy does this?',
  },
]

/* ===================================================================
   PAGE
   =================================================================== */
export default function Timeline() {
  const [expandedDay, setExpandedDay] = useState(null)

  return (
    <article style={{ backgroundColor: 'var(--color-paper)' }}>
      {/* ===== HERO ===== */}
      <header className="broadsheet-hero" style={{ minHeight: '70vh' }}>
        <div className="broadsheet-hero__content">
          <p
            className="font-display text-sm font-bold uppercase tracking-widest mb-6"
            style={{ color: 'var(--color-accent)' }}
          >
            The chronology
          </p>

          <h1
            className="broadsheet-hero__headline off-register"
            data-text="21 DAYS"
          >
            21 DAYS
          </h1>

          <p className="broadsheet-hero__subhead">
            That changed everything<br />
            <span style={{ color: 'var(--color-accent)' }}>1988 &mdash; 2026</span>
          </p>

          <p className="font-body mt-8 max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--color-muted)' }}>
            From the founding of SECMOL to the image that shook the world. Each day marks a moment
            in the journey of a movement that grew from one man&rsquo;s vision into a nation&rsquo;s reckoning.
          </p>

          <div className="mt-10">
            <a href="#day-1" className="btn btn-primary btn-lg">
              Begin at Day 01
            </a>
          </div>
        </div>
        <div className="broadsheet-hero__scroll" aria-hidden="true">&#8595;</div>
      </header>

      {/* ===== COUNT ===== */}
      <div
        className="text-center py-8 border-t border-b"
        style={{
          backgroundColor: 'var(--color-paper-alt)',
          borderColor: 'var(--color-rule)',
        }}
      >
        <span className="hand-tally" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
          38 YEARS
        </span>
        <p className="font-display text-sm uppercase tracking-widest mt-2" style={{ color: 'var(--color-accent)' }}>
          From SECMOL to the world stage
        </p>
      </div>

      {/* ===== 21 DAYS ===== */}
      {days.map((entry) => {
        const isExpanded = expandedDay === entry.day
        return (
          <section
            key={entry.day}
            id={`day-${entry.day}`}
            className="broadsheet-section scroll-mt-24"
            style={{
              backgroundColor: entry.day === 21 ? 'var(--color-paper-alt)' : 'var(--color-paper)',
              borderBottom: '1px solid',
              borderColor: 'var(--color-rule)',
            }}
          >
            <span className="broadsheet-section__number" aria-hidden="true" style={{ fontSize: 'clamp(8rem, 25vw, 22rem)' }}>
              {String(entry.day).padStart(2, '0')}
            </span>

            <div className="broadsheet-section__content max-w-4xl mx-auto">
              {/* Day header */}
              <div className="flex items-baseline gap-4 mb-4">
                <span
                  className="font-display font-black tracking-tighter leading-none"
                  style={{
                    fontSize: 'clamp(5rem, 12vw, 10rem)',
                    color: 'oklch(50% 0.22 25 / 0.08)',
                    lineHeight: '0.85',
                  }}
                  aria-hidden="true"
                >
                  {String(entry.day).padStart(2, '0')}
                </span>
                <div>
                  <time
                    className="font-display text-sm font-bold uppercase tracking-widest"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    DAY {String(entry.day).padStart(2, '0')} &mdash; {entry.date}
                  </time>
                  <h2
                    className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mt-1"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {entry.label}
                  </h2>
                </div>
              </div>

              {/* Body */}
              <div className="max-w-measure">
                <p className="font-body leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {entry.body}
                </p>
              </div>

              {/* Viral photo callout for Day 21 */}
              {entry.day === 21 && (
                <figure className="mt-10 border-2 p-4" style={{ borderColor: 'var(--color-accent)', backgroundColor: 'var(--color-paper)' }}>
                  <div
                    className="aspect-[16/9] flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: 'oklch(12% 0.012 25)',
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'g\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23g)\' opacity=\'0.3\'/%3E%3C/svg%3E")',
                      backgroundRepeat: 'repeat',
                      backgroundSize: '256px 256px',
                    }}
                  >
                    <span
                      className="font-display font-black uppercase text-center px-4"
                      style={{
                        fontSize: 'clamp(0.8rem, 3vw, 2rem)',
                        color: 'var(--color-accent)',
                        lineHeight: '1.2',
                        opacity: 0.9,
                      }}
                    >
                      THE IMAGE<br />
                      <span style={{ color: 'var(--color-paper)', fontSize: '0.6em', display: 'block', marginTop: '0.5rem' }}>
                        Six officers carrying one fasting man
                      </span>
                      <span style={{ color: 'var(--color-paper)', fontSize: '0.35em', display: 'block', marginTop: '0.25rem', opacity: 0.6 }}>
                        Delhi Police at Jantar Mantar &middot; 6:30 AM &middot; July 18, 2026
                      </span>
                    </span>
                  </div>
                  <figcaption className="font-body text-xs text-center" style={{ color: 'var(--color-muted)' }}>
                    The photograph that spread to 50 million screens in 24 hours. BBC, The Guardian, Al Jazeera, The New York Times, Le Monde.
                  </figcaption>
                </figure>
              )}

              {/* Navigation arrows between days */}
              <div className="flex justify-between mt-10 pt-6 border-t" style={{ borderColor: 'var(--color-rule)' }}>
                {entry.day > 1 ? (
                  <a href={`#day-${entry.day - 1}`} className="btn btn-sm btn-ghost">
                    &larr; Day {String(entry.day - 1).padStart(2, '0')}
                  </a>
                ) : <span />}
                {entry.day < 21 ? (
                  <a href={`#day-${entry.day + 1}`} className="btn btn-sm btn-ghost">
                    Day {String(entry.day + 1).padStart(2, '0')} &rarr;
                  </a>
                ) : <span />}
              </div>
            </div>
          </section>
        )
      })}

      {/* ===== FINAL CTA ===== */}
      <section className="broadsheet-section" style={{ backgroundColor: 'var(--color-paper-alt)' }}>
        <div className="broadsheet-section__content max-w-3xl mx-auto text-center">
          <hr className="broadsheet-divider" />
          <h2 className="broadsheet-section__title">HISTORY IS BEING WRITTEN RIGHT NOW</h2>
          <p className="font-body leading-relaxed max-w-measure mx-auto mb-8" style={{ color: 'var(--color-muted)' }}>
            The next chapter of this timeline depends on what you do today.
            Every share, every donation, every voice adds a page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/action" className="btn btn-primary btn-lg">
              Be part of the next chapter
            </Link>
            <Link to="/donate" className="btn btn-lg">
              Fuel the movement
            </Link>
          </div>
        </div>
      </section>

      {/* ===== COLOPHON ===== */}
      <footer className="colophon">
        <p>Set in Fraunces &amp; Big Shoulders Display. Days numbered as hand-set type on a Washington hand press.</p>
        <p>This chronology is a living record. The final entry has not yet been written. <strong>#StandWithSonam</strong></p>
      </footer>
    </article>
  )
}
