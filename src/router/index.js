import { createRouter, createWebHistory } from 'vue-router'
import HRTasksHub from '../views/HRTasksHub.vue'


const routes = [
  {
    path: '/',
    name: 'HRTasksHub',
    component: HRTasksHub
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router