<template>
  <div>
    <div class="container">
      <div class="category-nav-title">全部分类</div>
      <div
        v-for="(item,index) in menuList"
        :key="index"
        class="container-item flex"
        @mouseenter="onMouse(item.child)"
        @mouseleave="outMouse"
      >
        <div>
          <i class="iconfont" :class="`icon-${item.type}`" :style="{color: item.color}"></i>
          <span class="category-text">{{item.name}}</span>
        </div>
        <div class="return">
          <i class="iconfont icon-iconfontzhizuobiaozhun19 return"></i>
        </div>
      </div>
      <div
        class="container-de"
        :class="{'show-de' : showDe>0}"
        @mouseleave="mouseShow(-1)"
        @mouseenter="mouseShow(1)"
      >
        <div v-for="(item,index) in menuDetails" :key="index">
          <div class="detail-title flex">
            <div class="details-name">{{item.title}}</div>
            <div class="detail-more">
              更多
              <span class="iconfont icon-iconfontzhizuobiaozhun19"></span>
            </div>
          </div>
          <div class="detail-content">
            <div class="details-text" v-for="(items,index) in item.child" :key="index">{{items}}</div>
          </div>
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
      menuList: [],
      menuDetails: [],
      showDe: 0,
      num: 0,
      rgba: "",
      colors: []
    };
  },
  methods: {
    // 获取所有分类
    Menu() {
      this.$axios
        .req("/menu")
        .then(res => {
          if (res.code === 200) {
            res.data.menu.map(item => {
              let rgb1 = parseInt(Math.random() * 255);
              let rgb2 = parseInt(Math.random() * 255);
              let rgb3 = parseInt(Math.random() * 255);
              let rag = `rgb(${rgb1},${rgb2},${rgb3})`;
              item.color = rag;
            });
            this.menuList = res.data.menu;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 鼠标移入
    onMouse(item) {
      this.showDe += 2;
      this.menuDetails = item;
    },
    // 鼠标移出
    outMouse() {
      this.showDe -= 2;
    },
    mouseShow(n) {
      this.showDe += n;
    }
  },
  beforeMount() {
    this.Menu();
  },

  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.show-de {
  display: block !important;
}

.container {
  position: relative;
  width: 100%;
  height: 470px;
  position: relative;
  top: -50px;
  background: white;
  z-index: 10;
  border: 1px solid #e5e5e5;

  .category-nav-title {
    color: #222222;
    font-size: 16px;
    font-weight: 700;
    padding: 12px 15px 12px 15px;
  }

  .container-item {
    margin: 0 auto;
    padding: 2px 12px;
    height: 26px;
  }

  .container-item:hover {
    background: rgba(255, 150, 0, 0.08);
    color: #222222 !important;
  }

  .container-item:hover > .return {
    font-weight: 600;
  }

  .container-item:hover .category-text {
    font-weight: 600;
  }

  .category-text {
    padding-left: 10px;
    font-size: 13px;
    line-height: 20px;
    height: 20px;
    color: #646464;
    cursor: pointer;
  }

  .return {
    font-size: 12px;
  }

  .container-de {
    display: none;
    position: absolute;
    bottom: -1px;
    left: 100.5%;
    width: 400px;
    height: 416px;
    background-color: #fff;
    z-index: 99;
    color: #666;
    overflow: hidden;

    .detail-title {
      width: 85%;
      margin: 0 auto;
      margin-top: 24px;
      height: 30px;
      line-height: 30px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e5e5e5;

      .details-name {
        font-size: 16px;
        font-weight: 500;
        color: #222;
        cursor: pointer;
      }

      .detail-more {
        font-size: 12px;
        color: #999;
        font-weight: 400;
        cursor: pointer;
      }

      .detail-more > span {
        font-size: 12px;
      }
    }

    .detail-content {
      width: 85%;
      margin: 5px auto;
      display: flex !important;
      justify-content: flex-start;
      flex-wrap: wrap;

      .details-text {
        color: #999;
        font-size: 12px;
        line-height: 15px;
        display: inline-block;
        margin-right: 16px;
        margin-top: 10px;
        cursor: pointer;
      }

      .details-text:hover {
        color: rgb(236, 141, 17);
      }
    }
  }
}
</style>
