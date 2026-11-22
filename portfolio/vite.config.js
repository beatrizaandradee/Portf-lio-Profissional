import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Na Vercel/Render o site fica na raiz ("/").
// Se for publicar no GitHub Pages, troque base para '/nome-do-repositorio/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
