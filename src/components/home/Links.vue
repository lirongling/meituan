<template>
  <div>
   <div class="content flex">
     <div class="content-item flex" v-for="(item,index) in linkList" :key="index">{{item}}</div>
   </div>
  </div>

</template>

<script>
    export default {
        name: "",
        components: {},
        props: {},
        data() {
            return {
                linkList:[
                    "美团外卖",
                    "猫眼电影",
                    "美团酒店",
                    "名宿/公寓",
                    "商家入驻",
                    "美团公益",
                ]
            }
        },
        methods: {},
        mounted() {

        },
        created() {

        },
        filters: {},
        computed: {},
        watch: {},
        directives: {}
    }
</script>

<style scoped lang="scss">
.content{

  justify-content: center;
  padding-bottom: 20px;
  .content-item{
    height: 20px;
    justify-content: center;
    color: #222;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    margin: 0 20px;
  }
  .content-item:nth-child(1){
    color: #fbc700;
  }
  .content-item:hover{
    color: #ed1e24;
  }
}

</style>
