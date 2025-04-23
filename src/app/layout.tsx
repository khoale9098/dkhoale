import '@/styles/main.css'
import '@/styles/butterfly.css'
import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'
import { PropsWithChildren } from 'react'

const font = Inconsolata({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'DKhoa Le',
  description: 'Khoa Le',
}

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body className={font.className}>{children}</body>
    </html>
  )
}
