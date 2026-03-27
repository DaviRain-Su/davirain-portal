import { Github, Mail, BookOpen, ArrowRight, ExternalLink, Sparkles } from 'lucide-react'
import { products, socialLinks, personalInfo } from '@/data/products'

export default function Home() {
  const product = products[0] // AI-Cast

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <Sparkles size={16} />
            First Web3 Product Launched
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">{personalInfo.name}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4">
            {personalInfo.title}
          </p>
          
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            {personalInfo.description}
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <a 
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href={socialLinks.blog}
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <BookOpen size={20} />
              <span>Blog</span>
            </a>
            <a 
              href={socialLinks.email}
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <Mail size={20} />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Product - AI-Cast */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Product
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              My first Web3 product combining AI and blockchain
            </p>
          </div>
          
          {/* AI-Cast Card */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold text-white">{product.name}</h3>
                <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                  {product.status === 'live' ? '🟢 Live' : 'In Development'}
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {product.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1.5 text-sm rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href={product.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <Github size={18} />
                  View on GitHub
                </a>
                {product.demo && (
                  <a 
                    href={product.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dev Tools Note */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Open Source Tools
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              I also build various developer tools and libraries. 
              Check out my GitHub for SDKs, CLI tools, and experimental projects.
            </p>
            <a 
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              Browse all projects on GitHub
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Interested in AI agents, Web3, or decentralized systems? 
            Let&apos;s talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={socialLinks.email}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get in Touch
              <ArrowRight size={20} />
            </a>
            <a 
              href={socialLinks.blog}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              Read Blog
              <BookOpen size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-slate-400 dark:text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} DaviRain. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  )
}