/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Earth Tones / Quiet Luxury
        primary: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#e8dfd0',
          300: '#d4c4a8',
          400: '#c4a882',
          500: '#a67c52',  // Terracota principal
          600: '#8b5e3c',
          700: '#704a2f',
          800: '#5c3d28',
          900: '#4a3222',
          950: '#2d1e14',
        },
        sand: {
          50: '#fdfcfa',
          100: '#f9f6f1',
          200: '#f3ede3',
          300: '#e8dcc8',
          400: '#d9c7a8',
          500: '#c9b088',
        },
        walnut: {
          500: '#5d4037',
          600: '#4e342e',
          700: '#3e2723',
          800: '#2d1f1a',
          900: '#1a1210',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
