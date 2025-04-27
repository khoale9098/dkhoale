import '@/styles/main.css'
import '@/styles/butterfly.css'
import 'lenis/dist/lenis.css'
import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'
import { dancingScript, inconsolataFont } from '@/configs/font'
import { cn } from '@/utils/cn'
import AppProviders from './providers'

export const metadata: Metadata = {
  title: 'DKhoa Le',
  description: 'Khoa Le',
}

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="lenis lenis-smooth">
      <head />
      <body className={cn(inconsolataFont.variable, dancingScript.variable)}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
