<template>
  <div>
    <div class="container flex">
      <div class="container-login">
        <div>
          <div class="no-login flex" v-if="$store.state.userInfo===null">
            <div class="img">
              <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt />
            </div>
            <p class="user-name">Hi！你好</p>
            <div class="register">
              <Button @click="login('register')">注册</Button>
            </div>
            <div class="login">
              <Button @click="login('login')">立即登录</Button>
            </div>
          </div>
          <div v-else class="true-login">
            <div class="login-set flex">
              <div class="ico">
                <Icon size="24" type="ios-settings" />
              </div>
            </div>
            <div class="head-img-row flex">
              <img
                class="head-img"
                src="//s0.meituan.net/bs/fe-web-meituan/e3064a3/img/head-img.png"
                alt
              />
            </div>
            <div class="nickname-row flex">
              <span class="user-name">{{loginMsg}}</span>
              <i class="iconfont icon-huiyuan1 ico-super"></i>
            </div>
            <div class="fn-row flex">
              <div class="fn-item flex" v-for="(item,index) in chooseList" :key="index">
                <div class="ico">
                  <i class="iconfont fn-ico" :class="item.ico"></i>
                </div>
                <div class="title">{{item.title}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="download-app">
        <div class="qrcode-box flex">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP" />
        </div>
        <div class="app-name">美团APP手机版</div>
        <div class="app-text">
          <span>一元起</span>吃喝玩乐
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
      loginMsg: "",
      chooseList: [
        {
          title: "我的订单",
          ico: "icon-gerenzhongxinwodedingdan"
        },
        {
          title: "我的收藏",
          ico: "icon-ego-favoritefull"
        },
        {
          title: "抵用券",
          ico: "icon-qiaquan"
        },
        {
          title: "余额",
          ico: "icon-yuebao"
        },
        {
          title: "更多",
          ico: "icon-gengduo"
        }
      ]
    };
  },
  methods: {
    // 跳转到登录注册页面
    login(path) {
      this.$router.push(path);
    }
  },
  beforeMount() {
    this.loginMsg = JSON.parse(localStorage.getItem("loginMsg"));
  },
  mounted() {
    // if(localStory.)
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.container {
  height: 420px;
  width: 228px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-login {
    margin-top: 8px;
    width: 228px;
    height: 240px;
    background-color: #fff;
    border: 1px solid #e5e5e5;

    .no-login {
      margin-top: 30px;
      width: 100%;
      height: 200px;
      text-align: center;
      flex-direction: column;
      justify-content: flex-start;

      .img {
        img {
          width: 55px;
        }
      }

      .user-name {
        font-size: 16px;
        color: #222;
        text-align: center;
        font-weight: 500;
        white-space: nowrap;
        width: 6em;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0 auto;
      }

      .register {
        margin: 15px 0;
      }

      /deep/ .ivu-btn {
        width: 90px;
      }
    }

    .true-login {
      width: 100%;
      height: 240px;
      border: 1px solid #e5e5e5;

      .login-set {
        justify-content: flex-end;

        .ico {
          width: 24px;
          height: 24px;
          margin: 3px;
          cursor: pointer;

          /deep/ i {
            width: 24px;
            height: 24px;
          }
        }
      }

      .head-img-row {
        border-radius: 30px;
        margin: 0px auto 4px auto;
        justify-content: center;

        .head-img {
          width: 47px !important;
          height: 47px !important;
          border-radius: 50% !important;
          border: 4px solid #e5e5e5 !important;
        }
      }

      .nickname-row {
        height: 30px;
        justify-content: center;

        .user-name {
          font-size: 16px;
          color: #222;
          text-align: center;
          font-weight: 500;
          white-space: nowrap;
          min-width: 20px;
          max-width: 96px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .ico-super {
          color: #00a99d;
        }
      }

      .fn-row {
        padding: 0 15px;
        justify-content: flex-start;
        flex-wrap: wrap;

        .fn-item {
          flex-direction: column;
          width: 33.3%;
          cursor: pointer;

          .title {
            font-size: 12px;
            color: #222;
            margin: 5px 0;
          }

          .fn-ico {
            color: #ffc300;
            font-size: 24px !important;
          }
        }
      }
    }
  }

  .download-app {
    width: 228px;
    height: 165px;

    background-color: #fff;
    border: 1px solid #e5e5e5;

    .qrcode-box {
      margin: 10px auto;
      justify-content: center;

      img {
        width: 95px;
      }
    }

    .app-name {
      font-size: 16px;
      color: #222222;
      font-weight: 500;
      text-align: center;
    }

    .app-text {
      font-size: 12px;
      font-weight: 500;
      margin-top: 2px;
      text-align: center;

      span {
        margin-right: 5px;
        color: #ec5330;
      }
    }
  }
}
</style>
