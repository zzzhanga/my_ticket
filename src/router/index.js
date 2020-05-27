import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Me from '../views/Me.vue'
import Cinema from '../views/Cinema'
import CinemaDetail from '../views/CinemaDetail'
import MovieDetail from '../views/MovieDetail'
import NoData from '../views/Nodata'
import NotFound from '../components/404'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/home',
        name: 'Home',
        component: Home
    }, {
        path: '/me',
        component: Me
    }, {
        path: '/cinema',
        component: Cinema
    }, {
        path: '/cinema/detail/:id',
        name: 'cdetail',
        component: CinemaDetail
    }, {
        path: '/movie/detail/:id',
        name: 'detail',
        component: MovieDetail
    }, {
        path: '/nodata',
        component: NoData
    }, {
        path: '/',
        redirect: '/home'
    }, {
        path: '*',
        component: NotFound
    }]
})