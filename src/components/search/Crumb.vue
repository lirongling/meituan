<template>
  <div>
    <div class="crumb flex">
      <Breadcrumb>
        <BreadcrumbItem to="/">{{$store.state.city}}</BreadcrumbItem>
        <a @click="jumpSearchs(type)">
          <BreadcrumbItem v-if="type.length>0">{{type}}</BreadcrumbItem>
        </a>
        <BreadcrumbItem>{{shopName}}</BreadcrumbItem>
      </Breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: ""
    };
  },
  components: {},
  props: {
    shopName: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    }
  },
  methods: {
    // 更多相同类别
    jumpSearchs(val) {
      this.$router.push({ name: "search", query: { searchText: val } });
    }
  },
  beforeMount() {
    // this.searchText = this.$route.query.searchText;
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.crumb {
  margin: 10px 0;
  color: #222;
  font-size: 14px;

  justify-content: flex-start;
  .crumb-item {
    text-decoration: none;
    font-size: 12px;
    color: #222;
    margin: 0 5px;
  }
}
</style>