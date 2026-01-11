# 🎯 Dental AI - Quick Commands Reference

## Essential Commands

### 🚀 Start Development
```bash
cd /workspaces/dental-AI
npm run dev
```
Opens dev server at http://localhost:3000

### 🏗️ Build for Production
```bash
npm run build
npm start
```

### 🧹 Clean & Rebuild
```bash
rm -rf .next node_modules
npm install
npm run build
```

### 🔍 Lint Code
```bash
npm run lint
```

---

## Setup Commands

### Initial Setup
```bash
# Make setup script executable
chmod +x setup.sh

# Run setup
./setup.sh
```

### Configure API Key
```bash
# Edit the environment file
echo "NEXT_PUBLIC_GEMINI_API_KEY=your_key_here" > .env.local
```

### Install Dependencies
```bash
npm install
npm install @google/generative-ai
```

---

## Docker Commands (Optional)

### Build Image
```bash
docker build -t dental-ai .
```

### Run Container
```bash
docker run -p 3000:3000 dental-ai
```

---

## Git Commands

### Initialize Repository
```bash
git init
git add .
git commit -m "Initial commit: Dental AI project"
```

### Check Status
```bash
git status
git log
```

### Create Feature Branch
```bash
git checkout -b feature/your-feature-name
```

---

## Development Workflow

### Check TypeScript Types
```bash
npm run build  # Validates all types
```

### Debug Issues
```bash
# Check for build errors
npm run build

# Check code quality
npm run lint

# View detailed logs
npm run dev -- --debug
```

### Test Chat Functionality
1. Go to http://localhost:3000
2. Click "Start Consultation" or navigate to /chat
3. Type test message
4. Check browser console for any errors (F12)

---

## Project Files Explained

| File | Purpose |
|------|---------|
| `app/page.tsx` | Home/landing page |
| `app/chat/page.tsx` | Chat interface with AI |
| `app/layout.tsx` | Root layout wrapper |
| `app/globals.css` | Global styles |
| `.env.local` | API key config (local) |
| `.env.example` | Environment template |
| `next.config.ts` | Next.js settings |
| `tsconfig.json` | TypeScript settings |
| `package.json` | Dependencies & scripts |

---

## Useful Extensions (VS Code)

```bash
# Extensions for better development
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Thunder Client (API testing)
```

---

## API Key Getting Started

### 1. Get Your Key
Visit: https://aistudio.google.com/app/apikey

### 2. Add to Project
```bash
echo "NEXT_PUBLIC_GEMINI_API_KEY=your_key_here" > .env.local
```

### 3. Restart Server
```bash
# Stop with Ctrl+C, then:
npm run dev
```

### 4. Test
Navigate to http://localhost:3000/chat and test the chat functionality.

---

## Common Issues & Fixes

### Issue: Port 3000 already in use
```bash
# Kill process on port 3000
lsof -i :3000
kill -9 <PID>

# Or use different port
npm run dev -- -p 3001
```

### Issue: Out of memory
```bash
# Increase Node memory
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

### Issue: Clear cache
```bash
rm -rf .next
npm run dev
```

### Issue: Module not found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## Performance Tips

### Optimize Build
```bash
npm run build -- --debug  # See detailed build info
```

### Check Bundle Size
```bash
npm install -g webpack-bundle-analyzer
# Add to build process to analyze
```

### View Performance Metrics
```bash
# In browser DevTools
Performance tab > Record > Reload page
```

---

## Deployment Checklist

- [ ] API key configured
- [ ] Build passes: `npm run build`
- [ ] No console errors: `npm run dev`
- [ ] Responsive design tested
- [ ] Chat functionality working
- [ ] Environment variables set
- [ ] .env.local in .gitignore
- [ ] Lint passes: `npm run lint`

---

## Resource Links

- 📖 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [Tailwind CSS](https://tailwindcss.com)
- 🤖 [Google AI Docs](https://ai.google.dev)
- 📘 [TypeScript Docs](https://www.typescriptlang.org)
- ⚛️ [React Docs](https://react.dev)

---

## Quick Navigation

| What | Command |
|------|---------|
| Start dev | `npm run dev` |
| Build | `npm run build` |
| Lint | `npm run lint` |
| Edit API key | Edit `.env.local` |
| View home | http://localhost:3000 |
| View chat | http://localhost:3000/chat |

---

**Happy coding! 🚀**
