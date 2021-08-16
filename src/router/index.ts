import Homepage from '@/views/Homepage.vue'
import { RouteRecordRaw } from 'vue-router'
import scrollBehavior from './scrollBehavior'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Homepage
  }
] as RouteRecordRaw[]

const routerOptions = {
  scrollBehavior,
  mode: 'history'
}

export { routerOptions, routes }
