import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'

// https://vitejs.dev/config/

dotenv.config()
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_PROXY,  // The backend server URL
        changeOrigin: true,  // Needed for virtual hosted sites
      }
    }
  }
})
