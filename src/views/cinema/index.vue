<template>
  <div id="list">
    <HeaderCom title="影院">
      <template v-slot:left>
        <div class="left" @click="cityChoose()">
          <span>深圳</span>
          <i class="iconfont iconiconfontarrows1"></i>
        </div>
      </template>

      <template v-slot:right>
        <div class="right">
          <router-link class="iconfont iconfangdajing" to="/search" tag="i"></router-link>
        </div>
      </template>
    </HeaderCom>

    <MovieMark/>
    <MovieBody/>
  </div>
</template>

<script>
import HeaderCom from "common/header";
import MovieMark from 'components/cinema/moviemask.vue'
import MovieBody from 'components/cinema/moviebody.vue'
export default {
  name: "cinema",
  components: { HeaderCom, MovieMark, MovieBody },
  methods:{
    cityChoose(){
      this.$router.push({name: 'city'});
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 0.44rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  z-index: 199;
}
.header .left {
  min-width: 15%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 0.15rem;
  width: 0.6rem;
}
.header .left span {
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.header .right {
  width: 15%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  margin-right: 0.15rem;
  text-align: right;
}
.right .iconfangdajing {
  width: 100%;
  text-align: right;
}
.header .left .iconiconfontarrows1 {
  font-size: 0.1rem;
  margin-left: 0.05rem;
}
.title {
  text-align: center;
  font-size: 0.16rem;
  width: 0.6rem;
  color: #191a1b;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.header > .p1 {
  position: absolute;
  left: 20px;
  font-size: 0.13rem;
}
.header > .p2 {
  position: absolute;
  right: 20px;
  font-size: 0.13rem;
}
</style>
