import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    parsedText: '',
    parsedTextBinary: []
  },

  mutations: {
    incrementText(state, text) {
      state.parsedText = text
    },

    incrementTextBinary(state, text) {
      state.parsedTextBinary = text
    }
  }
})

export default store 