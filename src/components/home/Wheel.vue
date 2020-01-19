<template>
  <div>
    <Carousel autoplay v-model="value2" loop>
      <CarouselItem v-for="(item,index) in images" :key="index">
        <img :src="item">
      </CarouselItem>
    </Carousel>
  </div>

</template>

<script>
    export default {
        name: "",
        components: {},
        props: {},
        data() {
            return {
                value2: 0,
                images:[
                    'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
                    'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
                    'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
                    'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
                ]
            }
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
img{
  width: 100%;
}
  /deep/.ivu-carousel-dots{
    z-index: 3;
  }
</style>
