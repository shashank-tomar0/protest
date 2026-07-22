import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Heart, Users, Shield, BookOpen, Flag, AlertCircle, Target,
  MapPin, Twitter, Mail, Phone, Building2, Vote, Copy, ExternalLink,
  Share2, Download, Check, Globe, MessageCircle, Megaphone, PenTool,
  Hand, Calendar, Clock, Hash, Search
} from 'lucide-react'

const actionCards = [
  {
    icon: Heart,
    title: 'Donate',
    description: 'Fund legal aid for detainees, medical support for hunger strikers, and protest logistics. Every rupee powers the movement.',
    href: '/donate',
    color: 'from-cjp-primary to-cjp-primary-dark',
    cta: 'Donate Now',
    time: '2 minutes',
    highlight: true,
  },
  {
    icon: Share2,
    title: 'Share on Social Media',
    description: 'Amplify the message using our ready-to-post content. One share can reach thousands. Use our toolkit below.',
    href: '#share',
    color: 'from-blue-500 to-blue-600',
    cta: 'Use Toolkit',
    time: '30 seconds',
  },
  {
    icon: Users,
    title: 'Volunteer on the Ground',
    description: 'Join protest logistics, legal observation, medical support, or community outreach teams across India.',
    href: '#volunteer',
    color: 'from-sage to-teal-600',
    cta: 'Sign Up',
    time: '5 minutes',
  },
  {
    icon: Building2,
    title: 'Contact Your MP',
    description: 'Email, call, or visit your elected representative. Pre-written templates and phone scripts ready to use.',
    href: '#contact-mps',
    color: 'from-gold to-orange-500',
    cta: 'Find Your MP',
    time: '10 minutes',
  },
  {
    icon: PenTool,
    title: 'Sign the Petition',
    description: 'Add your name to the demand for Sonam Wangchuk\'s release, Ladakh statehood, and education reform.',
    href: '#petition',
    color: 'from-purple-500 to-purple-600',
    cta: 'Sign Now',
    time: '1 minute',
  },
  {
    icon: Megaphone,
    title: 'Join Peaceful Protests',
    description: 'Show up at Jantar Mantar, local solidarity rallies, or organize one in your city. Safety guidelines provided.',
    href: '#protests',
    color: 'from-red-500 to-red-600',
    cta: 'Find Protests',
    time: 'Ongoing',
  },
]

const samplePosts = [
  "After 21 days of hunger strike for education reform & Ladakh rights, Sonam Wangchuk was forcibly removed by Delhi Police at 6:30 AM on July 18. This is not how a democracy treats a peaceful protester. #StandWithSonam #JusticeForSonam",
  "10,000+ marched to Parliament on July 20 demanding justice for Sonam Wangchuk. Tear gas & water cannons couldn't stop them. The Cockroach Janata Party's 6 demands: Education reform, Ladakh statehood, democratic rights, environmental justice, healthcare, jobs. #ChaloSansad #CJP",
  "They carried a fasting man like a criminal. He didn't resist. He didn't shout. He just kept fasting — for our children's education, for Ladakh's future, for democracy itself. This image will define our times. Share it. #SonamWangchuk",
  "Sonam Wangchuk weighed 54 kg when forcibly removed after 21 days of fasting. Blood pressure: 103/68. Doctors warned of organ failure. He continued anyway. For us. For education. For Ladakh. What have you done today for justice? #StandWithSonam",
  "The Cockroach survives everything. 320 million years of evolution. Nuclear radiation. Now, a broken education system and a democracy that forgets its people. Join the CJP. Not a party — a people's platform. #CockroachJanataParty #StandWithSonam",
  "From SECMOL to Jantar Mantar to Parliament. 1988 to 2026. One man's vision for education became a nation's movement for justice. Don't let it end here. #TimelineOfChange #SonamWangchuk",
]

const hashtags = [
  '#StandWithSonam', '#ChaloSansad', '#SonamWangchuk', '#CockroachJanataParty',
  '#EducationReform', '#LadakhStatehood', '#DemocraticRights', '#JusticeForSonam',
  '#ReleaseSonamWangchuk', '#SaveDemocracy', '#LadakhAutonomy', '#HungerStrike',
  '#CJP', '#JantarMantar', '#RightToProtest', '#FreeSonam',
  '#LadakhForLadakhis', '#NEP2020', '#IndiaForDemocracy', '#WeAreAllCockroaches',
]

const socialAccounts = [
  { platform: 'Twitter / X', handle: '@StandWithSonam', icon: Twitter, color: 'text-blue-500', url: 'https://twitter.com/StandWithSonam' },
  { platform: 'Instagram', handle: '@standwithsonam', icon: Globe, color: 'text-pink-500', url: 'https://instagram.com/standwithsonam' },
  { platform: 'YouTube', handle: '@StandWithSonam', icon: Globe, color: 'text-red-500', url: 'https://youtube.com/@StandWithSonam' },
  { platform: 'Telegram', handle: 'StandWithSonam', icon: MessageCircle, color: 'text-blue-400', url: 'https://t.me/StandWithSonam' },
]

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
  }
}

function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card p-8 text-center"
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
          <Check className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="heading-3 text-cjp-secondary mb-3">Application Received!</h3>
        <p className="text-cjp-secondary/80 max-w-md mx-auto">
          Thank you for volunteering. Our team will contact you within 24-48 hours with next steps.
          In urgent cases, please visit our protest coordination office at Jantar Mantar.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="vol-name" className="label">Full Name <span className="text-cjp-primary">*</span></label>
          <input type="text" id="vol-name" className="input" placeholder="Your name" required />
        </div>
        <div>
          <label htmlFor="vol-email" className="label">Email <span className="text-cjp-primary">*</span></label>
          <input type="email" id="vol-email" className="input" placeholder="you@example.com" required />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="vol-phone" className="label">Phone <span className="text-cjp-primary">*</span></label>
          <input type="tel" id="vol-phone" className="input" placeholder="+91 XXXXX XXXXX" required />
        </div>
        <div>
          <label htmlFor="vol-city" className="label">City / Region</label>
          <input type="text" id="vol-city" className="input" placeholder="Leh, Delhi, Mumbai..." />
        </div>
      </div>
      <div>
        <label htmlFor="vol-skills" className="label">How Can You Help?</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {['Legal', 'Medical', 'Media', 'Tech/IT', 'Logistics', 'Translation', 'Outreach', 'Research', 'Fundraising'].map((skill) => (
            <label key={skill} className="flex items-center gap-2 p-3 rounded-xl border border-cjp-secondary/10 hover:border-cjp-primary/30 cursor-pointer transition-colors has-[:checked]:bg-cjp-primary/5 has-[:checked]:border-cjp-primary">
              <input type="checkbox" name="skills" value={skill.toLowerCase()} className="rounded border-cjp-secondary/20 text-cjp-primary focus:ring-cjp-primary" />
              <span className="text-sm text-cjp-secondary">{skill}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="vol-availability" className="label">Availability</label>
        <select id="vol-availability" className="input">
          <option value="">Select availability</option>
          <option value="full">Full-time (daily)</option>
          <option value="part">Part-time (weekends)</option>
          <option value="evenings">Evenings only</option>
          <option value="remote">Remote / Online</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>
      <div>
        <label htmlFor="vol-notes" className="label">Additional Notes</label>
        <textarea id="vol-notes" rows="3" className="input resize-y" placeholder="Anything else we should know..." />
      </div>
      <button type="submit" className="btn-primary btn-lg w-full">
        <Users className="w-5 h-5" /> Submit Volunteer Application
      </button>
    </form>
  )
}

export default function TakeAction() {
  const [copiedIndex, setCopiedIndex] = useState(null)
  const [petitionSigned, setPetitionSigned] = useState(false)

  const handleCopy = (text, index) => {
    copyToClipboard(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const handlePetition = (e) => {
    e.preventDefault()
    setPetitionSigned(true)
  }

  return (
    <>
      <section className="section bg-cjp-secondary text-cjp-accent relative overflow-hidden" aria-labelledby="action-hero-title">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="badge badge-primary mb-6 inline-block">Take Action</span>
            <h1 id="action-hero-title" className="heading-1 text-cjp-accent mb-6">
              Your Voice. <span className="text-cjp-gold">Your Power.</span> <span className="gradient-text">Now.</span>
            </h1>
            <p className="body-lg text-cjp-secondary/60 max-w-2xl mx-auto">
              Six ways to make a difference. Pick one. Do it now. History is shaped by those who act, not those who watch.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-cjp-accent" aria-labelledby="action-cards-title">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 id="action-cards-title" className="heading-2 text-cjp-secondary mb-4">
              Six Ways to <span className="gradient-text">Make an Impact</span>
            </h2>
            <p className="text-cjp-secondary/80 leading-relaxed">
              Every action ripples outward. Choose what fits you best — from a 30-second share to ground-level organizing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actionCards.map((action, index) => (
              <motion.article
                key={action.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`card card-hover p-6 relative overflow-hidden group ${action.highlight ? 'gradient-border ring-1 ring-cjp-primary/20' : ''}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-cjp-accent group-hover:scale-110 transition-transform"
                         style={{ background: `linear-gradient(135deg, ${action.color.split(' to ')[0]}, ${action.color.split(' to ')[1]})` }}>
                      <action.icon className="w-7 h-7" aria-hidden="true" />
                    </div>
                    <span className="flex items-center gap-1 text-xs text-cjp-secondary/60">
                      <Clock className="w-3 h-3" /> {action.time}
                    </span>
                  </div>
                  <h3 className="heading-4 text-cjp-secondary mb-2">{action.title}</h3>
                  <p className="text-cjp-secondary/80 leading-relaxed mb-6">{action.description}</p>
                  <Link
                    to={action.href}
                    className={`inline-flex items-center gap-2 font-display font-medium transition-colors ${
                      action.highlight ? 'text-cjp-primary hover:text-cjp-primary-dark' : 'text-cjp-secondary/80 hover:text-cjp-primary'
                    }`}
                  >
                    {action.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="share" className="section bg-cjp-secondary text-cjp-accent relative overflow-hidden" aria-labelledby="share-title">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 id="share-title" className="heading-2 text-cjp-accent mb-4">
              Social Media <span className="text-cjp-gold">Toolkit</span>
            </h2>
            <p className="text-cjp-secondary/60">Copy, paste, post. Amplify the message across your networks in seconds.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="heading-4 text-cjp-accent mb-6 flex items-center gap-3">
                <Share2 className="w-6 h-6 text-cjp-gold" />
                Ready-to-Post Samples
              </h3>
              <div className="space-y-4">
                {samplePosts.map((post, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 relative group/post"
                  >
                    <p className="text-cjp-secondary/60 mb-4 text-base leading-relaxed pr-10">{post}</p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopy(post, i)}
                        className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                        aria-label="Copy post to clipboard"
                      >
                        {copiedIndex === i ? (
                          <><Check className="w-4 h-4 text-green-400" /> Copied!</>
                        ) : (
                          <><Copy className="w-4 h-4" /> Copy</>
                        )}
                      </button>
                      <span className="text-xs text-cjp-secondary/60">280+ chars, multi-platform ready</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="heading-4 text-cjp-accent mb-6 flex items-center gap-3">
                  <Twitter className="w-6 h-6 text-blue-500" />
                  Follow & Amplify
                </h3>
                <div className="space-y-3">
                  {socialAccounts.map((account) => (
                    <a
                      key={account.platform}
                      href={account.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-center gap-4">
                        <account.icon className={`w-8 h-8 ${account.color}`} aria-hidden="true" />
                        <div>
                          <p className="font-medium text-cjp-accent text-sm">{account.platform}</p>
                          <p className="text-cjp-secondary/60 text-xs">{account.handle}</p>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-cjp-secondary/60 group-hover:text-cjp-gold transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="heading-4 text-cjp-accent mb-4 flex items-center gap-3">
                  <Hash className="w-6 h-6 text-cjp-gold" />
                  Key Hashtags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {hashtags.map((tag) => (
                    <motion.button
                      key={tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      onClick={() => handleCopy(tag, `hashtag-${tag}`)}
                      className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm cursor-pointer hover:bg-white/20 transition-colors"
                      aria-label={`Copy ${tag}`}
                    >
                      {tag}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-cjp-gold/10 border border-cjp-gold/20">
                <h3 className="heading-4 text-cjp-accent mb-3">Pro Tip</h3>
                <p className="text-cjp-secondary/60 text-sm leading-relaxed">
                  Tag @PMOIndia @HMOIndia and your local MP in posts. Use the photo of the forced removal
                  — it has the highest engagement rate. Post between 7-9 PM IST for maximum reach in India.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="volunteer" className="section bg-white" aria-labelledby="volunteer-title">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="volunteer-title" className="heading-2 text-cjp-secondary mb-4">
                Volunteer <span className="gradient-text">On the Ground</span>
              </h2>
              <p className="text-cjp-secondary/80 leading-relaxed mb-8">
                Real change happens when people show up. We need volunteers across India and globally.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Shield, title: 'Legal Aid', desc: 'Document arrests, support detainees, know-your-rights workshops' },
                  { icon: Heart, title: 'Medical Support', desc: 'First aid at protests, mental health, altitude medicine' },
                  { icon: Megaphone, title: 'Media & Comms', desc: 'Social media amplification, photography, video documentation' },
                  { icon: Users, title: 'Community Outreach', desc: 'Door-to-door, campus outreach, diaspora coordination' },
                  { icon: MapPin, title: 'Logistics', desc: 'Transport, food/water distribution, safety coordination' },
                  { icon: Globe, title: 'Translation', desc: 'Hindi, English, Ladakhi, Urdu, and international languages' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl bg-cjp-accent border border-cjp-secondary/10">
                    <div className="w-10 h-10 rounded-xl bg-cjp-primary/10 flex items-center justify-center text-cjp-primary flex-shrink-0">
                      <item.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-cjp-secondary text-sm">{item.title}</h4>
                      <p className="text-cjp-secondary/80 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card p-6 bg-cjp-gold/5 border-cjp-gold/20">
                <h3 className="heading-4 text-cjp-secondary mb-2">Volunteer Requirements</h3>
                <ul className="space-y-2 text-cjp-secondary/80 text-sm">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cjp-gold-dark mt-0.5 flex-shrink-0" /> 18 years or older</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cjp-gold-dark mt-0.5 flex-shrink-0" /> Agree to non-violent protest principles</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cjp-gold-dark mt-0.5 flex-shrink-0" /> Valid ID proof (Aadhaar/PAN/Passport)</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cjp-gold-dark mt-0.5 flex-shrink-0" /> Minimum 1-week commitment for ground roles</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-6 lg:p-8"
            >
              <h3 className="heading-3 text-cjp-secondary mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-cjp-primary" />
                Sign Up as a Volunteer
              </h3>
              <VolunteerForm />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="petition" className="section bg-cjp-accent" aria-labelledby="petition-title">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge badge-primary mb-4 inline-block">Petition</span>
              <h2 id="petition-title" className="heading-2 text-cjp-secondary mb-4">
                Sign the <span className="gradient-text">Petition</span>
              </h2>
              <p className="text-cjp-secondary/80 leading-relaxed mb-6">
                Demand the immediate release of Sonam Wangchuk, implementation of NEP 2020,
                and grant of statehood to Ladakh with constitutional protections.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Immediate release of Sonam Wangchuk from forced hospitalization',
                  'Full implementation of National Education Policy 2020',
                  'Grant statehood to Ladakh with legislative assembly',
                  'Repeal misuse of PSA and UAPA against peaceful protesters',
                  'Independent inquiry into July 18 police action at Jantar Mantar',
                ].map((demand) => (
                  <div key={demand} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-cjp-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-cjp-primary" />
                    </div>
                    <span className="text-cjp-secondary text-sm">{demand}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm text-cjp-secondary/80">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-cjp-primary" />
                  <span className="font-semibold text-cjp-secondary">500,000+</span> signatures
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-cjp-primary" />
                  <span className="font-semibold text-cjp-secondary">1M</span> goal
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {petitionSigned ? (
                <div className="card p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Hand className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="heading-3 text-cjp-secondary mb-3">You've Signed!</h3>
                  <p className="text-cjp-secondary/80 mb-4">Share the petition with 5 friends to reach 1M signatures faster.</p>
                  <button
                    onClick={() => handleCopy('https://change.org/StandWithSonam', 'petition-link')}
                    className="btn-primary"
                  >
                    <Share2 className="w-4 h-4" /> Share Petition
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePetition} className="card p-6 lg:p-8">
                  <h3 className="heading-4 text-cjp-secondary mb-6">Add Your Name</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="pet-name" className="label">Full Name <span className="text-cjp-primary">*</span></label>
                      <input type="text" id="pet-name" className="input" placeholder="Your name" required />
                    </div>
                    <div>
                      <label htmlFor="pet-email" className="label">Email <span className="text-cjp-primary">*</span></label>
                      <input type="email" id="pet-email" className="input" placeholder="you@example.com" required />
                    </div>
                    <div>
                      <label htmlFor="pet-city" className="label">City / Country</label>
                      <input type="text" id="pet-city" className="input" placeholder="e.g. Leh, India" />
                    </div>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 rounded border-cjp-secondary/20 text-cjp-primary focus:ring-cjp-primary" required />
                      <span className="text-sm text-cjp-secondary/80">I agree to display my name publicly as a signatory</span>
                    </label>
                    <button type="submit" className="btn-primary btn-lg w-full">
                      <PenTool className="w-5 h-5" /> Sign the Petition
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact-mps" className="section bg-cjp-secondary text-cjp-accent relative overflow-hidden" aria-labelledby="mps-title">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 id="mps-title" className="heading-2 text-cjp-accent mb-4">
              Contact Your <span className="text-cjp-gold">Elected Representatives</span>
            </h2>
            <p className="text-cjp-secondary/60">They work for you. Hold them accountable. Make them speak for the movement.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Building2, title: 'Find Your MP', desc: 'Enter your PIN code to get contact details for your Lok Sabha MP — email, phone, office address, and social media handles.', steps: ['Enter PIN code', 'Get MP details', 'Use our templates'] },
              { icon: Mail, title: 'Email Templates', desc: 'Personalized email drafts for each of the six CJP demands. Fill in your name and send.', steps: ['Choose a demand', 'Personalize', 'Send directly'] },
              { icon: Phone, title: 'Phone Scripts', desc: 'What to say when you call an MP office. Scripts for speaking with staff vs. the MP directly.', steps: ['Pick a script', 'Dial the number', 'Deliver the message'] },
              { icon: Twitter, title: 'Twitter/X Campaigns', desc: 'Pre-written tweets that tag your MP. Click, customize, tweet. Track responses.', steps: ['Find MP handle', 'Use our templates', 'Tag & post'] },
              { icon: Users, title: 'Group Office Visits', desc: 'Coordinate with fellow constituents to visit MP offices. Safety tips and talking points included.', steps: ['Form a group', 'Request meeting', 'Debrief together'] },
              { icon: Vote, title: 'Track & Escalate', desc: 'Public tracker showing which MPs have responded, what they committed to, and follow-up actions needed.', steps: ['Check the tracker', 'Follow up', 'Escalate if needed'] },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cjp-gold/30 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-cjp-gold/10 flex items-center justify-center text-cjp-gold mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="heading-4 text-cjp-accent mb-2">{item.title}</h3>
                <p className="text-cjp-secondary/60 text-sm mb-4">{item.desc}</p>
                <div className="space-y-1.5 mb-5">
                  {item.steps.map((step, si) => (
                    <div key={si} className="flex items-center gap-2 text-xs text-cjp-secondary/60">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[10px] font-bold">{si + 1}</span>
                      </div>
                      {step}
                    </div>
                  ))}
                </div>
                <button className="inline-flex items-center gap-2 text-cjp-gold hover:text-cjp-gold/70 font-medium text-sm transition-colors">
                  Access Tool <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card bg-white/5 border-white/10 p-6 lg:p-8 max-w-3xl mx-auto"
          >
            <h3 className="heading-4 text-cjp-accent mb-3 text-center">Quick MP Lookup</h3>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Enter PIN code (e.g. 194101)"
                className="input bg-white/10 border-white/20 text-cjp-accent placeholder-cjp-secondary/60/50 focus:ring-gold focus:border-cjp-gold"
                aria-label="PIN code for MP lookup"
              />
              <button className="btn-primary whitespace-nowrap">
                <Search className="w-4 h-4" /> Find MP
              </button>
            </div>
            <p className="text-xs text-cjp-secondary/60 text-center mt-3">
              Powered by PRS Legislative Research database. 543 Lok Sabha MPs with verified contact details.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="protests" className="section bg-white" aria-labelledby="protests-title">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 id="protests-title" className="heading-2 text-cjp-secondary mb-4">
              Join <span className="gradient-text">Peaceful Protests</span>
            </h2>
            <p className="text-cjp-secondary/80 leading-relaxed">Your presence is your power. Show up. Stand in solidarity.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { location: 'Jantar Mantar, New Delhi', time: 'Daily, 8 AM - 8 PM', desc: 'Main protest site. Hunger strike continues. All are welcome.', status: 'Active', icon: MapPin },
              { location: 'Leh Main Market, Ladakh', time: 'Evening rallies, 5 PM', desc: 'Daily solidarity protests organized by LAHDC and student unions.', status: 'Active', icon: MapPin },
              { location: 'Kargil Town Square', time: 'Evening rallies, 5 PM', desc: 'Twin protest site with Leh. Coordination with local bodies.', status: 'Active', icon: MapPin },
              { location: 'Multiple Cities, India', time: 'Weekend solidarity marches', desc: 'Mumbai, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad.', status: 'Active', icon: Users },
              { location: 'Global Cities', time: 'Check local schedules', desc: 'London, New York, Toronto, Sydney, Berlin, Paris, Dubai, Singapore.', status: 'Active', icon: Globe },
              { location: 'Virtual / Online', time: '24/7', desc: 'Social media amplification, WhatsApp groups, Telegram channels, live streams.', status: 'Always', icon: MessageCircle },
            ].map((protest, i) => (
              <motion.div
                key={protest.location}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card card-hover p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cjp-primary/10 flex items-center justify-center text-cjp-primary">
                    <protest.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="badge badge-primary text-xs">{protest.status}</span>
                </div>
                <h3 className="font-display font-semibold text-cjp-secondary mb-1">{protest.location}</h3>
                <p className="text-xs text-cjp-secondary/60 flex items-center gap-1 mb-3">
                  <Calendar className="w-3 h-3" /> {protest.time}
                </p>
                <p className="text-cjp-secondary/80 text-sm leading-relaxed">{protest.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card p-6 bg-cjp-primary/5 border-cjp-primary/20 max-w-3xl mx-auto"
          >
            <h3 className="heading-4 text-cjp-secondary mb-3 flex items-center gap-2">
              <Shield className="w-6 h-6 text-cjp-primary" />
              Protest Safety Guidelines
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-cjp-secondary/80">
              {[
                'Carry valid ID at all times',
                'Know the legal helpline number: +91-98765-43210',
                'Wear comfortable shoes & carry water',
                'Stay with the group — don\'t isolate',
                'No violence, no provocation, no confrontation',
                'Film incidents but don\'t interfere with police',
                'Have emergency contact written on your arm',
                'Download protest safety app (coming soon)',
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cjp-primary mt-0.5 flex-shrink-0" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-cjp-secondary text-cjp-accent relative overflow-hidden" aria-labelledby="final-cta-title">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 id="final-cta-title" className="heading-2 text-cjp-accent mb-6">
              One Action Can Change <span className="text-cjp-gold">Everything</span>
            </h2>
            <p className="body-lg text-cjp-secondary/60 mb-10">
              History doesn\'t remember those who stayed silent. It remembers those who showed up.
              The movement needs you. Not tomorrow. Today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate" className="btn-primary btn-lg">
                <Heart className="w-5 h-5" /> Donate Now
              </Link>
              <a href="#share" className="btn-outline border-cjp-accent/30 text-cjp-accent hover:bg-cjp-accent hover:text-cjp-secondary btn-lg">
                <Share2 className="w-5 h-5" /> Share the Message
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

