/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-yellow': '#FFD500',
        'neo-blue': '#4361EE',
        'neo-red': '#F72585',
        'neo-cyan': '#4CC9F0',
        'neo-black': '#1A1A1A',
        'neo-white': '#FDFDFD',
        'neo-bg': '#f0f0f0',
      },
      boxShadow: {
        'neo': '6px 6px 0px 0px rgba(26,26,26,1)',
        'neo-sm': '4px 4px 0px 0px rgba(26,26,26,1)',
        'neo-hover': '8px 8px 0px 0px rgba(26,26,26,1)',
      },
      fontFamily: {
        'sans': ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
