import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssNested from 'postcss-nested'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react() ],
  server: {
    port: 8080,
  },
  css: {
    postcss: {
      plugins: [ 
        postcssNested()
      ]
    }
  },
  build: {
    outDir: "build"
  }
})
