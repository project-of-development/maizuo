<template>
    <div>
        <div class="list-nav">
            <ul>
                <li v-for="(item, index) in navs" :key="index" @click="handleClick(index)">
                    <span>{{item.title}}</span>
                    <i class="iconfont" v-html="item.iconfont"></i>
                </li>
            </ul>
        </div>
        <div class="list-mask" v-show="flag">
            <div class="list-item1" v-if="ret[0]">
                <ul>
                    <li v-for="(item,indexs) in list" :key="indexs" @click="handleChoose(item)">{{item}}</li>
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
import {getmove} from "api/cinema";
import { mapState, mapMutations } from "vuex";
export default {
    name:'MovieMark',
    async created(){
        let response = await getmove(this.cityId);
        for(var i=0;i<response.data.cinemas.length;i++){
            if(this.list.indexOf(response.data.cinemas[i].districtName)==-1){
                this.list.push(response.data.cinemas[i].districtName)
            }
        }
        
        this.$emit("handle",response)
        // this.data = this.title;
    },
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
            list:[],
            flag:false,
            ret:[0,0,0],
            case:'0',
            list:[],
            // data:"",
        }
    },
    methods:{
        ...mapMutations({
            
        }),
        handleClick(num){
            this.flag = true
            this.ret.forEach((value, index, array)=>{
                this.ret.splice(index, 1 , 0)
            })
            this.ret[num] = !this.ret[num]
            this.$forceUpdate()
        },
        handleChoose(item){
            this.ret.map((value, index, array)=>{
                this.ret.splice(index, 1, 0)
            })
            this.flag = false;
            this.$observer.$emit('handleChoose',city);
        }
    }
}
</script>

<style scoped>
#list{
    height: 100%;
}
.list-nav{
    width: 100%;
    height: .49rem;
    background: #fff;
    position: fixed;
    top:.44rem;
    left: 0;
    z-index: 55;
}
.list-nav>ul{
    width:100%;
    height: 100%;
    display: flex;
}
.list-nav>ul>li{
    height: .49rem;
    width:33.333%;
    text-align: center;
    line-height: .49rem;

}
.list-nav>ul>li>span{
    font-size: .14rem;
    color:#191a1b;
}
.list-nav>ul>li>i{
    font-size: .08rem;
    margin: .03rem;
}   
.list-li{
    position: absolute;
    top: 0.93rem;
    left: 0;
} 
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
