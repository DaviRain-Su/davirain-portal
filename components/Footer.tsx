'use client'

import { Github, Mail, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20 flex justify-between items-end p-8 md:p-12 text-xs tracking-widest uppercase text-[var(--text-muted)]">
      <div className="flex flex-col gap-1">
        <span>AI-Cast — Decentralized Podcast</span>
        <span>Built with Next.js & Three.js</span>
      </div>
      
      <div className="flex items-center gap-6">
        <Link 
          href="https://github.com/DaviRain-Su" 
          target="_blank"
          className="flex items-center gap-2 hover:text-[var(--text-main)] transition-colors"
        >
          <Github size={14} />
          <span className="hidden md:inline">GitHub</span>
        </Link>
        
        <Link 
          href="mailto:davirain.yin@gmail.com"
          className="flex items-center gap-2 hover:text-[var(--text-main)] transition-colors"
        >
          <Mail size={14} />
          <span className="hidden md:inline">Contact</span>
        </Link>
        
        <Link 
          href="/blog"
          className="flex items-center gap-2 hover:text-[var(--text-main)] transition-colors"
        >
          <BookOpen size={14} />
          <span className="hidden md:inline">Blog</span>
        </Link>
      </div>
    </footer>
  )
}
