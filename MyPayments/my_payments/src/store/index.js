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
                    const items = []
                    for (let i = 1; i < 4; i++) {
                        items.push({
                            date: '01.07.2021',
                            category: "Food",
                            value: 100 + i,
                            id: i
                        })
                    }
                    resolve(items)
                }, 2000)
            })
                .then(res => commit('setPaymentsListData', res))
        }
    }
})