<template>
  <div class="container" v-if="shopDe.type">
    <Crumb :shopName="this.$route.query.name" :type="shopDe.type[0]"></Crumb>
    <PioDetails :shopDe="shopDe"></PioDetails>
    <div class="center-content flex">
      <div class="left-content">
        <LeftDe :shopMore="shopMore"></LeftDe>
      </div>
      <div class="right-content">
        <Map></Map>
        <Recommend></Recommend>
      </div>
    </div>
  </div>
</template>

<script>
import Crumb from "../../components/search/Crumb";
import PioDetails from "../../components/details/PioDetails";
import LeftDe from "../../components/details/LeftDe";
import Recommend from "../../components/search/Recommend";
import Map from "../../components/details/Map";
import util from "../../assets/js/util";

export default {
  data() {
    return {
      shopDe: {},
      shopMore: []
    };
  },
  components: {
    Crumb,
    PioDetails,
    LeftDe,
    Recommend,
    Map
  },
  props: {},
  methods: {
    products() {
      this.$api
        .products(this.$route.query.name, this.$store.state.city)
        .then(res => {
          if (res.code === 200) {
            this.shopDe = res.data.product;
            this.$store.state.location = this.shopDe.location.split(",");
            this.$store.state.shopName = this.shopDe.name;
            this.shopDe.type = this.shopDe.type.split(";");
            this.shopMore = res.data.more;
            this.shopMore.map(item => {
              if (item.tag.length > 0) {
                item.tag = item.tag.split(",");
              }
              item.type = item.type.split(";");
            });
            this.searchResults(this.shopDe.type[0]);
            this.shopDe.price = this.getRandomInt();
          } else if (res.code === 500) {
            this.$Message.warning(res.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 取出价格随机数
    getRandomInt() {
      return util.getRandomInt(10, 400);
    },
    // 关键词搜索
    searchResults(val) {
      this.$axios
        .req(`results?city=${this.$store.state.city}&keyword=${val}`)
        .then(res => {
          if (res.code === 200) {
            this.$store.state.recommendList = [];
            res.data.pois.map(item => {
              if (item.biz_ext.rating >= 4.5) {
                this.$store.state.recommendList.push(item);
              }
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.products();
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  max-width: 1190px;
  height: 100%;
  min-width: 1080px;
  margin: 20px auto;
  .center-content {
    align-items: flex-start;
    .left-content {
      margin-top: 34px;
      padding: 20px;
      flex: 1;
    }
    .right-content {
      width: 230px;
      padding-top: 76px;
    }
  }
}
</style>