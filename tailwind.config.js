/** @type {import('tailwindcss').Types.Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        matrix: {
          green: '#00ff41',
          dark: '#0a0a0a', 
          gray: '#1a1a1a'
        }
      }
    },
  },
  plugins: [],
}
