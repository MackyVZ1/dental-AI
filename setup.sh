#!/bin/bash

# Dental AI - Quick Start Script
# This script helps you set up and run the Dental AI project

echo "🦷 Welcome to Dental AI Setup!"
echo "================================"
echo ""

# Check Node.js installation
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18.17 or later."
    exit 1
fi

echo "✅ Node.js $(node --version) found"

# Check npm installation
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ npm $(npm --version) found"
echo ""

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "⚠️  .env.local file not found"
    echo ""
    echo "📝 To get started:"
    echo "1. Visit https://aistudio.google.com/app/apikey"
    echo "2. Create a new API key"
    echo "3. Create .env.local file with:"
    echo "   NEXT_PUBLIC_GEMINI_API_KEY=your_key_here"
    echo ""
else
    echo "✅ .env.local file found"
fi

echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "🚀 To start the development server, run:"
echo "   npm run dev"
echo ""
echo "Then open http://localhost:3000 in your browser"
echo ""
