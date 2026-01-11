import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dental AI - Smart Dental Assistant',
  description: 'AI-powered dental consultation and analysis platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-linear-to-br from-white via-purple-50 to-purple-100">
          {children}
        </div>
      </body>
    </html>
  )
}
