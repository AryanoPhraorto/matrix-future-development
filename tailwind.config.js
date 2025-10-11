/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        matrix: {
          green: '#00ff41',
          dark: '#0a0a0a',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
