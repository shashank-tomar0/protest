import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movement from './pages/Movement'
import Timeline from './pages/Timeline'
import TakeAction from './pages/TakeAction'
import Donate from './pages/Donate'
import Contact from './pages/Contact'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movement" element={<Movement />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/action" element={<TakeAction />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  )
}
