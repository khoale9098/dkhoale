module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/container/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: ['outline-none'],
  theme: {
    fontFamily: {
      sans: ['Spartan', 'sans-serif'],
      mono: ['Source Code Pro', 'monospace'],
    },
    extend: {
      maxWidth: {
        'screen-xl': '1180px',
      },
    },
  },

  plugins: [],
}
