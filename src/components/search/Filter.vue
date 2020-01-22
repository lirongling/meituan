<template>
  <div>
    <div class="filter-box filter-section-wrapper">
      <div class="filter-selected-condition flex" v-if="selectSearchs.length>0">
        <label>已选条件</label>
        <Tag
          closable
          color="warning"
          v-for="item in selectSearchs"
          :key="item"
          :name="item"
          @on-close="handleClose"
        >标签{{ item}}</Tag>
        <Button icon="md-trash" type="text" size="small" @click="handleDel">删除所有标签</Button>
      </div>
      <div class="filter-component flex">
        <div class="label flex">
          <label>分类</label>
          <a class="tag tag-solid tag-large" href="javascript:void(0);">
            <div>全部</div>
          </a>
        </div>
        <div class="tags flex">
          <div class="tags-item" v-for="(item,index) in menuList" :key="index">
            <span>{{item.name}}</span>
            <Icon type="md-arrow-dropdown" v-if="item.child.length>0" />
            <div class="details">
              <span class="navs-item"></span>
              <div class="container-de">
                <div v-for="(items,index) in item.child" :key="index">
                  <div class="detail-title flex">
                    <div class="details-name">{{items.title}}</div>
                    <div class="detail-more">
                      更多
                      <span class="iconfont icon-iconfontzhizuobiaozhun19"></span>
                    </div>
                  </div>
                  <div class="detail-content">
                    <div class="details-text" @click="selectSearch(items.title)">全部</div>
                    <div
                      class="details-text"
                      v-for="(itemss,index) in items.child"
                      :key="index"
                      @click="selectSearch(itemss)"
                    >{{itemss}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="filter-component flex">
        <div class="label flex">
          <label>区域</label>
          <a class="tag tag-solid tag-large" href="javascript:void(0);">
            <div>全部</div>
          </a>
        </div>
        <div class="tags tagss flex">
          <div class="tags-item" v-for="(item,index) in areas" :key="index">
            <span>{{item.type}}</span>
            <Icon type="md-arrow-dropdown" v-if="item.module.length>0" />
            <div class="details">
              <span class="navs-item"></span>
              <div class="container-de">
                <div class="detail-content">
                  <div class="details-text">全部</div>
                  <div
                    class="details-text"
                    v-for="(items,index) in item.module"
                    :key="index"
                  >{{items}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [],
      areas: [],
      selectSearchs: []
    };
  },
  components: {},
  props: {},
  methods: {
    // 获取所有分类
    Menu() {
      this.$axios
        .req("/menu")
        .then(res => {
          if (res.code === 200) {
            this.menuList = res.data.menu;
            this.menuList.map(item => {
              if (item.name.includes("/")) {
                item.name = item.name.slice(0, item.name.indexOf("/"));
              }
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 选中标签
    selectSearch(val) {
      this.selectSearchs.unshift(val);
      console.log(this.selectSearchs);
    },
    // 删除标签
    handleClose(event, name) {
      const index = this.selectSearchs.indexOf(name);
      this.selectSearchs.splice(index, 1);
    },
    // 删除所有标签
    handleDel() {
      this.selectSearchs = [];
    }
  },
  beforeMount() {
    this.Menu();
  },
  mounted() {
    setTimeout(() => {
      this.areas = this.$store.state.areas;
    }, 400);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.filter-selected-condition {
  padding: 11px 20px;
  border-bottom: 1px solid #e5e5e5;
  min-height: 21px;
  justify-content: flex-start;
  label {
    line-height: 21px;
    margin-right: 10px;
  }
  /deep/ .ivu-btn-text {
    font-size: 12px;
  }
}
.tagss {
  border-bottom: 0px solid #e5e5e5 !important;
}
.filter-box {
  width: 100%;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
.filter-section-wrapper {
  padding-bottom: 15px;

  .filter-component {
    align-items: flex-start;
    padding: 15px 20px 0;
    .label {
      width: 160px;
      justify-content: flex-start;
      label {
        display: block;
        width: 80px;
        float: left;
      }
      .tag {
        height: 22px;
        line-height: 22px;
      }
      .tag-solid > div {
        width: 48px;
        text-align: center;
        border-radius: 100px;
        background: linear-gradient(to bottom right, #ffd000, #ffbd00);
        color: #222222;
      }
    }
    .tags {
      padding-bottom: 10px;
      border-bottom: 1px solid #e5e5e5;
      flex: 1;
      justify-content: flex-start;
      flex-wrap: wrap;
      .tags-item {
        position: relative;
        min-width: 120px;
        line-height: 28px;
        padding: 0 10px;
        color: #666;
        font-weight: normal;
        cursor: pointer;
      }
      .tags-item:hover > .details {
        display: block;
      }
    }
  }
}
.details {
  top: 30px;
  display: none;
  position: absolute;
  width: 400px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 5px 8px;
  z-index: 9;
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
  .navs-item {
    position: relative;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 7px solid #fff;
    z-index: 9999;
    content: " ";
    width: 2px;
    height: 0;
    top: -33px;
    left: 0;
    right: 0;
    margin: auto;
  }
}
.detail-title {
  width: 85%;
  margin: 0 auto;
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
.container-de {
  margin-top: -20px;
}
</style>