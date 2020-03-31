<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-view/>
<!--    <login></login>-->
  </div>
</template>

<script>
    import login from '@/components/login.vue'
    import slidePage  from "./view/slidePage";
export default {
  name: 'App',
    components:{
      // login,
        slidePage
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  overflow: auto;

}
  html,body,#app{
    height: 100%;
    width:100%;
  }
</style>
