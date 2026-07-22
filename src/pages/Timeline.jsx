import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Heart, Users, Flag, Calendar, MapPin, AlertCircle, Megaphone,
  Camera, Shield, Vote, Building2, BookOpen, Leaf, Factory, Hospital, Briefcase,
  Scale, Globe, ChevronDown, Play, Clock, ExternalLink
} from 'lucide-react'

const timelinePhases = [
  {
    id: 'pre-movement',
    phase: 1,
    title: 'Pre-Movement Foundations',
    period: '1988 - 2019',
    subtitle: 'Decades of quiet revolution — building the foundation for change',
    color: 'from-blue-500 to-blue-600',
    badgeColor: 'bg-blue-500',
    icon: BookOpen,
    events: [
      {
        date: '1988',
        title: 'SECMOL Founded',
        description: 'Sonam Wangchuk establishes the Students\' Educational and Cultural Movement of Ladakh (SECMOL) at age 22. The organization transforms education in Ladakh by introducing practical, culturally-rooted learning methods. SECMOL\'s campus on the banks of the Indus becomes a model for alternative education.',
        icon: BookOpen,
        highlight: 'The seed of everything that followed.',
        details: [
          'Alternative curriculum for Ladakhi schools',
          'Solar-powered campus (net-zero energy)',
          '100+ teachers trained annually',
          'Focus on Ladakhi language & culture',
        ],
      },
      {
        date: '2009',
        title: '3 Idiots Brings Global Attention',
        description: 'Aamir Khan\'s blockbuster film 3 Idiots features the character Phunsukh Wangdu, inspired by Sonam Wangchuk\'s life and educational philosophy. The film becomes the highest-grossing Bollywood film ever at the time, bringing Wangchuk\'s ideas about creativity-driven education to millions.',
        icon: Camera,
        highlight: 'A character that changed how India thinks about education.',
      },
      {
        date: '2013',
        title: 'Ice Stupa Revolution',
        description: 'Wangchuk invents the Ice Stupa — artificial glaciers that store winter meltwater in conical ice mounds for spring irrigation. The innovation addresses water scarcity caused by glacial melt in the Himalayas. Wins the Rolex Awards for Enterprise (2016). The Ice Stupa becomes a global symbol of grassroots climate innovation.',
        icon: Leaf,
        highlight: 'Turning a climate crisis into a solution — one glacier at a time.',
        details: [
          'Stores millions of liters of water',
          'Rolex Award for Enterprise 2016',
          'Replicated in Switzerland, Mongolia, Chile',
          'Zero-cost, community-managed technology',
        ],
      },
      {
        date: '2019',
        title: 'Article 370 Abrogated',
        description: 'On August 5, 2019, the Indian government abrogates Article 370, stripping Jammu & Kashmir of special status. Ladakh is separated into a Union Territory without a legislative assembly. Mass protests erupt across Leh and Kargil. The Ladakh Autonomous Hill Development Council loses constitutional protections. This event catalyzes the demand for statehood and Sixth Schedule protections.',
        icon: Building2,
        highlight: 'The political earthquake that reshaped Ladakh\'s future.',
      },
    ],
  },
  {
    id: 'hunger-strike',
    phase: 2,
    title: 'The Hunger Strike',
    period: 'June 29 - July 18, 2026',
    subtitle: '21 days that shook the conscience of a nation',
    color: 'from-cjp-primary to-cjp-primary-dark',
    badgeColor: 'bg-cjp-primary',
    icon: Heart,
    events: [
      {
        date: 'June 29, 2026',
        title: 'Hunger Strike Begins at Jantar Mantar',
        description: 'Sonam Wangchuk begins an indefinite hunger strike at Jantar Mantar, New Delhi. His demands: full implementation of NEP 2020, Ladakh statehood with legislative assembly, and protection of democratic rights. He is accompanied by supporters from SECMOL and Ladakhi student organizations.',
        icon: Heart,
        highlight: 'Day 1 of 21 — a fast that would change everything.',
      },
      {
        date: 'July 5, 2026',
        title: 'CJP Joins & Protests Escalate',
        description: 'Cockroach Janata Party founder Abhijit Dipke arrives at Jantar Mantar with hundreds of supporters. The protest grows from dozens to thousands. Student unions from JNU, Delhi University, Jamia Millia Islamia announce solidarity. The first wave of arrests begins — 47 students detained under PSA.',
        icon: Users,
        highlight: 'What started as one man\'s fast becomes a movement.',
        details: [
          'CJP announces full mobilization',
          '47 students arrested, released on bail',
          'Solidarity protests in 12 cities',
          '#StandWithSonam trends nationally',
        ],
      },
      {
        date: 'July 8, 2026',
        title: 'Health Crisis Warnings',
        description: 'Medical reports show Wangchuk has lost 7 kgs. Blood pressure drops to 103/68. Doctors from AIIMS warn of irreversible organ damage if the fast continues beyond 21 days. His wife Gitanjali Angmo joins him at the protest site, issuing emotional appeals. The nation holds its breath.',
        icon: AlertCircle,
        highlight: 'The body weakens but the resolve does not.',
      },
      {
        date: 'July 10-15, 2026',
        title: 'Nationwide Solidarity Wave',
        description: 'Protests erupt across India: Leh (10,000+), Kargil (5,000+), Mumbai (3,000+), Bangalore (2,000+), Chennai (1,500+). International solidarity events in London, New York, Toronto, Sydney. 100+ arrests nationwide. Opposition MPs demand a parliamentary discussion. Home Ministry remains silent.',
        icon: Flag,
        highlight: 'From Ladakh to London — the world watches.',
      },
    ],
  },
  {
    id: 'crisis',
    phase: 3,
    title: 'The Crisis',
    period: 'July 18 - 19, 2026',
    subtitle: 'One image that defined a movement',
    color: 'from-red-600 to-red-700',
    badgeColor: 'bg-red-600',
    icon: Shield,
    events: [
      {
        date: 'July 18, 2026 — 6:30 AM',
        title: 'Forced Removal from Jantar Mantar',
        description: 'In a pre-dawn operation, over 50 Delhi Police personnel, including women constables and senior officers, forcibly remove Sonam Wangchuk from the protest site. Wangchuk — weak from 21 days of fasting — is carried away by six officers. He does not resist. He does not shout. Witnesses report he simply said: "I was fasting for the children of India."',
        icon: Shield,
        highlight: 'They carried a fasting man like a criminal. The image that shook India.',
        details: [
          '50+ police personnel deployed',
          'Wangchuk too weak to walk, carried by 6 officers',
          'Wife Gitanjali detained, later released',
          'Video footage captured by protestors goes viral',
        ],
      },
      {
        date: 'July 18, 2026 — Afternoon',
        title: 'Forced Hospitalization',
        description: 'Wangchuk is taken to AIIMS Delhi where he is administered IV fluids and nutrients against his will. His legal team files an urgent habeas corpus petition in the Delhi High Court, arguing that the forced medical treatment violates his right to bodily autonomy and informed consent. AIIMS doctors report his condition as "critical but stable."',
        icon: Hospital,
        highlight: 'A hunger striker\'s body becomes a battleground of rights.',
      },
      {
        date: 'July 19, 2026',
        title: 'The Viral Photo — 50 Million Views',
        description: 'The image of police officers carrying Wangchuk spreads globally within hours. 50 million views on Twitter/X within 24 hours. BBC, The Guardian, Al Jazeera, The New York Times, and Le Monde lead with the story. UN Special Rapporteurs issue an urgent statement calling for his release. The image becomes the defining symbol of state overreach in modern India.',
        icon: Camera,
        highlight: 'A photograph that demands an answer: what kind of democracy is this?',
        details: [
          '50M+ views on X/Twitter in 24 hours',
          'Front page of every major newspaper',
          'UN Rapporteurs demand immediate release',
          '#JusticeForSonam trends globally',
        ],
      },
    ],
  },
  {
    id: 'mobilization',
    phase: 4,
    title: 'Mass Mobilization',
    period: 'July 20 - Present',
    subtitle: 'The people answer — 10,000 march on Parliament',
    color: 'from-cjp-gold to-orange-500',
    badgeColor: 'bg-cjp-gold',
    icon: Megaphone,
    events: [
      {
        date: 'July 20, 2026',
        title: 'Chalo Sansad — 10,000 March on Parliament',
        description: 'Organized by CJP and supported by 30+ student unions and civil society organizations, the "Chalo Sansad" (March to Parliament) draws over 10,000 peaceful protesters. The march starts at Jantar Mantar, proceeds through Parliament Street, and is halted at the barricades near Vijay Chowk. Police deploy tear gas and water cannons. Over 200 protesters are detained.',
        icon: Megaphone,
        highlight: '10,000 voices. One demand: justice.',
        details: [
          '10,000+ peaceful protesters',
          'Tear gas & water cannons deployed',
          '200+ detained, released by evening',
          "CJP's largest mobilization ever",
        ],
      },
      {
        date: 'July 20, 2026 — Evening',
        title: 'Abhijit Dipke Begins Hunger Strike',
        description: 'After Wangchuk\'s forced hospitalization, CJP founder Abhijit Dipke announces he will continue the hunger strike at Jantar Mantar. "We will not leave until Sonam is free and our demands are met." Student hunger strikers Neha, Manish, and Aameen — already on Day 3 — continue their fast alongside him.',
        icon: Heart,
        highlight: 'The hunger strike continues — a new generation takes the baton.',
      },
      {
        date: 'July 21, 2026',
        title: 'Opposition Demands PM Statement',
        description: 'Opposition parties — INC, AAP, CPI(M), TMC, DMK, NCP, SP — demand a statement from the Prime Minister in Parliament. Privilege motions moved against Home Minister. Parliament adjourned twice amid protests. International human rights organizations call for a independent investigation into the police action.',
        icon: Vote,
        highlight: 'The political establishment can no longer ignore the movement.',
      },
    ],
  },
  {
    id: 'ongoing',
    phase: 5,
    title: 'Ongoing Struggle',
    period: 'Present Day — Future',
    subtitle: 'The fight continues on multiple fronts',
    color: 'from-sage to-teal-600',
    badgeColor: 'bg-sage',
    icon: Scale,
    events: [
      {
        date: 'Ongoing',
        title: 'Legal Battles — Supreme Court & High Courts',
        description: 'Multiple habeas corpus petitions filed across Delhi, J&K, and Ladakh High Courts. Challenge to forced hospitalization and medical treatment without consent. Anticipated Supreme Court hearings on preventive detention misuse. Legal aid network expanded across 15 states.',
        icon: Scale,
        highlight: 'The courtroom becomes the next front of the movement.',
        details: [
          'Habeas corpus in 3 High Courts',
          'Challenging PSA detention legality',
          'SC hearing anticipated within weeks',
          'Pro bono legal network across 15 states',
        ],
      },
      {
        date: 'Ongoing',
        title: 'Parliamentary Pressure Campaign',
        description: 'Opposition MPs raise the issue daily across both houses. Privilege motions against Home Minister for misleading Parliament about protest handling. Parliamentary committee on Home Affairs schedules hearing. Demand for a Joint Parliamentary Committee (JPC) on police conduct during protests.',
        icon: Building2,
        highlight: 'Democracy\'s institutions must answer democracy\'s questions.',
      },
      {
        date: 'Ongoing',
        title: 'Global Advocacy & Diplomacy',
        description: 'Amnesty International launches "Justice for Sonam" campaign across 50 countries. Human Rights Watch issues detailed report. UN Human Rights Council scheduled briefing. Diaspora protests in 15+ countries — USA, UK, Canada, Australia, Germany, France, UAE, Singapore. International legal experts file amicus briefs.',
        icon: Globe,
        highlight: 'What happens in Delhi echoes across the world.',
      },
      {
        date: 'Future',
        title: 'Policy Demands & Legislative Agenda',
        description: 'Movement targets: NEP 2020 full implementation with parliamentary oversight, Ladakh Statehood Bill introduction in Parliament, PSA/UAPA reform to prevent misuse, Environmental Impact Assessment mandate for Himalayan projects, AIIMS establishment in Leh, and reservation policy for Ladakhi youth in government employment.',
        icon: Flag,
        highlight: 'The ultimate goal: lasting structural change.',
      },
    ],
  },
]

function PhaseSection({ phase, index, isExpanded, onToggle }) {
  const phaseId = `phase-${phase.id}`

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      aria-labelledby={phaseId}
    >
      <div className="relative">
        {/* Phase Number Badge */}
        <div className="flex items-center gap-4 mb-6">
          <motion.button
            onClick={onToggle}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-105 transition-transform`}
            style={{ background: `linear-gradient(135deg, ${phase.color.split(' to ')[0]}, ${phase.color.split(' to ')[1]})` }}
            aria-expanded={isExpanded}
            aria-controls={`phase-content-${phase.id}`}
          >
            <span className="font-display font-bold text-xl">{String(phase.phase).padStart(2, '0')}</span>
          </motion.button>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h2 id={phaseId} className="heading-3 text-cjp-secondary">{phase.title}</h2>
              <span className="badge badge-primary whitespace-nowrap hidden sm:inline-flex">{phase.period}</span>
            </div>
            <p className="text-cjp-secondary/80 mt-1">{phase.subtitle}</p>
          </div>
          <button
            onClick={onToggle}
            className="hidden lg:flex items-center gap-2 text-sm font-medium text-cjp-primary hover:text-cjp-primary-dark transition-colors"
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Collapse' : 'Expand'}
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>
        </div>

        {/* Timeline line */}
        <div className="absolute left-7 top-14 bottom-0 w-[2px] bg-gradient-to-b from-cjp-secondary/10 via-cjp-secondary/5 to-transparent hidden lg:block" />

        {/* Events */}
        <motion.div
          id={`phase-content-${phase.id}`}
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="space-y-6 pb-8 lg:pl-20">
            {phase.events.map((event, eventIndex) => (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1 + eventIndex * 0.08 }}
                className="relative group"
              >
                {/* Connector dot */}
                <div className="absolute left-[-54px] top-6 w-4 h-4 rounded-full border-4 border-white bg-cjp-accent z-10 hidden lg:block"
                     style={{ borderColor: phase.color.split(' to ')[0] }} />

                <div className="card card-hover p-6 lg:p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px]"
                       style={{ background: `linear-gradient(90deg, ${phase.color.split(' to ')[0]}, ${phase.color.split(' to ')[1]})` }} />

                  <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
                    {/* Date column */}
                    <div className="lg:w-48 lg:text-right flex-shrink-0">
                      <div className="flex lg:flex-col items-center lg:items-end gap-2 lg:gap-1">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center lg:hidden"
                             style={{ background: `linear-gradient(135deg, ${phase.color.split(' to ')[0]}, ${phase.color.split(' to ')[1]})` }}>
                          <event.icon className="w-5 h-5 text-white" aria-hidden="true" />
                        </div>
                        <time className="font-mono font-bold text-base lg:text-lg whitespace-nowrap"
                              style={{ color: phase.color.split(' to ')[0] }}>
                          {event.date}
                        </time>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="hidden lg:flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                             style={{ background: `linear-gradient(135deg, ${phase.color.split(' to ')[0]}, ${phase.color.split(' to ')[1]})` }}>
                          <event.icon className="w-4 h-4 text-white" aria-hidden="true" />
                        </div>
                        <h3 className="heading-4 text-cjp-secondary">{event.title}</h3>
                      </div>
                      <h3 className="heading-4 text-cjp-secondary mb-2 lg:hidden">{event.title}</h3>

                      <p className="text-cjp-secondary/80 leading-relaxed mb-4">{event.description}</p>

                      {event.highlight && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
                             style={{ background: `${phase.color.split(' to ')[0]}10`, color: phase.color.split(' to ')[0] }}>
                          <Play className="w-3 h-3 fill-current" aria-hidden="true" />
                          {event.highlight}
                        </div>
                      )}

                      {event.details && (
                        <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-cjp-secondary/10">
                          {event.details.map((detail) => (
                            <div key={detail} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                   style={{ background: phase.color.split(' to ')[0] }} />
                              <span className="text-cjp-secondary/80">{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Collapsed summary when not expanded */}
        {!isExpanded && (
          <div className="pb-8 lg:pl-20">
            <button
              onClick={onToggle}
              className="flex items-center gap-2 text-cjp-primary font-medium hover:text-cjp-primary-dark transition-colors group"
            >
              <Clock className="w-4 h-4" />
              <span>{phase.events.length} events in this phase — tap to expand</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>
        )}

        {index < timelinePhases.length - 1 && (
          <div className="border-t border-cjp-secondary/5 my-2" />
        )}
      </div>
    </motion.section>
  )
}

export default function Timeline() {
  const [expandedPhases, setExpandedPhases] = useState({})

  const togglePhase = (phaseId) => {
    setExpandedPhases((prev) => ({
      ...prev,
      [phaseId]: !prev[phaseId],
    }))
  }

  return (
    <>
      <section className="section bg-cjp-secondary text-cjp-accent relative overflow-hidden" aria-labelledby="timeline-hero-title">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="badge badge-primary mb-6 inline-block">Timeline</span>
            <h1 id="timeline-hero-title" className="heading-1 text-cjp-accent mb-6">
              <span className="gradient-text">21 Days</span> That Changed Everything
            </h1>
            <p className="body-lg text-cjp-secondary/60 max-w-2xl mx-auto">
              From SECMOL in 1988 to the Chalo Sansad march of 2026 — trace the journey of a movement
              that grew from one man's vision to a nation's reckoning.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-cjp-accent" aria-labelledby="timeline-main-title">
        <div className="container-custom">
          {/* Phase Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              {timelinePhases.map((phase, i) => (
                <button
                  key={phase.id}
                  onClick={() => togglePhase(phase.id)}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                  aria-label={`Toggle ${phase.title}`}
                >
                  <div
                    className={`w-10 h-10 lg:w-12 lg:h-12 rounded-2xl flex items-center justify-center text-white text-sm font-display font-bold transition-all duration-300 group-hover:scale-110`}
                    style={{ background: `linear-gradient(135deg, ${phase.color.split(' to ')[0]}, ${phase.color.split(' to ')[1]})` }}
                  >
                    {phase.phase}
                  </div>
                  <span className="text-[10px] lg:text-xs text-cjp-secondary/80 font-medium text-center leading-tight hidden sm:block max-w-[80px]">
                    {phase.title.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>
            <div className="relative max-w-3xl mx-auto mt-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-[2px] bg-cjp-secondary/10" />
              </div>
              <div className="relative flex justify-between">
                {timelinePhases.map((phase, i) => (
                  <div key={phase.id} className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full border-2 border-white shadow-sm"
                      style={{ background: phase.color.split(' to ')[0] }}
                    />
                    {i < timelinePhases.length - 1 && (
                      <div className="hidden sm:block w-[calc(20vw)] max-w-[120px] h-[2px]"
                           style={{ background: `linear-gradient(90deg, ${phase.color.split(' to ')[0]}, ${timelinePhases[i + 1].color.split(' to ')[0]})` }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-4" role="list">
            {timelinePhases.map((phase, index) => (
              <PhaseSection
                key={phase.id}
                phase={phase}
                index={index}
                isExpanded={expandedPhases[phase.id] || false}
                onToggle={() => togglePhase(phase.id)}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="card p-8 lg:p-10 max-w-2xl mx-auto gradient-border">
              <h2 className="heading-3 text-cjp-secondary mb-4">
                History Is Being <span className="gradient-text">Written Right Now</span>
              </h2>
              <p className="text-cjp-secondary/80 leading-relaxed mb-6">
                The next chapter of this timeline depends on what you do today.
                Every share, every donation, every voice adds a page.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/action" className="btn-primary btn-lg">
                  <Flag className="w-5 h-5" />
                  Be Part of the Next Chapter
                </Link>
                <Link to="/donate" className="btn-outline btn-lg">
                  <Heart className="w-5 h-5" />
                  Fuel the Movement
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
