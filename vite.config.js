import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/basketball-injury-guide/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  assetsInclude: ['**/*.jpg', '**/*.png'],
  build: {
    assetsDir: 'assets'
  }
}) 