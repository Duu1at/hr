import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from 'vite-plugin-svgr';
export default defineConfig({
  plugins: [
      react(),
      reactRefresh(),
      svgr(),
  ],


})
