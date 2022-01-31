import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/signin',
    name: 'Sign-in',
    component: SignIn,
  },
  {
    path: '/signup',
    name: 'Sign-up',
    component: () => import('../views/SignUp.vue'),
  },
  {
    path: '*',
    name: 'Not-found',
    component: NotFound,
  }
]

const router = new VueRouter({
  routes
})

export default router
