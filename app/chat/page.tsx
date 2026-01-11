'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { GoogleGenerativeAI } from '@google/generative-ai'

interface Message {
  id: string
  type: 'user' | 'assistant'
  content: string
  timestamp: number
}

export default function ChatPage() {
  const [mounted, setMounted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! 👋 I\'m your Dental AI assistant. I\'m here to help you with dental questions, symptoms analysis, and general oral health guidance. How can I help you today?',
      timestamp: Date.now(),
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!input.trim() || loading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: Date.now(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY
      
      if (!apiKey) {
        throw new Error('Gemini API key not configured. Please add NEXT_PUBLIC_GEMINI_API_KEY to .env.local')
      }

      const genAI = new GoogleGenerativeAI(apiKey)
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })
      const systemPrompt = `You are a professional dental assistant AI. You provide helpful information about dental health, common dental issues, symptoms analysis, and general oral care recommendations. 
      
      Important guidelines:
      - Always remind users that you're an AI and not a substitute for professional dental consultation
      - If symptoms seem serious, recommend seeing a dentist immediately
      - Provide evidence-based dental health information
      - Be empathetic and supportive
      - Keep responses clear and easy to understand
      - For symptom descriptions, ask clarifying questions if needed`

      const chat = model.startChat({
        history: messages
          .filter(m => m.type !== 'assistant' || m.id !== '1')
          .map(m => ({
            role: m.type === 'user' ? 'user' : 'model',
            parts: [{ text: m.content }]
          }))
      })

      const result = await chat.sendMessage(input)
      const assistantMessage: Message = {
        id: Date.now().toString(),
        type: 'assistant',
        content: result.response.text(),
        timestamp: Date.now(),
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      let errorContent = ''
      const errorMsg = error instanceof Error ? error.message : String(error)
      
      if (errorMsg.includes('429') || errorMsg.includes('quota') || errorMsg.includes('Quota')) {
        errorContent = `⏱️ API quota exceeded. The free tier has reached its daily limit.\n\n💡 Solutions:\n1. Wait 24 hours for the quota to reset\n2. Upgrade to a paid Gemini API plan at https://ai.google.dev\n3. Check your usage at https://ai.dev/rate-limit`
      } else if (errorMsg.includes('401') || errorMsg.includes('authentication')) {
        errorContent = `🔑 API key error. Please check:\n1. Your .env.local file has the correct NEXT_PUBLIC_GEMINI_API_KEY\n2. The key is from https://aistudio.google.com/app/apikey\n3. Restart the dev server after updating`
      } else {
        errorContent = `❌ Error: ${errorMsg}`
      }
      
      const errorMessage: Message = {
        id: Date.now().toString(),
        type: 'assistant',
        content: errorContent,
        timestamp: Date.now(),
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b border-purple-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🦷</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Dental AI</h1>
          </Link>
          <button className="px-4 py-2 text-gray-600 hover:text-purple-600 transition">
            ☰
          </button>
        </div>
      </header>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto h-screen flex flex-col">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs sm:max-w-md lg:max-w-xl px-4 py-3 rounded-2xl animate-fade-in ${
                  message.type === 'user'
                    ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-br-none'
                    : 'bg-white text-gray-900 border border-purple-200 rounded-bl-none shadow-md'
                }`}
              >
                <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
                  {message.content}
                </p>
                <span className={`text-xs mt-2 block ${
                  message.type === 'user' ? 'text-purple-100' : 'text-gray-500'
                }`}>
                  {mounted ? new Date(message.timestamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  }) : '—'}
                </span>
              </div>
            </div>
          ))}
          
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white text-gray-900 border border-purple-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-md">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-purple-200 bg-white/50 backdrop-blur-sm p-4 sm:p-6">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSendMessage} className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
                placeholder="Ask me about dental health..."
                className="flex-1 px-4 py-3 bg-white border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 disabled:opacity-50 transition"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-purple-400/50 disabled:opacity-50 disabled:cursor-not-allowed transition transform hover:-translate-y-0.5"
              >
                Send
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3 text-center">
              💡 This is an AI assistant. For serious dental concerns, please consult a dentist.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </main>
  )
}
