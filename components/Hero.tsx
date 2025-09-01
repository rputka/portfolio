'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDownIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false)
      } else {
        setShowScrollIndicator(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pb-8">


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl lg:text-7xl font-bold leading-tight font-inter"
          >
            <span className="block text-white mb-1 lg:mb-4">Hello, I&apos;m</span>
            <span className="block name-shine name-glow pb-2">
              Ryan Putka
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            I build exceptional digital experiences that combine cutting-edge technology with intuitive design.
            Passionate about creating solutions that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(14, 165, 233, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToAbout()}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-primary-500/25 transition-all duration-300 neon-glow"
            >
              Explore My Work
            </motion.button>
            
                          <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/RyanPutka-Resume.pdf"
                download="RyanPutka-Resume.pdf"
                className="px-8 py-4 glass-effect rounded-lg font-semibold text-white border border-white/20 hover:border-primary-400/50 transition-all duration-300"
              >
                Download Resume
              </motion.a>
          </motion.div>

        </motion.div>
      </div>

              {/* Scroll indicator */}
        {showScrollIndicator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={scrollToAbout}
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              <ChevronDownIcon className="h-8 w-8" />
            </motion.button>
          </motion.div>
        )}


    </section>
  )
}

export default Hero