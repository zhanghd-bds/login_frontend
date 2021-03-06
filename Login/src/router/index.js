import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login.vue'
import index from '@/view/index.vue'
import slidePage from "../view/slidePage";
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/index',
      name:'index',
      component: index,
      meta:{
        requiresAuth:true
      }
    },
    {
      path:'/slidePage',
      name:'slidePage',
      component:slidePage
    }
  ]
})
