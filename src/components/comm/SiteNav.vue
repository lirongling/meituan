<template>
  <div>
    <div class="content flex">
      <div class="content-left flex">
        <div class="hotel">
          <div class="title">酒店旅游</div>
          <div class="defalut flex">
            <div class="item" v-for="(item,index) in hotelList" :key="index">{{item}}</div>
          </div>
        </div>
        <div class="food">
          <div class="title">酒店旅游</div>
          <div class="defalut flex">
            <div class="item" v-for="(item,index) in foodList" :key="index">{{item}}</div>
          </div>
        </div>
        <div class="movie">
          <div class="title">看电影</div>
          <div class="defalut flex movie-de">
            <div class="item item1" v-for="(item,index) in movieList" :key="index">{{item}}</div>
          </div>
        </div>
      </div>
      <div class="content-right flex">
        <div class="title">手机应用</div>
        <div class="right_img flex">
          <div>
            <img
              class="appicon"
              src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
              title="美团app"
              alt="美团app"
            />
          </div>
          <div>
            <img
              class="appicon"
              src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
              title="外卖app"
              alt="外卖app"
            />
          </div>
          <div>
            <img
              class="appicon"
              src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
              title="民宿app"
              alt="民宿app"
            />
          </div>
          <div>
            <img
              class="appicon"
              src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
              title="点评app"
              alt="点评app"
            />
          </div>
          <div>
            <img
              class="appicon"
              src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
              title="猫眼app"
              alt="猫眼app"
            />
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
      hotelList: [
        "国际机票",
        "火车票",
        "民宿",
        "经济型酒店",
        "主题酒店",
        "公寓",
        "豪华酒店",
        "客栈",
        "青年旅社",
        "度假酒店",
        "别墅",
        "农家院"
      ],
      foodList: ["烤鱼", "特色小吃", "烧烤", "自助餐", "火锅", "代金券"],
      movieList: [
        "热映电影",
        "热门影院",
        "热映电影口碑榜",
        "最受期待电影",
        "国内票房榜",
        "北美票房榜",
        "电影排行榜"
      ]
    };
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
img {
  width: 80px;
  margin: 10px;
}
.content {
  width: 95%;
  margin: 0 auto;
  margin: 20px 30px;
  align-items: flex-start;
  .content-left,
  .content-right {
    flex: 1.1;
    justify-content: space-around;
    align-items: flex-start;
  }
  .content-right {
    flex: 1;
  }
  .title {
    width: 100%;
    text-align: center;
    margin-bottom: 16px;
    font-size: 14px;
    color: #222222;
    font-weight: 500;
  }
  .content-left {
    align-items: flex-start;
    .hotel {
      width: 210px;
    }

    .defalut {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 60px;
        text-align: center;
        margin: 8px 0;
      }
      .item1 {
        width: 100px;
      }
    }

    .food {
      width: 130px;
    }
    .movie {
      width: 100px;
    }
  }
  .movie-de {
    justify-content: center;
  }
  .item:hover {
    color: rgb(236, 141, 17);
    cursor: pointer;
  }
  .right_img {
    justify-content: center;
    margin-top: 10px;
  }
}
</style>