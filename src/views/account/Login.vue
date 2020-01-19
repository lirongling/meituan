<template>
  <div>
    <div class="container">
      <div class="container-header">
        <div class="header-log"></div>
      </div>
      <div class="container-center flex">
        <div class="center-img">
          <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370"
               alt="美团网">
        </div>
        <div class="login-section">
          <LoginInput></LoginInput>
          <p class="signup-guide">还没有账号？<span class="register" @click="register">免费注册</span></p>
          <ThirdParty></ThirdParty>
        </div>
      </div>
      <LoginBottom></LoginBottom>

    </div>
  </div>

</template>

<script>
    import LoginInput from '../../components/login/LoginInput'
    import ThirdParty from '../../components/login/ThirdParty'
    import LoginBottom from '../../components/login/LoginBottom'

    export default {
        name: "",
        components: {
            LoginInput,
            ThirdParty,
            LoginBottom
        },
        props: {},
        data() {

            return {}
        },
        methods: {
            register(){
                this.$router.push('/register')
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
  .container-header {
    width: 980px;
    height: auto;
    margin: 40px auto 30px;

    .header-log {
      width: 82px;
      height: 54px;
      background-position: -188px -808px;
      background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
      background-repeat: no-repeat;
      background-size: initial;
    }
  }

  .container-center {
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 auto 70px;
    width: 980px;

    .login-section {
      margin: 0 auto;
      width: 270px;
      background: #FFF;
      .register{
        color: #FE8C00;
        text-decoration: none;
        cursor: pointer;
      }


    }
  }
</style>
