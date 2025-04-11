import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  optimizeDeps: {
    include: ['jodit-react'], // 👈 This line tells Vite to pre-bundle jodit-react
  },
  build: {
    outDir: 'build', // Optional: customizing output folder
  },
});
