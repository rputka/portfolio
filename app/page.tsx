import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Work from '@/components/Work'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Work />
      <Contact />
      
      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white/60 mb-4">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
            <p className="text-white/40 text-sm">
              © 2025 Ryan Putka. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}