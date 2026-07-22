import { Link } from 'react-router-dom'
import { Heart, Twitter, Instagram, Youtube, ArrowRight, Check, ExternalLink } from 'lucide-react'

const footerLinks = [
  {
    heading: 'Pages',
    links: [
      { href: '/', label: 'Home' },
      { href: '/movement', label: 'The Movement' },
      { href: '/timeline', label: 'Timeline' },
      { href: '/action', label: 'Take Action' },
      { href: '/donate', label: 'Donate' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    heading: 'The Movement',
    links: [
      { href: '/movement', label: 'Our Story' },
      { href: '/timeline', label: 'Timeline of Events' },
      { href: '/movement#cjp', label: 'Cockroach Janata Party' },
      { href: '/movement#figures', label: 'Key Figures' },
    ],
  },
  {
    heading: 'Take Action',
    links: [
      { href: '/action', label: 'Ways to Help' },
      { href: '/donate', label: 'Donate' },
      { href: '/action#volunteer', label: 'Volunteer' },
      { href: '/action#contact-mps', label: 'Contact MPs' },
      { href: '/action#share', label: 'Share Toolkit' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { href: '/contact', label: 'Contact Us' },
      { href: '/contact#press', label: 'Press Kit' },
      { href: '/contact#legal', label: 'Legal Support' },
      { href: '/contact#medical', label: 'Medical Aid' },
    ],
  },
]

const socialLinks = [
  { href: 'https://twitter.com/StandWithSonam', icon: Twitter, label: 'Twitter / X' },
  { href: 'https://instagram.com/standwithsonam', icon: Instagram, label: 'Instagram' },
  { href: 'https://youtube.com/@StandWithSonam', icon: Youtube, label: 'YouTube' },
]

const stats = [
  { label: 'Days of Hunger Strike', value: '21+' },
  { label: 'Protesters at Chalo Sansad', value: '10,000+' },
  { label: 'Global Media Coverage', value: '50M+ Views' },
  { label: 'Countries with Solidarity', value: '15+' },
]

export default function Footer() {
  return (
    <footer className="bg-cjp-dark text-cjp-accent relative overflow-hidden" role="contentinfo">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-cjp-primary/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 py-16 lg:py-24">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-cjp-primary hover:text-cjp-gold transition-colors mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cjp-primary focus-visible:ring-offset-2 focus-visible:ring-offset-cjp-dark rounded-xl"
              aria-label="Stand With Sonam - Home"
            >
              <div className="w-10 h-10 rounded-xl bg-cjp-primary flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <span className="font-display font-bold text-2xl lg:text-3xl">Stand With Sonam</span>
            </Link>

            <p className="text-cjp-accent/70 leading-relaxed mb-6 max-w-sm">
              A people&apos;s movement for education reform, Ladakh autonomy, and democratic rights.
              Standing with Sonam Wangchuk and the Cockroach Janata Party.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-cjp-accent/5 border border-cjp-accent/10 flex items-center justify-center text-cjp-accent/60 hover:text-cjp-gold hover:border-cjp-gold/30 hover:bg-cjp-accent/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cjp-primary"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="font-display text-lg font-semibold text-cjp-accent mb-4">{group.heading}</h3>
              <nav aria-label={`${group.heading} links`}>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-cjp-accent/60 hover:text-cjp-gold transition-colors duration-200 inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cjp-primary rounded-lg px-1 -mx-1"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 -ml-1 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-5 sm:p-6 rounded-2xl bg-cjp-accent/5 border border-cjp-accent/10"
            >
              <div className="font-display text-3xl lg:text-4xl font-bold text-cjp-gold mb-1">
                {stat.value}
              </div>
              <div className="text-cjp-accent/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cjp-accent/10 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Transparency Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-sm text-cjp-accent/60">
              <span>&copy; {new Date().getFullYear()} Stand With Sonam. All rights reserved.</span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-cjp-gold" aria-hidden="true" />
                100% of donations go to causes
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-cjp-gold" aria-hidden="true" />
                Transparent accounting on OpenCollective
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="w-4 h-4 text-cjp-gold" aria-hidden="true" />
                80G Tax Exemption (India)
              </span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-6 gap-y-2 text-sm">
              <Link to="/contact#privacy" className="text-cjp-accent/60 hover:text-cjp-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cjp-primary rounded-lg px-1">
                Privacy Policy
              </Link>
              <Link to="/contact#terms" className="text-cjp-accent/60 hover:text-cjp-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cjp-primary rounded-lg px-1">
                Terms of Service
              </Link>
              <Link to="/contact#accessibility" className="text-cjp-accent/60 hover:text-cjp-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cjp-primary rounded-lg px-1">
                Accessibility
              </Link>
              <a
                href="https://opencollective.com/standwithsonam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cjp-accent/60 hover:text-cjp-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cjp-primary rounded-lg px-1"
              >
                Financial Transparency <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
