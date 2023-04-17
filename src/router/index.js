import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import PricingView from '@/views/PricingView.vue'
import ProductView from '@/views/ProductView.vue'
import Card from '../components/Card.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/products/:id',
      name: 'product',
      component: ProductView
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingView
    },
     {
      path: '/cart',
      name: 'cart', 
      component: () => import('../views/CartView.vue')
    },
  ]
})

export default router
