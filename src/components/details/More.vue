<template>
  <div>
    <div class="title">{{shopDe.name}}</div>
    <div class="type flex">
      <div v-for="(item,index) in shopDe.tag" :key="index">
        <Tag :color="color[index]" v-if="index<7">{{item}}</Tag>
      </div>
    </div>
    <div
      v-if="shopDe.address.length>0"
      class="address ellipsis"
    >地址：{{shopDe.adname}}{{shopDe.address}}</div>
    <div v-else class="address ellipsis">地址：暂无提供地址</div>
    <div class="type flex">
      类型：
      <div v-for="(item,index) in shopDe.type" :key="index" class="types">
        <Tag :color="color[index]" :checkable="true" @on-change="jumpSearchs(item)">{{item}}</Tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: [
        "primary",
        "magenta",
        "volcano",
        "cyan",
        "blue",
        "geekblue",
        "purple"
      ]
    };
  },
  components: {},
  props: {
    shopDe: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    // 更多相同类别
    jumpSearchs(val) {
      this.$router.push({ name: "search", query: { searchText: val } });
    }
  },
  beforeMount() {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.types {
  cursor: pointer;
}
.title {
  font-weight: 500;
  font-size: 16px;
  color: #333;
}
.type {
  justify-content: flex-start;
  margin: 5px 0;
}
.address {
  margin: 5px 0;
  color: #333;
  font-size: 14px;
}
</style>