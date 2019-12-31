import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path : '/',
            name : 'home',
            component : Home,
        },
        {
            path : '/about',
            name : 'about',
            component : () => import ('./pages/About.vue'),
        },
        {
            path : '/register',
            name : 'register',
            component : () => import ('./pages/Register.vue'),
        },
        {
            path : '/user',
            name : 'user',
            component : () => import ('./pages/User.vue'),
        },
    ],
})

