<template>
  <div id="city">
    <HeaderCom title="当前城市 -">
      <template v-slot:left>
        <div class="left">
          <i class="iconfont iconguanbi" @click="handleBack()"></i>
        </div>
      </template>
      <template v-slot:right>
        <div class="right"></div>
      </template>
    </HeaderCom>

    <div class="listbox">
      <!-- 搜索框 -->
      <div class="search-city-input" >
        <div ref="search" class="input-wrap">
          <i class="iconfont iconfangdajing" style="font-size: 20px;"></i>
          <input
            id="input"
            type="text"
            placeholder="输入城市名或拼音"
            class="search-input"
            @focus="filling"
            v-model="searchcity"
          />
          <div class="clean-icon" @click="handleEmpty" v-if="empty">
            <i class="iconfont iconguanbi" style="font-size: 10px;"></i>
          </div>
        </div>
        <div class="cancel-btn" @click="remove" v-if="cancle">取消</div>
      </div>

      <!-- 城市定位 -->
      <div class="city" ref="domTop" v-if="cinemaExist">
        <ul class="mint-indexlist-content" v-if="cityShow">
          <div class="bg">
            <div class="recommend-city">
              <!-- 城市定位 -->
              <div class="gprs-city">
                <div class="city-index-title">GPS定位你所在城市</div>
                <div class="city-item-detail">
                  <div class="city-item-text">定位失败</div>
                </div>
              </div>
              <!-- 热门城市 -->
              <div class="hot-city">
                <div class="city-index-title">热门城市</div>
                <ul class="city-index-detail" ref="scroll">
                  <li
                    class="city-item-detail"
                    v-for="(item,index) in hotCity"
                    :key="index"
                    @click="cityGet($event)"
                    :id="item.cityId"
                  >
                    <div class="city-item-text">{{item.name}}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 城市列表 -->
            <li v-for="(item,index) in citylist"
            :key="index" class="cityli" >
              <p class="mint-indexsection-index">{{item.letter}}</p>
              <ul class="city-change">
                <li
                  v-for="(ite,ind) in item.city"
                  :key="ind"
                  class="city-item-detail-white"
                  @click="cityGet($event)"
                  :id="ite.cityId"
                >{{ite.name}}</li>
              </ul>
            </li>
        </ul>
      </div>
    </div>
    <!-- 侧边导航栏 -->
    <div class="mint-indexlist-nav" v-if="cityShow">
      <ul class="mint-indexlist-navlist">
        <li
          v-for="(item,index) in letterList"
          :key="index"
          class="mint-indexlist-navitem"
          @click="lettercity(index)"
        >{{item}}</li>
      </ul>
    </div>

    <!-- 隐藏的 -->

    <div :class="[('hadden'),(showLetter?'addshow':'')]" v-if="showLetter">{{showletterx}}</div>

    <!-- 隐藏的城市列表 -->
    <div class="hadd-city" v-if="!cityShow">
      <div class="cityimg" v-if="!cityimg">
        <img
          src="data:image/png;base64,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"
          alt
        />
        <p>没有找到匹配的城市</p>
      </div>
      <ul class="city-change">
        <li
          class="city-item-detail-white"
          v-for="(item,index) in searchList"
          :key="index"
          @click="cityGet($event)"
          :id="item.cityId"
        >{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>


<script>
import HeaderCom from "common/header";
import { getCityList } from "api/citylist";
import {mapState, mapMutations} from 'vuex';
export default {
  name: "Citylist",
  async created() {
    let response = await getCityList();
    let newList = response.data.cities;
    // console.log(this.citylist);
    this.hotCity = newList.filter((item, index) => item.isHot != 0);
    //取开头字母
    let letterList = [];
    newList.forEach((value, index, array) => {
      let letter = value.pinyin.charAt(0).toUpperCase();
      if (letterList.indexOf(letter) == -1) {
        letterList.push(letter);
      }
    });
    this.letterList = letterList;
    //字母排序
    letterList.sort(function(a, b) {
      return a.localeCompare(b);
    });
    //把每个城市对象放入对应的字母数组  A:[{CITY}]
    letterList.forEach((value, index, array) => {
      let obj = new Object();
      obj.letter = value;
      obj.city = [];
      this.citylist.push(obj);
    });
    this.citylist.forEach((val, ind, arr) => {
      newList.forEach((value, index, array) => {
        let letter = value.pinyin.charAt(0).toUpperCase();
        if (val.letter == letter) {
          val.city.push(value);
        }
      });
    });
  },
  components: { HeaderCom },
  data() {
    return {
      searchcity: "",
      cityimg: true,
      empty: false,
      cancle: true,
      cityShow: true,
      cinemaFlag: true,
      cinemaExist: true,
      letterList: [],
      showLetter: false,
      hotCity: [],
      citylist: [],
      searchList: []
    };
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    handleEmpty() {
      this.searchcity = "";
      this.cityimg = false;
    },
    filling() {
      this.empty = true;
      this.$refs.search.style.width = "87%";
      this.cityShow = false;
    },
    remove() {
      this.empty = false;
      this.cityShow = true;
      this.$refs.search.style.width = "100%";
      this.searchcity = "";
      this.searchList.length = 0;
    },
    lettercity(index) {
      let letterDom = this.$refs.domTop.querySelectorAll(".cityli");
      let t = letterDom[index].offsetTop;
      this.$refs.scroll.scrollTo = (0, t);
      console.log(this.$refs.scroll.scrollTop);
    },
    ...mapMutations({
      cityGet: "citylist/cityGet"
    })
  },
  watch:{

  }
};
</script>


<style scoped>
.city {
  overflow: auto;
  height: 100%;
  position: absolute;
}
.addshow {
  animation: citykey 2s linear;
}
@keyframes citykey {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.search-city-input {
  position: fixed;
  top: 0.44rem;
  padding: 10px 15px;
  height: 0.49rem;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
  z-index: 199;
  background: #f4f4f4;
}
.search-city-input .input-wrap {
  background-color: #fff;
  position: relative;
  display: inline-block;
  border-radius: 3px;
  width: 100%;
  height: 0.3rem;
}
.iconfangdajing {
  position: absolute;
  left: 7px;
  top: 0;
  line-height: 30px;
  font-size: 21px;
  color: #797d82;
}
.input-wrap .search-input {
  position: absolute;
  left: 33.5px;
  top: 0;
  height: 30px;
  width: calc(100% - 65px);
  border: 0;
}
.clean-icon {
  position: absolute;
  right: 10px;
  top: 8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #bdc0c5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.clean-icon .iconwenhao {
  font-size: 14px;
  color: #fff;
  transform: scale(0.5);
}

.cancel-btn {
  width: 43px;
  position: absolute;
  display: inline-block;
  text-align: right;
  font-size: 14px;
  line-height: 33px;
}
/* 城市定位 */
.mint-indexlist-content {
  width: 100%;
  position: relative;
  height: 100%;
  top: 0.94rem;
  background: #fff;
  padding-top: 15px;
  margin-right: 17px;
  box-sizing: border-box;
}

.recommend-city,
.city-change {
  width: 100%;
  padding-left: 20px;
  box-sizing: border-box;
}

.city-index-title {
  font-size: 13px;
  color: #797d82;
  margin-bottom: 10px;
}
.city-item-detail {
  width: calc((100vw - 33px) / 3);
  text-align: center;
  padding-bottom: 15px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.city-item-detail .city-item-text {
  height: 30px;
  background-color: #f4f4f4;
  line-height: 30px;
  border-radius: 3px;
  box-sizing: border-box;
  margin: 0 8px;
  font-size: 14px;
  color: #191a1b;
}
.city-index-detail {
  display: flex;
  align-content: center;
  flex-wrap: wrap;
}
.mint-indexsection-index {
  background-color: #f4f4f4;
  color: #797d82;
  height: 30px;
  line-height: 30px;
  width: 100%;
  padding-left: 15px;
  box-sizing: border-box;
}
.city-item-detail-white {
  color: #191a1b;
  box-sizing: border-box;
  height: 48px;
  line-height: 48px;
  width: 100%;
  position: relative;
}
.city-item-detail-white::after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ededed;
  color: #ededed;
  transform-origin: 0 100%;
  transform: scaleY(0.5);
}

/* 侧边导航 */
.mint-indexlist-nav {
  border: 0;
  position: fixed;
  width: 17px;
  margin-top: 94px;
  top: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mint-indexlist-nav .mint-indexlist-navitem {
  font-size: 11px;
  padding: 0 6px;
  color: #191a1b;
}

/* 隐藏的 */
.hadden {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -24px;
  margin-top: -24px;
  width: 0.48rem;
  height: 0.48rem;
  background: #4c4c4c;
  color: #fff;
  z-index: 999;
  line-height: 0.48rem;
  text-align: center;
  font-size: 20px;
}
/* 隐藏的城市列表 */
.hadd-city {
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  top: 0.94rem;
  background: #fff;
  height: 100%;
}
.cityimg {
  position: absolute;
  top: 0.45rem;
  width: 100%;
  text-align: center;
}
.cityimg img {
  width: 0.9rem;
  height: 0.9rem;
}
.cityimg p {
  color: #bdc0c5;
  font-size: 14px;
  margin: 0;
}
.listbox {
  overflow: auto;
  height: 100%;
}
</style>
