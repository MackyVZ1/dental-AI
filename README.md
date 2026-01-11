# 🦷 Dental AI - Smart Dental Assistant

A modern, AI-powered dental consultation platform built with Next.js, TypeScript, TailwindCSS, and Google Gemini API.

## 🎯 Features

- **AI-Powered Consultation**: Get instant dental advice powered by Google Gemini AI
- **Modern UI Design**: Beautiful, responsive design with purple and white theme
- **Real-time Chat**: Interactive chat interface for seamless communication
- **Mobile Responsive**: Fully responsive design that works on all devices
- **Secure**: Client-side API key configuration with environment variables
- **Professional**: Built with industry best practices and modern web technologies

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 16+ with TypeScript
- **Styling**: TailwindCSS v4
- **AI Model**: Google Gemini API
- **Package Manager**: npm
- **Runtime**: Node.js

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.17 or later
- npm 9.0 or later
- A Google Gemini API key (get it from [Google AI Studio](https://aistudio.google.com/app/apikey))

## 🚀 Quick Start

### 1. Clone the Repository
```bash
cd /workspaces/dental-AI
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory with:
```env
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```

**To get your API key:**
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click "Create API Key"
3. Copy the key and paste it in `.env.local`

### 4. Run Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 5. Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
dental-AI/
├── app/
│   ├── layout.tsx           # Root layout with theme setup
│   ├── page.tsx             # Home page with hero section
│   ├── globals.css          # Global styles and TailwindCSS config
│   └── chat/
│       └── page.tsx         # Chat interface with Gemini integration
├── public/                  # Static assets
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
├── postcss.config.mjs       # PostCSS configuration
└── .env.local               # Environment variables (local only)
```

## 🎨 Design System

### Color Palette
- **Primary Purple**: `#7c3aed` to `#6d28d9`
- **Background**: White with purple gradients
- **Text**: Dark gray for readability
- **Accents**: Purple and white with shadows

### Key Components
- **Navigation Bar**: Sticky header with gradient background
- **Hero Section**: Large call-to-action with animated elements
- **Chat Interface**: Real-time message display with typing indicator
- **Feature Cards**: Interactive components with hover effects
- **Footer**: Comprehensive site navigation

## 💬 Using the Chat Interface

1. Navigate to `/chat` or click "Start Consultation" on the home page
2. Type your dental question in the input field
3. The AI assistant will analyze your question and provide professional insights
4. Chat history is maintained in the current session

### Example Questions
- "What should I do about tooth pain?"
- "How often should I brush my teeth?"
- "I have swelling in my gums, what could it be?"
- "What are signs of a cavity?"

## ⚙️ Configuration

### Gemini API Setup
The application uses the Gemini Pro model by default. To change the model:

Edit `app/chat/page.tsx`:
```typescript
const model = genAI.getGenerativeModel({ model: 'gemini-pro' }) // Change model here
```

Available models:
- `gemini-pro` (Recommended)
- `gemini-1.5-flash`
- `gemini-1.5-pro`

### Customizing the Theme
Edit colors in `app/globals.css` and update TailwindCSS utilities to change the theme colors.

## 🔒 Security Notes

- **API Key Storage**: Never commit `.env.local` to version control
- **Public API Key**: This app uses a public API key (NEXT_PUBLIC_), which is safe for client-side requests to Google Gemini
- **No Backend Required**: All AI requests go directly from client to Google API
- **Data Privacy**: Your queries are not stored on our servers

## 📱 Responsive Design Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are optimized for mobile-first design.

## 🐛 Troubleshooting

### "API key not found" error
- Ensure `.env.local` exists in the root directory
- Check that `NEXT_PUBLIC_GEMINI_API_KEY` is correctly set
- Restart the development server after updating `.env.local`

### Chat not responding
- Verify your API key is valid at [Google AI Studio](https://aistudio.google.com/app/apikey)
- Check browser console for detailed error messages
- Ensure you have internet connectivity

### Styling issues
- Clear `.next` folder and rebuild: `rm -rf .next && npm run dev`
- Ensure TailwindCSS is properly installed: `npm install`

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Google Generative AI SDK](https://github.com/google/generative-ai-js)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues and questions, please create an issue in the repository.

---

**Disclaimer**: This application provides AI-powered information for educational purposes only. For serious dental concerns, please consult a licensed dental professional.

Made with ❤️ for better oral health.
