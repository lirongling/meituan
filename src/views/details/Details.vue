<template>
  <div class="container">
    <Crumb :shopName="this.$route.query.name"></Crumb>
    <PioDetails :shopDe="shopDe"></PioDetails>
    <div class="center-content flex">
      <div class="left-content">
        <LeftDe :shopMore="shopMore"></LeftDe>
      </div>
      <div class="right-content">11</div>
    </div>
  </div>
</template>

<script>
import Crumb from "../../components/search/Crumb";
import PioDetails from "../../components/details/PioDetails";
import LeftDe from "../../components/details/LeftDe";
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
    LeftDe
  },
  props: {},
  methods: {
    products() {
      this.$api
        .products(this.$route.query.name, this.$store.state.city)
        .then(res => {
          if (res.code === 200) {
            console.log(res.data);
            this.shopDe = res.data.product;
            this.shopMore = res.data.more;
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