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
        path: "/changeCity",
        component: Comm,
        children: [{
            path: '/',
            name: "changeCity",
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/changecity/ChangeCity'),
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
        path: '/login',
        name: 'login',

        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/account/Login'),
        meta: {
            title: '登录'
        }
    }
    ,
    {
        path: '/register',
        name: 'register',

        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/account/Register'),
        meta: {
            title: '注册'
        }
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