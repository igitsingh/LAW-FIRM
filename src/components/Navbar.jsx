import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Twitter, Facebook, Linkedin, Instagram, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { practiceAreas } from '../data/practiceAreas'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'People', href: '/attorneys' },
    { label: 'News', href: '/#insights' },
    { label: 'Expertise', href: '/#practice' },
    { label: 'Locations', href: '/#contact' },
    { label: 'Careers', href: '/careers' },
    { label: 'Pages', href: '/#pages' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsDropdownOpen(false)
  }, [location])

  return (
    <nav 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        zIndex: 1000, 
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : '#fff',
        boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
        borderBottom: '1px solid #eee'
      }}
    >
      {/* Attribution Top Bar */}
      <div style={{ 
        width: '100%', 
        background: '#CF1134', 
        padding: '6px 0', 
        textAlign: 'center', 
        fontSize: '10px', 
        letterSpacing: '3px', 
        color: 'white',
        fontWeight: 800,
        textTransform: 'uppercase'
      }}>
        HOUSE OF FLOYDS CREATION
      </div>

      {/* Top Header Bar */}
      <div style={{ 
        width: '100%', 
        background: '#fff', 
        padding: '8px 0', 
        borderBottom: '1px solid #f0f0f0' 
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '15px' }}>
            <Twitter size={14} style={{ color: '#666', cursor: 'pointer' }} />
            <Facebook size={14} style={{ color: '#666', cursor: 'pointer' }} />
            <Linkedin size={14} style={{ color: '#666', cursor: 'pointer' }} />
            <Instagram size={14} style={{ color: '#666', cursor: 'pointer' }} />
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', fontSize: '13px', color: '#333' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={14} style={{ color: '#B20000' }} />
              <span>Free Consultation: <strong>+91 99770 06709</strong></span>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ background: '#B20000', color: 'white', padding: '6px 12px', fontWeight: 900, borderRadius: '4px', fontSize: '18px', letterSpacing: '1px' }}>ARJ</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '20px', fontWeight: 800, color: '#010812', letterSpacing: '0.5px' }}>LAW FIRM</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'stretch', height: '100%' }}>
          <ul style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
            {navItems.map((item, index) => {
              const isActive = (item.label === 'Home' && location.pathname === '/') || location.hash === item.href.slice(1);
              return (
                <li key={index} style={{ height: '100%', display: 'flex' }}>
                  <Link 
                    to={item.href} 
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      padding: '12px 20px',
                      fontSize: '13px', 
                      fontWeight: 600, 
                      color: isActive ? '#fff' : '#444', 
                      background: isActive ? '#B20000' : 'transparent',
                      transition: 'all 0.2s ease',
                      borderRight: '1px solid #eee'
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ display: 'none', color: '#333' }}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}} />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            style={{ 
              position: 'fixed', 
              top: 0, 
              right: 0, 
              width: '80%', 
              height: '100vh', 
              background: '#fff', 
              zIndex: 999,
              padding: '100px 40px',
              boxShadow: '-10px 0 30px rgba(0,0,0,0.1)'
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href} 
                    style={{ fontSize: '18px', fontWeight: 600, color: '#333' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
