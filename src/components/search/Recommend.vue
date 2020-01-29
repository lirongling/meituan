<template>
  <div>
    <div class="container">
      <div class="top-nav-box">猜你喜欢</div>
      <div class="recommend-list">
        <div
          class="recommend-item"
          v-for="(item,index) in this.$store.state.recommendList"
          :key="index"
          @click="jumpDe(item.name)"
        >
          <Details :ShopDe="item"></Details>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Details from "../../components/recommend/Details";
export default {
  data() {
    return {
      RecommendList: []
    };
  },
  components: {
    Details
  },
  props: {},
  methods: {
    // 跳转到详情页
    jumpDe(val) {
      this.$router.push({ name: "details", query: { name: val } });
    }
  },
  mounted() {
    // this.hotSearch();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  margin-top: 10px;
  margin-bottom: 12px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 16px 20px 0;
  width: 230px;
  box-sizing: border-box;
  .top-nav-box {
    margin-bottom: 12px;
    font-size: 16px;
    color: #333333;
    line-height: 22px;
    font-weight: 500;
  }
  .recommend-item {
    cursor: pointer;
  }
}
</style>