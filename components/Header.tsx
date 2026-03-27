'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 flex justify-between items-start p-8 md:p-12">
      <Link href="/" className="font-serif text-2xl italic font-semibold tracking-wide">
        DaviRain.
      </Link>
      
      <nav className="flex gap-8 md:gap-16 text-xs tracking-widest uppercase font-medium">
        <Link href="/" className="nav-link cursor-pointer">
          Home
        </Link>
        <Link href="/products" className="nav-link cursor-pointer">
          Products
        </Link>
        <Link href="/blog" className="nav-link hover-glitch cursor-pointer">
          Blog
        </Link>
      </nav>
    </header>
  )
}
