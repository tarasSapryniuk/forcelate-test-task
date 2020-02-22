// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'


import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false
Vue.component('v-icon', Icon)

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  filters: {
    uppercase: (v) => {
      return v.toUpperCase()
    }
  }
})
