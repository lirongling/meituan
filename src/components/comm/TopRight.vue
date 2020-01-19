<template>
  <div>
    <ul class="content flex">
      <li class="content-item flex my">
        <span class="item-name">我的美团</span>
        <ul class="details my-de">
          <li class="details-item">我的订单</li>
          <li class="details-item">我的收藏</li>
          <li class="details-item">抵用券</li>
          <li class="details-item">账户设置</li>
        </ul>
      </li>
      <li class="content-item flex">
        <span class="item-name">手机APP</span>
      </li>
      <li class="content-item flex shop-center">
        <span class="item-name">商家中心</span>
        <ul class="shop-de details">
          <li class="details-item">美团餐饮商户中心</li>
          <li class="details-item">登录商家中心</li>
          <li class="details-item">美团智能收银</li>
          <li class="details-item">我想合作</li>
          <li class="details-item">手机免费开店</li>
          <li class="details-item">餐饮代理商招募</li>
          <li class="details-item">商家申请开票</li>
          <li class="details-item">免费合作美团排队</li>
        </ul>
      </li>
      <li class="content-item flex rules">
        <span class="item-name">美团规则</span>
        <ul class="details rules-de">
          <li class="details-item">我的订单</li>
          <li class="details-item">我的收藏</li>
          <li class="details-item">抵用券</li>
          <li class="details-item">账户设置</li>
        </ul>
      </li>
      <li class="content-item flex nav">
        <span class="item-name">网站导航</span>
        <div class="nav-de details">
          <SiteNav></SiteNav>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import SiteNav from "../../components/comm/SiteNav";
export default {
  data() {
    return {};
  },
  components: {
    SiteNav
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.content {
  width: 390px;
  height: 40px;
  position: relative;
  .content-item {
    width: 78px;
    list-style: none;
    height: 40px;
    color: #999;
    justify-content: center;
    position: relative;
  }
}
.my:hover,
.shop-center:hover,
.rules:hover,
.nav:hover {
  background: white;
  box-shadow: -3px 0px 5px rgba(0, 0, 0, 0.1), 0px -3px 5px rgba(0, 0, 0, 0.1),
    0px 0px 0px rgba(0, 0, 0, 0), 3px 0px 5px rgba(0, 0, 0, 0.1);
}
// .my:hover,
// .shop-center:hover, {

// }
.my:hover > .my-de {
  display: block;
}
.nav:hover > .nav-de {
  display: block;
}
.my-de,
.rules-de {
  width: 78px;
}
.shop-center:hover > .shop-de {
  display: block;
}
.rules:hover > .rules-de {
  display: block;
}
.details {
  display: none;
  text-align: center;
  position: absolute;
  background: white;
  top: 40px;
  right: 0;
  z-index: 99999;
  background: white;
  border-radius: 0 0 5px 5px;
  box-shadow: -2px 0 0 rgba(0, 0, 0, 0.1),
    //左边阴影
      0 0 0 rgba(0, 0, 0, 0.1),
    //顶部阴影
      0 2px 0 rgba(0, 0, 0, 0.1),
    //底部阴影
      2px 0 0 rgba(0, 0, 0, 0.1); //右边阴影

  // box-showdow-only-top: 0px 0px 2px rgb(158, 158, 158);
}
.shop-de {
  width: 140px;
}
.nav-de {
  max-width: 1190px;
  height: auto;
  width: 1190px;
  min-width: 1080px;
}
.item-name:hover,
.details-item:hover {
  color: rgb(236, 141, 17);
  cursor: pointer;
}
.details-item {
  height: 40px;
  line-height: 40px;
}
.resr {
  width: 100px;
  height: 200px;
  background: rgb(192, 16, 16);
  position: absolute !important;
  left: 0;
  z-index: 9999999 !important;
  top: 44px;
  border: teal 1px solid !important;
}
</style>