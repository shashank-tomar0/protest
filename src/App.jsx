import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Home from './pages/Home'
import Movement from './pages/Movement'
import Timeline from './pages/Timeline'
import TakeAction from './pages/TakeAction'
import Donate from './pages/Donate'
import Contact from './pages/Contact'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

function AnimatedPage({ children, paths }) {
  const location = useLocation()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState('animate')
  const prevPath = useRef(location.pathname)

  useEffect(() => {
    if (location.pathname !== prevPath.current) {
      setTransitionStage('initial')
      const timeout = setTimeout(() => {
        setDisplayChildren(children)
        setTransitionStage('animate')
        prevPath.current = location.pathname
      }, 200)
      return () => clearTimeout(timeout)
    } else {
      setDisplayChildren(children)
    }
  }, [location.pathname])

  return <div style={{ opacity: transitionStage === 'animate' ? 1 : 0, transition: 'opacity 0.3s' }}>{displayChildren}</div>
}

function AppRoutes() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <AnimatedPage>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/movement" element={<Movement />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/action" element={<TakeAction />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatedPage>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
