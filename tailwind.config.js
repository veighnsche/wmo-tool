/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Karla', 'sans-serif'],
        'serif': ['Source Serif Pro', 'serif'],
      },
      animation: {
        'ping': 'ping 6s cubic-bezier(0, 0, 0.1, 1) infinite',
      }
    },
  },
  plugins: [],
}
