<template>
  <div>
    <div class="container">1</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotList: []
    };
  },
  components: {},
  props: {},
  methods: {
    // 获取本地热门搜索
    hotSearch() {
      this.$axios
        .req(`hotPlace?city=${this.$store.state.city}`)
        .then(res => {
          console.log(res);
          if (res.code === 200) {
            this.hotList = res.data.result;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.hotSearch();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 16px 20px 0;
  width: 230px;
  box-sizing: border-box;
}
</style>