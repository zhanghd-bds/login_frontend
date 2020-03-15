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
