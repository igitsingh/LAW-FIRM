import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Users, Zap, Star, Heart, CheckCircle, ArrowRight } from 'lucide-react'
import '../styles/sections.css'

const Careers = () => {
  const benefits = [
    {
      title: 'Continuous Learning',
      desc: 'We take great pride in our continuous learning programs. We are committed to shaping the careers of our members through professional development.',
      icon: <GraduationCap size={24} />
    },
    {
      title: 'High-Profile Cases',
      desc: 'Get exposure to landmark Supreme Court rulings and complex commercial disputes at national and domestic levels.',
      icon: <Briefcase size={24} />
    },
    {
      title: 'Social Growth',
      desc: 'Together we celebrate events and social gatherings with as much enthusiasm as we treat our clientele and deadlines.',
      icon: <Heart size={24} />
    },
    {
      title: 'Collaborative Environment',
      desc: 'A healthy environment that is open to communication, where criticism is taken constructively and teamwork is the bedrock.',
      icon: <Users size={24} />
    }
  ]

  const values = [
    'Integrity First',
    'Client Excellence',
    'Collaborative Spirit',
    'Growth & Innovation',
    'Open Communication',
    'Diversity & Inclusion'
  ]

  return (
    <div className="careers-page">
      {/* Hero */}
      <section className="section" style={{ paddingTop: '180px', background: 'var(--accent)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'left' }}
          >
            <h4 style={{ color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '20px', fontSize: '14px' }}>Careers</h4>
            <h1 style={{ fontSize: '64px', marginBottom: '30px' }}>Build Your Legal Career with Us</h1>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: '1.6' }}>
              At ARJ Law Firm, we nurture young legal talent by offering career-defining opportunities, mentorship, and professional development. We welcome professionals from law, business, IT, and related fields to join our dynamic legal team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '100px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'left' }}
            >
              <h2 style={{ fontSize: '42px', marginBottom: '30px' }}>Excellence, Commitment & Growth</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.8' }}>
                Our doors are always open to all the professionals and enthusiasts who have a diverse skill set in law and related subjects such as information technology, business development, and others.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: '1.8', fontWeight: 600 }}>
                Excellence, commitment knowledge, integrity, respect, openness, curiosity to learn, teamwork, and trust are our bedrock and this is how we approach our profession.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                {[
                  'Integrity & Trust',
                  'Excellence',
                  'Curiosity to Learn',
                  'Teamwork',
                  'Openness',
                  'Respect'
                ].map((val, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px' }}>
                    <CheckCircle size={18} style={{ color: 'var(--secondary)' }} />
                    <span style={{ color: 'var(--text-primary)' }}>{val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-card" style={{ padding: '60px', background: 'var(--accent)', position: 'relative', overflow: 'hidden' }}>
                <Star size={120} style={{ position: 'absolute', top: '-30px', right: '-30px', color: 'var(--secondary)', opacity: 0.05 }} />
                <h3 style={{ fontSize: '24px', marginBottom: '24px', color: 'var(--secondary)' }}>Professional Development</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontStyle: 'italic' }}>
                  "Joining ARJ Law Firm is the beginning to an exciting journey towards your professional excellence. We celebrate events and social gatherings with as much enthusiasm as we treat our clientele and deadlines, striking a balance between professional ethics and making memories."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div style={{ textAlign: 'left', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', marginBottom: '20px' }}>Why Nurture Your Talent Here?</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>We provide the right platform for young and aspiring talent to grow alongside senior industry professionals.</p>
          </div>
          <div className="grid grid-cols-4" style={{ gap: '30px' }}>
            {[
              { title: 'Continuous Learning', icon: <GraduationCap size={24} />, desc: 'We take pride in our continuous learning programs, committed to shaping careers through development.' },
              { title: 'High-Profile Case Exposure', icon: <Briefcase size={24} />, desc: 'Exposure to landmark Supreme Court rulings and complex cases for domestic and international clients.' },
              { title: 'Social Growth & Wellbeing', icon: <Heart size={24} />, desc: 'Combining professional excellence with social gatherings and a inclusive work culture.' },
              { title: 'Diverse Opportunity', icon: <Zap size={24} />, desc: 'Open to law enthusiasts and professionals from IT, business development, and related fields.' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="glass-card"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ textAlign: 'left' }}
              >
                <div style={{ color: 'var(--secondary)', marginBottom: '24px' }}>{benefit.icon}</div>
                <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>{benefit.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="section">
        <div className="container">
          <motion.div
            className="glass-card"
            style={{ padding: '80px', textAlign: 'left', background: 'var(--accent)', border: '2px solid var(--secondary)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ maxWidth: '800px' }}>
              <h2 style={{ fontSize: '42px', marginBottom: '20px' }}>Start Your Journey Today</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '40px' }}>
                We are always looking for exceptional law graduates and professionals from information technology, sociology, and business development.
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <a href="mailto:arjlawfirm@gmail.com" className="btn-primary" style={{ padding: '20px 40px' }}>
                  Apply Now <ArrowRight size={20} style={{ marginLeft: '12px' }} />
                </a>
                <a href="#openings" className="btn-outline" style={{ padding: '20px 40px' }}>View Current Openings</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Careers
