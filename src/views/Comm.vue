<template>
  <div class="comm">
    <div class="top">
      <div class="top-content flex">
        <div class="left flex">
          <div class="locaion">
            <span class="iconfont icon-location location-ico"></span>
            <span class="city">{{city}}</span>
          </div>
          <div class="select-city flex" @click="changeCity">切换城市</div>
          <div class="areas flex">
            [
            <div v-for="(item,index) in areas" :key="index" class="flex">
              <span v-if="index<3" class="areas-name" @click="switchCity(item)">{{item.type}}</span>
            </div>]
          </div>
          <div class="top-login flex" v-if="loginMsg===null">
            <div class="login" @click="jumpLogin('/login')">立即登录</div>
            <div class="register" @click="jumpLogin('/register')">注册</div>
          </div>
          <div v-else class="user-entry flex">
            <span class="user-name">{{loginMsg}}</span>
            <div class="extra-entry" @click="exitLogin">退出</div>
          </div>
        </div>
        <div class="right flex">
          <TopRight class="right-content"></TopRight>
        </div>
      </div>
    </div>
    <div class="search">
      <div class="content">
        <Clearfix></Clearfix>
      </div>
    </div>
    <router-view></router-view>
    <div class="comm-bottom">
      <Foot></Foot>
    </div>
  </div>
</template>

<script>
import TopRight from "../components/comm/TopRight";
import Foot from "../components/comm/Foot";
import Clearfix from "../components/home/Clearfix";

export default {
  data() {
    return {
      city: "",
      areas: [],
      loginMsg: ""
    };
  },
  components: {
    TopRight,
    Foot,
    Clearfix
  },
  methods: {
    // 获取定位
    position() {
      this.$api
        .position()
        .then(res => {
          if (res.code === 200) {
            this.city = JSON.parse(res.data).city.slice(0, -1);
            this.$store.state.city = this.city;
            this.crumbs();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //切换城市
    switchCity(val) {
      this.areas = this.areas.filter(item => {
        return item !== val;
      });
      this.areas.push(val);
      this.city = val.type;
      this.$store.state.city = this.city;
    },
    // 获取城市具体信息
    crumbs() {
      this.$axios
        .req(`/crumbs?city=${this.city}`)
        .then(res => {
          if (res.code === 200) {
            this.areas = res.data.areas;
            // this.city = JSON.parse(res.data).city;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 退出登录
    exitLogin() {
      localStorage.removeItem("loginMsg");
      this.$store.state.userInfo = "";
      this.loginMsg = null;
      this.$store.state.userInfo = null;
    },
    // 登录注册
    jumpLogin(path) {
      this.$router.push(path);
    },
    // 切换城市
    changeCity() {
      this.$router.push("/changeCity");
    }
  },
  beforeMount() {
    this.position();
    this.loginMsg = JSON.parse(localStorage.getItem("loginMsg"));
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.comm {
  width: 100%;
  height: 100%;
  min-width: 1080px;
  overflow: hidden;
  background: #f8f8f8;
}

.top {
  background: #f8f8f8;
  width: 100%;
  height: 40px;
  position: relative;

  .top-content {
    max-width: 1190px;
    height: 100%;
    min-width: 1080px;
    margin: 0 auto;

    font-size: 12px;

    .left,
    .right {
      justify-content: flex-start;
      height: 100%;
    }

    .left {
      .locaion {
        color: #99a6c1;
        font-size: 12px;

        .location-ico {
          font-size: 12px;
        }

        .city {
          color: #666;
          font-size: 12px;
          width: 36px;
        }
      }

      .select-city {
        margin-left: 5px;
        font-size: 12px;
        width: 54px;
        height: 18px;
        justify-content: center;
        background: #f4f4f4;
        border: 1px solid #e5e5e5;
        border-radius: 2px;
        color: #666;
      }

      .areas {
        font-size: 12px;
        margin-left: 5px;
        color: #999;

        .areas-name {
          margin: 0 4px;
        }
      }

      .top-login {
        margin-left: 25px;

        .login {
          color: rgb(236, 141, 17);
        }

        .register {
          margin-left: 10px;
        }
      }
    }

    .select-city:hover,
    .areas-name:hover,
    .register:hover,
    .login:hover {
      color: rgb(236, 141, 17);
      cursor: pointer;
    }

    .right {
      justify-content: flex-end;
      position: relative;

      .right-content {
        position: relative;
      }
    }
  }
}

.comm-bottom {
  width: 100%;
  height: 660px;
  margin-top: 40px;
}

.user-entry {
  justify-content: flex-start;
  margin-left: 10px;
}

.user-name {
  color: #fe8c00;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  white-space: nowrap;
  min-width: 20px;
  max-width: 96px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.extra-entry {
  color: #999;
  margin-left: 10px;
  cursor: pointer;
}

.content {
  max-width: 1190px;
  height: 100%;
  min-width: 1080px;
  margin: 0 auto;
}
.search {
  background: white;
  box-shadow: -3px 0 4px #c1c1c1;
}
</style>