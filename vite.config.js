import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Setup alias '@' to point to the source directory for absolute imports
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true, // Automatically open the browser
    host: '0.0.0.0', // Accessible externally on the network
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Define a stricter rollup configuration for production optimization
    rollupOptions: {
      output: {
        // Simple chunking strategy to better cache vendor libraries
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Group react and react-dom into a single vendor chunk
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor_react';
            }
            // Group other node_modules into a general vendor chunk
            return 'vendor';
          }
        },
      },
    },
  },
});