<template>
  <div>
    <div class="container">
      <div class="content">
        <p class="copyright">
          ©<a class="f1" href="https://www.meituan.com">meituan.com</a>&nbsp;
          <a class="f1" target="_blank" href="http://www.miibeian.gov.cn/">京ICP证070791号</a>&nbsp;
          <span class="f1">京公网安备11010502025545号</span>
        </p>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "",
        components: {},
        props: {},
        data() {
            return {}
        },
        methods: {},
        mounted() {

        },
        created() {

        },
        filters: {},
        computed: {},
        watch: {},
        directives: {}
    }
</script>

<style scoped lang="scss">
  .container {
    border-top: 1px solid #EEE;
    padding-top: 20px;
    text-align: center;

    .content {
      min-width: 980px;
      color: #666;
      width: 980px;
      margin: 0 auto 20px;
      text-align: center;

      .copyright {
        font-size: 13px;
        font-family: initial;
      }
      a{
        color: #666;
      }
    }

  }
</style>
