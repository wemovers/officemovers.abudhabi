import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Ensure this is correct for your deployment
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist', // or whatever your build directory is
    emptyOutDir: true,
  }
})
