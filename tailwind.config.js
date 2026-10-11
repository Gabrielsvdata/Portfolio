/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f100e',
        'ink-2': '#161714',
        'ink-3': '#1f201c',
        paper: '#f2f1eb',
        muted: '#8f9089',
        line: 'rgba(242, 241, 235, 0.14)',
        accent: '#c4d65b',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        page: '1360px',
      },
    },
  },
  plugins: [],
}
