<template>
  <div>
    <div class="container">
      <div class="hot-city flex"></div>
    </div>
  </div>
</template>

<script>
import city from "../../assets/js/city";
export default {
  data() {
    return {
      hotCity: city.data.hotCities,
      recentlyCity: ""
    };
  },
  components: {},
  props: {},
  methods: {},
  beforeMount() {
    this.recentlyCity = this.$store.state.city;
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>