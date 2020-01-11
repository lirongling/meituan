<template>
  <div class="comm">
    <div class="top">
      <div class="top-content flex">
        <div class="left flex">
          <div class="locaion">
            <span class="iconfont icon-location location-ico"></span>
            <span class="city">{{city}}</span>
          </div>
          <div class="select-city flex">切换城市</div>
          <div class="areas flex">
            [
            <div v-for="(item,index) in areas" :key="index" class="flex">
              <span v-if="index<3" class="areas-name" @click="switchCity(item)">{{item.type}}</span>
            </div>]
          </div>
          <div class="top-login flex">
            <div class="login">立即登录</div>
            <div class="register">注册</div>
          </div>
        </div>
        <div class="right flex">
          <TopRight class="right-content"></TopRight>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import TopRight from "../components/comm/TopRight";
export default {
  data() {
    return {
      city: "",
      areas: []
    };
  },
  components: {
    TopRight
  },
  methods: {
    // 获取定位
    position() {
      this.$axios
        .req("/position")
        .then(res => {
          if (res.code === 200) {
            this.city = JSON.parse(res.data).city.slice(0, -1);
            this.crumbs();
          }
          console.log(res);
        })
        .catch(err => {
          // console.log(err);
        });
    },
    //切换城市
    switchCity(val) {
      this.areas = this.areas.filter(item => {
        return item !== val;
      });
      this.areas.push(val);
      this.city = val.type;
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
          console.log(this.areas);
        })
        .catch(err => {
          // console.log(err);
        });
    }
  },
  beforeMount() {
    this.position();
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
</style>