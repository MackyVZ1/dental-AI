'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-purple-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🦷</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Dental AI</h1>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="#features" className="text-gray-600 hover:text-purple-600 transition">Features</Link>
            <Link href="#about" className="text-gray-600 hover:text-purple-600 transition">About</Link>
            <Link href="#contact" className="text-gray-600 hover:text-purple-600 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Smart <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Dental Assistant</span>
              </h2>
              <p className="text-xl text-gray-600">
                Get instant dental consultation and analysis powered by advanced AI technology. Professional insights at your fingertips.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/chat">
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-400/50 transition transform hover:-translate-y-1">
                  Start Consultation
                </button>
              </Link>
              <button className="w-full sm:w-auto px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="w-full aspect-square bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl flex items-center justify-center shadow-2xl">
              <div className="text-8xl">🦷</div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-purple-300">
              <div className="text-5xl">✨</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white/50 backdrop-blur py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Powerful Features
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤖',
                title: 'AI-Powered Analysis',
                description: 'Advanced machine learning for accurate dental insights'
              },
              {
                icon: '⚡',
                title: 'Instant Results',
                description: 'Get immediate consultation feedback and recommendations'
              },
              {
                icon: '🔒',
                title: 'Secure & Private',
                description: 'Your data is encrypted and kept confidential'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-white to-purple-50 rounded-2xl border border-purple-200 hover:shadow-lg hover:shadow-purple-200/50 transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h3 className="text-4xl font-bold text-gray-900 mb-6">
          Ready to Start?
        </h3>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience the power of AI-assisted dental consultation. Begin your journey to better oral health today.
        </p>
        <Link href="/chat">
          <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-400/50 transition transform hover:-translate-y-1 text-lg">
            Get Started Now
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-200 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Dental AI</h4>
              <p className="text-gray-600 text-sm">Your smart dental assistant powered by AI</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition">Features</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition">About</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-purple-600 transition">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-200 pt-8 text-center text-gray-600 text-sm">
            <p>&copy; 2026 Dental AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
