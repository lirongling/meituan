<template>
  <div class="container">
   <div class="container-top">
     <Top></Top>
   </div>
    <div class="container-center">
      <RegisterCenter></RegisterCenter>
    </div>
    <div class="container-bottom">
      <RegisterBottom></RegisterBottom>
    </div>
  </div>

</template>

<script>
    import Top from '../../components/register/Top'
    import RegisterCenter from '../../components/register/Center'
    import RegisterBottom from '../../components/register/RegisterBottom'
        export default {
        name: "",
        components: {
            Top,
            RegisterCenter,
            RegisterBottom,
        },
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

</style>
