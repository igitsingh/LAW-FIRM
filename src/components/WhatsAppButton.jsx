import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  return (
    <motion.a 
      href="https://wa.me/919977006709?text=Hello%20ARJ%20Law%20Firm,%20I%20would%20like%20to%20schedule%20a%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      style={{ 
        position: 'fixed', 
        bottom: '30px', 
        right: '30px', 
        width: '60px', 
        height: '60px', 
        background: '#25D366', 
        borderRadius: '50%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        color: 'white', 
        boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
        zIndex: 9999, // Ensure it's above everything
        cursor: 'pointer'
      }}
    >
      <MessageCircle size={32} fill="white" />
    </motion.a>
  )
}

export default WhatsAppButton
