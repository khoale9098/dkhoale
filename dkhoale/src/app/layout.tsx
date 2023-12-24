import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AppProviders from './providers'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export const metadata: Metadata = {
  title: 'Khoa Le',
  description: 'Khoa Le',
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
