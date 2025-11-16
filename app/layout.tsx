import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'LevTech Solutions',
  description: 'LevTech Solutions provides expert consulting...', // (You can change this too)
  
  // --- REPLACE YOUR ICONS OBJECT WITH THIS ---
  icons: {
    icon: '/logo.png', // <-- This points to public/logo.png
    apple: '/logo.png', // <-- Use the same for Apple
  },
  // ---------------------------------------------
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
