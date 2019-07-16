import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import center from './center'
import movie from './movie'
import cinema from './cinema'
export default new Router({
    mode: 'hash',
    routes: [{
            path: '/',
            redirect: "/movie"
        },
        center,
        movie,
        cinema
    ]
})