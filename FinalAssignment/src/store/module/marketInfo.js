import Vue from 'vue'

import { companies } from '../../data/data'

const state = {
  stocks: companies,
  fund: 10000,
  myStocks: []
}

const changePrice = (price) => (price += Number(Math.random().toFixed(2)))

const dayEnd = (stocks) => {
  stocks.map(stock => {
    stock.price = changePrice(stock.price)
  })
  return stocks
}

const mutations = {
  'REFRESH_DATA' (state, payload) {
    state.stocks = payload
  },

  'BUY' (state, {id, quantity, price}) {
    const stock = state.myStocks.find(element => element.id === id)
    if (stock) {
      stock.quantity += quantity
    } else {
      state.myStocks.push({
        id,
        quantity
      })
    }
    state.fund -= quantity * price
  },

  'SELL' (state, {id, quantity, price}) {
    const stock = state.myStocks.find(element => element.id === id)
    if (stock.quantity === quantity) {
      state.myStocks.splice(state.myStocks.indexOf(stock), 1)
    } else {
      stock.quantity -= quantity
    }
    state.fund += quantity * price
  },

  'LOAD' (state, payload) {
    state.myStocks = payload.myStocks
    state.fund = payload.fund
  }
}

const actions = {
  dayEnd: ({ state, commit }) => {
    commit('REFRESH_DATA', dayEnd(state.stocks))
  },
  buyStock: ({ commit }, data) => {
    commit('BUY', data)
  },
  sellStock: ({ commit }, data) => {
    commit('SELL', data)
  },
  save: ({ state }) => {
    const data = {
      myStocks: state.myStocks,
      fund: state.fund
    }
    Vue.http.put('https://vuefinalassignment.firebaseio.com/vuefinalassignment.json', data).then(res => {
      console.info('Data saved', res)
    }, error => {
      console.info('Some error in saving', error)
    })
  },
  load: ({ commit }) => {
    Vue.http.get('https://vuefinalassignment.firebaseio.com/vuefinalassignment.json').then(res => {
      res.json().then(data => {
        if (data.myStocks && data.fund) {
          commit('LOAD', data)
          console.info('Data Loaded', res)
        } else {
          console.info('Some error in loading', res)
        }
      })
    }, res => {
      console.info('Some error in loading', res)
    })
  }
}
const getters = {
  stocks: (state) => {
    return state.stocks
  },
  portfolio: (state, getters) => {
    return state.myStocks.map(purchasedStock => {
      const stock = getters.stocks.find(element => element.id === purchasedStock.id)
      stock.quantity = purchasedStock.quantity
      return stock
    })
  },
  funds: (state) => {
    return state.fund
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
