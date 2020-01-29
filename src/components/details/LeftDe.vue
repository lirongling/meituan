<template>
  <div>
    <div class="container">
      <div class="comment-title-bar flex">
        <div class="comment-count">网友评论</div>
        <div class="comment-sort flex">
          <div class="active">默认排序</div>
          <div>时间排序</div>
        </div>
      </div>
      <div class="comment-box">
        <Card style="width:100%">暂无数据</Card>
      </div>
      <div class="comment-title-bar flex">
        <div class="comment-count">相关推荐</div>
        <div class="comment-sort flex"></div>
      </div>
      <div class="comment-box comment-more">
        <div class="more" v-for="(item,index) in shopMore" :key="index">
          <Card style="width:100%" :bordered="false">
            <More :shopDe="item"></More>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import More from "../../components/details//More";
export default {
  data() {
    return {};
  },
  components: {
    More
  },
  props: {
    shopMore: {
      type: Array,
      default: () => []
    }
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.comment-title-bar {
  height: 26px;
  padding: 8px 0px;
  display: flex;
  .comment-count {
    width: auto;
    height: 100%;
    font-size: 20px;
    font-weight: 500;
    color: #222222;
    line-height: 26px;
  }
  .comment-sort {
    display: flex;
    height: 100%;
    div {
      font-size: 12px;
      font-weight: normal;
      color: #999999;
      cursor: pointer;
      padding-top: 10px;
      margin-left: 15px;
    }
  }
}
.comment-box {
  margin: 15px 0;
  padding: 15px 0;
}
.comment-more {
  background: white;
  border-radius: 5px;
}
.more {
  padding: 10px 10px;
}
</style>