<template>
  <div id="app">
    <router-view />
    <BackTop :height="100" :bottom="200">
      <div class="top__">返回顶端</div>
    </BackTop>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
  beforeMount() {
    this.$store.state.userInfo = JSON.parse(localStorage.getItem("loginMsg"));
    this.$store.state.city = JSON.parse(localStorage.getItem("city"));
  },
  mounted() {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>
<style lang="scss">
#app {
  font-size: 16px;
}
li {
  list-style: none;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.top__ {
  padding: 10px;
  background: rgba(0, 153, 229, 0.7);
  color: #fff;
  text-align: center;
  border-radius: 2px;
}
</style>
