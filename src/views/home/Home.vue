<template>
  <div id="home">
    <div class="home-top">
      <div class="content">
        <Links></Links>
      </div>
    </div>
    <div class="banner-container flex">
      <div class="banner-left">
        <Classify></Classify>
      </div>
      <div class="banner-center ">
        <div class="banner-top flex">
          <div class="wheel">
            <Wheel></Wheel>
          </div>
          <div class="shadow" v-if="showImg">
            <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg">
          </div>
        </div>
        <div class="banner-bottom flex">
          <div class="banner-bottom-left flex">
            <div> <img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png"></div>
            <div> <img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"></div>
          </div>
          <div class="banner-bottom-right" v-if="showImg">
            <img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg">
          </div>

        </div>

      </div>
      <div class="banner-right">
      <Logincard></Logincard>
      </div>
    </div>
    <div class="scenes-container">
      <Scenes></Scenes>
    </div>


  </div>
</template>

<script>
    import Clearfix from '../../components/home/Clearfix'
    import Links from '../../components/home/Links'
    import Classify from '../../components/home/Classify'
    import Wheel from '../../components/home/Wheel'
    import Logincard from '../../components/home/Logincard'
    import Scenes from '../../components/home/Scenes'

    export default {
        data() {
            return {
                showImg:true
            };
        },
        components: {
            Clearfix,
            Links,
            Classify,
            Wheel,
            Logincard,
            Scenes,
        },
        methods: {},
        mounted() {
            window.onresize = () => {
                if (document.body.clientWidth < 1190) {
                    this.showImg=false
                }else{
                    this.showImg=true
                }
            }
        },
        watch: {},
        computed: {}
    };
</script>

<style scoped lang='scss'>
  #home {
    background: #F8F8F8;
    /*width: 100vw;*/
    /*height: 100vh;*/
  }

  .home-top {
    background: white;
  }

  .content {
    max-width: 1190px;
    height: 100%;
    min-width: 1080px;
    margin: 0 auto;

  }

  .banner-container {

    justify-content: flex-start;
    max-width: 1190px;
    min-width: 960px;
    margin: 0 auto;
    height: 420px;


    .banner-left, .banner-right {
      width: 228px;
      height: 100%;

    }

    .banner-center {
      min-width: 575px;
      height: 100%;
      padding: 8px 11px 0 11px;
      .banner-top{
        align-items: flex-start;
      }

      .wheel {
        width: 550px;
        height: 240px;
        background: #999999;
        margin-right: 10px;
      }
      .shadow>img{
        width: 150px;
      }
      .banner-bottom{
        align-items: flex-end;
        .banner-bottom-left{
          width: 550px;
          img{
            width: 270px;
          }
        }
        .banner-bottom-right{
          img{
            width: 150px;
          }
        }


      }
    }
  }
  .scenes-container{
    max-width: 1190px;
    height: auto;
    min-width: 1080px;

    margin: 0 auto;
    margin-top: 35px;

  }
</style>