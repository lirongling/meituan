import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import Comm from '../views/Comm.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        // 重定向
        redirect: '/'
    },
    {
        path: "/",
        component: Comm,
        children: [{
            path: '/',
            name: "home",
            component: Home,
            meta: {
                title: '首页'
            }
        }],
    },
    {
        path: "/orders",
        component: Comm,
        children: [{
            path: '/',
            name: "orders",
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/orders/Orders'),
            meta: {
                title: '订单'
            }
        }],
    },
    {
        path: "/userinfo",
        component: Comm,
        children: [{
            path: '/',
            name: "userinfo",
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/account/Userinfo'),
            meta: {
                title: '我的'
            }
        }],
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
        // let loginMsg = localStorage.getItem('loginMsg')
        // if (to.path==='/login')
        //     next()
        // else
        //     loginMsg ? next():next('/login')
        // if (to.path==='/edit'||to.path==='/look') {
        //     let a=to.query._id
        //     a ? next():next('/published')
        // }
    next()

})

export default router