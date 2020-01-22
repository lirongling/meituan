<template>
  <div>
    <div class="container">
      <div class="citylist flex">
        <h3 class="l-attr">按拼音首字母选择：</h3>
        <div class="r-info flex">
          <div
            class="hot-list"
            v-for="(value, key, index) in city"
            :key="index"
            @click="returnTop(`city-${key}`)"
          >{{key}}</div>
        </div>
      </div>
      <div class="alphabet-city-area">
        <div
          class="city-area flex"
          v-for="(value, key, index) in city"
          :key="index"
          :id="`city-${key}`"
        >
          <div class="city-label">{{key}}</div>
          <div class="cities flex">
            <div
              class="link city"
              v-for="(item) in value"
              :key="item.id"
              @click="changeCity(item.name)"
            >
              <span v-html="item.name"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import city from "../../assets/js/city";
import util from "../../assets/js/util";
export default {
  data() {
    return {
      city: city.data.cities,
      keyWords: util.keyWord,
      hotCity: city.data.hotCities
    };
  },
  components: {},
  props: {},
  methods: {
    returnTop(val) {
      console.log(val);
      document.querySelector(`#${val}`).scrollIntoView(true);
    },
    // 切换城市
    changeCity(val) {
      // console.log(val);
      // console.log(val.lastIndexOf("<"));
      if (val.length > 5) {
        val = val.slice(24, -7);
      }
      this.$store.state.city = val;
      localStorage.setItem("city", JSON.stringify(val));
      this.$router.go(-1);
    }
  },
  beforeMount() {
    for (let num in this.city) {
      this.city[num].map(item => {
        this.hotCity.map(items => {
          if (item.name === items.name) {
            item.name = this.keyWords(item.name, item.name);
          }
        });
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.citylist {
  padding: 30px 0;
  justify-content: flex-start;
  align-items: flex-start;
  .l-attr {
    font-size: 16px;
    color: #515a6e;
    font-weight: 500;
    vertical-align: top;
    display: inline-block;
  }
  .r-info {
    font-size: 14px;
    vertical-align: top;
    margin-top: 2px;
    align-items: flex-start;
    .hot-list {
      font-size: 15px;
      margin: 0 17px;
      color: #666;
      display: inline-block;
      margin: 0 10px;
      width: 25px;
      height: 25px;
      padding-top: 2px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border-radius: 50%;
    }
  }
}
.city-area:hover {
  background: #f8f8f8;
}
.city-area {
  justify-content: flex-start;
  align-items: flex-start;
  padding: 13px 30px 13px 10px;
  border-radius: 10px;
  -webkit-transition: background-color 500ms;
  -ms-transition: background-color 500ms;
  transition: background-color 500ms;
  .cities {
    justify-content: flex-start;
    flex-wrap: wrap;
    max-width: 1065px;
    .city {
      margin: 10px 20px;
      color: #666;
      font-size: 14px;
      cursor: pointer;
    }
  }
}
.city-label {
  box-sizing: border-box;
  vertical-align: top;
  padding-top: 10px;
  display: inline-block;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #222222;
  background: #ffd000;
  justify-items: flex-start;
  /* box-shadow: 0 4px 5px 0 rgba(39,178,164,0.22); */
}
</style>