import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "common"

Vue.config.productionTip = false

Vue.prototype.timestampToTime = function(timestamp) {
    var date = new Date(timestamp * 1000);
    var Y = date.getFullYear();
    var M = (date.getMonth() + 1 < 10 ? (date.getMonth() + 1) : date.getMonth() + 1);
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return { Y, M, D, h, m, s };
};
Vue.prototype.getWeek = function(date1) {
    var week;
    var date = new Date(date1);
    if (date.getDay() == 0) week = "周日"
    if (date.getDay() == 1) week = "周一"
    if (date.getDay() == 2) week = "周二"
    if (date.getDay() == 3) week = "周三"
    if (date.getDay() == 4) week = "周四"
    if (date.getDay() == 5) week = "周五"
    if (date.getDay() == 6) week = "周六"
    return week;
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')