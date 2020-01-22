<template>
  <div class="default-list-item flex">
    <div class="img">
      <img :src="ShopDe.photos[0].url" v-if="ShopDe.photos.length>0" />
      <img
        src="https://img.meituan.net/phoenix/37ac7809abcd942e05aeb0e3add1fcba294604.jpg@740w_416h_1e_1c"
        v-else
      />
    </div>
    <div class="list-item-desc">
      <div class="list-item-desc-top">
        <div class="list-title">{{ShopDe.name}}</div>
        <div class="item-eval-info flex">
          <div class="stars-wrapper">
            <Rate allow-half disabled :value="ShopDe.biz_ext.rating*1" />
          </div>
          <div class="rate-stars-dark">{{getSore(ShopDe.biz_ext.rating*1)}}</div>
          <div class="rate-title">{{ShopDe.biz_ext.rating}}分</div>
          <div class="highlight">{{ShopDe.adcode}}人评价</div>
        </div>
        <div class="address-info flex">
          <div class="cate-info ellipsis">{{ShopDe.type}}</div>
          <div class="address ellipsis">{{ShopDe.address}}</div>
          <div class="item-site-map flex">
            <Icon type="md-navigate" color="#FFCB00" size="15" />
            <span>查看地图</span>
          </div>
        </div>
        <div class="item-bottom-info flex">
          <div>￥{{getRandomInt()}}起</div>
          <div class="list-item-tag flex" v-if="ShopDe.tag.length>0">
            <div v-for="(item,index) in getTag(ShopDe.tag)" :key="index">
              <Tag color="green">{{item}}</Tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import util from "../../assets/js/util";
export default {
  data() {
    return {};
  },
  components: {},
  props: {
    ShopDe: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    // 分数判定
    getSore(sore) {
      if (sore >= 4.5) {
        return "很好";
      } else if (sore >= 4) {
        return "好";
      }
    },
    // 取出价格随机数
    getRandomInt() {
      return util.getRandomInt(10, 400);
    },
    // 判断是否是酒店
    isHotel(val) {
      return JSON.stringify(val).includes("酒店");
    },
    // 标签处理
    getTag(tag, index) {
      let tags = tag.split(",");
      return tags;
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.ellipsis {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.default-list-item {
  min-height: 125px;
  justify-content: flex-start;
  align-items: flex-start;
  .img {
    height: 125px;
    width: 220px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }
  .list-item-desc {
    padding-left: 20px;
    font-size: 12px;
    color: #666;
    flex: 1;
    .list-item-desc-top {
      padding-bottom: 10px;
      .list-title {
        font-weight: 500;
        font-size: 16px;
        color: #333;
      }
      .item-eval-info {
        justify-content: flex-start;
        margin-top: 6px;
        .stars-wrapper {
          margin-left: -2px;
          /deep/ .ivu-rate-star {
            font-size: 16px;
          }
        }
        .rate-stars-dark,
        .rate-title {
          color: #333;
          margin-right: 8px;
        }
        .highlight {
          color: #ff9900;
        }
      }
      .address-info {
        justify-content: flex-start;
        margin: 5px 0;
        .cate-info {
          margin-right: 10px;
          max-width: 110px;
        }
        .address {
          margin-right: 10px;
          max-width: 460px;
        }
        .item-site-map {
          font-weight: 500;
          color: #222222;
          cursor: pointer;
        }
      }
      .item-bottom-info {
        // line-height: 20px;
        height: 40px;
        margin-top: 6px;
        .list-item-tag {
          max-width: 290px;
          height: 28px;
          overflow: hidden;
        }
      }
    }
  }
}
</style>