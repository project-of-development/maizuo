<template>
    <footer class="nav-bar">
        <router-link tag="div" v-for="(item, index) in span" :key='index' :to='item1[index]'>
            <a href="javascript:;" @click="handleClick(index)">
                <i :class="className[index]"></i>
                <span>{{item}}</span>
            </a>
        </router-link>
    </footer>
</template>

<script>
export default {
    data(){
        return {
            span:['电影','影院','特惠','我的'],
            item1:['/movie','/cinemas','/active','/mine'],
            className:['iconfont icondianying','iconfont iconyingyuana','iconfont iconyouhui','iconfont iconwode'],
            selectIndex:0
        }
    },
    methods:{
        handleClick(){
            
        }
    }
}
</script>

<style scoped>
      .nav-bar{
            position: fixed;
            bottom: 0;
            width: 100%;
            display: -ms-flexbox;
            display: flex;
            padding: 0;
            margin: 0;
            z-index: 100;
            background: #fff;
            list-style: none;
        }
        .nav-bar div{
                width: 25%;
                text-align: center;
              
            }
        .nav-bar div a{
        width: 100%;
        height: .49rem;
        float: left;
        line-height: .28rem;
        position: relative;
        color: #797d82;
        display: flex;
        flex-direction: column;
        align-items: center;
        }
         .nav-bar div i{
        width: .21rem;
        height: .21rem;
        padding-top: .03rem;
        
       }
       /* .nav-bar div .color{
        color: #ff6700;
       } */
        .nav-bar>.router-link-active>a{
        color:#ff6700;
    }
</style>
