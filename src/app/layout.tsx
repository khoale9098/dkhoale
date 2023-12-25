import '@/styles/main.css'
import '@/styles/butterfly.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import AppProviders from './providers'

const montserrat = Montserrat({ subsets: ['latin'] })

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
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
