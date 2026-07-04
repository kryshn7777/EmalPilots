import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves a project site from /Emailpilots3/; local dev/build from /.
const base = process.env.GITHUB_ACTIONS ? '/Emailpilots3/' : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
