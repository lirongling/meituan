<template>
  <div>
    <div class="container">
      <div class="container-nav">
        <ul class="flex content">
          <li class="nav-item mf-shang-hei-regular">有格调</li>
          <li class="nav-item" @mouseenter="searchResultss('景点',0)">
            <span>全部</span>
            <span class="navs-item" :class="{'show-navs':num===0 }"></span>
          </li>
          <li class="nav-item" @mouseenter="searchResultss('美食',1)">
            <span>约会聚餐</span>
            <span class="navs-item" :class="{'show-navs':num===1 }"></span>
          </li>
          <li class="nav-item" @mouseenter="searchResultss('丽人',2)">
            <span>丽人spa</span>
            <span class="navs-item" :class="{'show-navs':num===2 }"></span>
          </li>
          <li class="nav-item" @mouseenter="searchResultss('电影',3)">
            <span>电影演出</span>
            <span class="navs-item" :class="{'show-navs':num===3 }"></span>
          </li>
          <li class="nav-item" @mouseenter="searchResultss('旅游',4)">
            <span>品质出游</span>
            <span class="navs-item" :class="{'show-navs':num===4 }"></span>
          </li>
        </ul>
      </div>
      <div class="quality-area flex">
        <div class="quality-item" v-for="(item,index) in searchResult" :key="index">
          <Card style="width:100%" :bordered="false">
            <div class="quality-img" v-if="item.photos.length>0">
              <img :src="item.photos[0].url" />
            </div>
            <div class="quality-img" v-else>
              <img
                src="https://img.meituan.net/phoenix/37ac7809abcd942e05aeb0e3add1fcba294604.jpg@740w_416h_1e_1c"
              />
            </div>
            <div class="poi-info">
              <div class="title">{{item.name}}</div>
              <div class="sub-title">{{item.type}}</div>
              <div class="price-info flex">
                <div>
                  <span class="current-price-wrapper">
                    <span v-if="item.tag.length">
                      <Tag color="blue">{{getTag(item.tag,0)}}</Tag>
                      <Tag color="green">{{getTag(item.tag,1)}}</Tag>
                    </span>
                  </span>
                  <span v-if="item.tel.length>0">
                    <span class="old-price">
                      <span class="phone">电话:</span>
                      {{getPhone(item.tel)}}
                    </span>
                  </span>
                  <span v-else>
                    <span class="old-price">暂无联系方式</span>
                  </span>
                </div>
                <div v-if="item.address.length>0">
                  <span class="sold bottom-right-info">{{item.address}}</span>
                </div>
                <div v-else>
                  <span class="sold bottom-right-info">暂无提供地址</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import util from "../../assets/js/util";
let iTime;
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      searchResult: [],
      searchText: "景点",
      num: 0
    };
  },
  methods: {
    searchResultss(val, index) {
      clearTimeout(iTime);

      iTime = setTimeout(() => {
        this.searchResults(val, index);
      }, 200);
    },
    // 关键词搜索
    searchResults(val, index) {
      this.num = index;
      this.$axios
        .req(`results?city=${this.$store.state.city}&keyword=${val}`)
        .then(res => {
          if (res.code === 200) {
            this.searchResult = res.data.pois.slice(0, 6);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 电话处理
    getPhone(tel) {
      let phone = tel.split(";");
      return phone[0];
    },
    // 标签处理
    getTag(tag, index) {
      let tags = tag.split(",");
      return tags[index];
    }
  },

  beforeMount() {},
  mounted() {
    setTimeout(() => {
      this.searchResults("景点", 0);
    }, 800);
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
/deep/ .ivu-tag {
  text-align: center !important;
}

.container {
  max-width: 1190px;
  height: auto;
  min-width: 1080px;

  margin: 0 auto;

  .container-nav {
    width: 100%;
    height: 44px;
    line-height: 44px;
    box-sizing: border-box;
    font-size: 14px;
    color: #fff;
    border-radius: 5px 5px 0 0;
    background-color: rgb(190, 164, 116);
    background-image: linear-gradient(
      to right,
      rgb(194, 176, 142) 3%,
      rgb(190, 164, 116) 100%
    );

    .content {
      width: 95%;
      height: auto;
      margin: 0 auto;
      justify-content: flex-start;

      .mf-shang-hei-regular {
        font-family: "MFShangHei-Regular" !important;
        font-size: 18px;
        margin-right: 10px;
      }

      .nav-item {
        padding: 0 5px;
        cursor: pointer;
        text-transform: uppercase;
        position: relative;
      }

      .navs-item {
        display: none;
        position: absolute;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 7px solid #fff;
        border-radius: 3px 3px 0 0;
        content: " ";
        width: 2px;
        height: 0;
        top: 37px;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }

  .quality-area {
    width: 100%;
    height: auto;
    /*padding: 11px 10px 10px;*/

    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-sizing: border-box;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    justify-content: flex-start;
    flex-wrap: wrap;

    .quality-item {
      width: 33.3%;

      padding: 10px;
      box-sizing: border-box;
      background: #fff;

      .quality-img {
        height: 208px;
        margin-bottom: 11px;
        cursor: pointer;

        img {
          width: 100%;
          height: 220px;
        }
      }

      .poi-info {
        text-align: left;

        .title {
          font-size: 16px;
          color: #222;
          height: 22px;
          line-height: 22px;
          margin: 18px 0 8px 0;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;
        }

        .sub-title {
          font-size: 12px;
          color: #999;
          line-height: 18px;
          height: 18px;
          margin-bottom: 7px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .price-info {
          display: flex;
          height: 27px;
          overflow: hidden;
          margin-bottom: 10px;

          .current-price-wrapper {
            cursor: pointer;

            .price-symbol {
              font-size: 14px;
              color: #be9e4d;
              font-weight: 500;
            }

            .numfont {
              font-family: "numbers" !important;
              letter-spacing: -0.5px;
            }
          }

          .old-price {
            font-size: 12px;
            color: #999;
            margin-left: 10px;
            /*text-decoration: line-through;*/
            .phone {
              margin-right: 3px;
              color: #ec986d;
            }
          }

          .bottom-right-info {
            font-size: 12px;
            color: #999;

            margin-top: 10px;
          }
        }
      }
    }
  }
  .show-navs {
    display: block !important;
  }
}
</style>
