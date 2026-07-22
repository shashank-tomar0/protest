import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Users, Target, Flag, AlertCircle, Share2, BookOpen, MapPin, Leaf, Factory, Hospital, Briefcase } from 'lucide-react'

const demands = [
  {
    id: 1,
    icon: Target,
    title: 'Education Reform',
    subtitle: 'Implement NEP 2020 in letter and spirit',
    description: 'Ensure quality education for every child, especially in remote regions like Ladakh. Stop the arbitrary closure of schools. Fund infrastructure for digital learning in border areas.',
    priority: 'Critical',
    details: [
      'Reopen 100,000+ schools closed since 2020',
      'Digital infrastructure for 500+ border schools',
      'Teacher recruitment for 50,000 vacant posts',
      'Mother-tongue education in primary years',
    ],
  },
  {
    id: 2,
    icon: Flag,
    title: 'Ladakh Autonomy & Statehood',
    subtitle: 'Full statehood with legislative assembly',
    description: 'Grant full statehood to Ladakh with its own legislative assembly. Protect Article 371-like provisions for land ownership, job reservations, and cultural preservation for indigenous communities.',
    priority: 'Critical',
    details: [
      'Legislative assembly with full powers',
      'Article 371-like protections for land & jobs',
      'Sixth Schedule inclusion for tribal areas',
      'Direct funding from Centre (no UT bureaucracy)',
    ],
  },
  {
    id: 3,
    icon: AlertCircle,
    title: 'Democratic Rights & Political Prisoners',
    subtitle: 'Release all political prisoners immediately',
    description: 'End arbitrary detentions under PSA and UAPA. Uphold the right to peaceful protest and freedom of expression. Ensure judicial oversight of preventive detention laws.',
    priority: 'Urgent',
    details: [
      'Release Sonam Wangchuk & all hunger strikers',
      'Repeal draconian PSA/UAPA misuse',
      'Judicial review of all preventive detentions',
      'Protect peaceful protest rights (Article 19)',
    ],
  },
  {
    id: 4,
    icon: Leaf,
    title: 'Environmental Justice for Himalayas',
    subtitle: 'Stop unchecked industrialization in fragile ecosystems',
    description: 'Implement strict environmental impact assessments for all projects in the Himalayan region. Protect glaciers, wetlands, and biodiversity. Enforce the Himalayan Ecology Act.',
    priority: 'Urgent',
    details: [
      'Mandatory EIA for all projects >50 hectares',
      'Glacier protection zones (no construction)',
      'Ban on large dams in seismic zones IV/V',
      'Community consent (FPIC) for tribal lands',
    ],
  },
  {
    id: 5,
    icon: Hospital,
    title: 'Healthcare Access in High Altitude',
    subtitle: 'AIIMS-level healthcare for Ladakh',
    description: 'Establish AIIMS-level healthcare in Ladakh. Ensure emergency medical evacuation capabilities (helicopter/airlift services). Address altitude-specific health challenges (HAPE, HACE, chronic mountain sickness).',
    priority: 'Important',
    details: [
      'AIIMS Leh & Kargil (fully functional)',
      'Air ambulance services year-round',
      'Altitude medicine research centre',
      'Telemedicine network for remote villages',
    ],
  },
  {
    id: 6,
    icon: Briefcase,
    title: 'Youth Employment & Local Economy',
    subtitle: '50,000 jobs for Ladakhi youth',
    description: 'Create 50,000 jobs for Ladakhi youth. Reserve government positions for locals. Promote sustainable tourism, renewable energy (solar/wind), and traditional crafts. End exploitative contract labour.',
    priority: 'Important',
    details: [
      '75% job reservation for locals in govt',
      'Solar/wind energy parks (local ownership)',
      'Sustainable tourism policy (carrying capacity)',
      'GI tagging for Ladakhi crafts (pashmina, apricot)',
    ],
  },
]

export default function Demands() {
  return (
    <>
      <section className="section bg-cjp-accent relative overflow-hidden" aria-labelledby="demands-hero-title">
        <div className="absolute inset-0 bg-gradient-to-br from-cjp-primary/3 via-transparent to-gold/3" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="badge badge-primary mb-6 inline-block">Our Demands</span>
            <h1 id="demands-hero-title" className="heading-1 text-cjp-secondary mb-6">
              The <span className="gradient-text">Six Non-Negotiable Demands</span>
            </h1>
            <p className="body-lg text-cjp-secondary/80 max-w-2xl mx-auto">
              These are the core demands of the Cockroach Janata Party and Sonam Wangchuk's movement.
              Each demand represents thousands of voices from Ladakh to Delhi demanding justice, dignity, and democratic rights.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="demands-list-title">
        <div className="container-custom">
          <div className="space-y-6">
            {demands.map((demand, index) => (
              <motion.article
                key={demand.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
                  <div className="lg:sticky lg:top-24">
                    <div className={`p-6 lg:p-8 rounded-2xl ${index % 2 === 0 ? 'bg-cjp-primary/5' : 'bg-cjp-gold/5'} border ${index % 2 === 0 ? 'border-cjp-primary/20' : 'border-cjp-gold/20'} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-cjp-primary/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative z-10">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-cjp-primary mb-6 ${index % 2 === 0 ? 'bg-cjp-primary/10' : 'bg-cjp-gold/10'}`}>
                          <demand.icon className="w-8 h-8" aria-hidden="true" />
                        </div>
                        <h2 className="heading-3 text-cjp-secondary mb-3">{demand.title}</h2>
                        <p className="text-cjp-secondary/80 text-base mb-6">{demand.subtitle}</p>
                        <span className={`badge ${demand.priority === 'Critical' ? 'badge-primary' : demand.priority === 'Urgent' ? 'badge-gold' : 'badge-secondary'}`}>
                          {demand.priority} Priority
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="prose prose-cjp-secondary/80 max-w-none">
                      <p className="body text-cjp-secondary/80 leading-relaxed">{demand.description}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-cjp-secondary-light/20">
                      {demand.details.map((detail, i) => (
                        <motion.div
                          key={detail}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                          className="flex items-start gap-3 p-4 rounded-xl bg-cjp-accent hover:bg-cjp-primary/5 transition-colors"
                        >
                          <div className="w-6 h-6 rounded-full border-2 border-cjp-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-cjp-primary" />
                          </div>
                          <span className="body-sm text-cjp-secondary">{detail}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Link
                      to="/action"
                      className="inline-flex items-center gap-2 text-cjp-primary font-medium hover:text-cjp-primary-dark transition-colors"
                    >
                      Take Action on This Demand
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {index < demands.length - 1 && (
                  <div className="absolute left-[88px] top-[72px] bottom-0 w-[2px] bg-gradient-to-b from-cjp-primary/30 via-transparent to-gold/30 hidden lg:block" />
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cjp-secondary text-cjp-accent" aria-labelledby="support-title">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 id="support-title" className="heading-2 text-cjp-accent mb-6">
              Every Demand Needs <span className="text-cjp-gold">Your Voice</span>
            </h2>
            <p className="body-lg text-cjp-secondary/60 mb-10">
              These demands won't be met without sustained public pressure.
              Choose how you want to make an impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate" className="btn btn-primary btn-lg">
                <Heart className="w-5 h-5" />
                Fund the Movement
              </Link>
              <Link to="/action" className="btn btn-outline border-cjp-accent/30 text-cjp-accent hover:bg-cjp-accent hover:text-cjp-secondary btn-lg">
                <Users className="w-5 h-5" />
                Join Actions
              </Link>
              <Link to="/contact" className="btn btn-ghost text-cjp-accent hover:bg-white/10 btn-lg">
                <Share2 className="w-5 h-5" />
                Contact MPs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}