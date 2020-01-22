<template>
  <div>
    <div class="choose-by-province flex">
      <Form
        ref="formValidate"
        :model="formValidate"
        :rules="ruleValidate"
        label-position="left"
        :label-width="110"
        class="flex"
      >
        <FormItem prop="province" label="按省份选择:">
          <Select v-model="formValidate.province" placeholder="省份" @on-change="change">
            >
            <Option
              v-for="(item, index) in provinceArr"
              :key="index"
              v-model="item.name"
            >{{ item.name}}</Option>
          </Select>
        </FormItem>
        <FormItem prop="city" :label-width="20">
          <Select
            v-model="formValidate.city"
            placeholder="城市"
            :disabled="disabled"
            @on-change="selectCity"
          >
            >
            <Option v-for="item in cities" :key="item.id" v-model="item.name">{{ item.name}}</Option>
          </Select>
        </FormItem>
      </Form>
      <div class="search flex">
        <h3 class="l-attr">直接搜索：</h3>
        <div style="margin-left: 6px">
          <!-- <Input suffix="ios-search" placeholder="请输入城市名" v-model="searchText" style="width: auto" /> -->
          <Select v-model="searchRealut" filterable @on-change="selectCity">
            <Option v-for="(item,index) in city" :value="item" :key="index">{{ item }}</Option>
          </Select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import address from "../../assets/js/province";
import city from "../../assets/js/area";
export default {
  data() {
    return {
      city: city.city_list,
      provinceArr: address,
      cities: [],
      formValidate: {
        province: "",
        city: ""
      },
      ruleValidate: null,
      disabled: true,
      loading1: false,
      loading2: false,
      options1: address,
      options2: [],
      searchRealut: ""
    };
  },
  components: {},
  props: {},
  methods: {
    change(val) {
      this.options1 = address;
      this.disabled = false;
      this.provinceArr.map(item => {
        if (item.name === val) {
          this.cities = item.cityList;
          setTimeout(() => {
            this.formValidate.city = item.cityList[0].name;
          }, 200);
        }
      });
    },
    remoteMethod1(query) {
      if (query.length === 1) {
        this.options1 = address;
      } else {
        this.loading1 = true;
        setTimeout(() => {
          this.loading1 = false;
          const provinceArr = this.provinceArr.map(item => {
            return {
              name: item.name,
              label: item.name
            };
          });
          this.options1 = provinceArr.filter(item =>
            JSON.stringify(item.label).includes(query)
          );
        }, 200);
      }
    },
    remoteMethod2(query) {
      if (query.length === 1) {
        this.options2 = this.cities;
      } else {
        this.loading2 = true;
        setTimeout(() => {
          this.loading2 = false;
          const list = this.cities.map(item => {
            return {
              value: name,
              label: name
            };
          });
          this.options2 = list.filter(item =>
            JSON.stringify(item.label).includes(query)
          );
        }, 200);
      }
    },
    selectCity(val) {
      this.$store.state.city = val;
      localStorage.setItem("city", JSON.stringify(val));
      this.$router.go(-1);
    }
    // // 切换城市
    // changeCity() {
    //   this.$store.state.city=this.this.formValidate.city
    // }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
/deep/.ivu-select-selection {
  width: 110px;
}

.choose-by-province {
  justify-content: flex-start;
  align-items: flex-start;
}
.l-attr {
  font-size: 16px;
  color: #333;
  font-weight: 500;
  margin-top: 5px;
  display: inline-block;
}
.search {
  margin-left: 40px;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>