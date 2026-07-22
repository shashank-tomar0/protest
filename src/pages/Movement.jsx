import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Heart, Users, Flag, BookOpen, MapPin, Leaf, Scale,
  Building2, Megaphone, Vote, Camera, Award, Clock, Globe, Target,
  Shield, ExternalLink, Quote
} from 'lucide-react'

const movementSections = [
  {
    id: 'origins',
    icon: BookOpen,
    title: 'Origins',
    subtitle: 'From SECMOL to National Stage',
    color: 'from-blue-500 to-blue-600',
    accent: 'text-blue-500',
    bgAccent: 'bg-blue-500',
    year: '1988',
    location: 'Leh, Ladakh',
    content: [
      'Sonam Wangchuk founded SECMOL (Students\' Educational and Cultural Movement of Ladakh) in 1988 at the age of 22. The organization was born from a radical idea: education should be rooted in local culture, practical skills, and environmental consciousness — not rote memorization of textbooks designed for urban India.',
      'SECMOL\'s campus on the banks of the Indus River became a living laboratory. Built entirely with solar power, mud bricks, and local materials, it demonstrated that world-class education can happen anywhere. Over three decades, SECMOL trained hundreds of teachers, developed alternative curricula, and helped thousands of Ladakhi students pass board exams that government schools had failed to prepare them for.',
      'Wangchuk\'s innovations extended beyond classrooms. His Ice Stupa technology — artificial glaciers that store winter meltwater — won the Rolex Awards for Enterprise in 2016 and has been replicated in Switzerland, Mongolia, and Chile. It addressed the existential threat of glacial melt in the Himalayas with a simple, community-managed solution.',
      'In 2009, Aamir Khan\'s blockbuster film 3 Idiots introduced millions to Wangchuk\'s educational philosophy through the character Phunsukh Wangdu. The film became the highest-grossing Bollywood film of its time, sparking a nationwide conversation about creativity-driven education.',
    ],
    stats: [
      { value: '1988', label: 'Founded' },
      { value: '10,000+', label: 'Students Impacted' },
      { value: '100+', label: 'Teachers Trained' },
      { value: 'Rolex', label: 'Award Winner' },
    ],
  },
  {
    id: 'climate',
    icon: Leaf,
    title: 'Climate Activism',
    subtitle: 'Protecting the Third Pole',
    color: 'from-sage to-teal-600',
    accent: 'text-green-500',
    bgAccent: 'bg-green-500',
    year: '2013',
    location: 'Himalayan Region',
    content: [
      'The Himalayan region — often called the "Third Pole" for its massive ice reserves — is warming faster than the global average. Ladakh\'s glaciers, which feed the Indus River system, have been retreating at alarming rates. For Wangchuk, this wasn\'t an abstract environmental issue — it was an existential threat to his homeland.',
      'Wangchuk\'s Ice Stupa project (2013) was his first major climate intervention. The concept is elegantly simple: freeze winter stream water into conical ice mounds that melt slowly in spring, providing water for crops precisely when needed. Each Ice Stupa stores millions of liters of water, costs virtually nothing to build, and is managed entirely by local communities.',
      'Beyond Ice Stupas, Wangchuk has campaigned against unchecked industrialization in the Himalayas. He has opposed large hydroelectric dams in seismic zones, mining operations that destroy fragile ecosystems, and tourism policies that ignore carrying capacity. His argument is consistent: development cannot come at the cost of the ecosystem that sustains life for a billion people downstream.',
      'The CJP and Wangchuk demand mandatory Environmental Impact Assessments for all projects above 50 hectares in Himalayan states, glacier protection zones where no construction is permitted, and community consent (Free, Prior, and Informed Consent) for any project on tribal lands.',
    ],
    stats: [
      { value: '50+', label: 'Ice Stupas Built' },
      { value: '3', label: 'Countries Replicated' },
      { value: 'Rolex', label: 'Award 2016' },
      { value: '1B+', label: 'People Depend on Himalayan Water' },
    ],
  },
  {
    id: 'statehood',
    icon: Building2,
    title: 'Ladakh Statehood',
    subtitle: 'Fight for Constitutional Protections',
    color: 'from-cjp-primary to-cjp-primary-dark',
    accent: 'text-cjp-primary',
    bgAccent: 'bg-cjp-primary',
    year: '2019',
    location: 'Leh, Kargil, Delhi',
    content: [
      'On August 5, 2019, the Indian government abrogated Article 370, the constitutional provision that granted special status to Jammu and Kashmir. Simultaneously, Ladakh was separated into a Union Territory — but critically, without a legislative assembly. For Ladakh\'s 290,000 people, this meant losing democratic representation while being governed by a centrally-appointed bureaucrat.',
      'The move triggered massive protests across Leh and Kargil. In Leh, over 10,000 people marched through the streets — the largest protests in Ladakh\'s history. The Ladakh Autonomous Hill Development Council (LAHDC), the region\'s only elected body, saw its constitutional protections weakened. Demands for Sixth Schedule status (which provides tribal autonomy) and Article 371-like protections (safeguarding land, jobs, and culture) became the central political issue.',
      'Since 2019, the Ladakh Statehood movement has been led by a coalition of civil society groups, student unions, religious organizations, and political leaders — with Sonam Wangchuk emerging as one of its most prominent voices. He has argued that without legislative representation, Ladakh\'s unique cultural, geographical, and economic needs will be ignored by Delhi bureaucrats who have never visited the region.',
      'The CJP\'s demand is unequivocal: full statehood for Ladakh with its own legislative assembly. This includes Article 371-like provisions for land ownership (preventing outsider acquisition), job reservations for locals, cultural preservation, and direct funding from the Centre without bureaucratic intermediation.',
    ],
    stats: [
      { value: '290K', label: 'Ladakh\'s Population' },
      { value: 'Aug 5, 2019', label: 'Article 370 Abrogated' },
      { value: '10,000+', label: 'Protested in Leh' },
      { value: '5+ Years', label: 'Demand Ongoing' },
    ],
  },
  {
    id: 'cjp',
    icon: Megaphone,
    title: 'Cockroach Janata Party',
    subtitle: 'The Birth of a People\'s Movement',
    color: 'from-gold to-orange-500',
    accent: 'text-cjp-gold-dark',
    bgAccent: 'bg-cjp-gold',
    year: '2024',
    location: 'National',
    content: [
      'The Cockroach Janata Party (CJP) was founded by activist-engineer Abhijit Dipke as a radical experiment in citizen-led politics. It is not a political party in the traditional sense — no membership fees, no hierarchical structure, no ticket distribution, no high command. It is a platform for ordinary citizens to hold the education system and political establishment accountable.',
      'The name "Cockroach" is deliberately provocative. It draws on the insect\'s legendary resilience — surviving 320 million years, nuclear radiation, and every extinction event. The message is clear: this movement will survive whatever the establishment throws at it. It adapts. It endures. It doesn\'t need permission to exist.',
      'When Sonam Wangchuk began his hunger strike on June 29, 2026, the CJP was the first organization to mobilize. Within days, thousands of supporters gathered at Jantar Mantar. Student unions, teachers\' associations, writers\' collectives, and civil society organizations joined. The CJP\'s horizontal structure — anyone can show up and contribute — proved extraordinarily effective for rapid mobilization.',
      'CJP\'s "Why Cockroach?" manifesto states: "We are called cockroaches because we will survive every attempt to crush us. We will show up in your parliaments, in your courts, in your streets, in your classrooms. We don\'t ask for your permission. We demand your accountability."',
    ],
    stats: [
      { value: '2024', label: 'Founded' },
      { value: '320M', label: 'Years of Resilience' },
      { value: '0', label: 'Membership Fees' },
      { value: 'Grassroots', label: 'Structure' },
    ],
  },
  {
    id: 'education',
    icon: BookOpen,
    title: 'Education Reform',
    subtitle: 'The Core of the Movement',
    color: 'from-purple-500 to-purple-600',
    accent: 'text-purple-500',
    bgAccent: 'bg-purple-500',
    year: '2020',
    location: 'National',
    content: [
      'Education reform is the thread that runs through every phase of Wangchuk\'s life. From founding SECMOL in 1988 to his hunger strike at Jantar Mantar in 2026, the demand for meaningful, accessible, culturally-rooted education has been his central cause.',
      'The National Education Policy 2020 was hailed as a progressive framework — recommending mother-tongue instruction, vocational training, reduced curriculum load, and increased funding. But three years after its announcement, implementation has been abysmal. Over 100,000 schools have closed since 2020 — many in rural and tribal areas. 50,000 teacher vacancies remain unfilled. Digital infrastructure for border schools is non-existent.',
      'Wangchuk\'s hunger strike was triggered by the government\'s failure to implement NEP 2020 in letter and spirit. His specific demands: reopen closed schools, create digital infrastructure for 500+ border schools, recruit teachers for 50,000 vacant posts, ensure mother-tongue education in primary years, and establish a parliamentary oversight mechanism for NEP implementation.',
      'The education crisis is particularly acute in Ladakh, where schools struggle with extreme weather, teacher absenteeism, curriculum irrelevance, and lack of basic infrastructure. SECMOL\'s alternative model — which has produced some of Ladakh\'s top-performing students — proves that the problem is not the children but the system.',
    ],
    stats: [
      { value: '100K+', label: 'Schools Closed Since 2020' },
      { value: '50,000', label: 'Teacher Vacancies' },
      { value: '1988', label: 'SECMOL Founded' },
      { value: 'NEP 2020', label: 'Yet to Implement' },
    ],
  },
  {
    id: 'rights',
    icon: Scale,
    title: 'Democratic Rights',
    subtitle: 'Defending the Right to Protest',
    color: 'from-red-600 to-red-700',
    accent: 'text-red-500',
    bgAccent: 'bg-red-500',
    year: 'Ongoing',
    location: 'National',
    content: [
      'The forcible removal of Sonam Wangchuk from Jantar Mantar on July 18, 2026, was not an isolated incident — it is part of a broader pattern of crackdown on peaceful protest and dissent in India. The movement\'s fifth demand is a comprehensive defense of democratic rights.',
      'The misuse of the Public Safety Act (PSA), the Unlawful Activities (Prevention) Act (UAPA), and preventive detention laws has escalated dramatically. Activists, students, journalists, and tribal leaders have been arrested for exercising their constitutional right to peaceful assembly (Article 19). Midnight raids, prolonged detention without trial, and denial of legal counsel have become common.',
      'During the Jantar Mantar protests alone, over 200 protesters were detained. Student hunger strikers — Neha, Manish, and Aameen — were arrested and later released. Legal cases under various sections continue against dozens of activists who did nothing more than hold placards demanding education reform.',
      'The movement demands: immediate release of all political prisoners, repeal of the draconian provisions of PSA and UAPA used against peaceful protesters, judicial oversight of all preventive detention orders, and protection of the fundamental rights to assembly, speech, and expression guaranteed by the Constitution.',
    ],
    stats: [
      { value: '200+', label: 'Protesters Detained' },
      { value: 'PSA/UAPA', label: 'Laws Misused' },
      { value: 'Arrests', label: 'Midnight Raids Continue' },
      { value: 'Demand', label: 'Release All Political Prisoners' },
    ],
  },
]

const keyFigures = [
  {
    name: 'Sonam Wangchuk',
    role: 'Education Reformer & Climate Activist',
    description: 'Founder of SECMOL, inventor of Ice Stupas, Rolex Award laureate, and inspiration for the character Phunsukh Wangdu in 3 Idiots. Began an indefinite hunger strike at Jantar Mantar on June 29, 2026, demanding education reform, Ladakh statehood, and democratic rights. Forcibly removed by Delhi Police on July 18, 2026, after 21 days of fasting.',
    icon: Heart,
    tag: 'The Inspiration',
  },
  {
    name: 'Abhijit Dipke',
    role: 'Founder, Cockroach Janata Party',
    description: 'Engineer-turned-activist who founded CJP as a citizen-led platform for educational accountability. Organized the Chalo Sansad march on July 20, 2026, drawing 10,000+ protesters. Began his own hunger strike at Jantar Mantar after Wangchuk\'s removal, continuing the demand for justice.',
    icon: Megaphone,
    tag: 'The Organizer',
  },
  {
    name: 'Gitanjali J. Angmo',
    role: 'Wangchuk\'s Wife & Activist',
    description: 'Joined her husband at Jantar Mantar on Day 11 of his hunger strike. Spoke publicly about his deteriorating health and the government\'s inaction. Detained briefly during the July 18 police action. Has since become a powerful voice for the movement, addressing media and coordinating with human rights organizations.',
    icon: Users,
    tag: 'The Voice',
  },
  {
    name: 'Neha, Manish & Aameen',
    role: 'Student Hunger Strikers',
    description: 'Three young activists who continue the indefinite hunger strike at Jantar Mantar even after Wangchuk\'s removal. As of late July 2026, they have completed over 21 days of fasting. Arrested and released, they represent the next generation of the movement — undeterred, uncompromising, and driven by the belief that education is a fundamental right.',
    icon: Flag,
    tag: 'The Future',
  },
]

const timelineHighlights = [
  { year: '1988', event: 'SECMOL founded in Leh' },
  { year: '2009', event: '3 Idiots releases; Wangchuk inspires Phunsukh Wangdu' },
  { year: '2013', event: 'First Ice Stupa prototype built' },
  { year: '2016', event: 'Rolex Award for Enterprise' },
  { year: '2019', event: 'Article 370 abrogated; Ladakh Statehood demand begins' },
  { year: '2024', event: 'Cockroach Janata Party founded by Abhijit Dipke' },
  { year: 'June 29, 2026', event: 'Wangchuk begins hunger strike at Jantar Mantar' },
  { year: 'July 18, 2026', event: 'Forcible removal by Delhi Police — the viral photo' },
  { year: 'July 20, 2026', event: 'Chalo Sansad march — 10,000+ protesters' },
  { year: 'Ongoing', event: 'Legal battles, global advocacy, hunger strike continues' },
]

function SectionBlock({ section, index }) {
  return (
    <motion.article
      id={section.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="scroll-mt-24"
    >
      <div className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className={`p-6 lg:p-8 rounded-2xl border relative overflow-hidden group cursor-default`}
               style={{ background: `${section.accent.split('text-')[1] ? `var(--color-${section.accent.split('text-')[1].split('-')[0] === 'gold' ? 'gold' : section.accent.split('text-')[1]})` : '#0D1B2A'}10`, borderColor: `${section.accent.split('text-')[1] ? `var(--color-${section.accent.split('text-')[1].split('-')[0] === 'gold' ? 'gold' : section.accent.split('text-')[1]})` : '#0D1B2A'}20` }}>
            <div className={`w-16 h-16 rounded-2xl ${section.bgAccent}/10 flex items-center justify-center mb-6 ${section.accent} group-hover:scale-110 transition-transform`}>
              <section.icon className="w-8 h-8" aria-hidden="true" />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <time className={`font-mono font-medium text-sm ${section.accent}`}>{section.year}</time>
              <span className="text-cjp-secondary/80 text-sm flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {section.location}
              </span>
            </div>
            <h2 className="heading-3 text-cjp-secondary mb-2">{section.title}</h2>
            <p className="text-cjp-secondary/80 leading-relaxed text-sm">{section.subtitle}</p>
          </div>
        </div>

        <div className="space-y-6">
          {section.content.map((paragraph, pi) => (
            <p key={pi} className="text-cjp-secondary/80 leading-relaxed">{paragraph}</p>
          ))}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-cjp-secondary/10">
            {section.stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-cjp-accent">
                <p className="font-display text-2xl font-bold text-cjp-secondary">{stat.value}</p>
                <p className="text-cjp-secondary/80 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {index < movementSections.length - 1 && (
        <div className="my-16 border-t border-cjp-secondary/5" />
      )}
    </motion.article>
  )
}

export default function Movement() {
  return (
    <>
      <section className="section bg-gradient-to-b from-cjp-primary/5 via-cjp-accent to-gold/5 relative overflow-hidden" aria-labelledby="movement-hero-title">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="badge badge-primary mb-6 inline-block">The Movement</span>
            <h1 id="movement-hero-title" className="heading-1 text-cjp-secondary mb-6">
              The Story Behind <span className="gradient-text">The Movement</span>
            </h1>
            <p className="body-lg text-cjp-secondary/80 max-w-2xl mx-auto">
              From a remote Ladakhi classroom in 1988 to the steps of Parliament in 2026 —
              a decades-long journey for education, ecology, and democracy.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="movement-sections-title">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 id="movement-sections-title" className="heading-2 text-cjp-secondary mb-4">
              Six Threads, <span className="gradient-text">One Movement</span>
            </h2>
            <p className="text-cjp-secondary/80 leading-relaxed">
              Each thread weaves into the others — education fuels democracy, ecology shapes economy,
              and the fight for Ladakh's future is inseparable from India's democratic resilience.
            </p>

            <nav className="flex flex-wrap justify-center gap-2 mt-8" aria-label="Movement sections">
              {movementSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cjp-accent border border-cjp-secondary/10 text-sm font-medium text-cjp-secondary/80 hover:text-cjp-primary hover:border-cjp-primary/30 transition-colors"
                >
                  <section.icon className="w-4 h-4" aria-hidden="true" />
                  {section.title}
                </a>
              ))}
            </nav>
          </motion.div>

          <div className="space-y-8 lg:space-y-16">
            {movementSections.map((section, index) => (
              <SectionBlock key={section.id} section={section} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cjp-accent" aria-labelledby="timeline-highlights-title">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 id="timeline-highlights-title" className="heading-2 text-cjp-secondary mb-4">
              Full <span className="gradient-text">Timeline</span>
            </h2>
            <p className="text-cjp-secondary/80 leading-relaxed">
              From a classroom in Ladakh to a nation watching — key moments across four decades.
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cjp-primary via-gold to-cjp-primary/20 hidden sm:block" />

            <div className="space-y-0">
              {timelineHighlights.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative sm:pl-16 pb-8 last:pb-0"
                >
                  <div className="hidden sm:flex absolute left-[14px] top-1.5 w-[18px] h-[18px] rounded-full border-4 border-white bg-cjp-accent z-10"
                       style={{ borderColor: index < 3 ? 'var(--color-cjp-primary)' : index < 7 ? 'var(--color-gold-dark)' : 'var(--color-cjp-dark)' }} />
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                    <time className="font-mono font-bold text-sm whitespace-nowrap"
                          style={{ color: index < 3 ? 'var(--color-cjp-primary)' : index < 7 ? 'var(--color-gold-dark)' : 'var(--color-cjp-dark)' }}>
                      {item.year}
                    </time>
                    <p className="text-cjp-secondary">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link to="/timeline" className="btn-primary btn-lg inline-flex items-center gap-3">
              <Clock className="w-5 h-5" /> View Detailed Timeline
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section bg-cjp-secondary text-cjp-accent relative overflow-hidden" aria-labelledby="cjp-title">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="badge badge-primary mb-4 inline-block">Cockroach Janata Party</span>
              <h2 id="cjp-title" className="heading-2 text-cjp-accent mb-6">
                Why <span className="text-cjp-gold">"Cockroach"?</span>
              </h2>
              <div className="space-y-4 text-cjp-secondary/60 leading-relaxed">
                <p className="text-xl text-cjp-gold font-display font-semibold">
                  "They can survive nuclear radiation. They've been here 320 million years. They'll be here long after we're gone."
                </p>
                <p>
                  The name isn't an insult — it's a declaration of resilience. The cockroach survives everything.
                  It adapts. It endures. It doesn't need permission to exist. It shows up everywhere, uninvited,
                  and refuses to leave. That is what this movement does.
                </p>
                <p>
                  CJP is not a traditional political party with hierarchies, tickets, and vote banks.
                  It is a <strong className="text-cjp-accent">platform for citizens</strong> — students, parents, teachers,
                  farmers, engineers — who refuse to accept a broken education system and a democracy that forgets its people.
                </p>
                <p>
                  No membership fees. No high command. No ticket system. Just one rule: <em className="italic text-cjp-gold">show up.</em>
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  'No hierarchy — horizontal structure',
                  'Citizen-led, not politician-led',
                  'Issue-based, not identity-based',
                  'Non-violent civil resistance',
                  'Transparent decision-making',
                  'Accountable to the people',
                  'Inclusive of all castes & creeds',
                  'Resilient — survives every attack',
                ].map((principle) => (
                  <div key={principle} className="flex items-center gap-2 text-sm text-cjp-secondary/60">
                    <div className="w-2 h-2 rounded-full bg-cjp-gold flex-shrink-0" />
                    <span>{principle}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-cjp-secondary-light relative overflow-hidden gradient-border">
                <div className="absolute inset-0 bg-gradient-to-br from-cjp-primary/20 via-transparent to-gold/20" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center relative z-10">
                    <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-cjp-primary/20 flex items-center justify-center">
                      <Target className="w-14 h-14 text-cjp-primary" />
                    </div>
                    <h3 className="heading-2 text-cjp-accent mb-4">CJP</h3>
                    <p className="text-cjp-secondary/60 text-lg mb-6 max-w-xs mx-auto">
                      A people's platform. Not a party.
                    </p>
                    <blockquote className="border-l-2 border-cjp-gold pl-4 text-left text-cjp-secondary/60 text-sm italic max-w-xs mx-auto">
                      "We are called cockroaches because we will survive every attempt to crush us.
                      We will show up in your parliaments, in your courts, in your streets, in your classrooms."
                      <footer className="mt-2 text-cjp-gold not-italic text-xs">— Abhijit Dipke, CJP Founder</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="figures-title">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 id="figures-title" className="heading-2 text-cjp-secondary mb-4">
              <span className="gradient-text">Voices</span> of the Movement
            </h2>
            <p className="text-cjp-secondary/80 leading-relaxed">
              Ordinary citizens doing extraordinary things. These are the people leading from the front.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFigures.map((figure, index) => (
              <motion.article
                key={figure.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card card-hover p-6 text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cjp-primary to-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-cjp-primary/10 flex items-center justify-center text-cjp-primary group-hover:scale-110 transition-transform">
                    <figure.icon className="w-10 h-10" aria-hidden="true" />
                  </div>
                  <span className="badge badge-primary mb-3 inline-block">{figure.tag}</span>
                  <h3 className="heading-4 text-cjp-secondary mb-1">{figure.name}</h3>
                  <p className="text-cjp-primary font-medium text-sm mb-3">{figure.role}</p>
                  <p className="text-cjp-secondary/80 text-sm leading-relaxed">{figure.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cjp-secondary text-cjp-accent relative overflow-hidden" aria-labelledby="movement-cta-title">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 id="movement-cta-title" className="heading-2 text-cjp-accent mb-6">
              This Movement Runs on <span className="text-cjp-gold">People</span>, Not Parties
            </h2>
            <p className="body-lg text-cjp-secondary/60 mb-10">
              No billionaire donors. No corporate sponsors. No political machinery.
              Just citizens who refuse to stay silent. That's where you come in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/action" className="btn-primary btn-lg">
                <Flag className="w-5 h-5" /> Take Action Now
              </Link>
              <Link to="/donate" className="btn-outline border-cjp-accent/30 text-cjp-accent hover:bg-cjp-accent hover:text-cjp-secondary btn-lg">
                <Heart className="w-5 h-5" /> Support the Movement
              </Link>
              <Link to="/timeline" className="btn-ghost text-cjp-accent hover:bg-white/10 btn-lg">
                <Clock className="w-5 h-5" /> View Timeline
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
