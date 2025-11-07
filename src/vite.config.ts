import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Optimize for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
