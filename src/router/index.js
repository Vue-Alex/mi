import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home';
import Shopping from '@/components/shopping';
import Cart from '@/components/cart'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shopping',
      name: 'shopping',
      components: {
      	shopping:Shopping
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
  ]
})
