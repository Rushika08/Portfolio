import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss' // Just using the plugin directly

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Portfolio/',
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  define: {
    // You can add other Vite-specific global definitions here if needed
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Code', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
});
