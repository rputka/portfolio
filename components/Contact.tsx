'use client'

import { useState } from 'react'

import { useForm, ValidationError } from '@formspree/react'
import { 
  EnvelopeIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

const Contact = () => {
  const [state, handleSubmit] = useForm("mwpoegoq")

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: "Email",
      value: "rputka@nd.edu",
      link: "mailto:rputka@nd.edu"
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      value: "(440) 429-5485",
      link: "tel:+14404295485"
    },
    {
      icon: MapPinIcon,
      title: "Location",
      value: "Cleveland, OH",
      link: null
    }
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h2 className="text-5xl font-bold mb-4 tracking-tight">
              <span className="section-header">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let&apos;s discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Connect</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                I&apos;m always excited to work on new projects and collaborate with passionate individuals. 
                Whether you have a specific project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-r from-primary-500/20 to-cyan-500/20">
                    <info.icon className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white font-medium hover:text-primary-400 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/rputka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 glass-effect rounded-lg text-white/80 hover:text-primary-400 border border-white/20 hover:border-primary-400/50 transition-all duration-300"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ryanputka/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 glass-effect rounded-lg text-white/80 hover:text-primary-400 border border-white/20 hover:border-primary-400/50 transition-all duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect rounded-2xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300"
                  placeholder="Enter your full name"
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300"
                  placeholder="Enter your email address"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300"
                  placeholder="What's this about?"
                />
                <ValidationError 
                  prefix="Subject" 
                  field="subject"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-primary-500/25 transition-all duration-300 neon-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {state.submitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <PaperAirplaneIcon className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Status Messages */}
            {state.succeeded && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3">
                <CheckCircleIcon className="h-5 w-5 text-green-400" />
                <span className="text-green-300">Message sent successfully! I&apos;ll get back to you soon.</span>
              </div>
            )}

            {state.errors && (
              <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3">
                <ExclamationCircleIcon className="h-5 w-5 text-red-400" />
                <span className="text-red-300">Failed to send message. Please try again later.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact