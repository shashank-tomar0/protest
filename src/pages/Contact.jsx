import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Mail, Phone, MapPin, Download, ChevronDown, ChevronUp, Send, Check,
  Heart, Shield, AlertCircle, Users, ExternalLink, FileText, BookOpen,
  MessageCircle, Newspaper, ArrowRight, Copy, Camera
} from 'lucide-react'

const faqItems = [
  {
    question: 'How can I support Sonam Wangchuk from outside India?',
    answer: 'You can donate via international payment methods, amplify the movement on social media, contact your local Indian embassy, organize solidarity protests in your city, and reach out to your country\'s human rights bodies. International donations are welcome — use the donate page for details.',
  },
  {
    question: 'Is there a petition I can sign?',
    answer: 'Yes! Multiple petitions are circulating. The main petition on Change.org demands Sonam\'s release and has over 500,000 signatures. You can find it via our social media channels or contact us for direct links.',
  },
  {
    question: 'How do I volunteer for ground protests?',
    answer: 'Fill out the volunteer form on our Take Action page. Our team will contact you within 24 hours with details about upcoming protests, safety guidelines, and what to bring. Volunteers must be 18+ and agree to non-violent protest principles.',
  },
  {
    question: 'Where can I find the latest updates?',
    answer: 'Follow us on Twitter/X @StandWithSonam and Instagram @standwithsonam for real-time updates. We also send daily email digests to newsletter subscribers. Press releases are posted in the Press Kit section below.',
  },
  {
    question: 'How are donations used?',
    answer: '100% of donations go directly to legal aid (35%), medical support (25%), protest logistics (20%), grassroots organizing (12%), and digital/media (8%). Zero administrative overhead. Monthly financial reports are published publicly on OpenCollective.',
  },
  {
    question: 'What are the six demands of CJP?',
    answer: 'The Cockroach Janata Party has six core demands: (1) Education Reform — implement NEP 2020, (2) Ladakh Statehood with legislative assembly, (3) Release of political prisoners and protection of democratic rights, (4) Environmental justice for the Himalayas, (5) AIIMS-level healthcare in Ladakh, (6) 50,000 jobs for Ladakhi youth.',
  },
  {
    question: 'How can I host a solidarity event?',
    answer: 'Contact our outreach team via the form below. We provide toolkits with talking points, poster templates, social media assets, and safety guidelines. Events can range from small study circles to public rallies. We\'ll help promote your event on our channels.',
  },
  {
    question: 'Is there a way to contact Sonam Wangchuk directly?',
    answer: 'Due to his medical condition and ongoing legal proceedings, Sonam cannot receive direct messages. To send messages of support, please use the form below marked "Message of Solidarity" and we will ensure your words reach him and his family.',
  },
]

const legalContacts = [
  { name: 'Supreme Court Legal Team', phone: '+91-11-2301-2345', email: 'legal@standwithsonam.org', hours: '9:00 AM - 8:00 PM IST' },
  { name: 'Habeas Corpus Petitions', phone: '+91-11-2345-6789', email: 'habeas@standwithsonam.org', hours: '24/7 Emergency' },
  { name: 'Bail Support Network', phone: '+91-98765-43210', email: 'bail@standwithsonam.org', hours: '9:00 AM - 6:00 PM IST' },
  { name: 'Human Rights Complaints', phone: '+91-11-3456-7890', email: 'rights@standwithsonam.org', hours: '10:00 AM - 5:00 PM IST' },
]

const medicalContacts = [
  { name: 'Protest Medical Unit', phone: '+91-98765-12345', email: 'medics@standwithsonam.org', hours: '24/7 On-Site' },
  { name: 'Ambulance Coordination', phone: '+91-98765-54321', email: 'ambulance@standwithsonam.org', hours: '24/7' },
  { name: 'Mental Health Support', phone: '+91-11-4567-8901', email: 'wellness@standwithsonam.org', hours: '8:00 AM - 10:00 PM IST' },
  { name: 'Altitude Medicine Helpline', phone: '+91-1982-234567', email: 'altitude@standwithsonam.org', hours: '24/7' },
]

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border border-cjp-secondary/10 rounded-2xl overflow-hidden bg-white transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 lg:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cjp-primary focus-visible:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-cjp-secondary pr-4 text-base lg:text-lg">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-8 rounded-full bg-cjp-primary/10 flex items-center justify-center flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-cjp-primary" aria-hidden="true" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-5 lg:px-6 pb-5 lg:pb-6">
          <div className="w-12 h-[2px] bg-gradient-to-r from-cjp-primary to-gold mb-4" />
          <p className="text-cjp-secondary/80 leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card p-8 lg:p-10 text-center"
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
          <Check className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="heading-3 text-cjp-secondary mb-3">Message Sent!</h3>
        <p className="text-cjp-secondary/80 max-w-md mx-auto mb-6">
          Thank you for reaching out. Our team will respond within 24 hours. In urgent matters, please use the direct contacts below.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-outline">
          Send Another Message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 lg:p-8 space-y-6" aria-label="Contact form">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className="label">Full Name <span className="text-cjp-primary">*</span></label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="input"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="label">Email <span className="text-cjp-primary">*</span></label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="input"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-phone" className="label">Phone (WhatsApp preferred)</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="input"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        <div>
          <label htmlFor="contact-subject" className="label">Subject <span className="text-cjp-primary">*</span></label>
          <select
            id="contact-subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select a subject</option>
            <option value="volunteer">Volunteer Inquiry</option>
            <option value="legal">Legal Support</option>
            <option value="media">Media / Press</option>
            <option value="donation">Donation Question</option>
            <option value="solidarity">Message of Solidarity</option>
            <option value="event">Host an Event</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="label">Message <span className="text-cjp-primary">*</span></label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="input resize-y min-h-[120px]"
          placeholder="Write your message here..."
        />
      </div>

      <button type="submit" className="btn-primary btn-lg w-full group">
        <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        Send Message
      </button>

      <p className="text-xs text-cjp-secondary/60 text-center">
        Your information is kept confidential and used only to respond to your inquiry.
        By submitting, you agree to our <Link to="/privacy" className="text-cjp-primary hover:underline">Privacy Policy</Link>.
      </p>
    </form>
  )
}

export default function Contact() {
  const [openFAQ, setOpenFAQ] = useState(null)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false)

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const handleNewsletter = (e) => {
    e.preventDefault()
    setNewsletterSubscribed(true)
    setNewsletterEmail('')
    setTimeout(() => setNewsletterSubscribed(false), 4000)
  }

  return (
    <>
      <section className="section bg-gradient-to-b from-cjp-primary/5 via-cjp-accent to-gold/5 relative overflow-hidden" aria-labelledby="contact-hero-title">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="badge badge-primary mb-6 inline-block">Contact</span>
            <h1 id="contact-hero-title" className="heading-1 text-cjp-secondary mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="body-lg text-cjp-secondary/80 max-w-2xl mx-auto">
              Whether you need legal aid, medical support, want to volunteer, or just want to send a message of solidarity — we're here.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="contact-form-title">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <h2 id="contact-form-title" className="heading-2 text-cjp-secondary mb-4">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <p className="text-cjp-secondary/80 leading-relaxed mb-8">
                For urgent matters, please use the direct contact numbers below. For general inquiries, we respond within 24 hours.
              </p>
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="card p-6">
                <div className="w-12 h-12 rounded-2xl bg-cjp-primary/10 flex items-center justify-center text-cjp-primary mb-4">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="heading-4 text-cjp-secondary mb-2">Visit Our Office</h3>
                <address className="not-italic text-cjp-secondary/80 leading-relaxed space-y-1">
                  <p>Protest Coordination Office</p>
                  <p>Jantar Mantar Marg, Connaught Place</p>
                  <p>New Delhi, Delhi 110001</p>
                  <p className="text-sm text-cjp-secondary/60 mt-3">Open: 8:00 AM - 8:00 PM IST daily</p>
                </address>
              </div>

              <div className="card p-6">
                <div className="w-12 h-12 rounded-2xl bg-cjp-gold/10 flex items-center justify-center text-cjp-gold-dark mb-4">
                  <MessageCircle className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="heading-4 text-cjp-secondary mb-2">Quick Contacts</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-cjp-secondary">General Inquiries</p>
                    <a href="mailto:info@standwithsonam.org" className="text-cjp-primary hover:text-cjp-primary-dark transition-colors text-sm flex items-center gap-2">
                      <Mail className="w-4 h-4" /> info@standwithsonam.org
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-cjp-secondary">Media & Press</p>
                    <a href="mailto:press@standwithsonam.org" className="text-cjp-primary hover:text-cjp-primary-dark transition-colors text-sm flex items-center gap-2">
                      <Mail className="w-4 h-4" /> press@standwithsonam.org
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-cjp-secondary">Emergency Helpline</p>
                    <a href="tel:+919876543210" className="text-cjp-primary hover:text-cjp-primary-dark transition-colors text-sm flex items-center gap-2">
                      <Phone className="w-4 h-4" /> +91-98765-43210
                    </a>
                  </div>
                </div>
              </div>

              <div className="card p-6 gradient-border">
                <div className="w-12 h-12 rounded-2xl bg-cjp-dark/10 flex items-center justify-center text-cjp-dark mb-4">
                  <BookOpen className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="heading-4 text-cjp-secondary mb-2">Ladakh Office</h3>
                <address className="not-italic text-cjp-secondary/80 leading-relaxed space-y-1">
                  <p>SECMOL Campus</p>
                  <p>Phey, Leh-Ladakh 194101</p>
                  <p className="text-sm text-cjp-secondary/60 mt-3">Satellite office operates during protests</p>
                </address>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="press" className="section bg-cjp-secondary text-cjp-accent relative overflow-hidden" aria-labelledby="press-title">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 id="press-title" className="heading-2 text-cjp-accent mb-4">
              Press <span className="text-cjp-gold">Kit</span>
            </h2>
            <p className="text-cjp-secondary/60">Resources for journalists, researchers, and content creators covering the movement.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, label: 'Media Briefing', desc: 'Comprehensive background on the movement, key events, and demands.', size: '2.4 MB PDF' },
              { icon: Newspaper, label: 'Press Releases', desc: 'All official statements from the movement, organized chronologically.', size: '1.8 MB PDF' },
              { icon: Camera, label: 'Photo Assets', desc: 'High-resolution protest photos, portraits, and infographics (CC BY 4.0).', size: '12 MB ZIP' },
              { icon: BookOpen, label: 'Fact Sheet', desc: 'Quick-reference document with key data, timelines, and demand summaries.', size: '0.6 MB PDF' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cjp-gold/30 hover:bg-white/10 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-cjp-gold/10 flex items-center justify-center text-cjp-gold mb-5 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="heading-4 text-cjp-accent mb-2">{item.label}</h3>
                <p className="text-cjp-secondary/60 text-sm mb-4">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-cjp-secondary/60">{item.size}</span>
                  <button className="flex items-center gap-2 text-cjp-gold hover:text-cjp-gold/70 transition-colors text-sm font-medium">
                    <Download className="w-4 h-4" /> Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-cjp-secondary/60 text-sm">
              For media accreditation and interview requests:{' '}
              <a href="mailto:press@standwithsonam.org" className="text-cjp-gold hover:underline">press@standwithsonam.org</a>
            </p>
          </motion.div>
        </div>
      </section>

      <section id="legal" className="section bg-cjp-accent" aria-labelledby="legal-title">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 id="legal-title" className="heading-2 text-cjp-secondary mb-4">
              Legal <span className="gradient-text">Support</span>
            </h2>
            <p className="text-cjp-secondary/80 leading-relaxed">
              Free legal aid and counsel for protesters, detainees, and their families.
              All services are confidential and pro bono.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {legalContacts.map((contact, index) => (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card card-hover p-6 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-cjp-primary/10 flex items-center justify-center text-cjp-primary flex-shrink-0">
                  <Shield className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-cjp-secondary mb-1">{contact.name}</h3>
                  <p className="text-xs text-cjp-secondary/60 mb-3">{contact.hours}</p>
                  <div className="space-y-1.5">
                    <a href={`tel:${contact.phone}`} className="flex items-center gap-2 text-sm text-cjp-primary hover:text-cjp-primary-dark transition-colors">
                      <Phone className="w-4 h-4" /> {contact.phone}
                    </a>
                    <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-sm text-cjp-primary hover:text-cjp-primary-dark transition-colors">
                      <Mail className="w-4 h-4" /> {contact.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 card p-6 bg-cjp-primary/5 border-cjp-primary/20"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-cjp-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h3 className="font-display font-semibold text-cjp-secondary mb-1">Know Your Rights</h3>
                <p className="text-cjp-secondary/80 text-sm leading-relaxed">
                  If you or someone you know has been detained: (1) Ask for a lawyer immediately — you have the right to remain silent.
                  (2) Contact our legal team at the numbers above. (3) Note the officer's name, badge number, and station.
                  (4) Do not sign any documents without legal counsel present. Our 24/7 habeas corpus team is ready to respond.
                </p>
                <Link to="/movement" className="mt-3 inline-flex items-center gap-2 text-cjp-primary font-medium text-sm hover:text-cjp-primary-dark transition-colors">
                  Download Know Your Rights PDF <Download className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="medical" className="section bg-white" aria-labelledby="medical-title">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 id="medical-title" className="heading-2 text-cjp-secondary mb-4">
              Medical <span className="gradient-text">Aid</span>
            </h2>
            <p className="text-cjp-secondary/80 leading-relaxed">
              Emergency medical services available at protest sites and through our network of partner hospitals. All services are free for protesters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {medicalContacts.map((contact, index) => (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card card-hover p-6 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0">
                  <Heart className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-cjp-secondary mb-1">{contact.name}</h3>
                  <p className="text-xs text-cjp-secondary/60 mb-3">{contact.hours}</p>
                  <div className="space-y-1.5">
                    <a href={`tel:${contact.phone}`} className="flex items-center gap-2 text-sm text-cjp-primary hover:text-cjp-primary-dark transition-colors">
                      <Phone className="w-4 h-4" /> {contact.phone}
                    </a>
                    <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-sm text-cjp-primary hover:text-cjp-primary-dark transition-colors">
                      <Mail className="w-4 h-4" /> {contact.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 card p-6 bg-amber-500/5 border-amber-500/20"
          >
            <div className="flex items-start gap-4">
              <Heart className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h3 className="font-display font-semibold text-cjp-secondary mb-1">Medical Emergency Protocol</h3>
                <p className="text-cjp-secondary/80 text-sm leading-relaxed">
                  On-site medical tents are stationed at all protest locations with volunteer doctors and paramedics.
                  Look for the Red Cross flags. First aid is free. For serious emergencies, ambulances are on standby.
                  If you have pre-existing conditions (especially altitude-related), inform our medical team on arrival.
                  Partner hospitals include AIIMS Delhi, Ram Manohar Lohia, and Safdarjung.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-cjp-secondary text-cjp-accent relative overflow-hidden" aria-labelledby="newsletter-title">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="newsletter-title" className="heading-2 text-cjp-accent mb-4">
                Stay <span className="text-cjp-gold">Updated</span>
              </h2>
              <p className="text-cjp-secondary/60 leading-relaxed mb-6">
                Get daily updates on the movement — protest alerts, legal developments, media coverage, and ways to help.
                No spam. Unsubscribe anytime.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Daily protest & legal updates',
                  'Action alerts when you\'re needed',
                  'Exclusive behind-the-scenes from the ground',
                  'First access to petitions & campaigns',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-cjp-secondary/60 text-sm">
                    <Check className="w-5 h-5 text-cjp-gold flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <form onSubmit={handleNewsletter} className="card bg-white/5 border-white/10 p-8">
                <h3 className="heading-4 text-cjp-accent mb-6">Subscribe to Our Newsletter</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="newsletter-name" className="label text-cjp-accent">Your Name</label>
                    <input
                      id="newsletter-name"
                      type="text"
                      className="input bg-white/10 border-white/20 text-cjp-accent placeholder-white/40 focus:ring-gold focus:border-cjp-gold"
                      placeholder="Sonam Wangchuk"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="newsletter-email" className="label text-cjp-accent">Email Address</label>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="input bg-white/10 border-white/20 text-cjp-accent placeholder-white/40 focus:ring-gold focus:border-cjp-gold"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      id="newsletter-consent"
                      type="checkbox"
                      className="mt-1 rounded border-white/20 bg-white/10 text-cjp-primary focus:ring-cjp-primary"
                      required
                    />
                    <label htmlFor="newsletter-consent" className="text-xs text-cjp-secondary/60">
                      I agree to receive email updates about the movement. You can unsubscribe at any time.
                    </label>
                  </div>
                  <button type="submit" className="btn-primary btn-lg w-full">
                    {newsletterSubscribed ? (
                      <><Check className="w-5 h-5" /> Subscribed!</>
                    ) : (
                      <><Mail className="w-5 h-5" /> Subscribe to Updates</>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-cjp-accent" aria-labelledby="faq-title">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 id="faq-title" className="heading-2 text-cjp-secondary mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-cjp-secondary/80 leading-relaxed">
              Everything you need to know about the movement, how to help, and what's happening next.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openFAQ === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <p className="text-cjp-secondary/80 mb-4">Still have questions? We're here to help.</p>
            <a href="mailto:info@standwithsonam.org" className="btn-primary btn-lg inline-flex items-center gap-3">
              <Mail className="w-5 h-5" /> Email Us Directly
            </a>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="map-title">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 id="map-title" className="heading-2 text-cjp-secondary mb-4">
              Find Us <span className="gradient-text">On the Ground</span>
            </h2>
            <p className="text-cjp-secondary/80 leading-relaxed">
              Our primary protest and coordination locations. Check our social media for daily movement updates.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[16/10] rounded-2xl bg-cjp-secondary overflow-hidden relative gradient-border">
                <div className="absolute inset-0 bg-gradient-to-br from-cjp-primary/10 via-transparent to-gold/10" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-cjp-primary/40 mx-auto mb-4" />
                    <h3 className="heading-3 text-cjp-accent mb-3">Protest Locations</h3>
                    <div className="space-y-3 text-left max-w-sm mx-auto">
                      {[
                        { place: 'Jantar Mantar, New Delhi', desc: 'Main protest site — Hunger strike location' },
                        { place: 'Parliament Street, Delhi', desc: 'Chalo Sansad march route' },
                        { place: 'Leh Main Market, Ladakh', desc: 'Solidarity protests every evening' },
                        { place: 'Kargil Town Square', desc: 'Twin protest site with Leh' },
                      ].map((loc) => (
                        <div key={loc.place} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                          <MapPin className="w-5 h-5 text-cjp-gold flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-cjp-accent font-medium text-sm">{loc.place}</p>
                            <p className="text-cjp-secondary/60 text-xs">{loc.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-cjp-secondary/60 mt-6">
                      Map integration loading. Real-time location updates on our social media.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="card p-6">
                <h3 className="heading-4 text-cjp-secondary mb-4">Connect With Us</h3>
                <div className="space-y-4">
                  {[
                    { platform: 'Twitter / X', handle: '@StandWithSonam', url: 'https://twitter.com/StandWithSonam', color: 'text-blue-500', icon: ExternalLink },
                    { platform: 'Instagram', handle: '@standwithsonam', url: 'https://instagram.com/standwithsonam', color: 'text-pink-500', icon: ExternalLink },
                    { platform: 'YouTube', handle: '@StandWithSonam', url: 'https://youtube.com/@StandWithSonam', color: 'text-red-500', icon: ExternalLink },
                    { platform: 'WhatsApp Channel', handle: 'StandWithSonam Updates', url: 'https://whatsapp.com/channel/standwithsonam', color: 'text-green-500', icon: ExternalLink },
                  ].map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl bg-cjp-accent hover:bg-cjp-primary/5 transition-colors group"
                    >
                      <div>
                        <p className="font-medium text-cjp-secondary text-sm">{social.platform}</p>
                        <p className={`text-sm ${social.color}`}>{social.handle}</p>
                      </div>
                      <social.icon className="w-5 h-5 text-cjp-secondary/60 group-hover:text-cjp-primary transition-colors" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="card p-6 bg-cjp-primary/5 border-cjp-primary/20">
                <h3 className="heading-4 text-cjp-secondary mb-3">Real-Time Alerts</h3>
                <p className="text-cjp-secondary/80 text-sm leading-relaxed mb-4">
                  Get instant notifications about protest locations, safety updates, and breaking news.
                  Our Telegram channel and WhatsApp broadcast lists provide minute-by-minute updates.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://t.me/StandWithSonam" target="_blank" rel="noopener noreferrer" className="btn-primary btn-sm">
                    <MessageCircle className="w-4 h-4" /> Join Telegram
                  </a>
                  <a href="https://whatsapp.com/channel/standwithsonam" target="_blank" rel="noopener noreferrer" className="btn-outline btn-sm">
                    <Phone className="w-4 h-4" /> WhatsApp Channel
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
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
              The Movement Needs <span className="text-cjp-gold">You</span>
            </h2>
            <p className="body-lg text-cjp-secondary/60 mb-10">
              However you choose to help — a donation, a share, a phone call to your MP, or showing up on the streets —
              your action matters. History is shaped by those who show up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate" className="btn-primary btn-lg">
                <Heart className="w-5 h-5" /> Donate Now
              </Link>
              <Link to="/action" className="btn-outline border-cjp-accent/30 text-cjp-accent hover:bg-cjp-accent hover:text-cjp-secondary btn-lg">
                <Users className="w-5 h-5" /> Take Action
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
