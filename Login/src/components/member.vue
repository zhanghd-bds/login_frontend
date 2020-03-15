<template>
    <div id="memberContainer">
      <Button type="primary" @click="openModal" class="mbtn">新增</Button>
      <br/>
      <br/>
      <Table border :columns="member.column" :data="member.data">
          <template slot-scope="{row}" slot="operation">
            <a @click="deleteMember(row.id)">删除</a>
          </template>
      </Table>
      <Modal :mask-closable="false" v-model="openFlag" :transfer="false">
        <div slot="header">
          <span>新增member</span>
        </div>
        <div>
          <Form :label-width="80" :model="member">
              <FormItem label="account" prop="account">
                <Input type="text" v-model="member.account"></Input>
              </FormItem>
            <FormItem label="remark" prop="remark">
              <Input type="text" v-model="member.remark"></Input>
            </FormItem>
          </Form>
        </div>
        <div slot="footer">
          <Button type="primary">确认</Button>
          <Button>取消</Button>
        </div>
      </Modal>
    </div>
</template>

<script>
    export default {
        name: "member",
        data(){
            return{
                member:{
                    column:[
                        {
                            type:'selection',
                            align:'center',
                        },
                        {
                            title:'id',
                            key:'id'
                        },
                        {
                            title:'account',
                            key:'account',
                        },
                        {
                            title:'remark',
                            key:'remark',
                        },
                        {
                            title:'operation',
                            slot:'operation',
                            align:'center'
                        }

                    ],
                    data:[],
                    account:'',
                    remark:'',
                },
                openFlag:false,
            }
        },
        methods:{
            openModal(){
              this.openFlag=true
            },
            deleteMember(id){
                let params = {
                    id:id,
                }
                this.$http.delete("http://localhost:8082/member/deleteMember",{body:params}).then(res => {
                    this.loadMemberList()
                })
            },
            loadMemberList(){
                this.$http.get('http://localhost:8082/member/loadMemberList',undefined).then(res => {
                    this.member.data = res.data
                })
            }
        },
        created() {
            this.loadMemberList()
        }
    }
</script>

<style scoped xml:lang="less">
  #memberContainer {
    margin: 10px;


  }
  .mbtn{
    left: 0;
  }

</style>
