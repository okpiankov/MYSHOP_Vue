import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import CabinetPage from '../pages/CabinetPage.vue'
import CardBig from '../pages/CardBigPage.vue'
import Blog from '../pages/BlogPage.vue'
import DataPage from '../pages/DataPage.vue'
import OrderPage from '../pages/OrderPage.vue'
import CartCabinetPage from '../pages/CartCabinetPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cardBig',
      name: 'CardBig',
      component: CardBig,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/cabinet',
      name: 'cabinetPage',
      // component: () => import('../pages/CabinetPage.vue'),
      component: CabinetPage,
      children: [
        {
          // path без /!!!
          path: 'dataPage',
          name: 'dataPage',
          component: DataPage,
        },
        {
          path: 'cartCabinetPage',
          component: CartCabinetPage,
        },
        {
          path: 'orderPage',
          name: 'orderPage',
          component: OrderPage,
        },
      ],
    },

  ],
})

export default router
