// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'  // for IE Promise
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './element-ui'
import './stylus/style.styl'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (to.path === '/signin' || to.path === '/signup' || to.path === '/password') {
    store.state.isLogin = false
    store.state.account = ''
    sessionStorage.removeItem('user')
  }
  if (!store.state.isLogin && to.path !== '/signin' && to.path !== '/signup' && to.path !== '/password') {
    next({ path: '/signin' })
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store,
  template: '<App/>',
  components: { App }
})
