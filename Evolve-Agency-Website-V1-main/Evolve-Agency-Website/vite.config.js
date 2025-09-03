import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // IMPORTANT: must match your repo name for project Pages
  base: '/Evolve-Agency-Website-V1/',
  build: { outDir: 'dist' }
})
