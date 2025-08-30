import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['three', 'three-stdlib', '@react-three/fiber', '@react-three/drei'],
          animations: ['framer-motion', 'gsap'],
        },
      },
    },
  },
})
