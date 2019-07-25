import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        orderList: [],
        statue: "all"
    },
    mutations: {
        addNewItem(state, item) {
            state.orderList.push(item)
        }
    }
})
