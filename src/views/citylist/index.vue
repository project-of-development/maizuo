<template>
    <div id="city">
        <Header title="当前城市 -">
            
        </Header>
    </div>
</template>


<script>

</script>


<style scoped>
.city{  overflow: auto;
  height: 100%;
position: absolute;}
.addshow {
  animation: citykey 2s linear;
}
@keyframes citykey {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.search-city-input {
  position: fixed;
  top: 0.44rem;
  padding: 10px 15px;
  height: 0.49rem;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
  z-index: 199;
  background: #f4f4f4;
}
.search-city-input .input-wrap {
  background-color: #fff;
  position: relative;
  display: inline-block;
  border-radius: 3px;
  width: 100%;
  height: 0.3rem;
}
.iconfangdajing {
  position: absolute;
  left: 7px;
  top: 0;
  line-height: 30px;
  font-size: 21px;
  color: #797d82;
}
.input-wrap .search-input {
  position: absolute;
  left: 33.5px;
  top: 0;
  height: 30px;
  width: calc(100% - 65px);
  border: 0;
}
.clean-icon {
  position: absolute;
  right: 10px;
  top: 8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #bdc0c5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.clean-icon .iconwenhao {
  font-size: 14px;
  color: #fff;
  transform: scale(0.5);
}

.cancel-btn {
  width: 43px;
  position: absolute;
  display: inline-block;
  text-align: right;
  font-size: 14px;
  line-height: 33px;
}
/* 城市定位 */
.mint-indexlist-content {
  width: 100%;
  position: relative;

  top: 0.94rem;
  background: #fff;
  padding-top: 15px;
  margin-right: 17px;
  box-sizing: border-box;
}

.recommend-city,
.city-change {
  width: 100%;
  padding-left: 20px;
  box-sizing: border-box;
}

.city-index-title {
  font-size: 13px;
  color: #797d82;
  margin-bottom: 10px;
}
.city-item-detail {
  width: calc((100vw - 33px) / 3);
  text-align: center;
  padding-bottom: 15px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.city-item-detail .city-item-text {
  height: 30px;
  background-color: #f4f4f4;
  line-height: 30px;
  border-radius: 3px;
  box-sizing: border-box;
  margin: 0 8px;
  font-size: 14px;
  color: #191a1b;
}
.city-index-detail {
  display: flex;
  align-content: center;
  flex-wrap: wrap;
}
.mint-indexsection-index {
  background-color: #f4f4f4;
  color: #797d82;
  height: 30px;
  line-height: 30px;
  width: 100%;
  padding-left: 15px;
  box-sizing: border-box;
}
.city-item-detail-white {
  color: #191a1b;
  box-sizing: border-box;
  height: 48px;
  line-height: 48px;
  width: 100%;
  position: relative;
}
.city-item-detail-white::after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ededed;
  color: #ededed;
  transform-origin: 0 100%;
  transform: scaleY(0.5);
}

/* 侧边导航 */
.mint-indexlist-nav {
  border: 0;
  position: fixed;
  width: 17px;
  margin-top: 94px;
  top: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mint-indexlist-nav .mint-indexlist-navitem {
  font-size: 11px;
  padding: 0 6px;
  color: #191a1b;
}

/* 隐藏的 */
.hadden {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -24px;
  margin-top: -24px;
  width: 0.48rem;
  height: 0.48rem;
  background: #4c4c4c;
  color: #fff;
  z-index: 999;
  line-height: 0.48rem;
  text-align: center;
  font-size: 20px;
}
/* 隐藏的城市列表 */
.hadd-city {
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  top: 0.94rem;
  background: #fff;
  height: 100%;
}
.cityimg {
  position: absolute;
  top: 0.45rem;
  width: 100%;
  text-align: center;
}
.cityimg img {
  width: 0.9rem;
  height: 0.9rem;
}
.cityimg p {
  color: #bdc0c5;
  font-size: 14px;
  margin: 0;
}
</style>
