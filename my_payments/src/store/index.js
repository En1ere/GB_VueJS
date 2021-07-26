import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: [],
        categoryList: []
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentsList = payload
        },
        addDataToPaymentList(state, payload) {
            console.log(payload)
            state.paymentsList.push(payload)
        },
        addCategory(state, payload) {
            state.categoryList = payload
        },
        editPaymentList(state, payload) {
            Vue.set(state.paymentsList, 0, payload)
        },
        deleteDataFromPaymentList(state, payload) {
            state.paymentsList.splice(payload, 1)
        }
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getFullPaymentValue: state => {
            return state.paymentsList.reduce((res, cur) => res + cur.value, 0)
        },
        getCategoryList: state => {
            return state.categoryList
        },
        getSortedPaymentList: state => {
            return state.paymentsList.sort((a, b) => a.category > b.category ? 1 : -1)
        }
    },
    actions: {
        fetchCategoryList({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(['Food', 'Transport', 'Education', 'Internet', 'Sport', 'Accessories', 'Gifts', 'Entertainments'])
                }, 1000)
            })
                .then(res => commit('addCategory', res))
        },
        fetchData({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const items = [
                        {
                            date: '01.07.2021',
                            category: "Food",
                            value: 1000,
                            id: 1
                        },
                        {
                            date: '01.07.2021',
                            category: "Accessories",
                            value: 5000,
                            id: 2
                        },
                        {
                            date: '01.07.2021',
                            category: "Entertainments",
                            value: 9500,
                            id: 3
                        },
                        {
                            date: '01.07.2021',
                            category: "Transport",
                            value: 200,
                            id: 4
                        },
                        {
                            date: '01.07.2021',
                            category: "Transport",
                            value: 800,
                            id: 5
                        },
                        {
                            date: '01.07.2021',
                            category: "Internet",
                            value: 1000,
                            id: 6
                        },
                        {
                            date: '01.07.2021',
                            category: "Education",
                            value: 30000,
                            id: 7
                        },
                        {
                            date: '01.07.2021',
                            category: "Gifts",
                            value: 9500,
                            id: 8
                        },
                        {
                            date: '01.07.2021',
                            category: "Sport",
                            value: 2000,
                            id: 9
                        },
                        {
                            date: '01.07.2021',
                            category: "Transport",
                            value: 2000,
                            id: 10
                        },
                        {
                            date: '01.07.2021',
                            category: "Food",
                            value: 1000,
                            id: 11
                        },
                        {
                            date: '01.07.2021',
                            category: "Accessories",
                            value: 5000,
                            id: 12
                        },
                    ]
                    // for (let i = 1; i < 10; i++) {
                    //     items.push({
                    //         date: '01.07.2021',
                    //         category: "Food",
                    //         value: 100 + i,
                    //         id: i
                    //     })
                    // }
                    resolve(items)
                }, 2000)
            })
                .then(res => commit('setPaymentsListData', res))
        }
    }
})