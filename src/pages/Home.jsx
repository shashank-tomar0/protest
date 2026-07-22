import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Heart, Share2, Users, Target, Flag,
  BookOpen, Leaf, Building2, Scale, Hospital, Briefcase,
  Camera, Clock, Quote, Shield, Globe, ChevronDown, AlertTriangle
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const demands = [
  {
    icon: BookOpen,
    title: 'Education Reform',
    description:
      'Implement NEP 2020 in letter and spirit. Reopen 100,000+ closed schools. Recruit 50,000 teachers. Ensure quality education for every child, especially in remote regions like Ladakh.',
    gradient: ['oklch(50% 0.2 25)', 'oklch(40% 0.2 25)'],
    priority: 'Critical',
    featured: true,
  },
  {
    icon: Building2,
    title: 'Ladakh Statehood',
    description:
      'Grant full statehood to Ladakh with a legislative assembly. Protect land, jobs, and culture through Article 371-like provisions. End bureaucratic rule from Delhi.',
    gradient: ['oklch(45% 0.12 70)', 'oklch(38% 0.12 70)'],
    priority: 'Critical',
    featured: false,
  },
  {
    icon: Scale,
    title: 'Democratic Rights',
    description:
      'Release all political prisoners. End misuse of PSA and UAPA. Protect the right to peaceful protest. Independent inquiry into the July 18 police action.',
    gradient: ['oklch(55% 0.2 10)', 'oklch(45% 0.2 10)'],
    priority: 'Urgent',
    featured: false,
  },
  {
    icon: Leaf,
    title: 'Environmental Justice',
    description:
      'Stop unchecked industrialization in the Himalayas. Mandatory EIAs for all projects. Protect glaciers, wetlands, and the "Third Pole" ecosystem.',
    gradient: ['oklch(52% 0.14 150)', 'oklch(42% 0.14 150)'],
    priority: 'Urgent',
    featured: false,
  },
  {
    icon: Hospital,
    title: 'Healthcare Access',
    description:
      'Establish AIIMS-level healthcare in Ladakh. Air ambulance services year-round. Address altitude-specific health challenges like HAPE and chronic mountain sickness.',
    gradient: ['oklch(55% 0.18 255)', 'oklch(45% 0.18 255)'],
    priority: 'Important',
    featured: false,
  },
  {
    icon: Briefcase,
    title: 'Youth Employment',
    description:
      'Create 50,000 jobs for Ladakhi youth. Reserve government positions for locals. Promote sustainable tourism, renewable energy, and traditional crafts.',
    gradient: ['oklch(75% 0.12 85)', 'oklch(62% 0.14 85)'],
    priority: 'Important',
    featured: false,
  },
]

const stats = [
  { value: '21', suffix: 'Days', label: 'Hunger Strike', gradient: ['oklch(50% 0.2 25)', 'oklch(40% 0.2 25)'] },
  { value: '10,000+', suffix: '', label: 'Marched on Parliament', gradient: ['oklch(75% 0.12 85)', 'oklch(62% 0.14 85)'] },
  { value: '50M+', suffix: '', label: 'Photo Views', gradient: ['oklch(55% 0.18 255)', 'oklch(45% 0.18 255)'] },
  { value: '15+', suffix: '', label: 'Countries in Solidarity', gradient: ['oklch(52% 0.14 150)', 'oklch(42% 0.14 150)'] },
  { value: '200+', suffix: '', label: 'Detained & Released', gradient: ['oklch(55% 0.2 10)', 'oklch(45% 0.2 10)'] },
  { value: '500K+', suffix: '', label: 'Petition Signatures', gradient: ['oklch(45% 0.12 70)', 'oklch(38% 0.12 70)'] },
]

const solidarityQuotes = [
  {
    quote: 'The forcible removal of a peaceful hunger striker is a violation of fundamental rights. We demand his immediate release.',
    source: 'Amnesty International',
    date: 'July 19, 2026',
  },
  {
    quote: "India's democracy is being tested. The image of Wangchuk being carried away by police will not be forgotten.",
    source: 'The Guardian Editorial',
    date: 'July 20, 2026',
  },
  {
    quote: 'Sonam Wangchuk’s hunger strike was for education reform. His cause is just. His treatment is not.',
    source: 'Human Rights Watch',
    date: 'July 20, 2026',
  },
  {
    quote: 'We stand with Sonam Wangchuk and the students of India. Education is a right, not a privilege.',
    source: 'UNESCO Statement',
    date: 'July 21, 2026',
  },
]

const timelineEvents = [
  { date: 'Jun 29', event: 'Wangchuk begins hunger strike at Jantar Mantar' },
  { date: 'Jul 14', event: '10,000 join "Chalo Sansad" march on Parliament' },
  { date: 'Jul 18', event: 'Police raid at 6:30 AM, Wangchuk forcibly removed' },
  { date: 'Jul 19', event: 'Photo goes viral — 50M views in 24 hours' },
  { date: 'Jul 21', event: 'Global solidarity protests in 15+ countries' },
]

/* ------------------------------------------------------------------ */
/*  Shared scroll-reveal variant — counts as ONE motion family        */
/* ------------------------------------------------------------------ */
const scrollReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: custom * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */
export default function Home() {
  /* -------- Orchestrated motion: 3D parallax on the photo -------- */
  const photoSectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: photoSectionRef,
    offset: ['start end', 'end start'],
  })
  const photoScale = useTransform(scrollYProgress, [0, 1], [0.92, 1.05])
  const photoY = useTransform(scrollYProgress, [0, 1], [80, -80])
  const photoGlow = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ['oklch(50% 0.2 25 / 0.05)', 'oklch(50% 0.2 25 / 0.15)', 'oklch(80% 0.12 85 / 0.15)', 'oklch(50% 0.2 25 / 0.05)'],
  )

  return (
    <>
      {/* ================================================================
          SECTION 1 — "THE SIX ARMS" (narrative lead, NOT a hero)
          Opens in medias res — the Jantar Mantar story.
          Dense, journalistic. Asymmetric grid: text 5/12, photo 7/12.
          ================================================================ */}
      <section
        ref={photoSectionRef}
        className="relative min-h-[100dvh] flex items-start pt-24 lg:pt-32 pb-16 overflow-hidden"
        aria-label="The Jantar Mantar story"
      >
        {/* Subtle background warmth */}
        <div className="absolute inset-0 bg-gradient-to-b from-oklch(50% 0.2 25 / 0.04) via-transparent to-oklch(78% 0.12 85 / 0.03)" />
        <div className="absolute top-12 left-1/4 w-96 h-96 rounded-full bg-oklch(50% 0.2 25 / 0.06) blur-3xl" />
        <div className="absolute bottom-12 right-1/4 w-80 h-80 rounded-full bg-oklch(78% 0.12 85 / 0.05) blur-3xl" />

        <div className="container-custom relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* -------- TEXT COLUMN (5/12) -------- */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide"
                        style={{ backgroundColor: 'oklch(50% 0.2 25 / 0.1)', color: 'oklch(50% 0.2 25)', border: '1px solid oklch(50% 0.2 25 / 0.2)' }}>
                    <span className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: 'oklch(50% 0.2 25)' }} />
                    Breaking
                  </span>
                  <span className="text-xs tracking-wide"
                        style={{ color: 'oklch(62% 0.005 25)' }}>
                    July 18, 2026 — 6:30 AM — Jantar Mantar
                  </span>
                </div>

                <h1 className="heading-1 mb-4" style={{ color: 'var(--color-ink)' }}>
                  They Carried a{' '}
                  <span className="gradient-text">Fasting Man</span>
                </h1>

                <p className="body-lg leading-relaxed mb-4"
                   style={{ color: 'oklch(45% 0.008 25 / 0.88)' }}>
                  For 21 days, Sonam Wangchuk had been fasting at Jantar Mantar. His body had
                  shrunk. He had lost 7 kg. His blood pressure was 103/68. Doctors had warned of
                  irreversible organ damage. But he stayed — fasting for our children&rsquo;s education.
                </p>
              </motion.div>

              {/* Key fact callout — dense */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-3 gap-3 p-4 rounded-xl"
                style={{
                  backgroundColor: 'oklch(50% 0.2 25 / 0.06)',
                  borderLeft: '4px solid var(--color-accent)',
                }}
              >
                {[
                  { label: 'Weight lost', value: '7 kg' },
                  { label: 'Blood pressure', value: '103/68' },
                  { label: 'Strike duration', value: '21 days' },
                ].map((f) => (
                  <div key={f.label} className="text-center">
                    <p className="font-display font-bold text-xl" style={{ color: 'var(--color-accent)' }}>
                      {f.value}
                    </p>
                    <p className="text-xs" style={{ color: 'oklch(45% 0.008 25 / 0.7)' }}>
                      {f.label}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Continued narrative */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <p style={{ color: 'oklch(45% 0.008 25 / 0.85)', fontSize: '0.9375rem', lineHeight: '1.7' }}>
                  At 6:30 AM on July 18, over 50 Delhi Police personnel entered the protest site.
                  They included women constables and senior officers. They surrounded Wangchuk.
                  His wife Gitanjali was detained separately. Tents were confiscated.
                </p>

                {/* Pull quote — no italic, emphasised via weight and colour */}
                <blockquote
                  className="font-display font-bold text-base leading-relaxed pl-4 border-l-4 py-1"
                  style={{
                    borderColor: 'var(--color-accent)',
                    color: 'var(--color-ink)',
                  }}
                >
                  &ldquo;I was fasting for the children of India,&rdquo; Wangchuk reportedly said
                  as they lifted him. He did not resist. He was too weak to walk.
                  Six officers carried him away in six arms.
                </blockquote>

                <p style={{ color: 'oklch(45% 0.008 25 / 0.85)', fontSize: '0.9375rem', lineHeight: '1.7' }}>
                  Within an hour, the man who had captured India&rsquo;s conscience was gone &mdash;
                  and the image of his forcible removal was already spreading across the world.
                  The photograph reached 50 million screens in 24 hours.
                </p>
              </motion.div>

              {/* Subtle "read on" rather than CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="pt-2"
              >
                <Link
                  to="/timeline"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3"
                  style={{ color: 'oklch(45% 0.008 25)' }}
                >
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  Read the full timeline of events
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </motion.div>
            </div>

            {/* -------- PHOTO COLUMN (7/12) — 3D PARALLAX -------- */}
            <div className="lg:col-span-7 lg:sticky lg:top-32">
              <motion.div
                className="perspective-1200"
                style={{ scale: photoScale, y: photoY }}
              >
                <div
                  className="relative overflow-hidden rounded-3xl"
                  style={{
                    backgroundColor: 'var(--color-surface-dark)',
                    aspectRatio: '4 / 5',
                  }}
                >
                  {/* Glow overlay synced to scroll */}
                  <motion.div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{ background: photoGlow }}
                  />

                  {/* Gradient wash */}
                  <div className="absolute inset-0"
                       style={{
                         background: 'linear-gradient(135deg, oklch(50% 0.2 25 / 0.25), oklch(16% 0.012 25), oklch(78% 0.12 85 / 0.08))',
                       }} />
                  <div className="absolute inset-0 opacity-[0.07]"
                       style={{
                         backgroundImage: 'url(/grid.svg)',
                         backgroundSize: '60px 60px',
                       }} />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 lg:p-10">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center"
                           style={{ backgroundColor: 'oklch(50% 0.2 25 / 0.18)' }}>
                        <Camera className="w-10 h-10" aria-hidden="true"
                                style={{ color: 'oklch(50% 0.2 25 / 0.6)' }} />
                      </div>
                      <h2 className="heading-3 mb-3" style={{ color: 'var(--color-paper)' }}>
                        The Viral Photo
                      </h2>
                      <p className="text-sm max-w-xs mx-auto leading-relaxed"
                         style={{ color: 'oklch(86% 0.005 25 / 0.7)' }}>
                        Six police officers carry a fasting, frail Sonam Wangchuk from Jantar Mantar.
                        July 18, 2026 — 6:30 AM. The image that shook a nation.
                      </p>
                    </div>

                    <Link
                      to="/the-photo"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                      style={{
                        backgroundColor: 'oklch(100% 0 0 / 0.1)',
                        border: '1px solid oklch(100% 0 0 / 0.15)',
                        color: 'var(--color-paper)',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'oklch(100% 0 0 / 0.2)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'oklch(100% 0 0 / 0.1)'}
                    >
                      View the Photo &amp; Analysis
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>

                  {/* Bottom stats strip */}
                  <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
                    {[
                      { label: 'Weight at removal', value: '54 kg' },
                      { label: 'Time of raid', value: '6:30 AM' },
                      { label: 'Police deployed', value: '50+' },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl p-2.5 text-center backdrop-blur-sm"
                        style={{
                          backgroundColor: 'oklch(100% 0 0 / 0.06)',
                          border: '1px solid oklch(100% 0 0 / 0.08)',
                        }}
                      >
                        <p className="font-display font-bold text-sm"
                           style={{ color: 'var(--color-gold)' }}>
                          {s.value}
                        </p>
                        <p className="text-[10px]" style={{ color: 'oklch(86% 0.005 25 / 0.6)' }}>
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="flex justify-center mt-12"
          >
            <ChevronDown className="w-5 h-5 animate-bounce"
                         style={{ color: 'oklch(45% 0.008 25 / 0.4)' }} aria-hidden="true" />
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 2 — "THE TOLL" (compact stats bar — high density)
          ================================================================ */}
      <section className="section-dense" aria-label="Movement statistics"
               style={{ backgroundColor: 'var(--color-surface-dark)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                custom={index}
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="text-center p-3 sm:p-4 rounded-xl"
                style={{
                  backgroundColor: 'oklch(100% 0 0 / 0.04)',
                  border: '1px solid oklch(100% 0 0 / 0.06)',
                }}
              >
                <span
                  className="block font-display text-xl sm:text-2xl font-bold leading-tight"
                  style={{
                    background: `linear-gradient(135deg, ${stat.gradient[0]}, ${stat.gradient[1]})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                  {stat.suffix && (
                    <span className="text-xs sm:text-sm font-normal"
                          style={{ WebkitTextFillColor: 'oklch(86% 0.005 25 / 0.6)' }}>
                      {' '}{stat.suffix}
                    </span>
                  )}
                </span>
                <p className="text-xs mt-1" style={{ color: 'oklch(62% 0.005 25)' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3 — "SIX DEMANDS" (asymmetric grid, medium density)
          ================================================================ */}
      <section className="section" aria-labelledby="demands-title"
               style={{ backgroundColor: 'var(--color-paper-alt)' }}>
        <div className="container-custom">
          <motion.div
            custom={0}
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12 lg:mb-16"
          >
            <h2 id="demands-title" className="heading-2 mb-4" style={{ color: 'var(--color-ink)' }}>
              The <span className="gradient-text">Six Non-Negotiable</span> Demands
            </h2>
            <p className="body" style={{ color: 'oklch(45% 0.008 25 / 0.8)' }}>
              Six pillars of justice that Sonam Wangchuk and the Cockroach Janata Party
              are fighting for. Each demand represents thousands of voices from Ladakh to Delhi.
            </p>
          </motion.div>

          {/* ---- Asymmetric grid: featured + 3-across + 2-asymmetric ---- */}
          <div className="space-y-5">
            {/* Row 1: Featured demand (full-width, larger) */}
            <motion.div
              custom={1}
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {demands.filter((d) => d.featured).map((demand) => (
                <article
                  key={demand.title}
                  className="relative overflow-hidden rounded-2xl p-6 sm:p-8 group cursor-default"
                  style={{
                    backgroundColor: 'var(--color-paper)',
                    border: '1px solid oklch(14% 0.01 25 / 0.08)',
                  }}
                >
                  {/* Hover accent bar */}
                  <div
                    className="absolute top-0 left-0 h-1 w-full origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
                    style={{
                      background: `linear-gradient(90deg, ${demand.gradient[0]}, ${demand.gradient[1]})`,
                    }}
                  />

                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${demand.gradient[0]}, ${demand.gradient[1]})`,
                      }}
                    >
                      <demand.icon className="w-7 h-7" style={{ color: 'white' }} aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="heading-4" style={{ color: 'var(--color-ink)' }}>
                          {demand.title}
                        </h3>
                        <span
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: 'oklch(50% 0.2 25 / 0.1)',
                            color: 'var(--color-accent)',
                            border: '1px solid oklch(50% 0.2 25 / 0.2)',
                          }}
                        >
                          {demand.priority}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed"
                         style={{ color: 'oklch(45% 0.008 25 / 0.8)' }}>
                        {demand.description}
                      </p>
                      <Link
                        to="/demands"
                        className="inline-flex items-center gap-1 mt-3 text-sm font-medium transition-all duration-200 hover:gap-2"
                        style={{ color: 'var(--color-accent)' }}
                      >
                        Learn more <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>

            {/* Row 2: Three smaller demand cards (3-col) */}
            <div className="grid md:grid-cols-3 gap-5">
              {demands.filter((d) => !d.featured).slice(0, 3).map((demand, i) => (
                <motion.article
                  key={demand.title}
                  custom={i + 2}
                  variants={scrollReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className="relative overflow-hidden rounded-2xl p-5 group cursor-default"
                  style={{
                    backgroundColor: 'var(--color-paper)',
                    border: '1px solid oklch(14% 0.01 25 / 0.08)',
                  }}
                >
                  <div
                    className="absolute top-0 left-0 h-1 w-full origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
                    style={{
                      background: `linear-gradient(90deg, ${demand.gradient[0]}, ${demand.gradient[1]})`,
                    }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${demand.gradient[0]}, ${demand.gradient[1]})`,
                    }}
                  >
                    <demand.icon className="w-6 h-6" style={{ color: 'white' }} aria-hidden="true" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="heading-4 text-base sm:text-lg" style={{ color: 'var(--color-ink)' }}>
                      {demand.title}
                    </h3>
                    <span
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium flex-shrink-0"
                      style={{
                        backgroundColor: 'oklch(78% 0.12 85 / 0.15)',
                        color: 'var(--color-gold-dark)',
                        border: '1px solid oklch(78% 0.12 85 / 0.25)',
                      }}
                    >
                      {demand.priority}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed"
                     style={{ color: 'oklch(45% 0.008 25 / 0.8)' }}>
                    {demand.description}
                  </p>
                  <Link
                    to="/demands"
                    className="inline-flex items-center gap-1 mt-3 text-xs font-medium transition-all duration-200 hover:gap-2"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    Learn more <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Row 3: Two cards — wider + narrower */}
            <div className="grid md:grid-cols-3 gap-5">
              {demands.filter((d) => !d.featured).slice(3, 5).map((demand, i) => (
                <motion.article
                  key={demand.title}
                  custom={i + 5}
                  variants={scrollReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className={`relative overflow-hidden rounded-2xl p-5 group cursor-default ${
                    i === 0 ? 'md:col-span-2' : 'md:col-span-1'
                  }`}
                  style={{
                    backgroundColor: 'var(--color-paper)',
                    border: '1px solid oklch(14% 0.01 25 / 0.08)',
                  }}
                >
                  <div
                    className="absolute top-0 left-0 h-1 w-full origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
                    style={{
                      background: `linear-gradient(90deg, ${demand.gradient[0]}, ${demand.gradient[1]})`,
                    }}
                  />
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${demand.gradient[0]}, ${demand.gradient[1]})`,
                      }}
                    >
                      <demand.icon className="w-6 h-6" style={{ color: 'white' }} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-base" style={{ color: 'var(--color-ink)' }}>
                        {demand.title}
                      </h3>
                      <p className="text-sm mt-1 leading-relaxed"
                         style={{ color: 'oklch(45% 0.008 25 / 0.8)' }}>
                        {demand.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.div
            custom={7}
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link to="/demands" className="btn-primary btn-lg" style={{ fontFamily: 'var(--font-display)' }}>
              View All Demands in Detail
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4 — "THE COCKROACH PHILOSOPHY" (medium density)
          ================================================================ */}
      <section className="section" aria-labelledby="philosophy-title"
               style={{ backgroundColor: 'var(--color-surface-dark)' }}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            <motion.div
              custom={0}
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-4"
                style={{
                  backgroundColor: 'oklch(50% 0.2 25 / 0.12)',
                  color: 'var(--color-accent)',
                  border: '1px solid oklch(50% 0.2 25 / 0.2)',
                }}
              >
                The Movement
              </span>
              <h2 id="philosophy-title" className="heading-2 mb-5"
                  style={{ color: 'var(--color-paper)' }}>
                Why <span style={{ color: 'var(--color-gold)' }}>Cockroach</span> Janata Party?
              </h2>

              <div className="space-y-4 leading-relaxed text-sm sm:text-base"
                   style={{ color: 'oklch(62% 0.005 25 / 0.9)' }}>
                <p>
                  The <strong style={{ color: 'var(--color-paper)' }}>Cockroach Janata Party (CJP)</strong> &mdash;
                  founded by activist Abhijit Dipke &mdash; is not a traditional political party.
                  It is a citizens&rsquo; platform demanding accountability in India&rsquo;s education system.
                </p>
                <p>
                  When Sonam Wangchuk &mdash; the education reformer, climate activist, and inspiration
                  for <em style={{ color: 'var(--color-gold)' }}>3 Idiots</em> &mdash; began his hunger strike
                  on June 29, 2026, the CJP mobilized thousands. What started as one man&rsquo;s fast
                  became a national movement.
                </p>

                {/* The "Cockroach" name explanation */}
                <blockquote
                  className="font-display font-bold text-base leading-relaxed pl-5 border-l-4 py-2 my-6"
                  style={{
                    borderColor: 'var(--color-gold)',
                    color: 'var(--color-gold)',
                  }}
                >
                  &ldquo;We don&rsquo;t need permission to exist.&rdquo;
                </blockquote>

                <p>
                  The name <strong style={{ color: 'var(--color-paper)' }}>&ldquo;Cockroach&rdquo;</strong> is deliberate.
                  It symbolizes resilience &mdash; surviving 320 million years, surviving everything thrown at it.
                  As CJP says: <em style={{ color: 'var(--color-gold)' }}>we don&rsquo;t need permission to exist.</em>
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link to="/movement" className="btn-primary">
                  Read the Full Story
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/timeline"
                  className="btn"
                  style={{
                    border: '2px solid oklch(98% 0.008 25 / 0.3)',
                    color: 'var(--color-paper)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'oklch(98% 0.008 25)'; e.currentTarget.style.color = 'var(--color-ink)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-paper)'; }}
                >
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  View Timeline
                </Link>
              </div>
            </motion.div>

            <motion.div
              custom={1}
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="space-y-4">
                {[
                  { icon: Heart, label: '21 Days', value: 'Hunger Strike' },
                  { icon: Users, label: '10,000+', value: 'Peaceful Protesters' },
                  { icon: Shield, label: '200+', value: 'Detained, All Released' },
                  { icon: Globe, label: '15+', value: 'Countries in Solidarity' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    custom={i + 2}
                    variants={scrollReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="p-4 sm:p-5 rounded-xl transition-colors duration-200"
                    style={{
                      backgroundColor: 'oklch(100% 0 0 / 0.04)',
                      border: '1px solid oklch(100% 0 0 / 0.06)',
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <item.icon className="w-8 h-8 flex-shrink-0"
                                 style={{ color: 'var(--color-gold)' }} aria-hidden="true" />
                      <div>
                        <p className="font-display text-xl sm:text-2xl font-bold"
                           style={{ color: 'var(--color-paper)' }}>
                          {item.label}
                        </p>
                        <p className="text-sm" style={{ color: 'oklch(62% 0.005 25)' }}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5 — "VOICES OF SOLIDARITY" (sparse, airy)
          ================================================================ */}
      <section className="section" aria-labelledby="solidarity-title"
               style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container-custom">
          <motion.div
            custom={0}
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
          >
            <h2 id="solidarity-title" className="heading-2 mb-4" style={{ color: 'var(--color-ink)' }}>
              Echoes of <span className="gradient-text">Solidarity</span>
            </h2>
            <p className="body" style={{ color: 'oklch(45% 0.008 25 / 0.8)' }}>
              From Ladakh to London, students to senators &mdash; the world is watching and speaking out.
            </p>
          </motion.div>

          {/* Organisation tags — flowing, spacious */}
          <motion.div
            custom={1}
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-16 max-w-4xl mx-auto"
          >
            {[
              'Amnesty International',
              'Human Rights Watch',
              'UN Special Rapporteurs',
              'Indian National Congress',
              'Aam Aadmi Party',
              'JNU Student Union',
              'DU Student Union',
              'JMI Student Union',
              'Ladakh Autonomous Hill Council',
              'Writers\' Collective India',
              'Environmental Action Group',
              'Transparency International',
              'International Commission of Jurists',
              'Reporters Without Borders',
            ].map((org) => (
              <span
                key={org}
                className="px-3 py-1.5 rounded-full text-xs transition-colors duration-200"
                style={{
                  backgroundColor: 'oklch(14% 0.01 25 / 0.04)',
                  border: '1px solid oklch(14% 0.01 25 / 0.08)',
                  color: 'oklch(45% 0.008 25 / 0.75)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'oklch(50% 0.2 25 / 0.3)'
                  e.currentTarget.style.color = 'var(--color-accent)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'oklch(14% 0.01 25 / 0.08)'
                  e.currentTarget.style.color = 'oklch(45% 0.008 25 / 0.75)'
                }}
              >
                {org}
              </span>
            ))}
          </motion.div>

          {/* Quotes — staggered, spacious */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {solidarityQuotes.map((item, i) => (
              <motion.div
                key={item.source}
                custom={i + 2}
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className={`p-6 rounded-2xl ${
                  i % 2 === 1 ? 'md:translate-y-8' : ''
                }`}
                style={{
                  backgroundColor: 'var(--color-paper-alt)',
                  border: '1px solid oklch(14% 0.01 25 / 0.06)',
                }}
              >
                <Quote className="w-6 h-6 mb-3"
                       style={{ color: 'oklch(50% 0.2 25 / 0.25)' }} aria-hidden="true" />
                <p className="text-sm leading-relaxed mb-4"
                   style={{ color: 'oklch(45% 0.008 25 / 0.85)' }}>
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--color-ink)' }}>
                    {item.source}
                  </p>
                  <p className="text-xs" style={{ color: 'oklch(62% 0.005 25)' }}>
                    {item.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 6 — "THE NEXT CHAPTER" (gentle CTA, low density)
          ================================================================ */}
      <section className="section-dense lg:section" aria-labelledby="next-title"
               style={{ backgroundColor: 'var(--color-surface-dark)' }}>
        <div className="container-custom">
          <motion.div
            custom={0}
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 id="next-title" className="heading-2 mb-5" style={{ color: 'var(--color-paper)' }}>
              The Next Chapter Is <span style={{ color: 'var(--color-gold)' }}>Yours</span>
            </h2>
            <p className="body text-base sm:text-lg max-w-2xl mx-auto mb-10"
               style={{ color: 'oklch(62% 0.005 25 / 0.9)' }}>
              A donation. A share. A phone call to your MP. Showing up at Jantar Mantar.
              Every action writes a sentence in the story of this movement.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
              {[
                { label: 'Donate', desc: 'Fuel the movement', href: '/donate', icon: Heart },
                { label: 'Act', desc: 'Join the action', href: '/action', icon: Flag },
                { label: 'Share', desc: 'Spread the word', href: '/action#share', icon: Share2 },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="group p-6 rounded-2xl text-center transition-all duration-200"
                  style={{
                    backgroundColor: 'oklch(100% 0 0 / 0.04)',
                    border: '1px solid oklch(100% 0 0 / 0.08)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'oklch(100% 0 0 / 0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'oklch(100% 0 0 / 0.04)'
                  }}
                >
                  <div
                    className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, oklch(50% 0.2 25), oklch(40% 0.2 25))',
                    }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: 'white' }} aria-hidden="true" />
                  </div>
                  <p className="font-display font-bold text-lg" style={{ color: 'var(--color-paper)' }}>
                    {item.label}
                  </p>
                  <p className="text-sm" style={{ color: 'oklch(62% 0.005 25)' }}>
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/donate" className="btn-primary btn-xl">
                <Heart className="w-6 h-6" aria-hidden="true" />
                Donate Now
              </Link>
              <Link
                to="/action"
                className="btn btn-xl"
                style={{
                  border: '2px solid oklch(98% 0.008 25 / 0.3)',
                  color: 'var(--color-paper)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'oklch(98% 0.008 25)'; e.currentTarget.style.color = 'var(--color-ink)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-paper)'; }}
              >
                <Users className="w-6 h-6" aria-hidden="true" />
                Join the Movement
              </Link>
            </div>

            <p className="mt-8 text-xs flex items-center justify-center gap-2"
               style={{ color: 'oklch(62% 0.005 25)' }}>
              <Heart className="w-3.5 h-3.5" style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
              In solidarity with Sonam Wangchuk and the hunger strikers at Jantar Mantar
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
