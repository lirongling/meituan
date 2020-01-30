<template>
  <div>
    <div class="common-list">
      <div class="sort-option flex">
        <div class="option-item">智能排序</div>
        <div class="option-item flex">
          <span>价格排序</span>
          <div class="drop">
            <div>
              <Icon type="md-arrow-dropup" />
            </div>
            <div>
              <Icon type="md-arrow-dropdown" />
            </div>
          </div>
        </div>
        <div class="option-item">人气最高</div>
        <div class="option-item">评价最高</div>
      </div>
      <div class="common-list-main" id="boxFixed">
        <div
          v-for="(item,index) in searchResult"
          :key="index"
          class="list-item"
          @click="jumpDe(item.name)"
        >
          <Card :bordered="false">
            <SearchDe :ShopDe="item" :index="index"></SearchDe>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchDe from "../search/SearchDe";
export default {
  data() {
    return {};
  },
  components: {
    SearchDe
  },
  props: {
    searchResult: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    initHeight() {
      // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //如果被卷曲的高度大于吸顶元素到顶端位置 的距离
      let a = Math.ceil((scrollTop - this.offsetTop) / 160.29) - 1;
      if (a >= 0 && this.searchResult[a] && a < this.searchResult.length) {
        if (
          this.$store.state.location !==
          this.searchResult[a].location.split(",")
        ) {
          this.$store.state.locations = this.searchResult[a].location.split(
            ","
          );
        }
      }
    },

    // 跳转到详情页
    jumpDe(val) {
      this.$router.push({ name: "details", query: { name: val } });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
    this.$nextTick(() => {
      //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
      this.offsetTop = document.querySelector("#boxFixed").offsetTop;
    });
  },
  //回调中移除监听
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.common-list {
  margin-top: 20px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  color: #333;
  font-size: 14px;
  line-height: 20px;
  .sort-option {
    padding: 15px 0;
    padding-bottom: 2px;
    color: #333;
    font-size: 14px;
    line-height: 20px;
    justify-content: flex-start;
    .option-item {
      font-weight: 500;
      color: #666;
      cursor: pointer;
      padding: 0 18px;
      justify-content: flex-start;
      align-items: center;
      .drop {
        margin-top: -10px;
      }
      .drop > div {
        height: 10px;
      }
    }
  }
  .common-list-main {
    padding: 11px 20px;
  }
  .common-list-main > div {
    background: #ffffff;
    border-top: 1px solid #e5e5e5;
    border-radius: 4px;
    color: #333;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
  }
}
</style>