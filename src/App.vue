<template>
  <div id="app">
    <router-view />
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
  },
  mounted() {},
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
</style>
