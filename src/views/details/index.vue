<template>
<div id="box">
<!-- <Loading v-if="cinemaFlag"/> -->

    <div id="film" v-if="!cinemaFlag">
    <div class="film-header" v-if="flg">
      <router-link class="iconfont iconiconfontjiantou1" to="/cinemas" tag="i" ></router-link>
    </div>
      <Header :title="listHader.name" v-if="!flg">
        <template v-slot:left>
          <div class="left" >
            <router-link class="iconfont iconiconfontjiantou1" to="/cinemas" tag="i"></router-link>
          </div>
        </template>
        <template v-slot:right>
            <div class="right">
          </div>
        </template>
      </Header>
    <div class="film-title">
      <p>{{listHader.name}}</p>
    </div>
    <div class="film-box">
      <div class="film-top">
        <div class="film-dex" >
          <ul>
            <li v-for="(item,index) in listHader.services" :key="index">{{item.name}}</li>
            <i class="iconfont iconyoujiantou" v-show="listHader.services"></i>
          </ul>
        </div>
        <div class="film-dw">
          <i class="iconfont icondingwei"></i>
          <p>{{listHader.address}}</p>
          <i class="iconfont iconweibiaoti-"></i>
        </div>
      </div>
      <div class="film-lb" ref="banners"  >
        <div
          data-v-0134b84b
          class="swiper-container swiper-container-initialized swiper-container-horizontal"
          ref="banner"
        >
          <div
            class="swiper-wrapper"
            style="transform: translate3d(-2.98125rem, 0rem, 0rem); transition-duration: 0ms; height:1.80rem;"
          >
            <img :src="list.length!=''?item.poster:''" v-for="(item,index) in list" :key="index" class="swiper-slide" @click="handel(index,item)" style="width: 120px; margin-right:20px;" alt="" >					
          </div>
          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </div>
       <div :class="fixed==true?'film-wrap':''">
      <div class="caption">
        <h3>
          <span>{{obj.name}}</span>
          <!-- <span>{{天地对决}}</span> -->
          <span>{{obj.grade}}</span>
          <span>分</span>
        </h3>
        <p>{{obj.category}} | {{obj.runtime}} | {{obj.director}} | {{...arr}}</p>
      </div>
      </div>
      <div class="date-list" >
        <div class="box">
          <ul>
            <li v-for="(item,index) in showday" :class="index==Sindex?'active':''" @click="select(item,index)" :key="index">{{timestampToTime(item).M+'月'+timestampToTime(item).D+'日'}}</li>
          </ul>
        </div>
      </div>
      <div class="schedule-list">
        <ul>
          <li v-for="(item,index) in listcount" :key="index">
            <div class="time">
              <p>{{timestampToTime(item.showAt).h +':'+ timestampToTime(item.showAt).m}}</p>
              <span>{{timestampToTime(item.endAt).h+':'+timestampToTime(item.endAt).m}}分散场</span>
            </div>
            <div class="language">
              <p>{{item.filmLanguage}}{{item.imagery}}</p>
              <span>{{item.hallName}}</span>
            </div>
            <div class="film-price">
              <p>￥{{item.salePrice/100}}</p>
              <a href="#">购票</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import "../../../public/css/swiper.min.css";
import Swiper from "swiper";
import axios from "axios"
import {getcinemasAress} from "api/cinema"
import {getcinemasImg} from "api/cinema"
import {getcinemasCont} from "api/cinema"
import Header from "common/header"
import { mapState, mapMutations } from "vuex";
export default {
    components:{
        Header,
    },
    computed:{
        ...mapState({
          cinemaId:state=>state.citylist.cinemaId
        }),
        
    },
    async created(){     
        let dataheader =await getcinemasAress(this.cinemaId);
        this.listHader = dataheader.data.cinema;
        let data =await getcinemasImg(this.cinemaId);
        this.list = data.data.films;
        this.filmId = this.list[0].filmId;
        this.obj.filmId = this.list[0].filmId;
        this.date = this.list[0].showDate[0];
        this.obj.name = this.list[0].name;
        this.obj.grade = this.list[0].grade;
        this.obj.category = this.list[0].category;
        this.obj.runtime = this.list[0].runtime;
        this.obj.director = this.list[0].director;
        this.showday = this.list[0].showDate;
        let datacount =await getcinemasCont(this.filmId,this.cinemaId,this.date);
        this.listcount = datacount.data.schedules;
        
    },
  data() {
    return {
      bg: 0,
      listHader:[],
      list:[],
      listcount:[],
      obj:{},
      arr:[],
      showday:[],
      cinemaFlag:false,
      flg:true,
      fixed:false,
      Sindex:0,
      filmId:'',
      date:''
    };
  },
  
  methods: {
    select(item,index){
      this.Sindex = index;
      this.date = item;
      let datacount = getcinemasCont(this.filmId,this.cinemaId,this.date).then((data)=>{
        this.listcount = data.data.schedules;
      });
       
    },
    handel(index,item) {
        let datacount = getcinemasCont(this.filmId,this.cinemaId,this.date).then((data)=>{
        this.listcount = data.data.schedules;
      });
      this.$refs.banners.style.background = "url(" + item.poster + ")";
      this.bg = index;
      this.arr =[]
      item.actors.map((ite)=>{
        this.arr.push(ite.name)
      })
      this.showday = item.showDate;
      this.date = item.showDate[0];
      this.filmId = item.filmId;
       this.obj.filmId = item.filmId;
      this.obj.name = item.name;
      this.obj.grade = item.grade;
      this.obj.category = item.category;
      this.obj.runtime = item.runtime;
      this.obj.director = item.director;
    },
     handleScroll () {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if(scrollTop>49){
            this.flg = false
          }else{
            this.flg = true
          }
           if(scrollTop>300){
            this.fixed = true
          }else{
            this.fixed = false
          }
        }
  },
  mounted() {
    new Swiper(this.$refs.banner, {
     		slidesPerView: 3,
        slideToClickedSlide: true,
        slidesPerView: 3,
        centeredSlides: true,
      observer:true,
        pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
    });

     //监听滚动事件
    window.addEventListener('scroll', this.handleScroll)

  }


};
</script>

<style scoped>
  
   .box ul .active {
    color: #ff5f16;
    border-bottom: 2px solid #ff5f16;
}
.film-wrap {
    position: fixed;
    top: .44rem;
    width: 100%;
    background: #fff;
      box-sizing: border-box;
}


.box::after,.caption::after{
  content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #ededed;
    color: #ededed;
    -webkit-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(.5);
    -ms-transform: scaleY(.5);
    transform: scaleY(.5);
}
.schedule-list{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.schedule-list ul{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.film-header {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  background: #fff;
  z-index: 222;
  position: fixed;
  top:0;
  left: 0;
}
.film-header > i {
  font-size: 0.25rem;
}
.film-title {
  width: 100%;
   background: #fff;
  position: relative;
  top: .44rem;
  left: 0;
  line-height: 0.44rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.17rem;
}

.film-box{
    position: relative;
    top:.44rem;
    left: 0;
     background: #fff;
}
.film-dex {
  width: 100%;
  height: 0.35rem;
}
.film-dex > ul {
  width: 100%;
  height: 100%;
  padding: 0.05rem 0 0.15rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
.film-dex > ul > li {
  padding: 0.02rem 0.06rem;
  border: 0.01rem solid #ff6700;
  font-size: 0.06rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff6700;
  margin-right: 0.05rem;
  border-radius: 0.03rem;
}
.film-dex > ul > i {
  color: #ff6700;
  margin-top: -0.05rem;
}
.film-dw {
  height: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.film-dw > p {
  width: 2.77rem;
  padding: 0 0.1rem;
  box-sizing: border-box;
  height: 0.2rem;
  overflow: hidden;
  white-space: nowrap;
  line-height: 0.2rem;
  text-overflow: ellipsis;
  text-align: center;
  font-size: 14px;
}
/* .swiper-container{
} */
.film-lb {
  position: relative;
  margin-bottom: 0.1rem;
  background: url(https://pic.maizuo.com/usr/movie/8c0eb501a6671e333618f4aaed1ad3ea.jpg)
    no-repeat;
  background-size: cover;
}
.swiper-container {
  background: rgba(255, 255, 255, 0.8);
}

.img-wrap img {
  width: 1rem;
  height: 1.4rem;
  margin-right: 0.16rem;
}

.img-wrap .img {
  width: 1rem;
  height: 1.6rem;
  margin-right: 0.16rem;
}
/* .swiper-wrapper .swiper-slide {
  top: 0.3rem;

}
.swiper-container .swiper-wrapper .solider {
  top: 0.1rem;
} */
.swiper-container .swiper-wrapper .swiper-solider{
  margin-right: 20px;
}
.caption {
  height: 0.8rem;
  padding: 0.1rem 0;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
}
.caption > h3 {
  margin-bottom: 0.1rem;
  height: 0.2rem;
}
.caption > h3 > span {
  margin-right: 0.05rem;
  color: #191a1b;
  font-size: 0.15rem;
  line-height: 0.18rem;
}
.caption > h3 > span:nth-child(2) {
  color: #ff6700;
  font-style: italic;
}
.caption > p {
  padding: 0 12%;
  box-sizing: border-box;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 0.18rem;
  color: #797d82;
  font-size: 0.13rem;
}
.date-list {
  width: 3.75rem;
  height: 0.49rem;
  overflow-y: hidden;
  overflow-x: auto;
}
.box {
  width: 10rem;
  height: 0.32rem;
  
  box-sizing: border-box;
}
.box > ul {
  float: left;
  overflow-y: hidden;
  overflow-x: auto;
}
.box > ul > li {
  height: 0.32rem;
  line-height: 0.32rem;
  float: left;
  font-size: 16px;
  margin: 0 0.2rem;
}

.schedule-list > ul > li {
  width: 100%;
  height: 0.74rem;
  padding: 0.15rem;
   background: #fff;
  box-sizing: border-box;
  border-bottom: .01rem solid #ededed;
  float: left;
}
.schedule-list > ul > li > div {
  float: left;
}
.time {
  width: 1rem;
  height: 100%;
}
.time > p {
  font-size: 0.15rem;
  color: #191a1b;
}
.time > span {
  font-size: 0.13rem;
  color: #797d82;
  margin-top: 0.02rem;
}
.language {
  width: 1.3rem;
  height: 100%;
}
.language > p {
  font-size: 0.15rem;
  color: #191a1b;
 
}
.language > span {
  display: block;
  width: 1rem;
  font-size: 0.13rem;
  color: #797d82;
  margin-top: 0.02rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.film-price{
    width:1.1rem;
    height: 100%;

    /* float: left; */
}
.film-price>p{
    display: block;
    height: .46rem;
    line-height:.46rem;
    float: left;
    font-size: .2rem;
    color: #ff5f16;
}
.film-price>a{
    display: inline-block;
    width:.5rem;
    height: .25rem;
    border:.01rem solid #ff5f16;
    text-align: center;
    line-height: .25rem;
    border-radius: .03rem;
    margin:.1rem 0 0 0.1rem;

}
		.swiper-slide {
				text-align: center;
				font-size: 18px;
				background: #fff;
				display: -webkit-box;
				display: -ms-flexbox;
				display: -webkit-flex;
				display: flex;
				-webkit-box-pack: center;
				-ms-flex-pack: center;
				-webkit-justify-content: center;
				justify-content: center;
				-webkit-box-align: center;
				-ms-flex-align: center;
				-webkit-align-items: center;
				align-items: center;
				transition: 300ms;
			}

			.swiper-slide {
				-webkit-flex-shrink: 0;
				-ms-flex-negative: 0;
				flex-shrink: 0;
				width: 100%;
				height: 100%;
				position: relative;
				-webkit-transition-property: -webkit-transform;
				transition-property: -webkit-transform;
				-o-transition-property: transform;
				transition-property: transform;
				transition-property: transform, -webkit-transform;
			}

			.swiper-slide:not(.swiper-slide-active) {
				transform: scale(0.8);
			}

			.film-lb{
				width: 100%;
		
				margin: 0 auto;
			}

			.swiper-slide img {
				width: 120px;
				height: 130px;
			}
</style>