import Vue from 'vue'
import Router from 'vue-router'
import Add from './views/Add.vue'
import List from './views/List.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/add',
            name: 'add',
            component: Add,
        },
        {
            path: '/',
            name: 'list',
            component: List,
        },
    ]
})
