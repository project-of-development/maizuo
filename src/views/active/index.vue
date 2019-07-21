<template>
  <div class="home1">
    <div class="page home">
        <Header >
            <template v-slot:left>
            <div class="left" @click="goback">
                <i class="iconfont iconiconfontjiantou1"></i>
            </div>
            </template>
            <template v-slot:right>
                <div class="right">
                </div>
            </template>
        </Header>
        <div class="imgs" >
            <img :src="img1" class="img1" />
            <img
            v-for="(item,index) in img"
            :key="index"
            :src="item"
            
            style="line-height: 32px; max-width: 100%;"
            @click=" getgoodslist(goodsID[index-1])"
            />
        </div>
  
 
    </div>
  </div>
</template>
  

<script>
    import { activeImg } from "api/active";
    import { mapState, mapMutations } from "vuex";
    import Header from "common/header";
    export default {
    name: "active",
    components: {
        Header
    },
    async created() {
        let data = await activeImg();
        if (data) {
        this.cinemaFlag = false;
        } else {
        this.cinemaFlag = true;
        }
        let activeimg = data.data.data.content;
        let imgReg = /<img.*?(?:>|\/>)/gi;
        let imgReg1 = /topic.*?(?:>|\/})/gi;

        let arr = activeimg.match(imgReg);
        let arr1 = activeimg.match(imgReg1);
        this.img1 = arr[0].substring(
        arr[0].indexOf("http"),
        arr[0].indexOf(".jpg") + 4
        );
        for (var i = 1; i < arr.length; i++) {
        let img = arr[i].substring(
            arr[i].indexOf("http"),
            arr[i].indexOf(".jpg") + 4
        );
        this.img.push(img);
        }

        for (var j = 0; j < arr1.length; j++) {
        let id = arr1[j].substring(
            arr1[j].indexOf("/")+1,
            arr1[j].indexOf("'") 
        );
        this.goodsID.push(id);
        }
    
    },
    data() {
        return {
        img1: "",
        img: [],
        goodsID:[]
        };
    },
    methods: {
        ...mapMutations({
        getgoodslist: "citylist/getgoodslist"
        }),
        goback() {
        this.$router.back();
        }
    },
    
    };
</script>

<style scoped>
.home1,.page{
  height: 100%;
}
.header {
  background: #fff;
}
.imgs {
  width: 100%;
  overflow: hidden;
  margin-top: 49px;
}
.imgs img {
  margin-top: 0;
}
.img1 {
  width: 100%;
  height: 2.4rem;
  vertical-align: top;
  border: 0;
}
</style>