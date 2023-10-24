import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ReactApp-todo-API",

  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './unit-tests/setup.js',
    include: ['**.test.jsx'],
  }
})
