import { UPDATECITY } from './type'
import { mapMutations } from 'vuex'

import Vue from 'vue'
export default {
    updateCityAsync({ commit, state }, { city }) {
        if (!city.name) {
            // 传过来的值中 没有city.name 就将原来的城市名称跟缩写传进city
            city.name = state.name
            city.rN = state.rN
        }
        return Vue.http.get(`/movie/hot/?city=${city.rN}`).then((response) => {
            let data = response.data
            let lists = data.data.data.returnValue
                //模拟索引数据的id号
            lists.forEach((item, index) => {
                item.mID = index
            })
            city.data = lists
            commit(UPDATECITY, { city })
        })
    }
}