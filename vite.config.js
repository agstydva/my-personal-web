import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' 
import react from '@vitejs/plugin-react' // <-- BARU: Impor plugin React

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(), // <-- BARU: Tambahkan plugin React
  ],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})