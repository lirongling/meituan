<template>
  <div>
    <div class="container">
      <div class="citylist flex">
        <h3 class="l-attr">热门城市：</h3>
        <div class="r-info flex">
          <div
            class="hot-list"
            v-for="(item,index) in hotCity"
            :key="index"
            @click="changeCity(item.name)"
          >{{item.name}}</div>
        </div>
      </div>
      <div class="citylist flex">
        <h3 class="l-attr">最近访问：</h3>
        <div class="r-info flex">
          <div class="hot-list" @click="changeCity(recentlyCity)">{{recentlyCity}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import city from "../../assets/js/city";
export default {
  data() {
    return {
      hotCity: city.data.hotCities,
      recentlyCity: ""
    };
  },
  components: {},
  props: {},
  methods: {
    // 切换城市
    changeCity(val) {
      this.$store.state.city = val;
      localStorage.setItem("city", JSON.stringify(val));
      this.$router.go(-1);
    }
  },
  beforeMount() {
    this.recentlyCity = this.$store.state.city;
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.citylist {
  border-bottom: 1px solid #e5e5e5;
  padding: 30px 0;
  justify-content: flex-start;
  align-items: flex-start;
  .l-attr {
    font-size: 16px;
    color: #515a6e;
    font-weight: 500;
    vertical-align: top;
    display: inline-block;
  }
  .r-info {
    font-size: 14px;
    vertical-align: top;
    margin-top: 2px;
    align-items: flex-start;
    .hot-list {
      margin: 0 20px;
      color: #666;
      display: inline-block;
      cursor: pointer;
    }
  }
}
</style>