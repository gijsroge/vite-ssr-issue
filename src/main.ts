import App from './App.vue' // Vue or React main app
import {routes} from './router/index'
import viteSSR from 'vite-ssr/vue'

export default viteSSR(App, { routes }, (context) => {
    /* Vite SSR main hook for custom logic */
    /* const { app, router, initialState, ... } = context */
})