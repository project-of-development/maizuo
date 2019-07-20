import Vue from 'vue'
import Vuex from 'vuex'
import citylist from './citylist'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        citylist
    }
})