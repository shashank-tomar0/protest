import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Movement from './pages/Movement'
import Timeline from './pages/Timeline'
import TakeAction from './pages/TakeAction'
import Donate from './pages/Donate'
import Contact from './pages/Contact'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: 'easeIn' } },
}

const pageTransition = (key, Page) => (
  <motion.div
    key={key}
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    <Page />
  </motion.div>
)

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cjp-accent">
        <Navbar />
        <main id="main-content" className="pt-16 lg:pt-20" role="main">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={pageTransition('home', Home)} />
              <Route path="/movement" element={pageTransition('movement', Movement)} />
              <Route path="/timeline" element={pageTransition('timeline', Timeline)} />
              <Route path="/action" element={pageTransition('action', TakeAction)} />
              <Route path="/donate" element={pageTransition('donate', Donate)} />
              <Route path="/contact" element={pageTransition('contact', Contact)} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
