import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For a user/org site (username.github.io), keep base as '/'.
// For a project site (username.github.io/repo-name), set base to '/repo-name/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
