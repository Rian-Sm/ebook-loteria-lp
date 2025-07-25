import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';

const isProd = process.env.DEPLOY_ENV || false

console.log('Vite configuration loaded. Production mode:', process.env.DEPLOY_ENV);
// https://vite.dev/config/
export default defineConfig({
  base: isProd ? '/ebook-loteria-lp/' : './',
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
