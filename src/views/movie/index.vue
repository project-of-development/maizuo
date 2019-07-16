<template>
    <div class="home">
        <!-- cityselect -->
        <div class="city-fixed"  @click="backmovie()">
          <span>{{cityname}}</span>
          <i class="iconfont iconiconfontarrows1" style="font-size: 10px;  margin-left:4px;"></i>
        </div>
        <!-- 轮播图 -->
        
        <!-- 导航 -->

        <!-- 电影列表之正在热映 -->
        <MovieNow v-if="show" />
        
        <!-- 电影列表之即将上映 -->
        <MovieWill v-if="!show"/>

        <router-view />
    </div>
</template>

<script>
import MovieNow from 'components/movie/movieNow.vue'
import MovieWill from 'components/movie/movieWill.vue'
export default {
    name:'movie',
    components:{
      MovieNow,
      MovieWill
      },
    data(){
        return{
          show: true,
          cityname:''
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

/* 即将上演 */
.nav-bas.tab-wrap {
    position: fixed;
    top: .44rem;
}


.nav-bas {
    position: relative;
    /* top:-10px; */
    z-index: 100;
    width: 100%;
    height: 100%;
    height:.49rem;
    overflow-x: hidden;
    background: #fff;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    display: flex;
    justify-content:center;
    align-items: center;
    cursor: pointer;
}
.nav-bas .title01{
  width: 50%;
  height: .49rem;
  display: flex;
  justify-content:center;
  align-items: center;
}
.nav-bas .title01 p{
  line-height: .47rem;
  color: #191a1b;
  font-size: .16rem;
}
.nav-bas .title01 .active{
  color: #ff5f16;
  border-bottom: 2px#ff5f16 solid;
}


</style>
