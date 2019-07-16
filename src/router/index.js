import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import center from './center'
import nowPlaying from './movie'
import comingSoon from './movie/comingsoon.js'
import cinema from './cinema'
export default new Router({
    mode: 'hash',
    routes: [{
            path: '/',
            redirect: "/movie/nowPlaying"
        },
        center,
        nowPlaying,
        cinema,
        comingSoon
    ]
})