<template>
  <div class="home">
    <div class="list-li" v-if="!cinemaFlag">
      <!-- <div class="loading" v-if="scrollLoading"> -->
        <!-- <i class="fa fa-spinner fa-pulse"></i> -->
      <!-- </div> -->
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="saveCinemaId(item.cinemaId)">
          <div class="site">
            <p>{{item.name}}</p>
            <span>{{item.address}}</span>
          </div>
          <div class="price">
            <p>
              ￥
              <span>{{(item.lowPrice)/100}}</span>起
            </p>
            <span>{{item.Distance &lt; 1 ? '距离未知':parseInt(item.Distance)+'公里'}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getmove } from "api/cinema";
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "MovieBody",
  props:{
    title: {
      type: String,
      default: ""
    }
  },
  created() {
    this.$observer.$on("handleChoose", val => {
      this.listAll.length = 0;
      this.list.length = 0;
      this.getcity(val);
      this.city = val;
    });
    this.getcity();
  },
  data() {
    return {
      list: [],
      listAll: [],
      data: "",
      cinemaFlag: true,
      scrollLoading: false,
      city: ""
    };
  },
  methods: {
    async getcity(city) {
      let data = await getmove(this.cityId);
      if (data) {
        this.cinemaFlag = false;
      } else {
        this.cinemaFlag = true;
      }
      this.list = data.data.cinemas;
      if (city) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i].districtName == city) {
            this.listAll.push(this.list[i]);
          }
        }
        this.list = this.listAll;
      }
      this.$emit("handle", data);
      this.data = this.title;
    },
    ...mapMutations({
      saveCinemaId: "citylist/saveCinemaId"
    })
  },
  mounted() {
    // this.$refs.bscroll.handleScrollStart(() => {
    //   this.srcollLoading = true;
    // });
    // this.$refs.bscroll.handleScrollEnd(() => {
    //   this.scrollLoading = false;
    // });
  },
  computed:{
    ...mapState({
      cityId: state=>state.citylist.cityId,
      districtName:state=>state.citylist.districtName
    }),
    ...mapGetters({
      getdistrictName: "citylist/getdistrictName"
    })
  },

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
  font-size: 0.4rem;
}
.list-li {
  position: relative;
  top: 0.93rem;
  bottom: 0.5rem;
}
.list-li > ul {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.list-li > ul > li {
  position: relative;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom: 1px solid #ededed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.site {
  width: 2.8rem;
  height: 100%;
  overflow: hidden;
}
.site > p {
  color: #191a1b;
  font-size: 0.15rem;
  line-height: 0.22rem;
}
.site > span {
  color: #797d82;
  display: block;
  width: 100%;
  font-size: 0.12rem;
  margin-top: 0.05rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.price {
  width: 0.7rem;
  height: 100%;
  text-align: right;
}
.price > p {
  color: #ff6700;
  font-size: 0.1rem;
  line-height: 0.25rem;
}
.price > p > span {
  font-size: 0.14rem;
}
.price > span {
  color: #797d82;
  font-size: 0.11rem;
}
</style>
