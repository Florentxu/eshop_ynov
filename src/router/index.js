import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Shop from '../views/Shop.vue'
import Account from '../views/Account.vue'
import Product from '../views/Product.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },  
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  }
]

const router = new VueRouter({
  routes
})

export default router
