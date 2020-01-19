<template>
  <div>
   <div class="container">
     <div class="site-info-nav cf">
       <ul class="container-nav flex">
         <li class="first nav-item"><a rel="nofollow" href="https://about.meituan.com/about.html">关于美团</a></li>
         <li class=" nav-item"><a rel="nofollow" href="https://zhaopin.meituan.com/">加入我们</a></li>
         <li class=" nav-item"><a rel="nofollow" href="http://emis.meishi.meituan.com/merchantsSettled">商家入驻</a></li>
         <li class=" nav-item"><a rel="nofollow" href="https://www.meituan.com/help/faq">帮助中心</a></li>
         <li class="last  nav-item"><a href="http://meituan.com/mobile">美团手机版</a></li>
       </ul>
     </div>
     <p class="bt-nav">
       ©<span>2020</span>
       <a href="https://www.meituan.com">美团网团购</a>
       meituan.com
       <a href="http://www.miibeian.gov.cn/" target="_blank">京ICP证070791号</a>
       京公网安备11010502025545号
     </p>
   </div>
  </div>

</template>

<script>
    export default {
        name: "",
        components: {},
        props: {},
        data() {
            return {}
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
.container{
  margin: 0 auto 30px;
  clear: both;
  width: 980px;
  font-size: 12px;
  color: #999;
  .site-info-nav {
    margin-bottom: 20px;
    padding: 12px 0;
    border-top: 1px solid #EEE;
    border-bottom: 1px solid #EEE;
  }
  .container-nav{
    width: 500px;
  }
  .nav-item{
    float: left;
    margin: 5px 0;
    padding: 0 16px;
    line-height: 14px;
    border-right: 1px solid #EEE;
  }
  a{
    color: #999;

  }
  a:hover{
    color: #999;
  }
  .bt-nav{
    margin-left: 10px;
  }
}
</style>
