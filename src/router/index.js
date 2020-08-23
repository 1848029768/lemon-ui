import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path:'/home',
    component:() => import(/* webpackChunkName: "home" */ '../components/common/Home.vue')
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
    meta: { title: '登录' }
  },
  {
    path: '*',
    redirect: '/404'
  }

]

const router = new VueRouter({
  routes
})

export default router
