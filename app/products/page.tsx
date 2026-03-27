'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Github, ExternalLink, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const products = [
  {
    id: 'ai-cast',
    name: 'AI-Cast',
    description: 'The first decentralized AI Podcast Platform on Sui & Walrus. Transform articles into on-chain podcasts using AI agents. Article URL in, podcast out - fully automated.',
    longDescription: `AI-Cast is a decentralized AI podcast platform that transforms articles into on-chain podcasts. 
    
Built for AI agents, it provides a complete pipeline: article fetching, AI script generation, text-to-speech, Walrus storage, and Sui blockchain registration.

The platform includes:
• CLI tool for agents to generate podcasts
• Web interface for discovery and playback
• Smart contracts for on-chain registration
• Subscription and tipping functionality`,
    tags: ['AI', 'Podcast', 'Sui', 'Walrus', 'TTS', 'Web3', 'TypeScript', 'Move'],
    github: 'https://github.com/DaviRain-Su/ai-cast',
    demo: null,
    status: 'live',
    highlights: [
      'Decentralized storage on Walrus',
      'On-chain registration via Sui',
      'AI-powered script generation',
      'Agent-friendly CLI interface'
    ]
  }
]

export default function ProductsPage() {
  const product = products[0]

  return (
    <main className="relative min-h-screen" style={{ background: 'var(--bg)' }}>
      <Header />
      
      <div className="pt-32 pb-24 px-8 md:px-20 lg:px-32">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] mb-12 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          
          {/* Product Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <h1 className="font-serif text-5xl md:text-6xl font-semibold text-[var(--text-main)]">
                {product.name}
              </h1>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                {product.status === 'live' ? 'Live' : 'In Development'}
              </span>
            </div>
            
            <p className="text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl">
              {product.description}
            </p>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {product.tags.map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 text-sm bg-white/50 border border-[var(--text-muted)]/10 text-[var(--text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a 
              href={product.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--text-main)] text-white hover:bg-[var(--accent-blue)] transition-colors"
            >
              <Github size={18} />
              View on GitHub
            </a>
            
            {product.demo && (
              <a 
                href={product.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[var(--text-main)] text-[var(--text-main)] hover:bg-[var(--text-main)] hover:text-white transition-colors"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
          
          {/* Detailed Description */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="font-serif text-2xl font-semibold text-[var(--text-main)] mb-6">
              About the Project
            </h2>
            <div className="text-[var(--text-muted)] leading-relaxed whitespace-pre-line">
              {product.longDescription}
            </div>
          </div>
          
          {/* Highlights */}
          <div className="bg-white/30 border border-[var(--text-muted)]/10 p-8">
            <h3 className="font-serif text-xl font-semibold text-[var(--text-main)] mb-6">
              Key Features
            </h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {product.highlights.map((highlight, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-3 text-[var(--text-muted)]"
                >
                  <span 
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--accent-blue)' }}
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
