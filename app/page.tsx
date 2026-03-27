'use client'

import { useEffect, useRef } from 'react'
import ThreeBackground from '@/components/ThreeBackground'
import GeometricAccent from '@/components/GeometricAccent'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * -40
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * -40
      
      if (contentRef.current) {
        contentRef.current.style.transform = 
          `translate3d(${mouseRef.current.x}px, ${mouseRef.current.y}px, 0)`
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden" style={{ background: 'var(--bg)' }}>
      {/* Background layers */}
      <ThreeBackground />
      <GeometricAccent />
      
      {/* UI Layer */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        
        {/* Main Content */}
        <div className="flex-1 flex items-center px-8 md:px-20 lg:px-32">
          <div 
            ref={contentRef}
            className="max-w-2xl will-change-transform"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 text-[var(--accent-blue)] text-sm font-medium mb-8">
              <Sparkles size={16} />
              First Web3 Product
            </div>
            
            {/* Main Title */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.9] tracking-tight text-[#0a0a0a] mb-8"
                style={{ 
                  textShadow: '0 2px 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.4)',
                  maxWidth: '60%'
                }}>
              Davi
              <br />
              Rain
            </h1>
            
            {/* Subtitle with accent line */}
            <div className="relative pl-5 mb-12">
              <div 
                className="absolute left-0 top-1.5 bottom-1.5 w-px"
                style={{ backgroundColor: 'var(--accent-blue)' }}
              />
              <p className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed max-w-md">
                AI Agent Developer building decentralized applications. 
                Creator of <span className="text-[var(--text-main)] font-medium">AI-Cast</span>, 
                the first on-chain AI podcast platform.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/products"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[var(--text-main)] text-white rounded-none text-sm tracking-wide hover:bg-[var(--accent-blue)] transition-colors"
              >
                View Products
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="https://github.com/DaviRain-Su"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--text-main)] text-[var(--text-main)] rounded-none text-sm tracking-wide hover:bg-[var(--text-main)] hover:text-white transition-colors"
              >
                GitHub
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Featured Product Preview */}
        <div className="px-8 md:px-20 lg:px-32 pb-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-widest uppercase text-[var(--text-muted)]">
                Featured Product
              </span>
              <div className="flex-1 h-px bg-[var(--text-muted)]/20" />
            </div>
            
            <Link href="/products" className="group block">
              <div className="bg-white/50 backdrop-blur-sm border border-[var(--text-muted)]/10 p-8 hover:border-[var(--accent-blue)]/30 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[var(--text-main)]">
                    AI-Cast
                  </h2>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    Live
                  </span>
                </div>
                
                <p className="text-[var(--text-muted)] mb-6 max-w-xl">
                  Decentralized AI Podcast Platform on Sui & Walrus. 
                  Transform articles into on-chain podcasts using AI agents.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {['AI', 'Podcast', 'Sui', 'Walrus', 'Web3'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs bg-[var(--bg)] text-[var(--text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        </div>
        
        <Footer />
      </div>
    </main>
  )
}
