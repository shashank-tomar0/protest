import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart, Flag } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/movement', label: 'The Movement' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/action', label: 'Take Action' },
  { href: '/donate', label: 'Donate' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-cjp-secondary/10'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cjp-primary focus-visible:ring-offset-2 rounded-xl ${
              isScrolled
                ? 'text-cjp-primary hover:text-cjp-primary/80'
                : 'text-cjp-accent hover:text-cjp-accent/80'
            }`}
            aria-label="Stand With Sonam - Home"
          >
            <div className="w-9 h-9 rounded-xl bg-cjp-primary flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span className="font-display font-bold text-xl lg:text-2xl hidden sm:block">
              Stand With Sonam
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative font-medium text-sm transition-colors ${
                  location.pathname === link.href
                    ? isScrolled
                      ? 'text-cjp-primary'
                      : 'text-cjp-accent'
                    : isScrolled
                      ? 'text-cjp-secondary hover:text-cjp-primary'
                      : 'text-cjp-accent/80 hover:text-cjp-accent'
                } after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-cjp-primary after:transition-transform after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/action"
              className={`inline-flex items-center justify-center gap-2 font-display font-medium rounded-xl px-4 py-2 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                isScrolled
                  ? 'border-2 border-cjp-primary text-cjp-primary hover:bg-cjp-primary hover:text-white focus-visible:ring-cjp-primary'
                  : 'border-2 border-cjp-accent/60 text-cjp-accent hover:bg-cjp-accent hover:text-cjp-dark focus-visible:ring-cjp-accent'
              }`}
            >
              <Flag className="w-4 h-4" /> Act Now
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center justify-center gap-2 font-display font-medium rounded-xl px-4 py-2 text-sm bg-cjp-primary text-white hover:bg-cjp-primary/90 shadow-lg shadow-cjp-primary/30 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cjp-primary focus-visible:ring-offset-2"
            >
              <Heart className="w-4 h-4" /> Donate
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden p-2 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cjp-primary ${
              isScrolled ? 'text-cjp-secondary hover:bg-cjp-secondary/5' : 'text-cjp-accent hover:bg-cjp-accent/10'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden border-t border-cjp-secondary/10 bg-white rounded-b-2xl shadow-xl"
            >
              <div className="py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                      location.pathname === link.href
                        ? 'bg-cjp-primary/10 text-cjp-primary'
                        : 'text-cjp-secondary hover:bg-cjp-secondary/5 hover:text-cjp-primary'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-cjp-secondary/10 flex flex-col gap-3 px-4">
                  <Link
                    to="/action"
                    className="inline-flex items-center justify-center gap-2 font-display font-medium rounded-xl px-6 py-3 text-center border-2 border-cjp-primary text-cjp-primary hover:bg-cjp-primary hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cjp-primary focus-visible:ring-offset-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <Flag className="w-5 h-5" /> Take Action Now
                  </Link>
                  <Link
                    to="/donate"
                    className="inline-flex items-center justify-center gap-2 font-display font-medium rounded-xl px-6 py-3 text-center bg-cjp-primary text-white hover:bg-cjp-primary/90 shadow-lg shadow-cjp-primary/30 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cjp-primary focus-visible:ring-offset-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <Heart className="w-5 h-5" /> Donate
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
