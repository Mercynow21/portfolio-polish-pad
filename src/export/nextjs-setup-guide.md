# Next.js Resume Setup Guide

## 🚀 Quick Setup Commands

```bash
# 1. Create Next.js project
npx create-next-app@latest mehiret-resume --typescript --tailwind --eslint --app

cd mehiret-resume

# 2. Install additional dependencies
npm install lucide-react class-variance-authority clsx tailwind-merge

# 3. Run development server
npm run dev
```

## 📁 File Structure

```
mehiret-resume/
├── app/
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Homepage (redirect to /resume)
│   └── resume/
│       └── page.tsx        # SSR Resume page
├── components/
│   ├── ui/                 # Copy from Lovable project
│   └── resume/
│       ├── header.tsx
│       ├── experience.tsx
│       └── skills.tsx
├── data/
│   └── resume.js           # Copy from nextjs-resume-data.js
└── styles/
    └── globals.css         # Copy from Lovable index.css
```

## 🔧 Key Files to Create

### 1. app/layout.tsx
```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { resumeData } from '@/data/resume'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${resumeData.contact.name} - ${resumeData.contact.role}`,
  description: resumeData.summary,
  openGraph: {
    title: `${resumeData.contact.name} - ${resumeData.contact.role}`,
    description: resumeData.summary,
    type: 'profile',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${resumeData.contact.name} - ${resumeData.contact.role}`,
    description: resumeData.summary,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

### 2. app/resume/page.tsx
```tsx
import { resumeData } from '@/data/resume'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${resumeData.contact.name} - Resume`,
  description: `Professional resume of ${resumeData.contact.name}, ${resumeData.contact.role}`,
}

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 print:px-0 print:py-0">
      {/* Copy your resume JSX from Lovable Resume.tsx */}
      <header>
        <h1 className="text-4xl font-bold">{resumeData.contact.name}</h1>
        <h2 className="text-xl text-blue-600">{resumeData.contact.role}</h2>
        {/* ... rest of your resume content */}
      </header>
    </div>
  )
}
```

### 3. app/page.tsx (Homepage Redirect)
```tsx
import { redirect } from 'next/navigation'

export default function HomePage() {
  redirect('/resume')
}
```

## 🎨 Styling
1. Copy your `src/index.css` from Lovable to `styles/globals.css`
2. Copy your Tailwind config from Lovable
3. Copy all UI components from `src/components/ui/`

## 🚀 Deploy to Vercel
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main

# Deploy to Vercel
# Connect your GitHub repo in Vercel dashboard
# Auto-deploys on every push
```

## ✅ Benefits You'll Get
- **SSR/SSG**: Content in HTML source for SEO
- **Perfect Lighthouse Scores**: Fast loading
- **Better SEO**: Search engines can crawl content
- **Social Sharing**: OG tags work perfectly
- **Print Optimization**: Same great print styles

## 🔗 Useful Links
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)