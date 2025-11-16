import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'LevTech Solutions',
  description: 'LevTech Solutions provides expert consulting...',
  
  icons: {
    icon: [
      { url: '/logo1.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo1.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo1.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/logo1git add.png',
  }
};


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
