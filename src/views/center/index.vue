<template>

        <div id="mine">
        <div class="mine-header">
            <img src="../../assets/dl.png" alt="">
            <router-link tag='a' to='/login'>立即登陆</router-link>
        </div>
        <div class="mine-nav">
            <a href="#"><i class="iconfont iconpiaoquan1"></i><span>电影订单</span></a>
            <a href="#"><i class="iconfont icondingdan"></i><span>商品订单</span></a>
        </div>
        <div class="mine-list">
            <ul>
                <router-link v-for="(item,index) in list" :key="index" to='/login' tag="li">
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.text}}<span>{{item.money}}</span></span>
                    <i class="iconfont" v-html="item.icon2"></i>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"center",
        data(){
        return{
            list:[
                {
                    icon:'&#xe66a;',
                    text:'卖座券',
                    money:'',
                    icon2:'&#xe617;'
                },
                                {
                    icon:'&#xe6da;',
                    text:'组合红包',
                    money:'',
                    icon2:'&#xe617;'
                },

                {
                    icon:'&#xe615;',
                    text:'余额',
                    money:'￥ 0',
                    icon2:'&#xe617;'
                },
                {
                    icon:'&#xe62a;',
                    text:'设置',
                    money:'',
                    icon2:'&#xe617;'
                },

            ]
        }
    }
}
</script>


<style>
#mine{
    width:100%;
}
.mine-header{
    background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png);
    text-align: left;
    margin-top: -.44rem;
    box-sizing: border-box;
    height: 2rem;
    line-height: 1.36rem;
    padding-left: .22rem;
    padding-top: .64rem;
}
.mine-header>img{
    width: .63rem;
    height: .63rem;
    border-radius: .35rem;
    margin-right: .2rem;
    border: .02rem solid #fff;
    vertical-align: middle;

}
.mine-header>a{
    font-size: .15rem;
    color:#fff;
}
.mine-nav{
    display: flex;
    background: #fff;
    height: .79rem;
    margin-bottom: .1rem;
    width:100%;
    justify-content: space-around;
    align-items: center;
}
.mine-nav>a{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.mine-nav>a:nth-child(1)>i{
    font-size: .3rem;
    color:yellow;
}
.mine-nav>a:nth-child(2)>i{
    font-size: .3rem;
    color:greenyellow;
}.mine-nav>a>span{
    color:#797d82;
    line-height: .3rem;
    font-size: .14rem;
}
.mine-list{
    background: #fff;
}
.mine-list>ul>li{
    height: .49rem;
    line-height: .49rem;
    box-sizing: border-box;
    width:100%;
    padding: 0 .1rem;
}
.mine-list>ul>li>span:nth-child(2){
    
    display: inline-block;
    margin-left: .1rem;
    color:#191a1b;
    font-size:.15rem;
    width:2.9rem;
    height: 100%;
}
.mine-list>ul>li>span:nth-child(2)>span{
    float: right;
}
.body,html{
    background: #f4f4f4;
}
    
</style>