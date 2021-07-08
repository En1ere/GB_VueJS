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
            state.paymentsList.push(payload)
        },
        addCategory(state, payload) {
            state.categoryList = payload
        }
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getFullPaymentValue: state => {
            return state.paymentsList.reduce((res, cur) => res + cur.value, 0)
        },
    },
    actions: {
        fetchCategoryList({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(['Food', 'Transport', 'Education', 'Internet', 'Sport', 'Accessories', 'Gifts'])
                }, 1000)
            })
                .then(res => commit('addCategory', res))
        },
        fetchData({ commit }, pageNumber = 1) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const items = [
                        {
                            date: "28.08.2019",
                            category: "Food",
                            value: 300,
                        },
                        {
                            date: "12.03.2020",
                            category: "Food",
                            value: 180,
                        },
                        {
                            date: "12.04.2020",
                            category: "Internet",
                            value: 100,
                        },
                        {
                            date: "24.07.2020",
                            category: "Accessories",
                            value: 1400,
                        },
                        {
                            date: "11.11.2020",
                            category: "Food",
                            value: 5400,
                        },
                        {
                            date: "31.12.2020",
                            category: "Gifts",
                            value: 10250,
                        },
                        {
                            date: "02.01.2021",
                            category: "Sport",
                            value: 9000,
                        },
                        {
                            date: "11.01.2021",
                            category: "Sport",
                            value: 400,
                        },
                        {
                            date: "02.06.2021",
                            category: "Sport",
                            value: 7500,
                        },
                        {
                            date: "21.06.2021",
                            category: "Food",
                            value: 10000,
                        },
                        {
                            date: "29.06.2021",
                            category: "Education",
                            value: 25000,
                        },
                        {
                            date: "02.07.2021",
                            category: "Sport",
                            value: 7500,
                        },
                    ]
                    console.log(pageNumber)
                    resolve(items)
                }, 2000)
            })
                .then(res => commit('setPaymentsListData', res))
        }
    }
})