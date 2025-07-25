import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      transformOrigin: {
        center: 'center',
      },
    },
  },
   base: '/portfolio-website2/',
  plugins: [react(),tailwindcss(),],
})
