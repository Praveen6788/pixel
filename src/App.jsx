import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Updates from './pages/Updates'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Team from './pages/Team'
import Admin from './pages/Admin'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cyber-dark">
        <Navbar />
        <motion.main 
          className="pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  )
}

export default App
