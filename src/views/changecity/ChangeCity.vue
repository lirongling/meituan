<template>
  <div>
    <div class="container">
      <div class="op-area flex">
       <SelectCity></SelectCity>
      </div>

    </div>
  </div>
</template>
<script>

import SelectCity from '../../components/changeCity/SelectCity'
export default {
  name: "",
  components: {
    SelectCity
  },
  props: {},
  data() {
    return {
      
    };
  },
  methods: {
   
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {
  },
  directives: {}
};
</script>

<style scoped lang="scss">

.container {
  width: 1190px;
  box-sizing: border-box;
  margin: 20px auto 0;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  min-height: 1080px;
  padding: 20px;
  .op-area {
    padding-bottom: 20px;
    border-bottom: 1px solid #e5e5e5;
    justify-content: flex-start;

  }
}
</style>
