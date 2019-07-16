
<template>
  <!-- 即将上映 -->
  <div :class="'nav-bas'">
    <div class="title01" >
      <router-link to="/movie/nowPlaying" @click.native="toggle(true)" tag="p">正在热映</router-link>
      <!-- <p :class="show?'active':''" @click="clickF(true)">正在热映</p> -->
    </div>
    <div class="title01">
      <router-link @click.native="toggle(false)" to="/movie/comingSoon" tag="p">即将上映</router-link>
      <!-- <p :class="!show?'active':''" @click="toggle(false)">即将上映</p> -->
    </div>
  </div>
</template>


<script>
export default {
  name: 'movieNav',
  data() {
    return {
       //正在热映
    };
  },
  methods: {
    toggle(boolean){
        this.$emit('showToggle', boolean),
        console.log('done')
    }
  }
};
</script>


<style  scoped>


/* 即将上演 */
.nav-bas.tab-wrap {
  position: fixed;
  top: 0.44rem;
}

.nav-bas {
  position: relative;
  /* top:-10px; */
  z-index: 100;
  width: 100%;
  height: 100%;
  height: 0.49rem;
  overflow-x: hidden;
  background: #fff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.nav-bas .title01 {
  width: 50%;
  height: 0.49rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-bas .title01 p {
  line-height: 0.47rem;
  color: #191a1b;
  font-size: 0.16rem;
}
.nav-bas .title01 .active {
  color: #ff5f16;
  border-bottom: 2px#ff5f16 solid;
}

router-link-active {
  color: #ff5f16;
  border-bottom: 2px#ff5f16 solid;
}
</style>