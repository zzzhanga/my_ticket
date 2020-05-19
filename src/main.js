// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'

import "./assets/css/common.css";
// import 'mint-ui/lib/style.css'
import './assets/css/swiper.min.css'
import VueResource from 'vue-resource'

import store from './store'

Vue.config.productionTip = false

Vue.use(Mint)
Vue.use(VueResource)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})