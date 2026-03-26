import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable rollup optimizations
    rollupOptions: {
      output: {
        // Manual chunks for better code splitting
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-lucide': ['lucide-react'],
          'vendor-axios': ['axios'],
        },
      },

    },
    // Minify options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Chunk size warning limit
    chunkSizeWarningLimit: 500,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
  },
  // Server configuration
  server: {
    port: 3000,
    strictPort: false,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  // Preview configuration
  preview: {
    port: 4173,
  },
})
