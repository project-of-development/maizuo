<template>
    <div class="swiper-container">
        <div class="swiper-wrapper img-list">
            <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
                <img :src="item.imgUrl"/>
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination mint-swipe-indicators"></div>
        <!-- 需要解决无法滚动的问题 -->
    </div>
</template>


<script>
import { getMoviebanner } from "api/movie";
export default {
    name: "MovieBanner",
    async created() {
    let data = await getMoviebanner(440300);
    // console.log(data)
    this.bannerList = data.data;
  },
  data() {
    return {
      bannerList: []
    };
  }
}
</script>

<style scoped>
.img-list img {
  width: 3.75rem;
  height: 2.1rem;
 
}
.swiper-container {
  background: #fff;
}
</style>
