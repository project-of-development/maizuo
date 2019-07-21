<template>
  <div class="page home">
    <!-- 头部 -->
    <Header :title="headerTitle">
      <template v-slot:left>
        <div class="left" @click="goback">
          <i class="iconfont iconiconfontjiantou1"></i>
        </div>
      </template>

      <template v-slot:right>
        <div class="right">
          <i class="iconfont iconfangdajing"></i>
        </div>
      </template>
    </Header>

    <div class="position"></div>
    <!-- 图片列表 -->

    <Goodslist />

  </div>
</template>


<script>
import Header from "common/header";
import Goodslist from "components/goodslist";
import { getgoodslistHeader } from "api/goodslist";
import{mapState,mapMutations} from "vuex";
export default {
  name: "getgoodslistHeader",
  computed:{
    ...mapState({
        goodsid:state=>state.citylist.goodsid
    })
  },
  async created() {
    let data = await getgoodslistHeader(this.goodsid);
    this.headerTitle = data.data.masterTitle;
  },
  components: {
    Header,
    Goodslist
  },
  data() {
    return {
      headerTitle: ""
    };
  },
  methods: {
    goback() {
      this.$router.back();
    }
  }
};
</script>


<style scoped>
.position {
  width: 100%;
  height: 0.94rem;
  background: #fff;
}
/* 图片列表 */
.home{
    height: 100%;
}

</style>