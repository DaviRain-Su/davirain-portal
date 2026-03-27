import { ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 mb-8"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Blog
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Technical articles on Rust, Blockchain, AI Agents, and System Design.
          </p>
          
          <a 
            href="https://davirain-su.github.io/blog" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Visit Blog
            <ExternalLink size={18} />
          </a>
          
          <p className="mt-6 text-sm text-slate-400">
            Powered by Jekyll & GitHub Pages
          </p>
        </div>
      </div>
    </main>
  )
}