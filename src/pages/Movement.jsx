import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Heart, BookOpen, MapPin, Quote as QuoteIcon,
  Clock, Flag, Scale, Leaf, Megaphone, Building2, Users, Target
} from 'lucide-react'

/* =============================================================
   ONE orchestrated motion family: "narrative"
   Every animated element on this page is a variant of this family.
   Easing: custom ease-out that lands softly — feels like ink
   settling on paper.
   ============================================================= */
const narrative = {
  container: {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05, delayChildren: 0.05 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  },
  rule: {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  },
}

/* =============================================================
   DATA — narrative chapters
   Each chapter is a section in the long document. Data points
   are woven into prose rather than shown in stat grids.
   ============================================================= */
const chapters = [
  {
    id: 'origins',
    title: 'Origins',
    subtitle: 'From SECMOL to the national stage',
    location: 'Leh, Ladakh',
    year: '1988',
    pullQuote:
      '"The classroom is not four walls. It is the land, the river, and the people who live alongside it."',
    pullQuoteAttribution: 'Sonam Wangchuk',
    body: [
      'Sonam Wangchuk founded SECMOL (Students\' Educational and Cultural Movement of Ladakh) in 1988 at the age of 22. The organisation was born from a radical idea: education should be rooted in local culture, practical skills, and environmental consciousness — not rote memorisation of textbooks designed for urban India.',
      'SECMOL\'s campus on the banks of the Indus River became a living laboratory. Built entirely with solar power, mud bricks, and local materials, it demonstrated that world-class education can happen anywhere. Over three decades, SECMOL trained hundreds of teachers, developed alternative curricula, and helped thousands of Ladakhi students pass board exams that government schools had failed to prepare them for.',
      'Wangchuk\'s innovations extended beyond classrooms. His Ice Stupa technology — artificial glaciers that store winter meltwater — won the Rolex Awards for Enterprise in 2016 and has been replicated in Switzerland, Mongolia, and Chile. It addressed the existential threat of glacial melt in the Himalayas with a simple, community-managed solution.',
    ],
    aside: {
      label: 'Built to last',
      text: 'The SECMOL campus is net-zero energy, built entirely from sun-dried mud bricks and solar power — a working proof that sustainability and quality education are not competing priorities.',
    },
  },
  {
    id: 'climate',
    title: 'Climate Activism',
    subtitle: 'Protecting the Third Pole',
    location: 'Himalayan Region',
    year: '2013',
    pullQuote:
      '"When the glaciers go, the rivers go. When the rivers go, a billion people go thirsty. This is not an environmental issue — it is a survival issue."',
    pullQuoteAttribution: 'Sonam Wangchuk',
    body: [
      'The Himalayan region — often called the "Third Pole" for its massive ice reserves — is warming faster than the global average. Ladakh\'s glaciers, which feed the Indus River system, have been retreating at alarming rates. For Wangchuk, this was never an abstract environmental issue — it was an existential threat to his homeland.',
      'The Ice Stupa project (2013) was his first major climate intervention. The concept is elegantly simple: freeze winter stream water into conical ice mounds that melt slowly in spring, providing water for crops precisely when needed. Each Ice Stupa stores millions of litres of water, costs virtually nothing to build, and is managed entirely by local communities. The technology has since been replicated across three countries on two continents.',
      'Beyond Ice Stupas, Wangchuk has campaigned against unchecked industrialisation in the Himalayas. He has opposed large hydroelectric dams in seismic zones, mining operations that destroy fragile ecosystems, and tourism policies that ignore carrying capacity. His argument is consistent: development cannot come at the cost of the ecosystem that sustains life for a billion people downstream.',
    ],
    aside: {
      label: 'By the numbers',
      text: '50+ Ice Stupas built across Ladakh. The technology has been replicated in Switzerland, Mongolia, and Chile. An estimated one billion people depend on water from the Himalayan river systems.',
    },
  },
  {
    id: 'statehood',
    title: 'Ladakh Statehood',
    subtitle: 'Fight for constitutional protections',
    location: 'Leh, Kargil, Delhi',
    year: '2019',
    pullQuote:
      '"We were granted a Union Territory without a legislature. That is not autonomy — that is administration by bureaucrats who have never set foot in Ladakh."',
    pullQuoteAttribution: 'Sonam Wangchuk',
    body: [
      'On August 5, 2019, the Indian government abrogated Article 370, the constitutional provision that granted special status to Jammu and Kashmir. Simultaneously, Ladakh was separated into a Union Territory — but critically, without a legislative assembly. For Ladakh\'s 290,000 people, this meant losing democratic representation while being governed by a centrally-appointed bureaucrat.',
      'The move triggered massive protests across Leh and Kargil. In Leh, over 10,000 people marched through the streets — the largest protests in Ladakh\'s history. The Ladakh Autonomous Hill Development Council, the region\'s only elected body, saw its constitutional protections weakened. Demands for Sixth Schedule status and Article 371-like protections became the central political issue.',
      'Since 2019, the movement has been led by a coalition of civil society groups, student unions, religious organisations, and political leaders — with Wangchuk emerging as one of its most prominent voices. The CJP\'s demand is unequivocal: full statehood for Ladakh with its own legislative assembly, including Article 371-like provisions for land ownership, job reservations for locals, and cultural preservation.',
    ],
    aside: {
      label: 'Five years and counting',
      text: 'The demand for Ladakh statehood has persisted since August 2019. Over 10,000 people protested in Leh alone. The region remains the only Union Territory in India without a legislature.',
    },
  },
  {
    id: 'education',
    title: 'Education Reform',
    subtitle: 'The thread that runs through everything',
    location: 'National',
    year: '2020',
    pullQuote:
      '"A nation that closes 100,000 schools in three years is not a nation investing in its future. It is a nation that has given up on its children."',
    pullQuoteAttribution: 'Sonam Wangchuk',
    body: [
      'Education reform is the thread that runs through every phase of Wangchuk\'s life. From founding SECMOL in 1988 to his hunger strike at Jantar Mantar in 2026, the demand for meaningful, accessible, culturally-rooted education has been his central cause.',
      'The National Education Policy 2020 was hailed as a progressive framework — recommending mother-tongue instruction, vocational training, reduced curriculum load, and increased funding. But three years after its announcement, implementation has been abysmal. Over 100,000 schools have closed since 2020, many in rural and tribal areas. Approximately 50,000 teacher vacancies remain unfilled. Digital infrastructure for border schools is virtually non-existent.',
      'Wangchuk\'s hunger strike was triggered by the government\'s failure to implement NEP 2020 in letter and spirit. His specific demands: reopen closed schools, create digital infrastructure for 500+ border schools, recruit teachers for 50,000 vacant posts, ensure mother-tongue education in primary years, and establish a parliamentary oversight mechanism for NEP implementation.',
    ],
    aside: {
      label: 'The gap between policy and reality',
      text: 'NEP 2020 promised sweeping reform. Since its announcement, over 100,000 schools have closed. Teacher vacancies exceed 50,000. Implementation in border regions like Ladakh remains negligible.',
    },
  },
  {
    id: 'cjp',
    title: 'The Cockroach Janata Party',
    subtitle: 'A people\'s platform, not a political party',
    location: 'National',
    year: '2024',
    pullQuote:
      '"We are called cockroaches because we will survive every attempt to crush us. We don\'t ask for your permission. We demand your accountability."',
    pullQuoteAttribution: 'Abhijit Dipke, CJP Founder',
    body: [
      'The Cockroach Janata Party was founded by activist-engineer Abhijit Dipke as a radical experiment in citizen-led politics. It is not a political party in the traditional sense — no membership fees, no hierarchical structure, no ticket distribution, no high command. It is a platform for ordinary citizens to hold the education system and political establishment accountable.',
      'The name "Cockroach" is deliberately provocative. It draws on the insect\'s legendary resilience — surviving 320 million years, nuclear radiation, and every extinction event. The message is clear: this movement will survive whatever the establishment throws at it.',
      'When Sonam Wangchuk began his hunger strike on June 29, 2026, the CJP was the first organisation to mobilise. Within days, thousands of supporters gathered at Jantar Mantar. The CJP\'s horizontal structure — anyone can show up and contribute — proved extraordinarily effective for rapid mobilisation.',
    ],
    aside: {
      label: 'Built differently',
      text: 'No membership fees. No high command. No ticket system. The CJP operates on one rule: everyone who shows up belongs. Founded in 2024, it has become one of the fastest-growing citizen platforms in India.',
    },
  },
  {
    id: 'rights',
    title: 'Democratic Rights',
    subtitle: 'Defending the right to protest',
    location: 'National',
    year: 'Ongoing',
    pullQuote:
      '"When they carry a fasting man like a criminal, they reveal not his weakness but their own fear. A democracy that fears peaceful protest has ceased to be a democracy."',
    pullQuoteAttribution: 'Sonam Wangchuk',
    body: [
      'The forcible removal of Sonam Wangchuk from Jantar Mantar on July 18, 2026, was not an isolated incident — it is part of a broader pattern of crackdown on peaceful protest and dissent in India. The movement\'s fifth demand is a comprehensive defence of democratic rights.',
      'The misuse of the Public Safety Act, the Unlawful Activities (Prevention) Act, and preventive detention laws has escalated dramatically. Activists, students, journalists, and tribal leaders have been arrested for exercising their constitutional right to peaceful assembly. Midnight raids, prolonged detention without trial, and denial of legal counsel have become common.',
      'During the Jantar Mantar protests alone, over 200 protesters were detained. Student hunger strikers — Neha, Manish, and Aameen — were arrested and later released. The movement demands: immediate release of all political prisoners, repeal of the draconian provisions of PSA and UAPA used against peaceful protesters, judicial oversight of all preventive detention orders, and protection of the fundamental rights to assembly, speech, and expression.',
    ],
    aside: {
      label: 'The cost of dissent',
      text: 'Over 200 protesters detained during the Jantar Mantar protests. Preventive detention laws including PSA and UAPA continue to be used against peaceful demonstrators. Legal cases pending against dozens who did nothing more than hold placards.',
    },
  },
]

/* Inline timeline data — narrative milestones woven into the document */
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

/* Key figures — rendered as signature-style callouts */
const keyFigures = [
  {
    name: 'Sonam Wangchuk',
    role: 'Education reformer, climate activist, founder of SECMOL',
    description:
      'Began an indefinite hunger strike at Jantar Mantar on June 29, 2026, demanding education reform, Ladakh statehood, and democratic rights. Forcibly removed by Delhi Police on July 18, 2026, after 21 days of fasting.',
    icon: Heart,
    tag: 'The inspiration',
  },
  {
    name: 'Abhijit Dipke',
    role: 'Founder, Cockroach Janata Party',
    description:
      'Engineer-turned-activist who founded CJP as a citizen-led platform for educational accountability. Organised the Chalo Sansad march on July 20, 2026, drawing 10,000+ protesters.',
    icon: Megaphone,
    tag: 'The organiser',
  },
  {
    name: 'Gitanjali J. Angmo',
    role: 'Wangchuk\'s wife and activist',
    description:
      'Joined her husband at Jantar Mantar on Day 11 of his hunger strike. Detained briefly during the July 18 police action. Has since become a powerful voice for the movement.',
    icon: Users,
    tag: 'The voice',
  },
  {
    name: 'Neha, Manish & Aameen',
    role: 'Student hunger strikers',
    description:
      'Three young activists who continue the indefinite hunger strike at Jantar Mantar even after Wangchuk\'s removal. As of late July 2026, they have completed over 21 days of fasting.',
    icon: Flag,
    tag: 'The future',
  },
]

/* =============================================================
   COMPONENTS
   ============================================================= */

/** Drop cap first letter — used in the lede paragraph */
function DropCap({ letter, children }) {
  return (
    <span className="float-left text-5xl sm:text-6xl lg:text-7xl leading-none font-display font-bold mr-3 mt-1 select-none"
          style={{ color: 'var(--color-accent)' }}>
      {letter}
      {children}
    </span>
  )
}

/** Pull-quote section divider */
function PullQuote({ quote, attribution, index }) {
  return (
    <motion.div
      variants={index % 2 === 0 ? narrative.slideInLeft : narrative.slideInRight}
      className="relative my-20 sm:my-28 max-w-3xl"
      style={{ marginLeft: index % 2 === 1 ? 'auto' : undefined }}
    >
      <div className="absolute -top-6 -left-6 text-6xl leading-none select-none"
           style={{ color: 'oklch(50% 0.2 25 / 0.12)' }}>
        {"“"}
      </div>
      <blockquote
        className="font-display font-bold text-xl sm:text-2xl lg:text-3xl leading-tight tracking-tight pl-6 sm:pl-8 border-l-4"
        style={{
          borderColor: 'var(--color-accent)',
          color: 'var(--color-ink)',
        }}
      >
        {quote}
      </blockquote>
      {attribution && (
        <footer className="mt-3 pl-6 sm:pl-8 text-sm font-medium"
                style={{ color: 'var(--color-muted)' }}>
          {"—"} {attribution}
        </footer>
      )}
    </motion.div>
  )
}

/** Aside callout — narrow sidebar-style annotation */
function Aside({ label, text }) {
  return (
    <motion.aside
      variants={narrative.slideInLeft}
      className="relative max-w-sm my-10 p-5 rounded-xl border-l-4"
      style={{
        backgroundColor: 'oklch(50% 0.2 25 / 0.04)',
        borderColor: 'var(--color-accent)',
      }}
    >
      <p className="text-xs font-bold uppercase tracking-widest mb-2"
         style={{ color: 'var(--color-accent)' }}>
        {label}
      </p>
      <p className="body-sm" style={{ color: 'var(--color-muted)' }}>
        {text}
      </p>
    </motion.aside>
  )
}

/** Inline timeline — horizontal scrollable timeline woven into the document */
function InlineTimeline({ items }) {
  return (
    <motion.section
      variants={narrative.item}
      className="my-24 py-12 border-t border-b"
      style={{
        borderColor: 'oklch(14% 0.01 25 / 0.06)',
        backgroundColor: 'oklch(50% 0.2 25 / 0.02)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Clock className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
          <h2 className="heading-3" style={{ color: 'var(--color-ink)' }}>
            Chronicle
          </h2>
          <motion.div
            variants={narrative.rule}
            className="flex-1 h-px"
            style={{ backgroundColor: 'oklch(14% 0.01 25 / 0.08)' }}
          />
        </div>

        <div className="flex overflow-x-auto gap-0 pb-4 snap-x snap-mandatory scrollbar-none"
             style={{ WebkitOverflowScrolling: 'touch' }}>
          {items.map((item, i) => (
            <motion.div
              key={item.year + item.event}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="flex-shrink-0 w-44 snap-start"
            >
              <div className="relative px-3 py-2">
                {/* Vertical connector */}
                <div className="absolute left-6 top-0 bottom-0 w-px"
                     style={{
                       backgroundColor: i === items.length - 1
                         ? 'transparent'
                         : 'oklch(50% 0.2 25 / 0.15)',
                     }} />
                {/* Dot */}
                <div className="w-3 h-3 rounded-full mb-3"
                     style={{
                       backgroundColor: i < 3
                         ? 'oklch(50% 0.2 25 / 0.3)'
                         : i < 7
                           ? 'var(--color-accent)'
                           : 'var(--color-gold-dark)',
                     }} />
                <time className="text-xs font-bold font-display block mb-1"
                      style={{ color: 'var(--color-accent)' }}>
                  {item.year}
                </time>
                <p className="body-sm leading-snug" style={{ color: 'var(--color-muted)' }}>
                  {item.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

/** Narrative chapter — one section of the long document */
function Chapter({ chapter, index }) {
  const isEven = index % 2 === 0

  return (
    <motion.article
      id={chapter.id}
      variants={narrative.item}
      className="scroll-mt-24 mb-24 last:mb-0"
    >
      {/* Location and year — document header metadata */}
      <div className="flex items-center gap-4 mb-6 max-w-measure"
           style={isEven ? {} : { marginLeft: 'auto' }}>
        <span className="text-xs font-bold uppercase tracking-widest"
              style={{ color: 'var(--color-accent)' }}>
          {chapter.year}
        </span>
        <span className="w-px h-4" style={{ backgroundColor: 'oklch(14% 0.01 25 / 0.12)' }} />
        <span className="flex items-center gap-1.5 text-xs font-medium"
              style={{ color: 'var(--color-muted)' }}>
          <MapPin className="w-3 h-3" />
          {chapter.location}
        </span>
      </div>

      {/* Chapter heading — pull-quote style */}
      <div className="mb-10 max-w-measure"
           style={isEven ? {} : { marginLeft: 'auto' }}>
        <h2 className="heading-2 mb-2" style={{ color: 'var(--color-ink)' }}>
          <span className="inline-block" style={{ color: 'var(--color-accent)' }}>
            {String(index + 1).padStart(2, '0')}.
          </span>{' '}
          {chapter.title}
        </h2>
        <p className="body-sm font-medium" style={{ color: 'var(--color-muted)' }}>
          {chapter.subtitle}
        </p>
      </div>

      {/* Pull quote */}
      <PullQuote quote={chapter.pullQuote} attribution={chapter.pullQuoteAttribution} index={index} />

      {/* Body paragraphs — asymmetric widths */}
      <div className="space-y-5"
           style={{ maxWidth: isEven ? undefined : '48rem' }}>
        {chapter.body.map((paragraph, pi) => (
          <p key={pi}
             className={pi === 0 ? 'body-lg' : 'body'}
             style={{
               maxWidth: pi === 0 ? undefined : 'var(--measure)',
               color: pi === 0 ? 'var(--color-ink)' : 'var(--color-muted)',
               marginLeft: pi === 0 && !isEven ? 'auto' : undefined,
             }}>
            {paragraph}
          </p>
        ))}
      </div>

      {/* Aside callout */}
      <Aside label={chapter.aside.label} text={chapter.aside.text} />

      {/* Section divider */}
      <motion.div
        variants={narrative.rule}
        className="h-px mt-16"
        style={{ backgroundColor: 'oklch(14% 0.01 25 / 0.06)' }}
      />
    </motion.article>
  )
}

/* =============================================================
   PAGE
   ============================================================= */
export default function Movement() {
  return (
    <article className="section" style={{ backgroundColor: 'var(--color-paper)' }}>
      <div className="container-custom max-w-5xl">
        {/* ---- EDITORIAL LEDE ---- */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={narrative.container}
          className="mb-16 sm:mb-24"
          aria-label="Opening"
        >
          {/* Salutation */}
          <motion.div variants={narrative.item} className="mb-10">
            <p className="body-lg font-medium" style={{ color: 'var(--color-muted)' }}>
              Dear reader,
            </p>
          </motion.div>

          {/* Lede with drop cap */}
          <motion.div variants={narrative.item} className="max-w-meaningful mb-8">
            <h1 className="sr-only">The Story Behind The Movement</h1>
            <p className="body-lg leading-relaxed" style={{ color: 'var(--color-ink)' }}>
              <DropCap letter="T" />
              his is a story about an engineer who refused to accept that a classroom needs four walls, a climate activist who built glaciers where they were melting, a hunger striker who was carried away like a criminal after twenty-one days of fasting for the children of India, and a movement that refuses to end.
            </p>
          </motion.div>

          <motion.div variants={narrative.item} className="max-w-measure">
            <p className="body" style={{ color: 'var(--color-muted)' }}>
              From a remote Ladakhi school in 1988 to the steps of Parliament in 2026, this is not a political campaign. It is a citizen-led reckoning with the questions India has avoided for too long: Who gets educated? Who gets heard? Who gets to decide what development looks like in the world&#39;s most fragile mountain ecosystem?
            </p>
          </motion.div>

          {/* Document metadata line */}
          <motion.div variants={narrative.item} className="flex items-center gap-4 mt-10 pt-6 border-t"
                      style={{ borderColor: 'oklch(14% 0.01 25 / 0.06)' }}>
            <span className="text-xs font-medium" style={{ color: 'var(--color-muted)' }}>
              A long document
            </span>
            <span className="w-px h-3" style={{ backgroundColor: 'oklch(14% 0.01 25 / 0.12)' }} />
            <span className="text-xs" style={{ color: 'var(--color-muted)' }}>
              Six chapters &middot; Four decades &middot; One movement
            </span>
          </motion.div>
        </motion.section>

        {/* ---- TABLE OF CONTENTS ---- */}
        <motion.nav
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={narrative.container}
          className="mb-20 sm:mb-28"
          aria-label="Chapter navigation"
        >
          <motion.p variants={narrative.item} className="text-xs font-bold uppercase tracking-widest mb-5"
                    style={{ color: 'var(--color-muted)' }}>
            Contents
          </motion.p>
          <div className="flex flex-wrap gap-2">
            {chapters.map((ch, i) => (
              <motion.a
                key={ch.id}
                href={`#${ch.id}`}
                variants={narrative.item}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  backgroundColor: 'oklch(50% 0.2 25 / 0.06)',
                  color: 'var(--color-ink)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'oklch(50% 0.2 25 / 0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'oklch(50% 0.2 25 / 0.06)'
                }}
              >
                <span className="font-bold text-xs" style={{ color: 'var(--color-accent)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {ch.title}
              </motion.a>
            ))}
          </div>
        </motion.nav>

        {/* ---- NARRATIVE CHAPTERS ---- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={narrative.container}
        >
          {chapters.map((chapter, index) => (
            <Chapter key={chapter.id} chapter={chapter} index={index} />
          ))}
        </motion.div>

        {/* ---- INLINE TIMELINE ---- */}
        <InlineTimeline items={inlineTimeline} />

        {/* ---- KEY FIGURES (curator-style callouts) ---- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={narrative.container}
          className="my-24"
          aria-label="Key figures"
        >
          <motion.div variants={narrative.item} className="mb-10 max-w-measure">
            <p className="text-xs font-bold uppercase tracking-widest mb-2"
               style={{ color: 'var(--color-accent)' }}>
              The people
            </p>
            <h2 className="heading-2" style={{ color: 'var(--color-ink)' }}>
              Voices of the movement
            </h2>
            <p className="body mt-3" style={{ color: 'var(--color-muted)' }}>
              Ordinary citizens doing extraordinary things. These are the people leading from the front.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {keyFigures.map((figure, i) => (
              <motion.div
                key={figure.name}
                variants={narrative.item}
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: 'oklch(98% 0.008 25)',
                  border: '1px solid oklch(14% 0.01 25 / 0.06)',
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                     style={{ backgroundColor: 'oklch(50% 0.2 25 / 0.08)' }}>
                  <figure.icon className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider block mb-2"
                      style={{ color: 'var(--color-accent)' }}>
                  {figure.tag}
                </span>
                <h3 className="font-display font-bold text-base mb-1" style={{ color: 'var(--color-ink)' }}>
                  {figure.name}
                </h3>
                <p className="body-sm font-medium mb-2" style={{ color: 'var(--color-accent)' }}>
                  {figure.role}
                </p>
                <p className="body-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                  {figure.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ---- SIGNOFF ---- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={narrative.container}
          className="mt-24 sm:mt-32 pt-16 border-t"
          style={{
            borderColor: 'oklch(14% 0.01 25 / 0.06)',
          }}
          aria-label="Signoff"
        >
          <motion.div variants={narrative.item} className="max-w-measure">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}>
                &#9998;
              </span>
              <span className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: 'var(--color-accent)' }}>
                Signoff
              </span>
            </div>

            <p className="body-lg font-medium mb-6" style={{ color: 'var(--color-ink)' }}>
              This movement runs on people, not parties.
            </p>

            <div className="space-y-4 body" style={{ color: 'var(--color-muted)' }}>
              <p>
                No billionaire donors. No corporate sponsors. No political machinery. Just citizens who refuse to stay silent. That is where you come in.
              </p>
              <p>
                History does not remember those who stayed silent. It remembers those who showed up. The movement needs you. Not tomorrow. Today.
              </p>
            </div>

            {/* Signature line */}
            <div className="mt-10 pt-6 border-t"
                 style={{ borderColor: 'oklch(14% 0.01 25 / 0.06)' }}>
              <p className="body-sm font-medium" style={{ color: 'var(--color-ink)' }}>
                With resolve,
              </p>
              <div className="flex items-center gap-4 mt-2">
                <div className="font-display font-bold text-xl tracking-tight italic"
                     style={{ color: 'var(--color-accent)' }}>
                  The Movement
                </div>
                <span className="text-xs" style={{ color: 'var(--color-muted)' }}>
                  July 2026
                </span>
              </div>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={narrative.item} className="flex flex-wrap gap-4 mt-10">
            <Link
              to="/action"
              className="btn btn-primary"
            >
              <Flag className="w-5 h-5" />
              Take action now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/timeline"
              className="btn btn-outline"
            >
              <Clock className="w-5 h-5" />
              View the full timeline
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </article>
  )
}
