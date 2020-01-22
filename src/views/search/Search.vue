<template>
  <div>
    <div class="container">
      <Crumb :shopName="this.$route.query.searchText"></Crumb>
      <div class="center-content flex">
        <div class="left-content">
          <FilterBox></FilterBox>
          <SearchList></SearchList>
        </div>
        <div class="right-content">
          <Map></Map>
          <Recommend></Recommend>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Crumb from "../../components/search/Crumb";
import FilterBox from "../../components/search/Filter";
import SearchList from "../../components/search/SearchList";
import Map from "../../components/search/Map";
import Recommend from "../../components/search/Recommend";
export default {
  data() {
    return {
      searchText: ""
    };
  },
  components: {
    Crumb,
    FilterBox,
    SearchList,
    Map,
    Recommend
  },
  props: {},
  methods: {},
  beforeMount() {
    this.searchText = this.$route.query.searchText;
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
  }
  .left-content {
    flex: 1;
  }
  .right-content {
    float: left;
    width: 230px;
    margin-left: 10px;
  }
}
</style>