import '@/styles/main.css'
import '@/styles/butterfly.css'
import type { Metadata } from 'next'
import { Inconsolata, Montserrat } from 'next/font/google'

const font = Inconsolata({
  subsets: ['latin'],
})

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export const metadata: Metadata = {
  title: 'DKhoa Le',
  description: 'Khoa Le',
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className={font.className}>{children}</body>
    </html>
  )
}
