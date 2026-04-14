import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Award, Shield, Gavel, BookOpen } from 'lucide-react'
import '../styles/sections.css'

const Attorneys = () => {
  const attorneys = [
    {
      name: 'Paresh S. Joshi',
      title: 'Founder & Senior Advocate',
      qualifications: 'B.Com, LLB (Hons), LLM',
      specialization: 'Corporate Law, Real Estate, and Litigation',
      bio: 'Advocate Paresh S. Joshi is a senior legal professional with over 20 years of experience in litigation and legal consultancy. His in-depth knowledge spans diverse sectors including Infrastructure, Real Estate, Petroleum, Insurance, and Finance. As a seasoned advocate in Indore and a trusted legal advisor to several top-tier companies, Paresh specializes in land acquisition, arbitration, consumer disputes, and civil and constitutional matters.',
      image: 'https://images.unsplash.com/photo-1556157303-97931c8413b8?auto=format&fit=crop&q=80&w=800',
      expertise: ['Land Acquisition', 'Civil Litigation', 'Corporate Advisory', 'Arbitration'],
      achievements: 'Strategic legal services helping companies reduce litigation risks and ensure compliance across complex legal landscapes.'
    },
    {
      name: 'Mayank Kshirsagar',
      title: 'Senior Advocate (AOR Supreme Court)',
      qualifications: 'B.Com, LLB (Hons)',
      specialization: 'Banking Law, Arbitration, and Constitutional Matters',
      bio: 'An expert in banking laws and constitutional matters, Mayank represents the firm’s interests at the highest levels of the Indian judiciary. His precision in arbitration and deep understanding of regulatory protocols make him a key strategist for complex financial disputes and public sector undertakings.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
      expertise: ['Banking Regulations', 'Supreme Court Practice', 'Arbitration', 'Constitutional Law'],
      achievements: 'Member of the Supreme Court Bar Association and expert in AOR protocols for high-stakes constitutional litigation.'
    },
    {
      name: 'Rashmi Joshi',
      title: 'Advocate',
      qualifications: 'B.A. LLB (Hons)',
      specialization: 'Civil Litigation, Family Law, and Commercial Disputes',
      bio: 'Rashmi Joshi is an advocate known for her meticulous approach to civil and family law matters. She provides strategic counsel on household legal issues, property disputes, and commercial litigation, ensuring that clients receive holistic legal support tailored to their specific needs.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      expertise: ['Family Law', 'Property Disputes', 'Civil Procedure', 'Legal Research'],
      achievements: 'Dedicated to achieving result-oriented solutions in sensitive family and civil litigation cases.'
    }
  ]

  return (
    <div className="attorneys-page">
      {/* Header */}
      <section className="section" style={{ paddingTop: '180px', background: 'var(--accent)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'left' }}
          >
            <h4 style={{ color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '20px', fontSize: '14px' }}>Leadership</h4>
            <h1 style={{ fontSize: '64px', marginBottom: '30px' }}>Meet Our Legal Experts</h1>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '700px', lineHeight: '1.6' }}>
              Our reputation is owed to the exceptionally talented and dedicated professionals whose ideas drive us forward. We believe in partner-led service and a high degree of involvement in every case.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profiles */}
      {attorneys.map((attorney, index) => (
        <section key={index} className="section" style={{ borderBottom: '1px solid var(--border-glass)' }}>
          <div className="container">
            <div className="grid grid-cols-2" style={{ gap: '100px', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ order: index % 2 === 0 ? 0 : 1 }}
              >
                <div 
                  className="glass-card" 
                  style={{ 
                    padding: '0', 
                    height: '600px', 
                    overflow: 'hidden', 
                    position: 'relative',
                    borderColor: 'var(--secondary)'
                  }}
                >
                  <img src={attorney.image} alt={attorney.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: '40px', left: '40px' }}>
                    <div style={{ background: 'var(--secondary)', color: 'var(--primary)', padding: '12px 24px', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                      Senior Associate
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'left' }}
              >
                <h4 style={{ color: 'var(--secondary)', marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>{attorney.qualifications}</h4>
                <h2 style={{ fontSize: '48px', marginBottom: '10px' }}>{attorney.name}</h2>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '30px', fontWeight: 500, fontStyle: 'italic' }}>{attorney.title}</h3>
                
                <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: '1.8', fontSize: '17px' }}>
                  {attorney.bio}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '50px' }}>
                  <div>
                    <h4 style={{ color: 'var(--secondary)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>Specialization</h4>
                    <p style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{attorney.specialization}</p>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--secondary)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>Key Focus</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {attorney.expertise.map((exp, i) => (
                        <span key={i} style={{ fontSize: '12px', padding: '6px 12px', border: '1px solid var(--border-glass)', borderRadius: '20px', color: 'var(--text-secondary)' }}>{exp}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '24px' }}>
                  <button className="btn-primary" style={{ padding: '16px 32px' }}>View Full Profile</button>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-secondary)' }}><Linkedin size={18} /></div>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-secondary)' }}><Mail size={18} /></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Philosophy Section */}
      <section className="section" style={{ background: 'var(--accent)' }}>
        <div className="container" style={{ textAlign: 'left' }}>
          <div className="grid grid-cols-3" style={{ gap: '40px' }}>
            <div className="glass-card" style={{ padding: '40px' }}>
              <Gavel size={32} style={{ color: 'var(--secondary)', marginBottom: '24px' }} />
              <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Strategic Expertise</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>We provide commercial solutions based on intensive and detailed legal research, moving beyond conventional litigation.</p>
            </div>
            <div className="glass-card" style={{ padding: '40px' }}>
              <Shield size={32} style={{ color: 'var(--secondary)', marginBottom: '24px' }} />
              <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Ethical Integrity</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>Our actions justify our words, with a vision to be the finest law firm in the country through ethical practice.</p>
            </div>
            <div className="glass-card" style={{ padding: '40px' }}>
              <BookOpen size={32} style={{ color: 'var(--secondary)', marginBottom: '24px' }} />
              <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Constant Learning</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>Supporting and mentoring exceptional legal graduates and nurturing young talent defines our workplace culture.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Attorneys
