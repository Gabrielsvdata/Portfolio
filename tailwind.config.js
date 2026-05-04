export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-tech': '#ff6b35',
        'orange-light': '#ff8c56',
        'skin-tone': '#8b6f47',
        'skin-dark': '#6b5435',
        'primary-blue': '#0066ff',
        'primary-purple': '#7c3aed',
        'cyan-light': '#06b6d4',
        'bg-dark': '#0a0603',
        'gray-dark': '#1a1a1a',
        'gray-text': '#e0e0e0',
        'gray-secondary': '#a0a0a0',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0066ff 0%, #7c3aed 100%)',
        'glow-orange': 'radial-gradient(circle, rgba(255,107,53,0.4) 0%, transparent 70%)',
        'hero-gradient-warm': 'linear-gradient(135deg, #ff6b35 0%, #7c3aed 100%)',
      },
      boxShadow: {
        'glow-orange': '0 0 30px rgba(255, 107, 53, 0.5)',
        'glow-lg': '0 0 50px rgba(255, 107, 53, 0.3)',
        'glow-blue': '0 0 40px rgba(0, 102, 255, 0.4)',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 30px rgba(255, 107, 53, 0.5)' },
          '50%': { boxShadow: '0 0 50px rgba(255, 107, 53, 0.8)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
