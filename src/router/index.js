import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import center from './center'
import nowPlaying from './movie'
import comingSoon from './movie/comingsoon.js'
import cinema from './cinema'
import city from './citylist'
import film from './film'
import active from './active'
import topic from './topic'
export default new Router({
    mode: 'hash',
    routes: [{
            path: '/',
            redirect: "/movie/nowPlaying"
        },
        center,
        nowPlaying,
        cinema,
        comingSoon,
        city,
        film,
        active,
        topic
    ]
})