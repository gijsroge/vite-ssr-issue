import Homepage from '../views/Homepage.vue'
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Homepage
  }
] as RouteRecordRaw[]

const routerOptions = {
  mode: 'history'
}

export { routerOptions, routes }
