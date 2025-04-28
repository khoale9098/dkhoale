import { Dancing_Script, Inconsolata, Montserrat } from 'next/font/google'

const inconsolataFont = Inconsolata({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500'],
})

const montserratFont = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
  weight: ['600', '700'],
})

export { inconsolataFont, montserratFont, dancingScript }
