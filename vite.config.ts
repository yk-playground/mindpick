/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sharePages } from './vite-plugin-share-pages'

export default defineConfig({
  plugins: [react(), sharePages()],
  base: '/mindpick/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
})
