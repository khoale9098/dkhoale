import NextLocalFont from 'next/font/local'

const tuskerGrotesk = NextLocalFont({
  src: [
    {
      path: '../fonts/TuskerGrotesk/TuskerGrotesk.woff2',
      weight: '600',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
})
export { tuskerGrotesk }
