import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Share2, AlertCircle, Users, Eye, Camera, Globe, Shield, Calendar, MapPin } from 'lucide-react'

const photoContext = {
  date: 'July 19, 2026',
  location: 'Jantar Mantar, New Delhi',
  photographer: 'Multiple news agencies (PTI, ANI, Getty Images)',
  description: 'Delhi Police officers forcibly removing Sonam Wangchuk from the protest site after 21 days of indefinite hunger strike. The image shows multiple police personnel carrying the frail, fasting activist while he maintains a peaceful, non-resistant posture.',
  impact: [
    'Viewed 50+ million times across social media within 24 hours',
    'Trended #1 on Twitter India for 48 hours',
    'Covered by BBC, Guardian, Al Jazeera, New York Times',
    'Cited in Parliament by opposition leaders',
    'Triggered "Chalo Sansad" march with 10,000+ participants',
    'UN Special Rapporteurs issued statement on forced hospitalization',
  ],
}

const timelineEvents = [
  { date: 'June 29, 2026', title: 'Hunger Strike Begins', description: 'Sonam Wangchuk starts indefinite hunger strike at Jantar Mantar demanding education reform, Ladakh statehood, and democratic rights.', type: 'start' },
  { date: 'July 5, 2026', title: 'CJP Joins Protest', description: 'Cockroach Janata Party (CJP) founder Abhijit Dipke announces support. Students, parents, and activists begin gathering.', type: 'milestone' },
  { date: 'July 10, 2026', title: 'Health Deterioration', description: 'Wangchuk loses 7kg. Blood pressure drops to 103/68. Doctors warn of irreversible organ damage. Wife Gitanjali joins protest.', type: 'warning' },
  { date: 'July 15, 2026', title: 'Nationwide Solidarity', description: 'Protests erupt in Leh, Kargil, Mumbai, Bangalore, Chennai. Student unions (JNU, DU, JMI) organize marches. 100+ arrests reported.', type: 'milestone' },
  { date: 'July 18, 2026', title: 'Forced Hospitalization', description: 'Delhi Police forcibly remove Wangchuk at 6:30 AM. Viral footage shows him being carried by 6+ officers. Nationwide outrage.', type: 'crisis' },
  { date: 'July 19, 2026', title: 'The Viral Photo', description: 'Image of Wangchuk\'s forced removal spreads globally. 50M+ views in 24 hours. International media coverage begins.', type: 'viral' },
  { date: 'July 20, 2026', title: 'Chalo Sansad March', description: '10,000+ protesters march from Jantar Mantar to Parliament. Police use tear gas, water cannons. CJP founder Abhijit Dipke begins hunger strike.', type: 'action' },
  { date: 'July 21, 2026', title: 'Ongoing Struggle', description: 'AISA members continue hunger strike. Opposition leaders demand PM\'s statement. International human rights orgs call for investigation.', type: 'ongoing' },
]

export default function ThePhoto() {
  return (
    <>
      <section className="section bg-cjp-secondary text-cjp-accent relative overflow-hidden" aria-labelledby="photo-hero-title">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="badge badge-primary mb-6 inline-block">The Viral Image</span>
            <h1 id="photo-hero-title" className="heading-1 text-cjp-accent mb-6">
              The Photo That <span className="text-cjp-gold">Shook a Nation</span>
            </h1>
            <p className="body-lg text-cjp-secondary/60 max-w-2xl mx-auto">
              On July 19, 2026, an image captured the world's attention: a frail, fasting Sonam Wangchuk
              being forcibly carried away by Delhi Police after 21 days of peaceful hunger strike.
              This photograph became the defining symbol of state overreach and the catalyst for a nationwide movement.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-cjp-accent" aria-labelledby="photo-analysis-title">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-video rounded-3xl overflow-hidden bg-cjp-secondary gradient-border"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cjp-secondary via-cjp-secondary-light to-cjp-primary/20 flex items-center justify-center">
                  <div className="text-center p-8 relative z-10">
                    <Camera className="w-16 h-16 mx-auto mb-4 text-cjp-primary/50" />
                    <h3 className="text-display text-2xl font-bold text-cjp-accent mb-2">The Viral Image</h3>
                    <p className="text-cjp-secondary/60 max-w-md mx-auto mb-6">
                      Police officers forcibly carrying a frail, fasting Sonam Wangchuk
                      from Jantar Mantar — an image that sparked global outrage.
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm text-cjp-secondary/60">
                      <span className="flex items-center gap-1"><Camera className="w-4 h-4" /> Multiple Agencies</span>
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> July 19, 2026</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Jantar Mantar, Delhi</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid sm:grid-cols-3 gap-4"
              >
                {[
                  { icon: Eye, label: '50M+ Views', desc: 'In first 24 hours across platforms' },
                  { icon: Globe, label: 'Global Coverage', desc: 'BBC, Guardian, Al Jazeera, NYT' },
                  { icon: Share2, label: 'Viral Reach', desc: '#1 trending in India for 48 hours' },
                ].map((stat, i) => (
                  <div key={stat.label} className="p-6 rounded-2xl bg-white border border-cjp-secondary-light/20 text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-cjp-primary" />
                    <p className="font-display font-bold text-xl text-cjp-secondary">{stat.label}</p>
                    <p className="text-sm text-cjp-secondary/80 mt-1">{stat.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 lg:p-8 rounded-2xl bg-white border border-cjp-secondary-light/20"
              >
                <h2 id="photo-analysis-title" className="heading-3 text-cjp-secondary mb-4">Context & Significance</h2>
                <div className="space-y-4 text-cjp-secondary/80 leading-relaxed">
                  <p><strong className="text-cjp-secondary">Date:</strong> {photoContext.date}</p>
                  <p><strong className="text-cjp-secondary">Location:</strong> {photoContext.location}</p>
                  <p><strong className="text-cjp-secondary">Photographed by:</strong> {photoContext.photographer}</p>
                  <p>{photoContext.description}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-6 lg:p-8 rounded-2xl bg-white border border-cjp-secondary-light/20"
              >
                <h3 className="heading-4 text-cjp-secondary mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-cjp-primary" />
                  Immediate Impact
                </h3>
                <ul className="space-y-3">
                  {photoContext.impact.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-xl bg-cjp-accent border border-cjp-secondary-light/20"
                    >
                      <Shield className="w-5 h-5 text-cjp-primary flex-shrink-0 mt-0.5" />
                      <span className="text-cjp-secondary/80">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 lg:p-8 rounded-2xl gradient-border"
              >
                <h3 className="heading-4 text-cjp-secondary mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-cjp-primary" />
                  Why This Image Matters
                </h3>
                <div className="prose prose-cjp-secondary/80 max-w-none">
                  <p className="mb-4">
                    The photograph captures a fundamental asymmetry of power: the full force of the state
                    arrayed against a single, unarmed, fasting citizen exercising his democratic right to protest.
                  </p>
                  <p className="mb-4">
                    Wangchuk's peaceful non-resistance — his body limp, making no struggle — contrasts
                    sharply with the multiple police officers required to remove him. This visual metaphor
                    resonated across political, regional, and generational lines.
                  </p>
                  <p>
                    The image transcended the specific demands (education, Ladakh statehood, democratic rights)
                    to become a universal symbol of the citizen-state relationship in contemporary India.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="timeline-title">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 id="timeline-title" className="section-title">
              Timeline: <span className="gradient-text">21 Days That Changed Everything</span>
            </h2>
            <p className="section-subtitle">
              From the first day of the hunger strike to the forced removal and the Chalo Sansad march.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[30px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cjp-primary via-gold to-cjp-primary hidden lg:block" />

            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.date}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative lg:pl-32"
                >
                  <div className="absolute left-0 top-4 w-12 h-12 rounded-full border-4 flex items-center justify-center z-10
                    bg-white
                    {{
                      start: 'border-cjp-primary bg-cjp-primary',
                      milestone: 'border-cjp-gold bg-cjp-gold',
                      warning: 'border-orange-500 bg-orange-500',
                      crisis: 'border-red-500 bg-red-500',
                      viral: 'border-purple-500 bg-purple-500',
                      action: 'border-blue-500 bg-blue-500',
                      ongoing: 'border-sage bg-sage',
                    }[event.type]}
                  ">
                    {{
                      start: <Heart className="w-6 h-6 text-white" />,
                      milestone: <Users className="w-6 h-6 text-white" />,
                      warning: <AlertCircle className="w-6 h-6 text-white" />,
                      crisis: <Shield className="w-6 h-6 text-white" />,
                      viral: <Camera className="w-6 h-6 text-white" />,
                      action: <Flag className="w-6 h-6 text-white" />,
                      ongoing: <Globe className="w-6 h-6 text-white" />,
                    }[event.type]}
                  </div>

                  <div className="card p-6 lg:p-8">
                    <div className="flex items-center gap-4 mb-3">
                      <time className="font-mono text-cjp-primary font-medium text-sm lg:text-base whitespace-nowrap">{event.date}</time>
                      <span className={`badge ${event.type === 'crisis' || event.type === 'viral' ? 'badge-cjp-primary' : event.type === 'warning' ? 'badge-gold' : 'badge-sage'}`}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                    </div>
                    <h3 className="heading-4 text-cjp-secondary mb-2">{event.title}</h3>
                    <p className="text-cjp-secondary/80 leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cjp-secondary text-cjp-accent" aria-labelledby="share-title">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 id="share-title" className="heading-2 text-cjp-accent mb-6">
              Spread <span className="text-cjp-gold">The Truth</span>
            </h2>
            <p className="body-lg text-cjp-secondary/60 mb-10">
              The image speaks for itself. Share it widely. Let the world see what happened.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary btn-lg">
                <Share2 className="w-5 h-5" />
                Share on Social Media
              </button>
              <button className="btn btn-outline border-cjp-accent/30 text-cjp-accent hover:bg-cjp-accent hover:text-cjp-secondary btn-lg">
                <Camera className="w-5 h-5" />
                Download High-Res
              </button>
              <Link to="/action" className="btn btn-ghost text-cjp-accent hover:bg-white/10 btn-lg">
                <ArrowRight className="w-5 h-5" />
                Take Action
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}