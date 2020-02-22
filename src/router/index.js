import Vue from 'vue'
import Router from 'vue-router'
// import Dashboard from '';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/components/dashboard/Dashboard')
    }
  ]
})
