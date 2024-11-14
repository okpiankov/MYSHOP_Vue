import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import CabinetPage from '../pages/CabinetPage.vue'
import CardBigPage from '../pages/CardBigPage.vue'
import BlogPage from '../pages/BlogPage.vue'
import DataPage from '../pages/DataPage.vue'
import OrderPage from '../pages/OrderPage.vue'
import CartCabinetPage from '../pages/CartCabinetPage.vue'
import CardTypePage from '../pages/CardTypePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      //Динамический маршрут
      path: '/cardBig/:id?',
      name: 'CardBig',
      component: CardBigPage,
    },
    {
      //Маршрут в зависимости от search параметра
      path: '/cardType',
      name: 'cardType',
      component: CardTypePage,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogPage,
    },
    {
      path: '/cabinet',
      name: 'cabinetPage',
      // component: () => import('../pages/CabinetPage.vue'),
      component: CabinetPage,

      //Создаю вложенный лейаут:
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
