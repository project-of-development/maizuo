<template>
  <div>
    <!-- 电影列表之即将上映 -->
    <div class="film-list" >
      <ul>
        <li v-for="(item,index) in film" :key="index">
          <div class="film-img">
            <img :src='item.poster' alt="#" />
          </div>

          <div class="film-text">
            <div class="film-name">
              <span class="name">{{item.name}}</span>
              <span class="item">{{item.item.name}}</span>
            </div>
            <div class="film-grade">
              <span class="label"></span>
              <span class="grade"></span>
            </div>
            <div class="film-actors info-clo">
              <span class="label">主演:</span>
            </div>
            <div class="film-time">
              <span
                class="label"
              >上映日期：{{getWeek(timestampToTime(item.premiereAt).Y+'-'+timestampToTime(item.premiereAt).M+'-'+timestampToTime(item.premiereAt).D)}} {{timestampToTime(item.premiereAt).M}}月{{timestampToTime(item.premiereAt).D}}日</span>
            </div>
          </div>

          <div class="film-buy01">预购</div>
        </li>
      </ul>
    </div>
      <!-- <p class="no-more">我是有底线的，妹妹</p> -->
  </div>
</template>

<script>
import { getMovieComm } from "api/movie";
export default {
  name: "comingSoon",
  async created() {
    let response = await getMovieComm(440300, 1);
    console.log(response);
    this.film = response.data.films
  },
  data() {
    return {
      movieList: [],
      cinemaFlag: true,
       scrollLoading: false,
       page:1,
       film:[]
    };
  },
 mounted() {

   
  },
  methods: {
    
  }
};
</script>



<style scoped>
.no-more {
  text-align: center;
  margin: 15px auto;
  color: #bdc0c5;
}
.loading {
  width: 100%;
  height: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading > i {
  font-size: 0.3rem;
}
/* 电影列表 */
.film-list {
  width: 100%;
  background: #fff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  overflow-x: hidden;
}

.film-list ul {
  width: 100%;
  padding: 0.15rem;
  padding-bottom: 0;
  box-sizing: border-box;
}
.film-list ul li {
  display: flex;

  height: 0.94rem;
  position: relative;
  padding: 15px 15px 15px 0;
}

.film-list ul li::after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ededed;
  color: #ededed;
  transform: scaleY(0.5);
}
.film-img {
  width: 0.66rem;
  height: 0.9rem;
}
.film-img img {
  width: 0.66rem;
  height: 0.9rem;
  overflow: hidden;
}
.film-text {
  width: calc(100% - 130px);
  margin-left: 0.04rem;
  padding: 0 0.1rem;
}
.film-name {
  width: 100%;
}
.film-text .name {
  max-width: calc(100% - 26px);
  color: #191a1b;
  font-size: 0.16rem;
  height: 0.22rem;
  line-height: 0.22rem;
  margin-right: 5px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.film-text .item {
  font-size: 9px;
  color: #fff;
  background-color: #d2d6dc;
  height: 0.14rem;
  line-height: 0.14rem;
  padding: 0 2px;
  border-radius: 2px;
  position: relative;
  top: -8px;
}
.film-grade {
  font-size: 13px;
  margin: 2px 0;
  color: #797d82;
  height: 0.18rem;
}
.film-grade .grade {
  color: #ffb232;
  font-size: 14px;
}
.info-clo {
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.label {
  font-size: 13px;
  margin-top: 0.1rem;
  color: #797d82;
}
.film-buy,
.film-buy01 {
  line-height: 0.25rem;
  height: 0.25rem;
  width: 0.5rem;
  color: #ff5f16;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  position: relative;
  border: 1px solid #ff5f16;
}
.film-buy01 {
  border: 1px solid #ffb232;
  color: #ffb232;
}
</style>
