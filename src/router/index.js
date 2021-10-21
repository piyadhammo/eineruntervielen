import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '../components/Welcome.vue'
import CV from '../components/CV.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/cv',
    name: CV,
    component: CV
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
