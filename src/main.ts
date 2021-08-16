import viteSSR from 'vite-ssr/vue'
import App from './App.vue'
import { routes } from './router/index'
import './assets/css/index.css'

export default viteSSR(App, { routes }, (context) => {})
