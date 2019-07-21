<template>
    <div class="home1">
    <!-- <Loading v-if="cinemaFlag"/> -->
    <!-- 导航 -->
        <div class="topic-bar">
            <div class="default">
                <span :class="[('sp-title'),(ret[4]?'active':'')]" @click="changeColor(4)">推荐</span>
            </div>
            <div class="salesCount">
                <span  :class="[('sp-title'),(ret[0]||ret[1]?'active':'')]">销量</span> 
                <div class="icon-list">
                    <i  :class="['iconfont iconshangjiantou',(ret[0]?'active':'')]" style="font-size: 18px; " @click="changeColor(0)"></i> 
                    <i  :class="['iconfont iconiconfontarrows1',(ret[1]?'active':'')]" style="font-size: 10px; "  @click="changeColor(1)"></i>
                </div>
            </div>
            <div  class="price">
                <span :class="[('sp-title'),(ret[2]||ret[3]?'active':'')]">价格</span> 
                    <div class="icon-list">
                    <i :class="['iconfont iconshangjiantou',(ret[2]?'active':'')]" style="font-size: 18px; "  @click="changeColor(2)"></i>
                    <i :class="['iconfont iconiconfontarrows1',(ret[3]?'active':'')]" style="font-size: 10px;"  @click="changeColor(3)"></i>
                </div>
            </div>
        </div>

    <!-- 图片列表 -->
        <div class="goodslist" v-if="!cinemaFlag">
            <ul class="goods-fix">
                <li v-for="(item,index) in goodsList" :key="index">
                    <a href="#">
                        <div class="goods-img">
                            <img :src="item.sku.imgUrl" alt="">
                            <span class="labels">
                                <span v-for="(item1,index1) in item.labels.common"  :key="index1">
                                    <div class="item-common-label" :style="{'background-color':item1.labelColor}">{{item1.title}}</div>
                                </span>
                            </span>
                        </div>
                    <div class="item-describe">
                        <div class="masterName">
                           {{item.masterName}}
                        </div>
                     <div class="slaveName"> {{item.slaveName}}</div>
                      <div class="priceList">
                            <div class="price-format price01">
                                <span  class="unit" style="font-size: 10px;">￥</span><span class="int"  style="font-size: 15px;">{{parseInt(item.sku.price/100)}}</span><span  class="dec"  v-show="(item.sku.price%100)/10" style="font-size: 10px;" >.{{(item.sku.price%100)/10}}</span>
                            </div>
                             <div  class="price-format marketPrice">
                                <span  class="unit" v-show="((item.sku.marketPrice%100)/10)!=0">￥</span><span class="int" v-show="((item.sku.marketPrice%100)/10)!=0">{{parseInt(item.sku.marketPrice/100)}}</span>
                                <span data-v-1a3bd954="" class="dec" style="font-size: 11px;" v-show="((item.sku.marketPrice%100)/10)!=0">.{{(item.sku.marketPrice%100)/10}}</span>
                          </div> 
                      </div>
                   </div>
                    </a>
                </li>
            </ul>
             <div class="no-more">- 我是有底线的 -</div>
        </div>
    
    </div>
</template>


<script>
import {getgoodslist} from "api/goodslist";
import{mapState,mapMutations} from "vuex";
export default {
   name:"goodslistfood",
    computed:{
        ...mapState({
            goodsid:state=>state.citylist.goodsid
        }),
    },
    async created(){
         let data = await getgoodslist(this.goodsid);
         if(data){
            this.cinemaFlag = false;
            }else{
                this.cinemaFlag = true;
            }

        for(var i=0;i<data.data.list.length;i++){
            this.goodsList.push(data.data.list[i]);
        }
    },
    data(){
        return {
            goodsList:[],
            plummet:"",
            pinkage:'',
            ret:[0,0,0,0,1],
            cinemaFlag:true,
        }
    },
     methods:{
        changeColor(index){
            this.ret = [0,0,0,0,0];
            this.ret[index] = 1;
            if(index==0){//销量升序
                this.goodsList.sort((a,b)=>a.salesCount-b.salesCount);
            }
             if(index==1){//销量降序
                this.goodsList.sort((a,b)=>a.salesCount-b.salesCount).reverse();
            }
             if(index==2){//价格升序
                this.goodsList.sort((a,b)=>a.sku.price-b.sku.price);
            }
             if(index==3){//价格降序
                this.goodsList.sort((a,b)=>a.sku.price-b.sku.price).reverse();
            }
            this.$forceUpdate();
        }
    }
    
}
</script>


<style scoped>
.no-more {
  text-align: center;
  margin: 5px auto;
  color: #bdc0c5;
}
.home1{
    height: 100%;
}
.loading {
  width: 100%;
  height: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading > i {
  font-size: 0.3rem;
}
 /* 导航 */
   .iconshangjiantou{
       color: rgb(189, 192, 197);
       position: relative;
       top:2px;
       left: -3px;;
   }
   .iconiconfontarrows1{
       color: rgb(189, 192, 197);
       position: relative;
       top:-6px;
       left: 1px;;
   }
 
   .topic-bar{
     position: fixed;
     top: .44rem;
    height: 0.44rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: 10;
    background-color: #fff;
   
    }
    .default,.salesCount,.price{
        width: 33.33%;
        height: 0.44rem;
         display: flex;
         justify-content: center;
         align-items: center;
    }
     .sp-title{
        color:  #797d82;
        font-size: 14px;
    }
     .active {
            color: #c03131;
        }
        .icon-list{
            display: flex;
            flex-direction: column;
            margin-left: 8px;
            
        }
    .topic-bar::after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #ededed;
    color: #ededed;
    transform: scaleY(.5);
}
 /* 图片列表 */
.goodslist{
  
    background-color: #fff;
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
    width: 100%;
    padding-right: 0;
    box-sizing: border-box;
    }
.goods-fix{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
}
.goods-fix li{
    width: 49%;
}
.item-describe{
      width: 1.65rem;
}
.goods-img{
    width: 1.65rem;
    height:1.65rem;
    overflow: hidden;
    position: relative;
    background: #f4f4f4;
   
}
.goods-img img{
     width: 100%;
    height:100%;
    position: absolute;
}
 .labels {
    position: absolute;
    bottom: 0;
    left: 0;
}
 .item-common-label {
    margin-right: 5px;
    color: #fff;
    float: left;
    padding: 0 8px;
    font-size: 10px;
    height: 15px;
    line-height: 15px;
    border-radius: 1px;
}
.item-describe div{
    overflow: hidden;  
    text-overflow: ellipsis;
    white-space: nowrap;
}
  .masterName {
      width: 100%;
     font-size: 14px;
     margin-top: .08rem;
    
}
.item-describe .slaveName {
    font-size: 12px;
    margin-bottom: 2px;
    color: #797d82;
}
.price-format {
    color: #c03131;
    margin-left: -1px;
}
.priceList {
 
 display: flex;
}
 .marketPrice {
    position: relative;
    top:5px;
    left: 4px;
    color: rgb(189, 192, 197);
    text-decoration: line-through
}



</style>