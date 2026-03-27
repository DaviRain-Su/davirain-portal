import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DaviRain - AI Agent Developer',
  description: 'Building decentralized AI applications. Creator of AI-Cast, the first on-chain AI podcast platform.',
  keywords: ['AI', 'Web3', 'Blockchain', 'Sui', 'Agent', 'DaviRain'],
  authors: [{ name: 'DaviRain' }],
  openGraph: {
    title: 'DaviRain - AI Agent Developer',
    description: 'Building decentralized AI applications',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
