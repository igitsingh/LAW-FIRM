import React from 'react'
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer 
      style={{ 
        background: '#010812', 
        padding: '100px 0 50px', 
        borderTop: '1px solid var(--border-glass)' 
      }}
    >
      <div className="container">
        <div className="grid grid-cols-4" style={{ marginBottom: '80px' }}>
          {/* Logo & Info */}
          <div style={{ paddingRight: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <div style={{ background: 'var(--secondary)', width: '24px', height: '24px', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontWeight: 800, fontSize: '12px' }}>ARJ</div>
              <h2 style={{ fontSize: '18px', letterSpacing: '1px', fontWeight: 800, color: 'var(--text-primary)' }}>ARJ LAW FIRM</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '24px' }}>
              A premier full-service law firm dedicated to providing comprehensive legal solutions with excellence, integrity, and strategic thinking.
            </p>
            <div style={{ display: 'flex', gap: '16px', color: 'var(--secondary)' }}>
              <Linkedin size={20} />
              <Instagram size={20} />
              <Twitter size={20} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '24px', fontSize: '16px' }}>Quick Links</h4>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '2.5' }}>
              <li><a href="/">Home</a></li>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#practice">Legal Expertise</a></li>
              <li><a href="#experts">Attorney Profiles</a></li>
              <li><a href="#careers">Career Opportunities</a></li>
            </ul>
          </div>

          {/* Office Address */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '24px', fontSize: '16px' }}>Offices</h4>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <MapPin size={24} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Indore (H.O):</strong><br />
                Advocate Chamber 59,<br />
                High Court Campus, Indore
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <MapPin size={24} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Delhi Office:</strong><br />
                Advocate Mayank Kshirsagar,<br />
                AOR Supreme Court
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '24px', fontSize: '16px' }}>Contact</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: 'var(--text-secondary)', fontSize: '14px' }}>
              <Mail size={16} /> arjlawfirm@gmail.com
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>
              <Phone size={16} /> +91 99770 06709
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
              <Phone size={16} /> +91 97540 33928
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '30px', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>
            &copy; {new Date().getFullYear()} ARJ Law Firm. All rights reserved. | Strategic Legal Solutions.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
