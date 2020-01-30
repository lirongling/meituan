<template>
  <div>
    <div class="clearfix flex">
      <div class="clearfix-logo flex">
        <a @click="returnHome">
          <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
        </a>
      </div>
      <div class="clearfix-center flex">
        <input
          class="header-search-input"
          type="text"
          placeholder="搜索商家或地点"
          @focus="searchFocus(2)"
          @blur="searchFocus(-2)"
          v-model="searchText"
          @keyup.enter="jumpSearch(searchText)"
        />
        <span class="search_btn flex">
          <Icon type="md-search" size="22" />
        </span>
        <div
          class="search-suggest"
          :class="{'suggest-show' :count>0&&keyup}"
          @mouseenter="searchFocus(1)"
          @mouseleave="searchFocus(-1)"
        >
          <div v-if="searchText.length===0">
            <div class="search-history">
              <div class="flex history-text">
                <div>最近搜索</div>
                <div class="del-history" @click="delHistory">删除搜索历史</div>
              </div>
              <div class="history flex">
                <div v-for="(item,index) in searchHistorys" :key="index">
                  <div class="history-item flex" v-if="index<10" @click="addSearch(item)">{{item}}</div>
                </div>
              </div>
            </div>
            <div class="search-text" v-if="searchText===''">
              <h6 class="search-hot">热门搜索</h6>
              <div class="hot-search" v-for="(item,index) in hotList" :key="index">
                <div class="hot-item" v-if="index<6" @click="jumpDe(item.name)">{{item.name}}</div>
              </div>
            </div>
          </div>
          <div v-else class="search-content">
            <div v-for="(item,index) in searchResult" :key="item.id">
              <div class="search-item" v-if="index<10" @click="jumpDe(item.name)">{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix-logo flex"></div>
    </div>
  </div>
</template>

<script>
import util from "../../assets/js/util";
export default {
  data() {
    return {
      searchText: "",
      searchResult: [],
      hotList: [],
      searchHistorys: [],
      count: 0,
      keyup: true
    };
  },
  components: {},
  methods: {
    // 输入款获取失去焦点   搜索框鼠标移入移出事件
    searchFocus(num) {
      this.count += num;
      this.keyup = true;
    },

    // 删除搜索历史
    delHistory() {
      this.searchHistorys = [];
      if (JSON.parse(localStorage.getItem("loginMsg"))) {
        let loginMsg = JSON.parse(localStorage.getItem("loginMsg"));
        localStorage.setItem(
          `${loginMsg.username}_search`,
          JSON.stringify(this.searchHistorys)
        );
      } else {
        localStorage.setItem("tourists", JSON.stringify(this.searchHistorys));
      }
    },
    // 添加搜索
    addSearch(item) {
      this.searchText = item;
      setTimeout(() => {
        this.count = 1;
      }, 200);
    },
    // 关键词搜索
    searchResults() {
      this.$axios
        .req(
          `results?city=${this.$store.state.city}&keyword=${this.searchText}`
        )
        .then(res => {
          if (res.code === 200) {
            this.searchResult = res.data.pois;
            if (res.data.pois.length > 0 && this.searchText.trim().length > 0) {
              this.history();
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 获取本地热门搜索
    hotSearch() {
      this.$axios
        .req(`hotPlace?city=${this.$store.state.city}`)
        .then(res => {
          if (res.code === 200) {
            this.hotList = res.data.result;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 存历史浏览
    history() {
      let searchHistory = [];
      if (JSON.parse(localStorage.getItem("loginMsg"))) {
        let loginMsg = JSON.parse(localStorage.getItem("loginMsg"));
        if (localStorage.getItem(`${loginMsg.username}_search`)) {
          searchHistory = JSON.parse(
            localStorage.getItem(`${loginMsg.username}_search`)
          );
          if (!searchHistory.includes(this.searchText)) {
            searchHistory.unshift(this.searchText);
            localStorage.setItem(
              `${loginMsg.username}_search`,
              JSON.stringify(searchHistory)
            );
          }
        } else {
          searchHistory.unshift(this.searchText);
          localStorage.setItem(
            `${loginMsg.username}_search`,
            JSON.stringify(searchHistory)
          );
        }
      } else {
        if (JSON.parse(localStorage.getItem("tourists"))) {
          let tourists = JSON.parse(localStorage.getItem("tourists"));
          if (!tourists.includes(this.searchText)) {
            tourists.unshift(this.searchText);
            this.searchHistorys.unshift(this.searchText);
            localStorage.setItem("tourists", JSON.stringify(tourists));
          }
        } else {
          let tourists = [];
          tourists.push(this.searchText);
          localStorage.setItem("tourists", JSON.stringify(tourists));
        }
      }
    },
    // 获取搜索历史
    searchHistory() {
      if (JSON.parse(localStorage.getItem("loginMsg"))) {
        let loginMsg = JSON.parse(localStorage.getItem("loginMsg"));
        this.searchHistorys = JSON.parse(
          localStorage.getItem(`${loginMsg.username}_search`)
        );
      } else {
        this.searchHistorys = JSON.parse(localStorage.getItem("tourists"));
      }
    },
    // 跳转到详情页
    jumpDe(val) {
      this.keyup = false;
      this.$router.push({ name: "details", query: { name: val } });
    },
    // 回车事件
    jumpSearch(val) {
      this.keyup = false;
      if (val === this.$route.query.searchText) {
        this.$router.go(0);
      }
      if (val.trim().length > 0) {
        this.$router.push({ name: "search", query: { searchText: val } });
      }
    },
    // 返回首页
    returnHome() {
      if (this.$route.name !== "home") {
        this.$router.push("/");
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.hotSearch();
    }, 400);
    this.searchHistory();
    this.$watch(
      "searchText",
      util.throttle(() => {
        if (this.searchText.trim() === "") {
          this.searchResult = [];
        } else {
          this.searchResults();
        }
      }, 500)
    );
  },
  watch: {
    //   searchText(val) {
    //     // setTimeout(() => {
    //     //     this.searchResults();
    //     // }, 200);
    //    util.throttle(
    // this.searchResults()
    //   , 200)
    //   }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.clearfix {
  width: 100%;
  height: 122px;

  .clearfix-logo {
    width: 280px;
    justify-content: flex-start;
    img {
      width: 126px;
    }
  }
  .clearfix-center {
    width: 550px;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    input {
      border: 1px solid #e5e5e5;
      border-right: none;
      border-radius: 4px 0 0 4px;
      line-height: 100%;
      box-sizing: border-box;
      display: inline-block !important;
      padding: 15px;
      font-size: 14px;
      height: 40px;
      background: transparent;
      width: 85.45%;
      outline: none;
    }
    .search_btn {
      justify-content: center;
      width: 80px;
      height: 40px;
      outline: none;
      color: #222222;
      cursor: pointer;
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
      background: #ffc300;
    }
    .search-suggest {
      display: none;
      min-height: 230px;
      width: 100%;
      height: auto;
      position: absolute;
      border: 1px solid #e5e5e5;
      background: #fff;
      z-index: 999;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      color: #999;
      font-size: 12px;
      text-align: left;
      top: 40px;
      .search-text {
        // margin: 10px;
        font-size: 16px;
        // padding-bottom: 40px;
      }
      .search-hot {
        margin: 10px;
      }
      // .search-history {
      //   // padding: 10px;
      // }
    }
    .history-text {
      width: 96%;
      margin: 5px auto;
    }
    .search-item {
      padding-left: 5px;
      height: 26px;
      line-height: 26px;
      color: #999;
      padding: 0 10px;
    }
    .search-item:hover,
    .hot-item:hover {
      color: rgb(236, 141, 17);
      background: rgb(226, 219, 219);
      cursor: pointer;
    }
  }
  .suggest-show {
    display: block !important;
  }
}
.del-history:hover {
  cursor: pointer;
}
.history {
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
  color: rgb(80, 79, 79);
}
.history-item {
  padding: 0 5px;
}
.history-item:hover {
  color: rgb(236, 141, 17);

  cursor: pointer;
}
.hot-item {
  padding: 3px 10px;
  color: #333;
  font-size: 12px;
}
</style>