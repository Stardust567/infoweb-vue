import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      user_name: ""
    },
    mutations: {
      change(state, user_name) {
        state.user_name = user_name
      }
    },
    getters: {
        user_name: state => state.user_name
      }
  })