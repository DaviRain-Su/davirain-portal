'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft, ExternalLink, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <main className="relative min-h-screen" style={{ background: 'var(--bg)' }}>
      <Header />
      
      <div className="pt-32 pb-24 px-8 md:px-20 lg:px-32">
        <div className="max-w-2xl mx-auto text-center">
          {/* Back link */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] mb-12 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          
          <div className="mb-8">
            <BookOpen 
              size={48} 
              className="mx-auto mb-6"
              style={{ color: 'var(--accent-blue)' }}
            />
            <h1 className="font-serif text-5xl md:text-6xl font-semibold text-[var(--text-main)] mb-6">
              Blog
            </h1>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              Technical articles on Rust, Blockchain, AI Agents, and System Design.
            </p>
          </div>
          
          <div className="bg-white/30 border border-[var(--text-muted)]/10 p-8 mb-8">
            <p className="text-[var(--text-muted)] mb-6">
              My blog is hosted on GitHub Pages using Jekyll. 
              It contains 17+ articles covering various technical topics.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {['Rust', 'Blockchain', 'AI', 'System Design'].map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-xs bg-[var(--bg)] text-[var(--text-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <a 
            href="https://davirain-su.github.io/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--text-main)] text-white hover:bg-[var(--accent-blue)] transition-colors"
          >
            Visit Blog
            <ExternalLink size={18} />
          </a>
          
          <p className="mt-8 text-sm text-[var(--text-muted)]">
            Powered by Jekyll & GitHub Pages
          </p>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
