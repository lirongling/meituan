<template>
  <div>
    <div class="container">
      <Crumb :shopName="this.$route.query.searchText"></Crumb>
      <div class="center-content flex">
        <div class="left-content">
          <FilterBox></FilterBox>
          <SearchList :searchResult="searchResult"></SearchList>
        </div>
        <div class="right-content">
          <Map :searchResult="searchResult"></Map>
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
      searchText: "",
      searchResult: []
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
  methods: {
    // 关键词搜索
    searchResults() {
      this.$axios
        .req(
          `results?city=${this.$store.state.city}&keyword=${this.$route.query.searchText}`
        )
        .then(res => {
          if (res.code === 200) {
            this.searchResult = res.data.pois;
            this.$store.state.searchResult = res.data.pois;
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
    this.searchText = this.$route.query.searchText;
  },
  mounted() {
    setTimeout(() => {
      this.searchResults();
    }, 400);
  },
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