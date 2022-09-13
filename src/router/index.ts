import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'
import routes from './routes'

const history = process.env.VITE_ROUTER_MODE === 'hash'
  ? createWebHistory()
  : createWebHistory()

export default createRouter({
  history,
  routes
})
