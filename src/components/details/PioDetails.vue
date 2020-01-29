<template>
  <div>
    <div class="poi-detail" v-if="shopDe.name">
      <Card style="width:100%">
        <div class="wrapper felx">
          <div class="seller-info-head">
            <div class="seller-name">{{shopDe.name}}</div>
            <div class="row flex">
              <div class="flex" v-if="shopDe.biz_ext.rating.length>0">
                <div class="rate-stars">
                  <Rate allow-half disabled :value="shopDe.biz_ext.rating*1" />
                </div>
                <div class="score">{{shopDe.biz_ext.rating}}分</div>
                <div class="score">￥{{shopDe.price}}起</div>
              </div>
              <div v-else>暂无评价</div>
              <div class="share-seller flex">
                <i class="iconfont icon-wechat wechat"></i>
                <div>分享到微信</div>
              </div>
            </div>
            <Divider />
            <div class="seller-info-body flex">
              <div class="address">地址：</div>
              <div v-if="shopDe.address.length>0">{{shopDe.adname}}{{shopDe.address}}</div>
              <div v-else>暂无地址</div>
            </div>
            <div class="seller-info-body flex">
              <div class="address">电话：</div>
              <div v-if="shopDe.tel.length>0">{{shopDe.tel}}</div>
              <div v-else>暂无联系方式</div>
            </div>
            <div class="seller-info-body flex">
              <div class="address">网址：</div>
              <a v-if="shopDe.website.length>0" @click="jumpWeb(shopDe.website)">查看官网</a>
              <div v-else>暂无数据</div>
            </div>
          </div>
          <div class="seller-view">
            <div v-if="shopDe.photos.length>1">
              <Carousel autoplay v-model="value1" loop>
                <CarouselItem v-for="(item,index) in shopDe.photos" :key="index">
                  <img :src="item.url" />
                </CarouselItem>
              </Carousel>
            </div>
            <div v-else-if="shopDe.photos.length===1">
              <img :src="shopDe.photos[0].url" alt />
            </div>
            <div v-else>
              <img
                src="https://img.meituan.net/phoenix/37ac7809abcd942e05aeb0e3add1fcba294604.jpg@740w_416h_1e_1c"
                alt
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0
    };
  },
  components: {},
  props: {
    shopDe: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    // 跳转到官网
    jumpWeb(url) {
      window.open(`//${url}/`);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
// /deep/ .ivu-carousel-arrow {
//   top: 32%!important;
// }
/deep/ .ivu-divider-horizontal {
  margin: 10px 0;
}
.poi-detail {
  padding: 20px;
  .wrapper {
    display: flex;
    align-items: flex-start;
  }
  .seller-info-head {
    flex: 1;
    padding-right: 20px;
    .share-seller {
      color: #666;
      font-size: 12px;
      line-height: 20px;
      .wechat {
        width: 20px;
        height: 20px;
      }
    }
    .seller-name {
      font-size: 26px;
      font-weight: 500;
      color: #222222;
    }
    .row {
      .score {
        font-size: 14px;
        color: #666666;
        line-height: 14px;
        padding-left: 6px;
      }
    }
    .seller-info-body {
      justify-content: flex-start;
      padding: 10px 0;
      font-size: 14px;
      color: #666;
      padding: 7px 0;
    }
  }
  .seller-view {
    width: 383px;
    height: 240px;
    overflow: hidden;
    img {
      width: 101%;
      height: 240px;
    }
  }
}
</style>