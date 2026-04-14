import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Attorneys from './pages/Attorneys'
import Careers from './pages/Careers'
import PracticeAreaDetail from './pages/PracticeAreaDetail'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <Router>
      <div className="premium-bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attorneys" element={<Attorneys />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/practice/:slug" element={<PracticeAreaDetail />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
