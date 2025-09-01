import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ryan Putka | Portfolio',
  description: 'Computer Science student and Software Engineer specializing in software engineering, product management, and innovative digital solutions',
  keywords: ['portfolio', 'software engineer', 'product management', 'computer science'],
  authors: [{ name: 'Ryan Putka' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark-500 text-white`}>
        <div className="relative min-h-screen">
          {/* Animated background elements */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}