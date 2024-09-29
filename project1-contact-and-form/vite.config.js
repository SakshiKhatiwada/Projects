import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This will allow access from your network devices
    port: 5174, // Default Vite port, change if needed
  },
})
