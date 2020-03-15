// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import VueResource from 'vue-resource'
Vue.use(iView)
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
/* eslint-disable no-new */
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
