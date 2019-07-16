<template>
  <div>
    <!-- <Loading v-if="cinemaFlag" /> -->
    <!-- 电影列表之正在热映 -->
    <div class="film-list">
      <div class="loading" v-if="scrollLoading">
        <i class="fa fa-spinner fa-pulse"></i>
      </div>
      <ul>
        <li>
          <div class="film-img">
            <img alt="#" />
          </div>
          <div class="film-text">
            <div class="film-name">
              <span class="name"></span>
              <span class="item"></span>
            </div>
            <div class="film-grade">
              <span class="label">观众评分</span>
              <span class="grade"></span>
            </div>
            <div class="film-actors info-clo">
              <span class="label">主演:</span>
            </div>
            <div class="film-time">
              <span class="label">分钟</span>
            </div>
          </div>
          <div class="film-buy">购票</div>
        </li>
      </ul>
    </div>
    <!-- <p class="no-more">我是有底线的，妹妹</p> -->
  </div>
</template>

<script>
import {getMovieNow} from 'api/movie';
export default {
  name:'nowPlaying',
    async created(){
        let data = await getMovieNow(440300, 1);
        console.log(data);
    },
    data(){
      return{
        show:true,//正在热映
        active:true,
        flg:true,//标题
        scrollLoading: false,
        cinemaFlag:true
      }
    }
}
</script>

<style scoped>
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

.no-more {
  text-align: center;
  margin: 15px auto;
  color: #bdc0c5;
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
  margin: 4px 0;
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

