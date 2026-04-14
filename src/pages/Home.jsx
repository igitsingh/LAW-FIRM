import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Gavel, Briefcase, Building, Home as HomeIcon, Users, Zap, Heart, CheckCircle, ArrowRight, Mail, Phone, MapPin, ExternalLink, Award, UserCheck, Star, Activity, Globe, FileText } from 'lucide-react'
import '../styles/sections.css'

const Home = () => {
  const practiceAreas = [
    { title: 'Litigation & Dispute Resolution', icon: <Gavel size={32} />, desc: 'Representation across all courts including the Supreme Court, High Courts, and Tribunals.', slug: 'litigation-and-dispute-resolution' },
    { title: 'Arbitration & Conciliation', icon: <Users size={32} />, desc: 'Efficient ADR and mediation services to resolve disputes without prolonged litigation.', slug: 'arbitration-and-conciliation' },
    { title: 'Banking & Finance Law', icon: <Shield size={32} />, desc: 'Legal guidance on banking regulations, loan structuring, and debt recovery.', slug: 'banking-and-finance-law' },
    { title: 'Corporate & Commercial Law', icon: <Briefcase size={32} />, desc: 'Assisting businesses with M&A, contract drafting, and regulatory approvals.', slug: 'corporate-and-commercial-law' },
    { title: 'Real Estate & Property Law', icon: <HomeIcon size={32} />, desc: 'Solutions for property transactions, title verification, and land acquisition.', slug: 'real-estate-and-property-law' },
    { title: 'Employment & Labor Law', icon: <CheckCircle size={32} />, desc: 'Navigating industrial disputes, wage rules, and workplace compliance.', slug: 'employment-and-labor-law' },
    { title: 'Energy & Infrastructure Law', icon: <Building size={32} />, desc: 'Specialized legal services for power sector agreements and infrastructure project contracts.', slug: 'energy-and-infrastructure-law' },
  ]

  const articles = [
    { title: 'Land Acquisition & Real Estate Law: A Specialist’s Perspective', slug: 'land-acquisition-perspective', date: 'March 2024' },
    { title: 'Corporate Legal Advisory: The Strategic Role of Paresh S. Joshi', slug: 'corporate-advisory-role', date: 'Feb 2024' },
    { title: 'Inside the Legal Mind: Arbitration and Civil Dispute Resolution', slug: 'arbitration-101', date: 'Jan 2024' },
  ]

  const whyChooseUs = [
    { title: 'Experienced Legal Professionals', icon: <Award size={24} />, desc: 'Highly skilled advocates with expertise across multiple legal domains.' },
    { title: 'Personalized Legal Solutions', icon: <UserCheck size={24} />, desc: 'Tailored legal strategies to meet individual and corporate legal needs.' },
    { title: 'Client-Centric Approach', icon: <Star size={24} />, desc: 'Prioritizing interests, ensuring transparency, efficiency, and responsiveness.' },
    { title: 'Proven Track Record', icon: <Activity size={24} />, desc: 'Successful representation in high-stakes litigation and arbitration.' },
    { title: 'Industry Recognition', icon: <Award size={24} />, desc: 'Recognized for professionalism, ethical standards, and complex success.' },
  ]

  return (
    <div className="home">
      {/* Redesigned Hero Section */}
      <section className="hero">
        <div 
          className="hero-image" 
          style={{ backgroundImage: `url('/hero-bg.png')` }}
        ></div>
        <div className="hero-diagonal">
          <div className="hero-content-new">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              TEAM OF THE YEAR 2017
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Qualified legal advice and solutions in any areas.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="features-bar">
        <div className="feature-item">
          <div className="feature-icon"><Globe size={32} /></div>
          <div className="feature-text">
            <h3>Global Coverage</h3>
            <p>We work all over the world!</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><FileText size={32} /></div>
          <div className="feature-text">
            <h3>Press Releases</h3>
            <p>Don't miss latest updates</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><Users size={32} /></div>
          <div className="feature-text">
            <h3>Join our Team</h3>
            <p>Meet your career goals!</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'flex-start', gap: '80px' }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{ textAlign: 'left' }}
            >
              <h4 style={{ color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '20px', fontSize: '14px' }}>Established 2004</h4>
              <h2 style={{ fontSize: '42px', marginBottom: '30px', lineHeight: '1.2' }}>Your Trusted Partner in Legal Excellence</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.8' }}>
                ARJ Law Firm is a premier full-service law firm based in Indore, Madhya Pradesh, dedicated to providing comprehensive legal solutions across various sectors. With a client-focused approach, we offer expert advisory, regulatory, transactional, and dispute resolution services to individuals, businesses, financial institutions, and public sector undertakings (PSUs) nationwide.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: '1.8' }}>
                Our mission is to deliver strategic, result-driven legal solutions with a commitment to excellence, integrity, and professionalism. We believe in partner-led service, attention to detail, and a client-first approach, making us a trusted legal advisor for businesses and individuals alike.
              </p>
              <div style={{ display: 'flex', gap: '32px' }}>
                <div>
                  <h3 style={{ fontSize: '32px', color: 'var(--secondary)' }}>20+</h3>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>YEARS EXPERIENCE</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '32px', color: 'var(--secondary)' }}>500+</h3>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>CASES HANDLED</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="glass-card" 
              style={{ padding: '60px', textAlign: 'left', background: 'var(--accent)' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h3 style={{ fontSize: '24px', marginBottom: '30px', color: 'var(--secondary)' }}>Our Commitment</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', lineHeight: '1.7' }}>
                "Our vision to be the finest law firm of the country is supported and strengthened by our core values - exceeding the expectations of the client, working everything with integrity, believing that people matter, and following the path of constant learning."
              </p>
              <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '30px' }}>
                <p style={{ fontSize: '14px', color: 'var(--text-primary)', marginBottom: '10px' }}><strong>Founding Values:</strong></p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  {[
                    'Client Focus', 
                    'Integrity', 
                    'Professionalism', 
                    'Constant Learning',
                    'Teamwork',
                    'Diversity'
                  ].map((val, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                      <CheckCircle size={14} style={{ color: 'var(--secondary)' }} /> {val}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section" style={{ background: 'var(--accent)' }}>
        <div className="container">
          <div style={{ textAlign: 'left', marginBottom: '80px' }}>
            <h4 style={{ color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '20px', fontSize: '14px' }}>The ARJ Advantage</h4>
            <h2 style={{ fontSize: '48px', marginBottom: '20px' }}>Why Choose ARJ Law Firm?</h2>
          </div>
          <div className="grid grid-cols-5" style={{ gap: '20px' }}>
            {[
              { title: 'Experienced Professionals', icon: <Award size={24} />, desc: 'Highly skilled advocates with expertise across multiple legal domains.' },
              { title: 'Personalized Solutions', icon: <UserCheck size={24} />, desc: 'Tailored legal strategies to meet individual and corporate needs.' },
              { title: 'Client-Centric Approach', icon: <Star size={24} />, desc: 'Prioritizing interests, ensuring transparency and efficiency.' },
              { title: 'Proven Track Record', icon: <Activity size={24} />, desc: 'Successfully represented clients in high-stakes litigation and arbitration.' },
              { title: 'Industry Recognition', icon: <Globe size={24} />, desc: 'Recognized for professionalism and success in complex matters.' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="glass-card"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ padding: '24px', textAlign: 'left' }}
              >
                <div style={{ color: 'var(--secondary)', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '16px', marginBottom: '12px', lineHeight: '1.3' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '12px', lineHeight: '1.6' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section" id="practice" style={{ background: '#020c1b' }}>
        <div className="container">
          <div style={{ textAlign: 'left', marginBottom: '80px' }}>
            <h4 style={{ color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '20px', fontSize: '14px' }}>Expertise</h4>
            <h2 style={{ fontSize: '48px', marginBottom: '20px' }}>Core Practice Areas</h2>
          </div>
          <div className="practice-grid">
            {practiceAreas.map((area, index) => (
              <motion.div 
                key={index}
                className="glass-card"
                whileHover={{ y: -10, borderColor: 'var(--secondary)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ textAlign: 'left' }}
              >
                <div style={{ color: 'var(--secondary)', marginBottom: '24px' }}>{area.icon}</div>
                <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>{area.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '24px', lineHeight: '1.6' }}>{area.desc}</p>
                <Link 
                  to={`/practice/${area.slug}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary)', fontSize: '14px', fontWeight: 600 }}
                >
                  Explore Details <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="section" id="insights">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '20px', fontSize: '14px' }}>Legal Insights</h4>
              <h2 style={{ fontSize: '42px' }}>Latest Expert Perspectives</h2>
            </div>
          </div>
          <div className="grid grid-cols-3">
            {articles.map((art, index) => (
              <motion.div 
                key={index}
                className="glass-card"
                whileHover={{ background: 'rgba(255,255,255,0.06)' }}
                style={{ textAlign: 'left' }}
              >
                <p style={{ color: 'var(--secondary)', fontSize: '12px', fontWeight: 600, marginBottom: '16px' }}>{art.date}</p>
                <h3 style={{ fontSize: '24px', marginBottom: '24px', lineHeight: '1.4' }}>{art.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600 }}>
                  Read Insight <ExternalLink size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact" style={{ background: 'var(--accent)' }}>
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: '100px' }}>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '20px', fontSize: '14px' }}>Contact</h4>
              <h2 style={{ fontSize: '42px', marginBottom: '30px' }}>Schedule a Consultation Today!</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: '1.8' }}>Our experts are ready to assist you with strategic, result-driven legal solutions. Reach out to us for expert advisory and representation.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <MapPin style={{ color: 'var(--secondary)' }} />
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>Indore Campus</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Advocate Chamber Number 59, High Court Campus, Indore</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <Phone style={{ color: 'var(--secondary)' }} />
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>Phone Support</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>+91 99770 06709 | +91 97540 33928</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>0731-3585243 (Landline)</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <Mail style={{ color: 'var(--secondary)' }} />
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>Email Directory</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>arjlawfirm@gmail.com</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>pareadvocate@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <form className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Send Enquiries</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <input type="text" placeholder="First Name" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', padding: '16px', borderRadius: '4px', color: 'white' }} />
                <input type="text" placeholder="Last Name" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', padding: '16px', borderRadius: '4px', color: 'white' }} />
              </div>
              <input type="email" placeholder="Email Address" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', padding: '16px', borderRadius: '4px', color: 'white' }} />
              <textarea placeholder="Legal Inquiry Details" rows="5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', padding: '16px', borderRadius: '4px', color: 'white' }}></textarea>
              <button className="btn-primary" style={{ padding: '20px' }}>Request Consultation</button>
            </form>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="section" style={{ background: 'var(--secondary)', color: 'var(--primary)', textAlign: 'left' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '56px', marginBottom: '20px' }}>Strategic Counsel.</h2>
            <h2 style={{ fontSize: '56px', marginBottom: '40px', fontWeight: 300, fontStyle: 'italic' }}>Defined by Excellence.</h2>
            <div style={{ display: 'flex', gap: '24px', justifyContent: 'flex-start' }}>
              <a href="#contact" className="btn-primary" style={{ background: 'var(--primary)', color: 'var(--secondary)', padding: '20px 60px', fontSize: '18px' }}>Start Today</a>
              <a href="/attorneys" className="btn-outline" style={{ borderColor: 'var(--primary)', color: 'var(--primary)', padding: '20px 60px', fontSize: '18px' }}>Meet Our Experts</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
