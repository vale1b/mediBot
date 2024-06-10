import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@slick-carousel': path.resolve(__dirname, 'node_modules/slick-carousel/slick')
    }
  }
})
