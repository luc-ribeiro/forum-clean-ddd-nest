import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'
import { resolve } from 'node:path'

export default defineConfig({
  test: {
    globals: true,
    root: './'
  },
  plugins: [
    swc.vite({
      module: { type: 'es6' }
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  }
})
