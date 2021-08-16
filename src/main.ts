import viteSSR from 'vite-ssr/vue'
import App from './App.vue'
import { routes, routerOptions } from './router/index'
import './assets/css/index.css'

export default viteSSR(App, { routes, routerOptions }, (context) => {
  const { app, initialState, router, request } = context
})
