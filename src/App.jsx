import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import Home from './pages/Home'
import Movement from './pages/Movement'
import Timeline from './pages/Timeline'
import TakeAction from './pages/TakeAction'
import Donate from './pages/Donate'
import Contact from './pages/Contact'

function AnimatedPage({ children }) {
  const location = useLocation()
  const [display, setDisplay] = useState(children)
  const [stage, setStage] = useState('animate')
  const prev = useRef(location.pathname)

  useEffect(() => {
    if (location.pathname !== prev.current) {
      setStage('initial')
      const t = setTimeout(() => {
        setDisplay(children)
        setStage('animate')
        prev.current = location.pathname
      }, 200)
      return () => clearTimeout(t)
    } else {
      setDisplay(children)
    }
  }, [location.pathname])

  return <div style={{ opacity: stage === 'animate' ? 1 : 0, transition: 'opacity 0.3s' }}>{display}</div>
}

function AppRoutes() {
  const location = useLocation()
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
