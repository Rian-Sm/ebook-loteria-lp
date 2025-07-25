import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';

const prod = '/ebook-loteria-lp/';

// https://vite.dev/config/
export default defineConfig({
  base: prod || './',
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        exportType: 'named', // or 'named' if you prefer named exports
      },
      include: '**/*.svg',
    }),
  ],
})
