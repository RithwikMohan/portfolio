import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    watch: {
      ignored: ['**/*.pdf', '**/*.mp4', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg']
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
