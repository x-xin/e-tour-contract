import Vue from 'vue'
import Router from 'vue-router'
import Routes from './routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: Routes
})

const user = sessionStorage.getItem('user')
router.beforeEach((to, from, next) => {
  if (!user && to.path !== '/signin' && to.path !== '/signup' && to.path !== '/password') {
    next({ path: '/signin' })
  } else {
    next()
  }
})

export default router
