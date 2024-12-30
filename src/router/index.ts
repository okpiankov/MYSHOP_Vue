import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import CabinetPage from '../pages/CabinetPage.vue'
import CardBigPage from '../pages/CardBigPage.vue'
import BlogPage from '../pages/BlogPage.vue'
import DataPage from '../pages/DataPage.vue'
import OrdersCabinetPage from '../pages/OrdersCabinetPage.vue'
import CartCabinetPage from '../pages/CartCabinetPage.vue'
import CardTypePage from '../pages/CardTypePage.vue'
import OrdersPage from '../pages/OrdersPage.vue'
import { useAuthStore } from '../store/auth'
import SearchPage from '@/pages/SearchPage.vue'
import AdminPage from '@/pages/AdminPage.vue'
import EditProducts from '@/pages/EditProducts.vue'


export const router = createRouter({
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
      name: 'cardBig',
      component: CardBigPage,
    },
    {
      //Маршрут в зависимости от search параметра
      path: '/cardType',
      name: 'cardType',
      component: CardTypePage,
    },
    {
      //Не линкую,  перейти можно только программно:
      path: '/search',
      name: 'search',
      component: SearchPage,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogPage,
    },
    {
      path: '/ordersPage',
      name: 'ordersPage',
      component: OrdersPage,
    },

    //Закрытый роут личный кабинет
    {
      path: '/cabinet',
      name: 'cabinet',
      // component: () => import('../pages/CabinetPage.vue'),
      component: CabinetPage,
      meta: { protected: true },

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
          name: 'cartCabinetPage',
          component: CartCabinetPage,
        },
        {
          path: 'ordersCabinetPage',
          name: 'ordersCabinetPage',
          component: OrdersCabinetPage,
        },
      ],
    },

    //Закрытый роут админка
    {
      path: '/admin',
      name: 'admin',
      component: AdminPage,
      meta: { protected: true },

      //Создаю вложенный лейаут:
      children: [
        {
          // path без /!!!
          path: 'products',
          name: 'editProducts',
          component: EditProducts,
        },
        // {
        //   path: 'users',
        //   name: 'editUsers',
        //   component: editUsers,
        // },
        // {
        //   path: 'orders',
        //   name: 'editOrders',
        //   component: editOrders,
        // },
      ],
    },
  ],
})

//Защищенный роутер на личный кабинет покупателя:
//Обращение к стору  authStore = useAuthStore() обязательно поместить во внутрь beforeEach
router.beforeEach((to) => {
  const authStore = useAuthStore()
  const requireAuth = to.matched.some((record) => record.meta.protected)
  if (requireAuth && !authStore.$state.token) {
    return { name: 'home' }
  }
})

export default router

// if (authStore.$state.token  && authStore.$state.data.role === 'admin') {
  //   return { name: 'admin' }
  // }
  // if (authStore.$state.token !== '' && authStore.$state.data.role === 'client') {
  //   return { name: 'cabinet' }
  // }