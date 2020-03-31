<template>
    <div id="contianer">
      <Form ref="loginForm" :model="loginVailData" :rules="loginRule">
        <FormItem prop="loginName">
          <Input type="text" v-model="loginVailData.loginName" placeholder="请输入用户名" style="width:200px;">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem  prop="password">
          <Input type="text" v-model="loginVailData.password" placeholder="请输入密码" style="width:200px;">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('loginForm')">登陆</Button>
        </FormItem>
      </Form>
    </div>
</template>

<script>
    export default {
        name: "login",
        components:{},
        data(){
            return {
                loginVailData:{
                    loginName:'',
                    password:'',
                },
                loginRule:{
                    loginName: [
                        {
                            required:true,
                            message:'Please fill in the UserName',
                            trigger:'blur'
                        }
                    ],
                    password:[
                        {
                            required:true,
                            message:'Please fill in the Password',
                            trigger:'blur'
                        }
                    ]
                },
            }

        },
        methods:{
            initWebSocket(){
                let websocket = new WebSocket("ws://192.168.107.181:9000/websocketdemo-0.0.1-SNAPSHOT/websocket/aaa");
                websocket.onopen = function(){
                    console.log("Socket已打开");
                }
                websocket.onclose = function(){
                    console.log("Socket已关闭");
                }
                websocket.onerror = function () {
                    console.log("Socket发生错误");
                }
            },
            handleSubmit(name){
                let params = {
                    loginName:this.loginVailData.loginName,
                    password:this.loginVailData.password
                }
                console.log(JSON.stringify(params))
                // let url = "http://localhost:8082/rest/login/"+params.loginName+"/"+params.password
                let url = "http://localhost:8082/rest/login"

                this.$http.delete("http://localhost:8082/rest/login",{body:params}).then(res => {
                    if(res.data === true){
                        console.log(60,res.data)
                        this.$router.push({
                            path:'/index',
                            // query:{
                            //     login:params.loginName
                            // }
                        })
                    }
                })
                // this.$axios({
                //     url:'http://localhost:8082/rest/login/'+params.loginName+'/'+params.password,
                //     method:'post',
                //     // data:params,
                //     headers:{'content-type':'x-www-form-urlencoded'},
                // }).then(res =>{
                //     console.log('后台返回数据：'+res.data)
                //     this.$router.push({path:'/index'})
                // }).catch(err => {
                //     console.log(err)
                // })
                // this.$refs[name].validate(valid => {
                //     if(valid){
                //         //发送异步请求
                //         this.$axios({
                //             url:'/rest/login',
                //             method:'post',
                //             data:this.loginVailData
                //         }).then(res => {
                //             console.log('后台返回数据：'+res.data)
                //         }).catch(err => {
                //
                //         })
                //     }else{
                //         console.log('表单校验失败')
                //     }
                // })
            },
        },
        created() {
            this.initWebSocket();
        }
    }
</script>

<style scoped>
  #contianer{
    margin:20px;
    width:400px;

  }
</style>
