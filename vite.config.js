import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',  // use './' to ensure relative paths are used for all assets
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from your local network
    port: 5173,      // Specify the port (or leave as default)
  },
});
