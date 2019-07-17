<template>
    <div>
        <div class="list-nav">
            <ul>
                <li v-for="(item, index) in navs" :key="index">
                    <span>{{item.title}}</span>
                    <i class="iconfont" v-html="item.iconfont"></i>
                </li>
            </ul>
        </div>
        <div class="list-mask" v-show="falg">
            <div class="list-item1" v-if="ret[0]">
                <ul>
                    <li v-for="(item,indexs) in list" :key="indexs" @click="handlecity(item)">{{item}}</li>
                </ul>
            </div>
            <div class="list-item2" v-if="ret[1]">
                <ul>
                    <li>App订票</li>
                    <li>前台兑换</li>
                </ul>
            </div>
            <div class="list-item3" v-if="ret[2]">
                <ul>
                    <li>最近去过</li>
                    <li>离我最近</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'MovieMark',
    data(){
        return{
            navs:[
                {
                    title:'全城',
                    iconfont:'&#xe625;'
                },
                                {
                    title:'APP订票',
                    iconfont:'&#xe625;'
                },
                                {
                    title:'最近去过',
                    iconfont:'&#xe625;'
                }
            ],
            list:[]
        }
    }
}
</script>

<style scoped>
 .list-mask{
    height: 100%;
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
    background: rgba(0, 0, 0, .5)
}
.list-item1{
    width: 100%;
    min-height: 1.45rem;
    position: fixed;
    top: .93rem;
    left: 0;
}
.list-item1>ul{
    padding-left:.1rem;
    box-sizing: border-box;
     background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  
}
.list-item1>ul>li{
    width:.79rem;
    height: .3rem;
    border-radius: .03rem;
    border:.01rem solid rgba(210,214,220,.5);
    line-height: .3rem;
    text-align: center;
    color:#797d82;
    margin-bottom: .15rem;
    margin-right: .1rem;
}
.list-item2,.list-item3{
    width: 100%;
    background:#fff;
    min-height: 1.45rem;
    position: fixed;
    top: .93rem;
    left: 0;
   
}
.list-item2>ul,.list-item3>ul{
    height: 100%;
    width: 100%;
}
.list-item2>ul>li,.list-item3>ul>li{
    height: .44rem;
    padding: 0 .15rem;
    width: 100%;
    line-height: .44rem;
}
.list-item1>ul>.active,.list-item2>ul>.active,.list-item3>ul>.active{
    color:#ff6700;
}
   
</style>
