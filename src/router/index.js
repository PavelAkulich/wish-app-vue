import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WishList from '../views/WishList.vue'
import WishAll from '../views/WishAll.vue'
import WishItemPage from '../views/WishItemPage.vue'
import WishEditPage from '../views/WishEditPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: Home
    },
    {
      path: '/wish-list',
      name: '/wish-list',
      component: WishList
    },
    {
      path: '/wish-all',
      name: '/wish-all',
      component: WishAll
    },
    {
      path: '/wish-list/:id',
      name: '/wish-item',
      component: WishItemPage
    },
    {
      path: '/wish-list/:id/edit',
      name: '/wish-item-edit',
      component: WishEditPage
    },
  ]
})

export default router
