import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

/* ===================================================================
   TAKE ACTION — "THE TOOLS"
   Workbench / workshop aesthetic
   Sticky left nav | minimal tool cards | monospace copy-paste
   Simple inline forms | reference cards
   =================================================================== */

const samplePosts = [
  'After 21 days of hunger strike for education reform & Ladakh rights, Sonam Wangchuk was forcibly removed by Delhi Police at 6:30 AM on July 18. This is not how a democracy treats a peaceful protester. #StandWithSonam #JusticeForSonam',
  '10,000+ marched to Parliament on July 20 demanding justice for Sonam Wangchuk. Tear gas & water cannons couldn\'t stop them. The Cockroach Janata Party\'s 6 demands: Education reform, Ladakh statehood, democratic rights, environmental justice, healthcare, jobs. #ChaloSansad #CJP',
  'They carried a fasting man like a criminal. He didn\'t resist. He didn\'t shout. He just kept fasting — for our children\'s education, for Ladakh\'s future, for democracy itself. This image will define our times. Share it. #SonamWangchuk',
  'Sonam Wangchuk weighed 54 kg when forcibly removed after 21 days of fasting. Blood pressure: 103/68. Doctors warned of organ failure. He continued anyway. For us. For education. For Ladakh. What have you done today for justice? #StandWithSonam',
  'The Cockroach survives everything. 320 million years of evolution. Nuclear radiation. Now, a broken education system and a democracy that forgets its people. Join the CJP. Not a party — a people\'s platform. #CockroachJanataParty #StandWithSonam',
]

const hashtags = [
  '#StandWithSonam', '#ChaloSansad', '#SonamWangchuk', '#CockroachJanataParty',
  '#EducationReform', '#LadakhStatehood', '#DemocraticRights', '#JusticeForSonam',
  '#ReleaseSonamWangchuk', '#SaveDemocracy', '#LadakhAutonomy', '#HungerStrike',
  '#CJP', '#JantarMantar', '#RightToProtest', '#FreeSonam',
  '#LadakhForLadakhis', '#NEP2020', '#IndiaForDemocracy',
]

const sections = [
  { id: 'donate', label: 'Donate' },
  { id: 'share', label: 'Social Toolkit' },
  { id: 'volunteer', label: 'Volunteer' },
  { id: 'petition', label: 'Petition' },
  { id: 'mp', label: 'Contact MP' },
  { id: 'protests', label: 'Protests' },
]

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
  }
}

/* ===================================================================
   PAGE
   =================================================================== */
export default function TakeAction() {
  const [copiedIndex, setCopiedIndex] = useState(null)
  const [activeSection, setActiveSection] = useState('')
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false)
  const [petitionSigned, setPetitionSigned] = useState(false)

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

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleCopy = (text, index) => {
    copyToClipboard(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const handleVolunteer = (e) => {
    e.preventDefault()
    setVolunteerSubmitted(true)
  }

  const handlePetition = (e) => {
    e.preventDefault()
    setPetitionSigned(true)
  }

  return (
    <article style={{ backgroundColor: 'var(--color-paper)' }}>
      {/* ===== HERO ===== */}
      <header className="broadsheet-hero" style={{ minHeight: '60vh' }}>
        <div className="broadsheet-hero__content">
          <p
            className="font-display text-sm font-bold uppercase tracking-widest mb-6"
            style={{ color: 'var(--color-accent)' }}
          >
            The tools
          </p>

          <h1
            className="broadsheet-hero__headline off-register"
            data-text="YOUR VOICE. YOUR POWER. NOW."
          >
            YOUR VOICE.<br />
            <span style={{ color: 'var(--color-accent)' }}>YOUR POWER.</span><br />
            NOW.
          </h1>

          <p className="broadsheet-hero__subhead">
            Six ways to make a difference. Pick one. Do it now.
            History is shaped by those who act, not those who watch.
          </p>
        </div>
        <div className="broadsheet-hero__scroll" aria-hidden="true">&#8595;</div>
      </header>

      {/* ===== STICKY NAV + WORKBENCH ===== */}
      <div className="lg:flex max-w-7xl mx-auto">
        {/* Sticky left nav */}
        <nav
          className="anchor-nav lg:flex-col lg:w-56 lg:sticky lg:top-0 lg:self-start lg:border-r lg:border-b-0 shrink-0"
          style={{
            backgroundColor: 'var(--color-paper)',
            zIndex: 20,
          }}
          aria-label="Action tools"
        >
          <span className="font-display text-xs font-bold uppercase tracking-widest mb-2 lg:mb-4 block" style={{ color: 'var(--color-accent)' }}>
            Tools
          </span>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="anchor-nav__link"
              aria-current={activeSection === s.id ? 'page' : undefined}
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Tools content */}
        <div className="flex-1 min-w-0">
          {/* ===== 1. DONATE ===== */}
          <section id="donate" className="broadsheet-section scroll-mt-24">
            <div className="broadsheet-section__content max-w-3xl">
              <span className="broadsheet-section__number" aria-hidden="true">01</span>
              <h2 className="broadsheet-section__title off-register" data-text="DONATE">
                DONATE
              </h2>
              <p className="font-body leading-relaxed max-w-measure mb-6" style={{ color: 'var(--color-muted)' }}>
                Every rupee powers the movement. No corporate sponsors. No billionaire donors. Just people like you.
              </p>

              <div className="font-mono text-sm space-y-2 p-4 border mb-6" style={{ borderColor: 'var(--color-rule)', backgroundColor: 'var(--color-paper-alt)' }}>
                <p><strong style={{ color: 'var(--color-accent)' }}>35%</strong> Legal Aid &amp; Defense</p>
                <p><strong style={{ color: 'var(--color-accent)' }}>25%</strong> Medical &amp; Humanitarian</p>
                <p><strong style={{ color: 'var(--color-accent)' }}>20%</strong> Protest Logistics</p>
                <p><strong style={{ color: 'var(--color-accent)' }}>12%</strong> Grassroots Organizing</p>
                <p><strong style={{ color: 'var(--color-accent)' }}>8%</strong> Digital &amp; Media</p>
                <p className="pt-2 border-t mt-2" style={{ borderColor: 'var(--color-rule)' }}>
                  <strong>100%</strong> to causes. <strong>₹0</strong> overhead. Monthly reports.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[500, 2000, 5000, 10000, 25000, 50000].map((amount) => (
                  <Link
                    key={amount}
                    to="/donate"
                    className="btn text-left justify-between btn-sm"
                    style={{ borderColor: 'var(--color-rule)' }}
                  >
                    <span className="font-display font-bold">₹{amount.toLocaleString()}</span>
                    <span className="font-body text-xs" style={{ color: 'var(--color-muted)' }}>
                      {amount === 500 && '1 day legal aid'}
                      {amount === 2000 && '1 striker medical'}
                      {amount === 5000 && '1 protest event'}
                      {amount === 10000 && '1 case support'}
                      {amount === 25000 && '1 outreach camp'}
                      {amount === 50000 && '1 month operations'}
                    </span>
                  </Link>
                ))}
              </div>

              <Link to="/donate" className="btn btn-primary btn-lg w-full text-center">
                DONATE NOW
              </Link>
            </div>
          </section>

          {/* ===== 2. SOCIAL TOOLKIT ===== */}
          <section id="share" className="broadsheet-section scroll-mt-24" style={{ backgroundColor: 'var(--color-paper-alt)' }}>
            <div className="broadsheet-section__content max-w-3xl">
              <span className="broadsheet-section__number" aria-hidden="true">02</span>
              <h2 className="broadsheet-section__title off-register" data-text="SOCIAL TOOLKIT">
                SOCIAL TOOLKIT
              </h2>
              <p className="font-body leading-relaxed max-w-measure mb-6" style={{ color: 'var(--color-muted)' }}>
                Copy. Paste. Post. Amplify the message across your networks in seconds.
              </p>

              <h3 className="font-display font-bold text-lg uppercase mb-4" style={{ color: 'var(--color-ink)' }}>
                Ready-to-Post Samples
              </h3>
              <div className="space-y-3 mb-8">
                {samplePosts.map((post, i) => (
                  <div
                    key={i}
                    className="p-4 border"
                    style={{ borderColor: 'var(--color-rule)', backgroundColor: 'var(--color-paper)' }}
                  >
                    <p className="font-mono text-sm leading-relaxed mb-3" style={{ color: 'var(--color-muted)' }}>
                      {post}
                    </p>
                    <button
                      onClick={() => handleCopy(post, i)}
                      className="btn btn-sm text-xs"
                      style={{ borderColor: 'var(--color-rule)' }}
                    >
                      {copiedIndex === i ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                  </div>
                ))}
              </div>

              <h3 className="font-display font-bold text-lg uppercase mb-4" style={{ color: 'var(--color-ink)' }}>
                Key Hashtags
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {hashtags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleCopy(tag, `h-${tag}`)}
                    className="btn btn-sm text-xs"
                    style={{ borderColor: 'var(--color-rule)' }}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div className="p-4 border-l-4" style={{ borderColor: 'var(--color-accent)', backgroundColor: 'var(--color-paper)' }}>
                <p className="font-display text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-accent)' }}>
                  Tip
                </p>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  Tag @PMOIndia @HMOIndia and your local MP. Use the photo of the forced removal
                  — it has the highest engagement. Post between 7-9 PM IST for maximum reach in India.
                </p>
              </div>
            </div>
          </section>

          {/* ===== 3. VOLUNTEER ===== */}
          <section id="volunteer" className="broadsheet-section scroll-mt-24">
            <div className="broadsheet-section__content max-w-3xl">
              <span className="broadsheet-section__number" aria-hidden="true">03</span>
              <h2 className="broadsheet-section__title off-register" data-text="VOLUNTEER">
                VOLUNTEER
              </h2>
              <p className="font-body leading-relaxed max-w-measure mb-6" style={{ color: 'var(--color-muted)' }}>
                Real change happens when people show up. We need volunteers across India and globally.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  { title: 'Legal Aid', desc: 'Document arrests, support detainees' },
                  { title: 'Medical Support', desc: 'First aid, mental health, altitude' },
                  { title: 'Media & Comms', desc: 'Social media, photography, video' },
                  { title: 'Community Outreach', desc: 'Door-to-door, campus, diaspora' },
                  { title: 'Logistics', desc: 'Transport, food, safety coordination' },
                  { title: 'Translation', desc: 'Hindi, English, Ladakhi, Urdu' },
                ].map((role) => (
                  <div
                    key={role.title}
                    className="p-3 border-t-2"
                    style={{ borderTopColor: 'var(--color-ink)', borderColor: 'var(--color-rule)' }}
                  >
                    <h4 className="font-display font-bold text-sm uppercase">{role.title}</h4>
                    <p className="font-body text-xs mt-1" style={{ color: 'var(--color-muted)' }}>{role.desc}</p>
                  </div>
                ))}
              </div>

              {volunteerSubmitted ? (
                <div className="p-6 border-2 text-center" style={{ borderColor: 'var(--color-accent)' }}>
                  <p className="font-display font-bold text-lg">Application Received!</p>
                  <p className="font-body text-sm mt-2" style={{ color: 'var(--color-muted)' }}>
                    Our team will contact you within 24-48 hours. In urgent cases, visit Jantar Mantar.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleVolunteer} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-display text-xs font-bold uppercase tracking-wider block mb-1" style={{ color: 'var(--color-ink)' }}>
                        Full Name
                      </label>
                      <input type="text" required className="w-full px-3 py-2 border font-body text-sm" style={{ borderColor: 'var(--color-rule)', backgroundColor: 'var(--color-paper)' }} placeholder="Your name" />
                    </div>
                    <div>
                      <label className="font-display text-xs font-bold uppercase tracking-wider block mb-1" style={{ color: 'var(--color-ink)' }}>
                        Email
                      </label>
                      <input type="email" required className="w-full px-3 py-2 border font-body text-sm" style={{ borderColor: 'var(--color-rule)', backgroundColor: 'var(--color-paper)' }} placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-display text-xs font-bold uppercase tracking-wider block mb-1" style={{ color: 'var(--color-ink)' }}>
                        Phone
                      </label>
                      <input type="tel" className="w-full px-3 py-2 border font-body text-sm" style={{ borderColor: 'var(--color-rule)', backgroundColor: 'var(--color-paper)' }} placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label className="font-display text-xs font-bold uppercase tracking-wider block mb-1" style={{ color: 'var(--color-ink)' }}>
                        City / Region
                      </label>
                      <input type="text" className="w-full px-3 py-2 border font-body text-sm" style={{ borderColor: 'var(--color-rule)', backgroundColor: 'var(--color-paper)' }} placeholder="Leh, Delhi, Mumbai..." />
                    </div>
                  </div>
                  <div>
                    <label className="font-display text-xs font-bold uppercase tracking-wider block mb-1" style={{ color: 'var(--color-ink)' }}>
                      Availability
                    </label>
                    <select className="w-full px-3 py-2 border font-body text-sm" style={{ borderColor: 'var(--color-rule)', backgroundColor: 'var(--color-paper)' }}>
                      <option>Select availability</option>
                      <option>Full-time (daily)</option>
                      <option>Part-time (weekends)</option>
                      <option>Evenings only</option>
                      <option>Remote / Online</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg w-full">
                    Submit Volunteer Application
                  </button>
                </form>
              )}
            </div>
          </section>

          {/* ===== 4. PETITION ===== */}
          <section id="petition" className="broadsheet-section scroll-mt-24" style={{ backgroundColor: 'var(--color-paper-alt)' }}>
            <div className="broadsheet-section__content max-w-3xl">
              <span className="broadsheet-section__number" aria-hidden="true">04</span>
              <h2 className="broadsheet-section__title off-register" data-text="PETITION">
                PETITION
              </h2>
              <p className="font-body leading-relaxed max-w-measure mb-6" style={{ color: 'var(--color-muted)' }}>
                Demand the immediate release of Sonam Wangchuk, implementation of NEP 2020,
                and grant of statehood to Ladakh with constitutional protections.
              </p>

              <ol className="demand-list mb-6">
                <li className="demand-list__item">Immediate release of Sonam Wangchuk from forced hospitalization</li>
                <li className="demand-list__item">Full implementation of National Education Policy 2020</li>
                <li className="demand-list__item">Grant statehood to Ladakh with legislative assembly</li>
                <li className="demand-list__item">Repeal misuse of PSA and UAPA against peaceful protesters</li>
                <li className="demand-list__item">Independent inquiry into July 18 police action at Jantar Mantar</li>
              </ol>

              <div className="flex items-center gap-6 mb-6 text-sm" style={{ color: 'var(--color-muted)' }}>
                <span><strong style={{ color: 'var(--color-ink)' }}>500,000+</strong> signatures</span>
                <span><strong style={{ color: 'var(--color-ink)' }}>1M</strong> goal</span>
              </div>

              {petitionSigned ? (
                <div className="p-6 border-2 text-center" style={{ borderColor: 'var(--color-accent)' }}>
                  <p className="font-display font-bold text-lg">You've Signed!</p>
                  <p className="font-body text-sm mt-2" style={{ color: 'var(--color-muted)' }}>
                    Share the petition with 5 friends to reach 1M signatures faster.
                  </p>
                  <button
                    onClick={() => handleCopy('https://change.org/StandWithSonam', 'petition-link')}
                    className="btn btn-sm mt-4"
                  >
                    Copy petition link
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePetition} className="space-y-4 max-w-md">
                  <div>
                    <label className="font-display text-xs font-bold uppercase tracking-wider block mb-1" style={{ color: 'var(--color-ink)' }}>
                      Full Name
                    </label>
                    <input type="text" required className="w-full px-3 py-2 border font-body text-sm" style={{ borderColor: 'var(--color-rule)', backgroundColor: 'var(--color-paper)' }} />
                  </div>
                  <div>
                    <label className="font-display text-xs font-bold uppercase tracking-wider block mb-1" style={{ color: 'var(--color-ink)' }}>
                      Email
                    </label>
                    <input type="email" required className="w-full px-3 py-2 border font-body text-sm" style={{ borderColor: 'var(--color-rule)', backgroundColor: 'var(--color-paper)' }} />
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="mt-1" />
                    <span className="font-body text-xs" style={{ color: 'var(--color-muted)' }}>I agree to display my name publicly as a signatory</span>
                  </label>
                  <button type="submit" className="btn btn-primary btn-lg">
                    Sign the Petition
                  </button>
                </form>
              )}
            </div>
          </section>

          {/* ===== 5. CONTACT MP ===== */}
          <section id="mp" className="broadsheet-section scroll-mt-24">
            <div className="broadsheet-section__content max-w-3xl">
              <span className="broadsheet-section__number" aria-hidden="true">05</span>
              <h2 className="broadsheet-section__title off-register" data-text="CONTACT YOUR MP">
                CONTACT YOUR MP
              </h2>
              <p className="font-body leading-relaxed max-w-measure mb-6" style={{ color: 'var(--color-muted)' }}>
                They work for you. Hold them accountable. Make them speak for the movement.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { title: 'Email Templates', desc: 'Personalized drafts for each of the six CJP demands. Fill in your name and send.' },
                  { title: 'Phone Scripts', desc: 'What to say when you call an MP office. Staff vs. direct MP scripts.' },
                  { title: 'Twitter/X Campaigns', desc: 'Pre-written tweets that tag your MP. Click, customize, tweet.' },
                  { title: 'Group Office Visits', desc: 'Coordinate with fellow constituents to visit MP offices.' },
                ].map((tool) => (
                  <div
                    key={tool.title}
                    className="p-4 border"
                    style={{ borderColor: 'var(--color-rule)' }}
                  >
                    <h3 className="font-display font-bold text-sm uppercase mb-1">{tool.title}</h3>
                    <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--color-muted)' }}>{tool.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 border" style={{ borderColor: 'var(--color-rule)', backgroundColor: 'var(--color-paper-alt)' }}>
                <p className="font-display text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-accent)' }}>
                  Quick MP Lookup
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 border font-body text-sm"
                    style={{ borderColor: 'var(--color-rule)', backgroundColor: 'var(--color-paper)' }}
                    placeholder="Enter PIN code (e.g. 194101)"
                  />
                  <button className="btn btn-sm">Find MP</button>
                </div>
                <p className="font-body text-xs mt-2" style={{ color: 'var(--color-muted)' }}>
                  Powered by PRS Legislative Research database. 543 Lok Sabha MPs with verified contact details.
                </p>
              </div>

              <div className="mt-6 p-4 border-l-4" style={{ borderColor: 'var(--color-accent)' }}>
                <p className="font-display text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-accent)' }}>
                  Demand #5 — Democratic Rights
                </p>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  When you contact your MP, demand: immediate release of all political prisoners, repeal of PSA and UAPA provisions used against peaceful protesters, and protection of fundamental rights to assembly, speech, and expression.
                </p>
              </div>
            </div>
          </section>

          {/* ===== 6. PROTESTS ===== */}
          <section id="protests" className="broadsheet-section scroll-mt-24" style={{ backgroundColor: 'var(--color-paper-alt)' }}>
            <div className="broadsheet-section__content max-w-3xl">
              <span className="broadsheet-section__number" aria-hidden="true">06</span>
              <h2 className="broadsheet-section__title off-register" data-text="JOIN PROTESTS">
                JOIN PROTESTS
              </h2>
              <p className="font-body leading-relaxed max-w-measure mb-6" style={{ color: 'var(--color-muted)' }}>
                Your presence is your power. Show up. Stand in solidarity.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { location: 'Jantar Mantar, New Delhi', time: 'Daily, 8 AM - 8 PM', desc: 'Main protest site. Hunger strike continues. All are welcome.' },
                  { location: 'Leh Main Market, Ladakh', time: 'Evening rallies, 5 PM', desc: 'Daily solidarity protests organized by LAHDC and student unions.' },
                  { location: 'Kargil Town Square', time: 'Evening rallies, 5 PM', desc: 'Twin protest site with Leh. Coordination with local bodies.' },
                  { location: 'Multiple Cities, India', time: 'Weekend solidarity marches', desc: 'Mumbai, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad.' },
                  { location: 'Global Cities', time: 'Check local schedules', desc: 'London, New York, Toronto, Sydney, Berlin, Paris, Dubai, Singapore.' },
                  { location: 'Virtual / Online', time: '24/7', desc: 'Social media amplification, WhatsApp groups, Telegram channels.' },
                ].map((protest) => (
                  <div
                    key={protest.location}
                    className="flex items-start gap-4 p-4 border"
                    style={{ borderColor: 'var(--color-rule)' }}
                  >
                    <span className="w-8 h-8 flex items-center justify-center shrink-0 font-display font-bold text-xs" style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-paper)' }}>
                      &rarr;
                    </span>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3">
                        <h3 className="font-display font-bold text-sm uppercase">{protest.location}</h3>
                        <span className="font-body text-xs" style={{ color: 'var(--color-accent)' }}>{protest.time}</span>
                      </div>
                      <p className="font-body text-xs mt-1" style={{ color: 'var(--color-muted)' }}>{protest.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Safety guidelines */}
              <div className="p-4 border-2" style={{ borderColor: 'var(--color-ink)' }}>
                <h3 className="font-display font-bold text-sm uppercase mb-3" style={{ color: 'var(--color-accent)' }}>
                  Protest &mdash; Safety Guidelines
                </h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    'Carry valid ID at all times',
                    'Know the legal helpline: +91-98765-43210',
                    'Wear comfortable shoes & carry water',
                    'Stay with the group — don\'t isolate',
                    'No violence, no provocation',
                    'Film incidents, don\'t interfere with police',
                    'Emergency contact written on your arm',
                    'Follow non-violent protest principles',
                  ].map((tip) => (
                    <p key={tip} className="font-body text-xs flex items-start gap-2" style={{ color: 'var(--color-muted)' }}>
                      <span style={{ color: 'var(--color-accent)' }}>&#10003;</span> {tip}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ===== FINAL CTA ===== */}
      <section className="broadsheet-section" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="broadsheet-section__content max-w-3xl mx-auto text-center">
          <hr className="broadsheet-divider" />
          <h2 className="broadsheet-section__title off-register" data-text="ONE ACTION CAN CHANGE EVERYTHING">
            ONE ACTION<br />CAN CHANGE EVERYTHING
          </h2>
          <p className="font-body leading-relaxed max-w-measure mx-auto mb-8" style={{ color: 'var(--color-muted)' }}>
            <span className="text-stutter" data-stutter="History does not remember those who stayed silent.">
              History does not remember those who stayed silent.
            </span>
            It remembers those who showed up. The movement needs you. Not tomorrow. Today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="btn btn-primary btn-lg">Donate now</Link>
            <a href="#share" className="btn btn-lg">Share the message</a>
          </div>
        </div>
      </section>

      {/* ===== COLOPHON ===== */}
      <footer className="colophon">
        <p>Set in Fraunces &amp; Big Shoulders Display. Tools built for action, not for show.</p>
        <p>Every tool on this page works offline. Print it. Share it. Use it. <strong>#StandWithSonam</strong></p>
      </footer>
    </article>
  )
}
