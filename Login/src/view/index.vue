<template>
    <div id="indexContainer" >
        <member></member>
    </div>
</template>

<script>
    import member from '../components/member.vue'
    export default {
        name: "index",
        components:{
            member,
        },
        methods:{
          initWebSocket(){
              let websocket = new WebSocket("ws://localhost:8080/websocketdemo/websocket/aaa");
              websocket.onopen = function(){
                  console.log("Socket已打开");
              }
              websocket.onclose = function(){
                  console.log("Socket已关闭");
              }
              websocket.onerror = function () {
                  console.log("Socket发生错误");
              }
          }
        },
        created() {
          console.log(11,'index.vue')
        }
    }
</script>

<style scoped >
  #indexContainer{
    overflow: auto;
    margin:10px;
    height: 100%;
  }
</style>
