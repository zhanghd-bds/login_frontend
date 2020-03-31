<template>
  <div id="slidePageContainer">
    <h1>CSS3滑入/滑出效果</h1>
    <div id="volet_clos">
      <div id="volet">
        <Table border :columns="columns1" :data="data1"></Table>

        <a href="#volet"  aria-hidden="true" class="ouvrir">滑出</a>
        <a href="#volet_clos" aria-hidden="true" class="fermer">滑入</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "slidePage",
        data(){
            return {
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
  #slidePageContainer{
    height: 100%;
    width: 100%;
  }
  #volet_clos {
    position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
  }
  #volet {
    /*width: 250px;*/
    padding: 10px;
    background: #fff;
    color: #fff;
    width: 100%;
  }
  /* 初始定位 */
  #volet {
    position: absolute;
    left: 0px;
    bottom: 0px;
    transition: all .5s ease-in;
  }
  /* 点击过后改变 target  */
  #volet a.fermer {
    display: none;
  }
  /*弹层展开top距离*/
  #volet:target {
    left: 0px;
    top: calc(60%);
  }
  #volet:target a.fermer {
    display: block;
  }
  #volet:target a.ouvrir {
    display: none;
  }
  /*弹层回收后顶部距离*/
  #volet_clos:target #volet {
    left: 0px;
    top: calc(100%);
  }
  /*标签*/
  #volet a.ouvrir,#volet a.fermer{
    position: absolute;
    right: calc(45%);
    top: -40px;
    padding: 10px 25px;
    background: #555;
    color: #fff;
    text-decoration: none;
    ext-align: center;
    width: 120px;
  }
</style>
