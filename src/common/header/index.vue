<template>
    <div class="header">
        <slot name="left" ></slot>
        <div class="title">
            <div>{{title}}</div>
        </div>
        <slot name="right"></slot>
    </div>
</template>

<script>
export default {
    name:'headerCom',
    props:{
        title:{
            type:String,
            default:""
        },
        city:{
            type:String,
            default:"深圳"
        }
    },
    data(){
        return{
            icon:['<','>']
        }
    }
    
}
</script>


<style scoped>
   .header{
       width: 100%;
       height: .44rem;
       position: fixed;
       top:0;
       left:0;
       display: flex;
       justify-content: center;
       align-items: center;
       background: #fff;
       z-index: 199;
      
   }
   .header .left{
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
    margin-left: .15rem;
     width: 0.6rem;
    
    }
     .header .left span{
       
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
    
    margin-right: .15rem;
    text-align: right;
}
.right .iconfangdajing{
    width: 100%;
    text-align: right;
}
    .header .left .iconiconfontarrows1{
        font-size: .10rem;
        margin-left: .05rem;
    }
   .title {
    text-align: center;
    font-size: .16rem;
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
    .header>.p1{
        position: absolute;
        left: 20px;
        font-size:.13rem;

    }
     .header>.p2{
        position: absolute;
        right: 20px;
        font-size:.13rem;

    }
</style>