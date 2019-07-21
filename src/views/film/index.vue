<template>
  <div>
    <div id="mine">
      <div class="goBack" @click="goback">
        <i class="iconfont iconiconfontjiantou1"></i>
      </div>

      <Header :title="moviedes.name" v-show="!flg">
        <template v-slot:left>
          <div class="left" @click="goback">
            <i class="iconfont iconiconfontjiantou1"></i>
          </div>
        </template>

        <template v-slot:right>
          <div class="right"></div>
        </template>
      </Header>
      <!-- 图片 -->
      <div class="big-img">
        <img :src="moviedes.poster" />
      </div>

      <!-- 电影简介 -->
      <div class="film-detail">
        <div class="col">
          <div class="film-name">
            <span class="name">{{moviedes.name}}</span>
            <span class="item">{{name}}</span>
          </div>
          <div class="film-grade" v-show="moviedes.grade">
            <span class="grade">{{moviedes.grade}}</span>
            <span class="grade-text">分</span>
          </div>
        </div>

        <div class="film-category grey-text">{{moviedes.category}}</div>
        <div class="film-premiere-time grey-text">2019-06-21上映</div>
        <div class="film-nation-runtime grey-text">{{moviedes.nation}} | {{moviedes.runtime}}分钟</div>

        <div
          :class="[('film-synopsis'),('grey-text'),(className==true?'hidde':'')]"
          style="height: 269px;"
        >{{moviedes.synopsis}}</div>

        <div class="toggle" @click="toggle">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAMAAADHqI+lAAAAOVBMVEVHcEy9xcW9wMW9wcW////Bwca9wcW9wMW9wMW+wMW+wcW9wcXMzMy+wMa+wce9wMe9wca9wMW9wMWKU/2FAAAAEnRSTlMAH+jGBDa6/vaatcIPdlNSdckJHB8JAAAASUlEQVQIHQXBhwGDMAADMCVksQr4/2MrObYCQNkOZ2oH6DWna2Q9wG9lXLQ984V3Zm/gntlb2zNvgN/KGFkPAL0mtQNA+b4C/AGl4gJfgEWzrAAAAABJRU5ErkJggg=="
          />
        </div>
      </div>

      <!-- 演员信息 -->
      <div class="actors">
        <div class="actors-title-bar">
          <span class="actors-title-text">演职人员</span>
        </div>

        <ul class="actors-list">
          <li v-for="(item,index) in moviedes.actors" :key="index">
            <img :src="item.avatarAddress" alt />
            <span class="actors-name">{{item.name}}</span>
            <span class="actors-role">{{item.role}}</span>
          </li>
        </ul>
      </div>
      <!-- 演员信息 -->

      <div class="photos">
        <div class="photos-title-bar">
          <span class="actors-title-text">剧照</span>
          <span class="photos-to-all" v-show="length">
            全部({{length}})
            <i class="iconfont iconyoujiantou"></i>
          </span>
        </div>
        <p class="empty-text" v-show="!length">暂无电影剧照</p>
        <ul class="photo-list">
          <li v-for="(item,index) in moviedes.photos" :key="index">
            <img :src="item" alt />
          </li>
        </ul>
      </div>

      <div class="goSchedule" @click="select()">选票专区</div>
    </div>
  </div>
</template>

<script>
import Header from 'common/header';
import { getMovieDes } from "api/moviedes";
import{mapState,mapMutations} from "vuex";
export default {
    name:'film',
    async created() {
        let response = await getMovieDes(this.filmId);
        if (response) {
            this.cinemaFlag = false;
        } else {
            this.cinemaFlag = true;
        }
        this.moviedes = response.data.film;
        this.name = this.moviedes.filmType.name;
        if(this.moviedes.photos){
          this.length = this.moviedes.photos.length;
        }
        
    },
    computed:{
        ...mapState({
            filmId:state=>state.citylist.filmId
        })
    },
    data() {
        return {
        flg: true,
        className: true,
        moviedes: [],
        name: "",
        length: "",
        cinemaFlag: true
        };
    },
    methods: {
        toggle() {
            this.className = !this.className;
        },
        goback(){
            this.$router.back();
        },
        handleScroll() {
            var scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            if (scrollTop > 1) {
                this.flg = false;
            } else {
                this.flg = true;
            }
        },
        select(){
            this.$router.push('/cinemas')
        }
        },
        mounted() {
            //监听滚动事件
            // window.addEventListener("scroll", this.handleScroll);
        }
    };
</script>

<style scoped>
 .empty-text {
    font-size: 14px;
    color: #bdc0c5;
    margin: auto;
    text-align: center;
    line-height: 100%;
   
}
.filxed {
  background: #fff;
}
.big-img img {
  width: 100%;
  height: 2.11rem;
}
.goBack {
  height: 0.3rem;
  width: 0.3rem;
  border-radius: 15px;
  background: #87878b;
  position: absolute;
  top: 5px;
  left: 5px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 电影详情 */
.film-detail {
  padding: 0.15rem;
  padding-top: 0.12rem;
  background: #fff;
}
.film-detail .col {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.film-name .name {
  color: #191a1b;
  font-size: 0.18rem;
  height: 0.24rem;
  line-height: 0.24rem;
  margin-right: 0.07rem;
}
.item {
  font-size: 9px;
  color: #fff;
  background-color: #d2d6dc;
  height: 0.14rem;
  line-height: 0.14rem;
  padding: 0 2px;
  border-radius: 2px;
  position: relative;
  top: -3px;
}
.film-detail .film-grade {
  text-align: right;
  color: #ffb232;
}
.film-detail .film-grade .grade {
  font-size: 18px;
  font-style: italic;
}
.film-detail .grey-text {
  font-size: 13px;
  color: #797d82;
  margin-top: 4px;
}
.film-detail .grey-text {
  font-size: 13px;
  color: #797d82;
  margin-top: 4px;
  margin-top: 12px;
}
.film-detail .test {
  width: calc(100vw - 30px);
  opacity: 0;
  position: absolute;
  top: 1px;
  margin-left: -10000px;
  font-size: 13px;
}
.film-detail .hidde {
  height: 38px !important;
  overflow: hidden;
  transition: height 0.5s ease;
}
.film-detail .toggle {
  text-align: center;
  display: block;
  height: auto;
  width: 0.2rem;
  margin: auto;
  line-height: normal;
}
.film-detail .toggle img {
  width: 8px;
  margin: auto;
}

/* 演员信息 */
.actors {
  margin-top: 10px;
  background-color: #fff;
}
.actors .actors-title-bar {
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
}
.actors .actors-title-bar .actors-title-text {
  font-size: 16px;
  text-align: left;
  color: #191a1b;
}
.actors-list {
  overflow-x: auto;
  overflow-y: hidden;
  height: 1.4rem;
  width: 100%;
  display: flex;
}
.actors-list::-webkit-scrollbar {
  display: none;
}

.actors-list li {
  margin-left: 0.15rem;
  display: flex;
  flex-direction: column;
  width: 0.85rem;
}
.actors-list li img {
  width: 0.85rem;
  height: 0.85rem;
}
.actors-name {
  padding-top: 10px;
  font-size: 12px;
  color: #191a1b;
  width: 0.85rem;
  height: 18px;
  display: block;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.actors-role {
  display: block;
  text-align: center;
  font-size: 10px;
  color: #797d82;
}
/* 剧照 */
.photos {
  margin-top: 10px;
  margin-bottom: 60px;
  background-color: #fff;
}
.photos .photos-title-bar {
  font-size: 16px;
  height: 62px;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
}
.photos .photos-title-bar .photos-title-text {
  font-size: 16px;
  text-align: left;
  color: #191a1b;
}
.photos .photos-title-bar span {
  display: inline-block;
  height: 22.5px;
  line-height: 22px;
}
.photos .photos-title-bar .photos-to-all {
  font-size: 13px;
  color: #797d82;
  float: right;
  text-align: center;
}

.photo-list {
  overflow-x: auto;
  overflow-y: hidden;
  height: 1.15rem;
  width: 100%;
  display: flex;
}
.photo-list::-webkit-scrollbar {
  display: none;
}
.photo-list li {
  margin-left: 0.15rem;
  width: 1.5rem;
  height: 0.8rem;
  background-size: contain;
}
.photo-list li img {
  width: 1.5rem;
  height: 0.8rem;
}

/* 选座购票 */
.goSchedule {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 0.49rem;
  width: 100%;
  text-align: center;
  background-color: #ff5f16;
  color: #fff;
  font-size: 16px;
  line-height: 0.49rem;
}
</style>
