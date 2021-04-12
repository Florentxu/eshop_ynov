import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Shop from '../views/Shop.vue'
import Account from '../views/Account.vue'
import Product from '../views/Product.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import AuthGuard from '../middleware/auth'
import Cart from '../views/Cart.vue'
import WishList from '../views/WishList.vue'
import EditUser from '../views/EditUser.vue'
import Success from '../views/Success.vue'
import Cancel from '../views/Cancel.vue'
import Admin from '../views/Admin.vue'
import ProductCRUD from '../views/ProductCRUD.vue'
import ProductCreate from '../views/ProductCreate.vue'
import ProductUpdate from '../views/ProductUpdate.vue'
import UserCRUD from '../views/UserCRUD.vue'
import UserCreate from '../views/UserCreate.vue'
import UserUpdate from '../views/UserUpdate.vue'
import CategoryCRUD from '../views/CategoryCRUD.vue'
import CategoryUpdate from '../views/CategoryUpdate.vue'
import OrderCRUD from '../views/OrderCRUD.vue'
import OrderUpdate from '../views/OrderUpdate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
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
    path: '/update/:id',
    name: 'EditUser',
    component: EditUser
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    beforeEnter(to, from, next) {
      // if(AuthGuard){
      if(localStorage.getItem('token')){
        next();
      } else {
        next({
          name:"Login"
        })
      }
    }
  },  
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    beforeEnter(to, from, next) {
      if(localStorage.getItem('token')){
        next();
      } else {
        next({
          name:"Login"
        })
      }
    }
  },
  {
    path: '/wishlist',
    name: 'WishList',
    component: WishList
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  },
  {
    path: '/cancel',
    name: 'Cancel',
    component: Cancel
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
    path: '/',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/admin',
    name: 'Admin ',
    component: Admin
  },
  {
    path: '/productCRUD',
    name: 'ProductCRUD ',
    component: ProductCRUD
  },
  {
    path: '/productCreate',
    name: 'ProductCreate',
    component: ProductCreate
  },
  {
    path: '/productUpdate',
    name: 'ProductUpdate',
    component: ProductUpdate
  },
  {
    path: '/userCRUD',
    name: 'UserCRUD ',
    component: UserCRUD
  },
  {
    path: '/userCreate',
    name: 'UserCreate',
    component: UserCreate
  },
  {
    path: '/userUpdate',
    name: 'UserUpdate',
    component: UserUpdate
  },
  {
    path: '/categoryCRUD',
    name: 'CategoryCRUD',
    component: CategoryCRUD
  },  {
    path: '/categoryUpdate',
    name: 'CategoryUpdate',
    component: CategoryUpdate
  },
  {
    path: '/orderCRUD',
    name: 'OrderCRUD',
    component: OrderCRUD
  },
  {
    path: '/orderUpdate',
    name: 'OrderUpdate',
    component: OrderUpdate
  }
]

const router = new VueRouter({
  routes
})

export default router
