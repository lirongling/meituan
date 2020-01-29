<template>
  <div>
    {{shopDe}}
    <div class="title">{{shopDe.name}}</div>
    <div class="type flex">
      <div v-for="(item,index) in shopDe.tag" :key="index">
        <Tag :color="color[index]">{{item}}</Tag>
      </div>
    </div>
    <div class="title">{{shopDe.name}}</div>
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
    // 标签处理
    getTag() {
      this.shopDe.tag = this.shopDe.tag.split(",");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>