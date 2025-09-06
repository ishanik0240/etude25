import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import DesktopFeatures from '@/components/DesktopFeatures'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StudySphere',
  description: 'Empowering every learner with personalized, inclusive education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DesktopFeatures>
          {children}
        </DesktopFeatures>
      </body>
    </html>
  )
}
