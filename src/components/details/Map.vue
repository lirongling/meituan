<template>
  <div class="map-container" id="boxFixed" :class="{'is_fixed' : isFixed}">
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false,
      offsetTop: 0
    };
  },
  components: {},
  props: {},
  methods: {
    initHeight() {
      // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //如果被卷曲的高度大于吸顶元素到顶端位置 的距离
      this.isFixed = scrollTop + 218 > this.offsetTop ? true : false;
    },
    getMap(val, name) {
      var map = new AMap.Map("container", {
        resizeEnable: true,
        center: val,
        zoom: 13
      });

      var marker = new AMap.Marker({
        position: map.getCenter(),
        icon:
          "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
        offset: new AMap.Pixel(-13, -40)
      });

      marker.setMap(map);

      // 设置鼠标划过点标记显示的文字提示
      marker.setTitle(name);

      // 设置label标签
      // label默认蓝框白底左上角显示，样式className为：amap-marker-label
      marker.setLabel({
        offset: new AMap.Pixel(0, -40), //设置文本标注偏移量
        content: `<div class='info'>${name}</div>`, //设置文本标注内容
        direction: "center" //设置文本标注方位
      });
    }
  },
  //回调中移除监听
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
    this.$nextTick(() => {
      //获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
      this.offsetTop = document.querySelector("#boxFixed").offsetTop;
    });
    setTimeout(() => {
      this.getMap(this.$store.state.location, this.$store.state.shopName);
    }, 500);
    this.getMap();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.is_fixed {
  position: fixed;
  top: 0;
  z-index: 999;
}
.map-container {
  background-color: rgb(229, 227, 223);
  overflow: hidden;
  transform: translateZ(0px);
  height: 220px;
  width: 230px;
  border-radius: 4px;
  margin-bottom: 10px;
  border: 1px solid #e5e5e5;
  #container {
    height: 100%;
    width: 100%;
  }
}
/deep/.amap-icon img {
  width: 35px;
}

/deep/.amap-marker-label {
  border: 0px solid blue;
  border-radius: 5px;
  background: #ece8e8;
}

.info {
  position: relative;
  top: 0;
  right: 0;
  min-width: 0;
  border: #e5e5e5 0px solid;
}
</style>