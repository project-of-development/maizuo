<template>
  <div class="home">
    <div class="list-li" v-if="!cimemaFlag">
      <!-- <div class="loading" v-if="scrollLoading"> -->
        <i class="fa fa-spinner fa-pulse"></i>
      </div>
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="savecinemaId(item.cinemaId)">
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
  <!-- </div> -->
</template>

<script>
import { getmove } from "api/cinema";
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "movieBody",
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
    }
  },
  mounted() {
    this.$refs.bscroll.handleScrollStart(() => {
      this.srcollLoading = true;
    });
    this.$refs.bscroll.handleScrollEnd(() => {
      this.scrollLoading = false;
    });
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

<style>
</style>
