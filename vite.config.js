import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig(() => {
  return {
    mode: 'development',
    "type": "module",
    server: {
        open: true,
    },
    resolve: {
        alias: {
          '~': path.resolve(__dirname, './src'),
        },
    },
    build: {
      outDir: 'build',
    },
    plugins: [
        react({
          include: "**/*.jsx",
        }),
        svgr({ svgrOptions: { icon: true } }),
    ],
  };
});