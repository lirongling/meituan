<template>
  <div>
    <div class="crumb flex">
      <Breadcrumb>
        <BreadcrumbItem to="/">{{$store.state.city}}</BreadcrumbItem>
        <BreadcrumbItem>{{shopName}}</BreadcrumbItem>
      </Breadcrumb>
      <!-- <div class="crumb-item">{{$store.state.city}}</div>
      <Icon type="ios-arrow-forward" />
      <div class="crumb-item">{{searchText}}</div>-->
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
    }
  },
  methods: {},
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