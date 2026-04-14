import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { practiceAreas } from '../data/practiceAreas'
import { Gavel, Users, Shield, Briefcase, Home as HomeIcon, CheckCircle, Building, ArrowRight, ChevronRight, Mail } from 'lucide-react'

// Mapping string names to Lucide components
const iconMap = {
  Gavel,
  Users,
  Shield,
  Briefcase,
  Home: HomeIcon,
  CheckCircle,
  Building
}

const PracticeAreaDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const area = practiceAreas.find(a => a.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!area) {
      // Small delay then redirect if not found
      const timer = setTimeout(() => navigate('/'), 2000)
      return () => clearTimeout(timer)
    }
  }, [area, navigate])

  if (!area) {
    return (
      <div className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'left' }}>
          <h2 style={{ fontSize: '48px', marginBottom: '20px' }}>Area Not Found</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Redirecting to home...</p>
        </div>
      </div>
    )
  }

  const IconComponent = iconMap[area.icon]

  return (
    <div className="practice-detail">
      {/* Hero Header */}
      <section className="section" style={{ paddingTop: '180px', background: 'var(--accent)', borderBottom: '1px solid var(--border-glass)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'left' }}
          >
            <div style={{ color: 'var(--secondary)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <IconComponent size={40} />
              <span style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', fontWeight: 600 }}>Practice Area</span>
            </div>
            <h1 style={{ fontSize: '64px', marginBottom: '30px', lineHeight: '1.1' }}>{area.title}</h1>
            <p style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.6' }}>
              {area.shortDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '100px', alignItems: 'start' }}>
            {/* Left: Detailed Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'left' }}
            >
              <h2 style={{ fontSize: '36px', marginBottom: '32px' }}>Overview & Strategy</h2>
              <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '40px' }}>
                {area.longDesc}
              </p>
              
              <div className="glass-card" style={{ padding: '40px', background: 'rgba(197, 160, 89, 0.05)', borderLeft: '4px solid var(--secondary)' }}>
                <h4 style={{ color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px', marginBottom: '16px' }}>Our Expertise</h4>
                <p style={{ fontSize: '16px', color: 'var(--text-primary)', fontStyle: 'italic', lineHeight: '1.7' }}>
                  "{area.expertise}"
                </p>
              </div>
            </motion.div>

            {/* Right: Services List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'left' }}
            >
              <h2 style={{ fontSize: '36px', marginBottom: '32px' }}>Key Services</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {area.services.map((service, index) => (
                  <div 
                    key={index} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '16px', 
                      padding: '20px', 
                      background: 'var(--bg-glass)', 
                      border: '1px solid var(--border-glass)',
                      borderRadius: '4px'
                    }}
                  >
                    <ChevronRight size={18} style={{ color: 'var(--secondary)' }} />
                    <span style={{ fontSize: '16px', fontWeight: 500 }}>{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--accent)' }}>
        <div className="container">
          <motion.div
            className="glass-card"
            style={{ padding: '80px', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '40px' }}
            whileHover={{ borderColor: 'var(--secondary)' }}
          >
            <div style={{ maxWidth: '600px' }}>
              <h2 style={{ fontSize: '42px', marginBottom: '20px' }}>Secure Strategic Counsel</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>
                Need expert advice in {area.title}? Our legal professionals are ready to assist you.
              </p>
            </div>
            <a href="/#contact" className="btn-primary" style={{ padding: '20px 40px', whiteSpace: 'nowrap' }}>
              Talk to an Expert <ArrowRight size={20} style={{ marginLeft: '12px' }} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PracticeAreaDetail
