<template>
  <div>
    <div class="container">
      <div class="content flex">
        <div class="content-logo flex">
            <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" @click="jumpHome"/>
        </div>
        <div class="content-block flex">
          <div class="tip">已有美团账号？</div>
          <i-button  type="warning" size="small" @click="jumpLogin">登录</i-button>
        </div>
      </div>
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


            }
        },
        methods: {
            jumpLogin(){
                this.$router.push('/login')
            },
            jumpHome(){
                this.$router.push('/')
            }
        },
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
  .container {

    border-bottom: 2px solid #D8D8D8;
    width: 100%;
    height: 60px;

    .content {
      min-width: 980px;
      color: #666;
      width: 980px;
      height: 60px;
      margin: 0 auto;


      .content-logo {
        height: 100%;
        width: 280px;
        justify-content: flex-start;

        img {
          width: 126px;
        }
      }

      .content-block {
        justify-content: flex-start;
        .tip{
          margin-right: 10px;
        }
      }
    }

  }
</style>
