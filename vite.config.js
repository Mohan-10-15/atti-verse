```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // GitHub Pages repository URL:
  // https://mohan-10-15.github.io/atti-verse-main/
  base: '/atti-verse-main/',

  server: {
    port: 5173,
    open: true,
    host: true,
  },

  build: {
    target: 'es2018',
    sourcemap: false,
  },
})
```
