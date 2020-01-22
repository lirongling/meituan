<template>
  <div class="container">
    <Crumb :shopName="this.$route.query.name"></Crumb>
    <PioDetails :shopDe="shopDe"></PioDetails>
  </div>
</template>

<script>
import Crumb from "../../components/search/Crumb";
import PioDetails from "../../components/details/PioDetails";
export default {
  data() {
    return {
      shopDe: []
    };
  },
  components: {
    Crumb,
    PioDetails
  },
  props: {},
  methods: {
    products() {
      this.$api
        .products(this.$route.query.name, this.$store.state.city)
        .then(res => {
          if (res.code === 200) {
            console.log(res);
          } else if (res.code === 500) {
            this.$Message.warning(res.msg);
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
}
</style>