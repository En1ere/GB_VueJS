import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: () => import(/* webpackChunkName: "dashboard" */ '../page/PageDashboard.vue')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import(/* webpackChunkName: "dashboard" */ '../page/PageDashboard.vue')
        },
        {
            path: '/dashboard/:page',
            name: 'dashboard',
            component: () => import(/* webpackChunkName: "dashboard" */ '../page/PageDashboard.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ '../page/PageAbout.vue')
        },
        {
            path: '/add/payment',
            name: '/add/payment',
            component: () => import(/* webpackChunkName: "addPayment" */ '../components/AddPaymentForm.vue')
        },
        {
            path: '*',
            name: 'NotFound',
            component: () => import(/* webpackChunkName: "notFound" */ '../page/Page404.vue')
        },
    ]
})

const getTitleTemplateName = routeName => {
    return {
        'dashboard': 'My Personal Costs',
        'main': 'Main',
        'about': 'About',
        'NotFound': 'Page Not Found',
        'addPayment': 'Adding payment',
        '/add/payment': 'Adding payment'
    }[routeName]
}

router.afterEach(to => {
    document.title = getTitleTemplateName(to.name)
})

export default router