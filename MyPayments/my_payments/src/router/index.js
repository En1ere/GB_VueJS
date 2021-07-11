import Vue from 'vue'
import Router from 'vue-router'
import Page404 from '../page/Page404'
import PageDashboard from '../page/PageDashboard'
import About from '../page/PageAbout'
import AddPaymentForm from '../components/AddPaymentForm'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: PageDashboard
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: PageDashboard
        },
        {
            path: '/dashboard/:page',
            name: 'dashboard',
            component: PageDashboard
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/add/payment',
            name: '/add/payment',
            component: AddPaymentForm
        },
        {
            path: '*',
            name: 'NotFound',
            component: Page404
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