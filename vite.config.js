import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Extra bundle for older phones/browsers that can't run modern JS
    legacy({ targets: ['defaults', 'Android >= 5', 'Chrome >= 49', 'iOS >= 10'] }),
  ],
})
