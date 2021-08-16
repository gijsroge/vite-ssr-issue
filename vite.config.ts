import vue from '@vitejs/plugin-vue'
import viteSSR from 'vite-ssr/plugin.js'
import { resolve } from 'path'
const { extendDefaultPlugins } = require('svgo')

export default {
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [viteSSR(), vue()]
}
