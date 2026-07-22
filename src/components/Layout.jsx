import React, { useState, useEffect } from 'react'
import { Link, useLocation, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Heart, Share2, ExternalLink } from 'lucide-react'

const Header = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState('dark')
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-cjp-secondary-light/20' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl text-cjp-secondary" aria-label="Sonam Wangchuk Campaign Home">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-cjp-primary to-gold flex items-center justify-center"
            >
              <Heart className="w-5 h-5 text-white" aria-hidden="true" />
            </motion.div>
            <span className="hidden sm:block">StandWithSonam</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-display font-medium text-sm transition-colors duration-200 ${
                    isActive ? 'text-cjp-primary' : 'text-cjp-secondary/70 hover:text-cjp-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/donate"
              className="hidden sm:inline-flex btn btn-primary btn-md"
              aria-label="Donate to the movement"
            >
              <Heart className="w-4 h-4" aria-hidden="true" />
              Donate
            </Link>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-cjp-secondary-light/20 hover:bg-cjp-secondary-light/40 transition-colors text-cjp-secondary"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-cjp-secondary-light/20 hover:bg-cjp-secondary-light/40 transition-colors text-cjp-secondary"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-cjp-secondary-light/20 bg-white"
            >
              <div className="py-6 space-y-4 px-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-display font-medium transition-colors ${
                        isActive ? 'bg-cjp-primary/10 text-cjp-primary' : 'text-cjp-secondary/70 hover:bg-cjp-secondary-light/50 hover:text-cjp-primary'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="pt-4 border-t border-cjp-secondary-light/20 flex flex-col gap-3">
                  <Link
                    to="/donate"
                    onClick={() => setIsOpen(false)}
                    className="btn btn-primary btn-md text-center"
                  >
                    <Heart className="w-4 h-4" />
                    Donate to the Movement
                  </Link>
                  <Link
                    to="/action"
                    onClick={() => setIsOpen(false)}
                    className="btn btn-outline btn-md text-center"
                  >
                    Take Action
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    movement: [
      { label: 'The Movement', href: '/movement' },
      { label: 'Our Demands', href: '/demands' },
      { label: 'The Viral Photo', href: '/the-photo' },
      { label: 'Timeline', href: '/timeline' },
    ],
    action: [
      { label: 'Take Action', href: '/action' },
      { label: 'Donate', href: '/donate' },
      { label: 'Volunteer', href: '/contact?type=volunteer' },
      { label: 'Spread the Word', href: '/action#share' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Accessibility', href: '/accessibility' },
      { label: 'Legal Disclaimer', href: '/legal' },
    ],
    connect: [
      { label: 'Twitter/X', href: 'https://twitter.com/StandWithSonam', external: true },
      { label: 'Instagram', href: 'https://instagram.com/standwithsonam', external: true },
      { label: 'YouTube', href: 'https://youtube.com/@StandWithSonam', external: true },
      { label: 'Email Updates', href: '/contact?type=subscribe', external: false },
    ],
  }

  return (
    <footer className="bg-cjp-secondary text-cjp-accent pt-16 lg:pt-24 pb-12" role="contentinfo">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl text-cjp-accent mb-4" aria-label="StandWithSonam Home">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cjp-primary to-gold flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span>StandWithSonam</span>
            </Link>
            <p className="text-cjp-secondary-light/70 text-sm leading-relaxed mb-6 max-w-xs">
              Standing with Sonam Wangchuk and the Cockroach Janata Party for education reform, Ladakh's autonomy, and democratic rights in India.
            </p>
            <div className="flex gap-4">
              {footerLinks.connect.slice(0, 3).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="p-2 rounded-lg bg-cjp-secondary-light/30 hover:bg-cjp-secondary-light/50 transition-colors text-cjp-secondary-light hover:text-cjp-accent"
                  aria-label={link.label}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="The Movement">
            <h3 className="font-display font-semibold text-cjp-accent mb-4">The Movement</h3>
            <ul className="space-y-3">
              {footerLinks.movement.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-cjp-secondary-light/70 hover:text-cjp-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Take Action">
            <h3 className="font-display font-semibold text-cjp-accent mb-4">Take Action</h3>
            <ul className="space-y-3">
              {footerLinks.action.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-cjp-secondary-light/70 hover:text-cjp-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h3 className="font-display font-semibold text-cjp-accent mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-cjp-secondary-light/70 hover:text-cjp-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display font-semibold text-cjp-accent mb-4">Stay Updated</h3>
            <p className="text-cjp-secondary-light/70 text-sm mb-4">Get the latest updates on the movement directly to your inbox.</p>
            <form className="flex flex-col gap-2" action="/contact" method="GET">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input bg-cjp-secondary-light/30 border-cjp-secondary-light/50 text-cjp-accent placeholder-cjp-secondary-light/50 focus:ring-cjp-primary"
                required
                aria-label="Email address for newsletter"
              />
              <button type="submit" className="btn btn-primary btn-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-cjp-secondary-light/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cjp-secondary-light/50 text-sm">
              © {currentYear} Stand With Sonam. A grassroots movement for justice, education, and democracy.
            </p>
            <div className="flex items-center gap-6 text-sm text-cjp-secondary-light/50">
              <span>Made with solidarity</span>
              <span className="flex items-center gap-1.5 text-cjp-primary">
                <Heart className="w-4 h-4" />
                For Sonam
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

const Layout = ({ children, navItems }) => {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-cjp-accent text-cjp-secondary antialiased">
      <Header navItems={navItems} />
      <main id="main-content" className="pt-16 lg:pt-20" role="main">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 btn btn-primary"
      >
        Skip to main content
      </a>
    </div>
  )
}

export default Layout