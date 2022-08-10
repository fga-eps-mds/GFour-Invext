import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import module from 'module-alias/register';

//https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
