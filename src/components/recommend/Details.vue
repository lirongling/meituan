<template>
  <div>
    <div class="recommend-item">
      <div class="img-box">
        <img :src="ShopDe.photos[0].url" v-if="ShopDe.photos.length>0" />
        <img
          src="https://img.meituan.net/phoenix/37ac7809abcd942e05aeb0e3add1fcba294604.jpg@740w_416h_1e_1c"
          v-else
        />
      </div>
      <div class="info-box">
        <div class="title">{{ShopDe.name}}</div>
        <div class="score-line flex">
          <div class="score">
            <Rate allow-half disabled :value="ShopDe.biz_ext.rating*1" />
          </div>
          <div class="comment-number">{{ShopDe.adcode}}人评价</div>
        </div>
      </div>
      <div v-if="ShopDe.address.length>0" class="desc-line">{{ShopDe.address}}</div>
      <div v-else class="desc-line">暂无提供地址</div>
      <div class="bottom-line">
        <span>
          <span class="yuan">￥</span>
          <span class="price-number numfont">{{getRandomInt()}}</span>
          <span class="price-desc">起</span>
        </span>
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
    }
  },
  methods: {
    // 取出价格随机数
    getRandomInt() {
      return util.getRandomInt(10, 400);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.recommend-item {
  margin-bottom: 20px;
  .img-box {
    width: 100%;
    border-radius: 4px;
    height: 125px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .info-box {
    position: relative;
    margin-top: 10px;
    .title {
      font-size: 14px;
      color: #222222;
      line-height: 20px;
      width: 100%;
      margin: 0;
      font-weight: 500;
    }
    .score-line {
      justify-content: flex-start;
      .score {
        /deep/.ivu-rate-star {
          font-size: 12.2px;
        }
      }
      .comment-number {
        font-size: 12px;
        color: #999;
        height: 24px;
        line-height: 24px;
        margin-left: 10px;
      }
    }
  }
  .desc-line {
    font-size: 12px;
    color: #999999;
    width: 100%;
    height: 18px;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 4px;
  }
  .bottom-line {
    color: #ff6600;
    .yuan {
      font-size: 14px;
      font-weight: 700;
    }
    .price-number {
      font-size: 22px;
      letter-spacing: -0.5;
    }
    .price-desc {
      font-size: 12px;
      margin-left: 4px;
      font-weight: 700;
    }
  }
}
</style>