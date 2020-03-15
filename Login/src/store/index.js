import Vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

export default  new Vuex.Store({
  state:{
    user:{
      username:window.localStorage.getItem('user' ||  '[]') == null?'':Json.parse(window.localStorage.getItem('user' || '[]').loginName)
    }
  }
})
