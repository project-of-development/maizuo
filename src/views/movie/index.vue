<template>
    <div class="home">
        <!-- cityselect -->
        <router-link class="city-fixed" to='/city' tag="div">
          <span>{{cityname}}</span>
          <i class="iconfont iconiconfontarrows1" style="font-size: 10px;  margin-left:4px;"></i>
        </router-link>
        <!-- 轮播图 -->
        <MovieBanner />
        <!-- 导航 -->
        <MovieNav  @showToggle='showListToggle'/>
        <!-- 电影列表之正在热映 -->
        <NowPlaying v-if="show" />
        
        <!-- 电影列表之即将上映 -->
        <ComingSoon v-if="!show"/>

        <router-view />
    </div>
</template>

<script>
import NowPlaying from 'components/movie/nowPlaying.vue'
import ComingSoon from 'components/movie/comingSoon.vue'
import MovieNav from 'components/movie/movieNav.vue'
import MovieBanner from 'components/movie/movieBanner.vue'
export default {
    name:'movie',
    components:{
      NowPlaying,
      ComingSoon,
      MovieNav,
      MovieBanner
      },
    data(){
        return{
          show: true,
          cityname:'深圳'
        }
    },
    methods:{
      showListToggle(boolean){
        this.show = boolean;
      },
      backmovie(){

      }
    }
}
</script>

<style  scoped>


/* 分页器 */
.home{
  height: 100%;
  
}
.filxed{
     background: #fff;
 }

.city-fixed {
  position: absolute;
  top: 0.08rem;
  left: 0.07rem;
  color: #fff;
  z-index: 10;
  font-size: 0.13rem;
  background: rgba(0, 0, 0, 0.2);
  height: 0.3rem;
  line-height: 0.3rem;
  border-radius: 0.15rem;
  text-align: center;
  padding: 0 4px;
  display: flex;
  justify-content: center;
  align-items: center;
   width: 0.6rem;
}
.city-fixed span{
  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}


</style>
