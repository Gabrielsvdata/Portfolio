import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'framer': ['framer-motion'],
        },
      },
    },
    target: 'esnext',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
})
