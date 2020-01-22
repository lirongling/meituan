<template>
  <div>
    <div class="container">
      <div class="op-area flex">
        <SelectCity></SelectCity>
      </div>
      <HotCity></HotCity>
      <Anchor></Anchor>
    </div>
  </div>
</template>
<script>
import SelectCity from "../../components/changeCity/SelectCity";
import HotCity from "../../components/changeCity/HotCity";
import Anchor from "../../components/changeCity/Anchor";
export default {
  name: "",
  components: {
    SelectCity,
    HotCity,
    Anchor
  },
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.container {
  width: 1190px;
  max-width: 1190px;
  min-width: 1080px;
  box-sizing: border-box;
  margin: 20px auto 0;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  min-height: 1080px;
  padding: 20px;
  .op-area {
    padding: 10px 0;
    border-bottom: 1px solid #e5e5e5;
    justify-content: flex-start;
  }
}
</style>
